<template>
  <div class="container">
    <HomeLogo class="home-logo" />
    <div class="in-game-screen">
      <div class="opponents">
        <div class="opponent player1">
          <div class="progress">
            <p>{{ player1.energy }} %</p>
            <div class="progress-bar" :class="setColorByHP(player1.energy)">
              <div
                class="loaded"
                :style="{ width: `${player1.energy}%` }"
              ></div>
            </div>
          </div>
          <p class="name">{{ player1.name }}</p>
          <div class="image">
            <img :src="player1.image" alt="opponent-1" class="real-image" />
            <img src="/fight.gif" alt="fight-gif" class="fight-gif first" />
          </div>
          <p class="label">Stats</p>
          <div class="stats">
            <p>HP: {{ player1.hp }}</p>
            <p>Attack: {{ player1.attack }}</p>
            <p>Defense: {{ player1.defense }}</p>
            <p>Speed: {{ player1.speed }}</p>
          </div>
        </div>
        <div class="action">
          <img
            src="/arrow.svg"
            alt="arrow"
            :class="{ rotate: attacker == 1 }"
          />
          <button @click="attack()">Attack!</button>
        </div>
        <div class="opponent player2">
          <div class="progress">
            <p>{{ player2.energy }} %</p>
            <div class="progress-bar" :class="setColorByHP(player2.energy)">
              <div
                class="loaded"
                :style="{ width: `${player2.energy}%` }"
              ></div>
            </div>
          </div>
          <p class="name">{{ player2.name }}</p>
          <div class="image">
            <img :src="player2.image" alt="opponent-2" class="real-image" />
            <img src="/fight.gif" alt="fight-gif" class="fight-gif second" />
          </div>
          <p class="label">Stats</p>
          <div class="stats">
            <p>HP: {{ player2.hp }}</p>
            <p>Attack: {{ player2.attack }}</p>
            <p>Defense: {{ player2.defense }}</p>
            <p>Speed: {{ player2.speed }}</p>
          </div>
        </div>
      </div>
      <div class="menu-with-logs">
        <MenuButtons @startNewGame="$emit('startNewGame')" :winner="winner" />
        <div class="logs-container">
          <p class="label">Logs</p>
          <div class="logs" id="logs">
            <p v-for="(log, index) in logs" :key="index">{{ log }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import utils from "~/assets/js/utils";
import { mapMutations } from "vuex";
export default {
  computed: {
    player1() {
      return this.$store.state.player1;
    },
    player2() {
      return this.$store.state.player2;
    },
    attacker() {
      return this.$store.state.attacker;
    },
    logs() {
      return this.$store.state.logs;
    },
    winner() {
      return this.$store.state.winner;
    },
  },
  watch: {
    logs() {
      setTimeout(function () {
        var objDiv = document.getElementById("logs");
        objDiv.scrollTop = objDiv.scrollHeight;
      }, 1);
    },
  },
  methods: {
    ...mapMutations(["SET_PLAYER", "UPDATE_DEFENDER_HP"]),
    updateDefenderHP(attacker, defender, hp) {
      this.UPDATE_DEFENDER_HP({
        attacker: attacker,
        defender: defender,
        hp: hp,
      });
    },
    attack() {
      let attacker = this.attacker == 1 ? this.player1 : this.player2;
      let defender = this.attacker == 1 ? this.player2 : this.player1;
      let weakened_attack = attacker.attack / 2; // divide his attack with 2
      let calc_percent = 100 - defender.defense; // calculate 100% - defense
      let get_total_hp = ((weakened_attack / 100) * calc_percent).toFixed(2);
      if (utils.willYouMissTheShoot()) get_total_hp = 0; // if you miss the shoot, then set total hp to 0
      let tl = this.$gsap.timeline();
      tl.to(
        `.${attacker.slot} .image .real-image, .${defender.slot} .image .real-image`,
        { opacity: 0, duration: 0.25, ease: "power4", delay: -0.1 }
      );
      tl.to(`.${defender.slot} .image .fight-gif`, {
        display: "block",
        delay: -0.1,
        duration: 0.25,
        onComplete: () => {
          this.updateDefenderHP(attacker.slot, defender.slot, get_total_hp);
        },
      });
      tl.to(`.${defender.slot} .image .fight-gif`, {
        display: "none",
        duration: 0.5,
      });
      tl.to(
        `.${attacker.slot} .image .real-image, .${defender.slot} .image .real-image`,
        { opacity: 1, duration: 0.25, ease: "power4", delay: -0.1 }
      );
    },
    setColorByHP(hp) {
      return utils.setColorByHP(hp);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100%;
}
.in-game-screen {
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-rows: 1fr 1fr;
  height: 100%;
  padding: 40px 0;
  @include grid("desktop") {
    padding: 80px 0;
  }
}
.name {
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 12px;
}
.label {
  font-weight: bold;
  text-align: left;
  margin-bottom: 8px;
}
.opponents {
  position: relative;
  display: grid;
  width: 1300px;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  align-items: flex-end;
  text-align: center;
}
.image {
  height: 150px;
}
.fight-gif {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 250px;
  &.first {
    left: 0;
    display: none;
  }
  &.second {
    right: 0;
    display: none;
  }
}
.opponent .real-image {
  position: absolute;
  height: 150px;
  transform: translatex(-50%);
}
.progress-bar {
  width: 220px;
  height: 24px;
  margin: 0 auto;
  border-radius: 12px;
  margin-bottom: 8px;
  .loaded {
    height: 100%;
    border-radius: 12px;
    transition: width ease-in-out 0.25s;
  }
  &.green {
    border: 4px solid $green;
    .loaded {
      background: $green-light;
    }
  }
  &.orange {
    border: 4px solid $yellow;
    .loaded {
      background: $yellow-light;
    }
  }
  &.red {
    border: 4px solid $red;
    .loaded {
      background: $red-light;
    }
  }
}
.stats {
  text-align: left;
  border: 4px solid $yellow;
  border-radius: 16px;
  width: 260px;
  background: $yellow-light;
  padding: 10px;
}
////////////
.action {
  position: relative;
  bottom: 20px;
  img {
    display: block;
    margin: 0 auto 32px;
    &.rotate {
      rotate: 180deg;
    }
  }
}
/////////////
.menu-with-logs {
  display: grid;
  grid-template-columns: auto 50%;
  justify-content: space-between;
  align-items: flex-end;
}
.logs-container {
  .logs {
    border: 4px solid $yellow;
    background: $yellow-light;
    border-radius: 16px;
    padding: 12px;
    font-weight: bold;
    height: 240px;
    overflow-y: auto;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }
}
/////
.home-logo {
  position: absolute;
  top: 20px;
  right: 20px;
  :deep(.kodi-image) {
    width: 110px;
  }
  :deep(.kodi-logo) {
    width: 30px;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    rotate: -30deg;
    z-index: -1;
  }
  @include grid("desktop") {
    top: 50px;
    right: 50px;
  }
}
</style>
