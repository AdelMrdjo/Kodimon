<template>
  <div class="container">
    <div class="in-game-screen">
      <div class="opponents">
        <div class="opponent">
          <div class="progress">
            <p>{{ player1.energy }} %</p>
            <div class="progress-bar">
              <div
                class="loaded"
                :style="{ width: `${player1.energy}%` }"
              ></div>
            </div>
          </div>
          <p class="name">{{ player1.name }}</p>
          <img :src="player1.image" alt="opponent-1" />
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
          <button @click="attack()">Attack! {{ attacker }}</button>
        </div>
        <div class="opponent">
          <div class="progress">
            <p>{{ player2.energy }} %</p>
            <div class="progress-bar">
              <div
                class="loaded"
                :style="{ width: `${player2.energy}%` }"
              ></div>
            </div>
          </div>
          <p class="name">{{ player2.name }}</p>
          <img :src="player2.image" alt="opponent-2" />
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
        <div class="menu-container">
          <p class="label">Menu</p>
          <div class="buttons">
            <button @click="setGameStarted(false)">Home</button>
            <button @click="$emit('startNewGame')">New game</button>
            <button>New opponent</button>
          </div>
        </div>
        <div class="logs-container">
          <p class="label">Logs</p>
          <div class="logs">
            <p>Eevee attacked Squirtle for 35.75 dmg</p>
            <p>Squirtle attacked Eevee for 24 dmg</p>
            <p>Eevee missed Squirtle</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
  },
  methods: {
    ...mapMutations(["SET_PLAYER", "GAME_STARTED", "UPDATE_DEFENDER_HP"]),
    setGameStarted(bool) {
      this.GAME_STARTED(bool);
    },
    updateDefenderHP(slot, hp) {
      this.UPDATE_DEFENDER_HP({
        slot: slot,
        hp: hp,
      });
    },
    attack() {
      let attacker = this.attacker == 1 ? this.player1 : this.player2;
      let defender = this.attacker == 1 ? this.player2 : this.player1;
      let weakened_attack = attacker.attack / 2; // divide his attack with 2
      let calc_percent = 100 - defender.defense; // 100% - defense
      let get_total_hp = ((weakened_attack / 100) * calc_percent).toFixed(2);
      this.updateDefenderHP(defender.slot, get_total_hp);
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
  display: grid;
  width: 1300px;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  align-items: flex-end;
  text-align: center;
}
.opponent img {
  height: 150px;
}
.progress-bar {
  width: 220px;
  height: 24px;
  border: 4px solid $green;
  margin: 0 auto;
  border-radius: 12px;
  margin-bottom: 8px;
  .loaded {
    height: 100%;
    background: $green-light;
    border-radius: 12px;
    transition: width ease-in-out 0.25s;
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
.menu-container {
  width: 260px;
  .buttons {
    border: 4px solid $yellow;
    background: $yellow-light;
    border-radius: 16px;
    padding: 12px 0;
    display: grid;
    justify-content: center;
    gap: 12px;
  }
}
.logs-container {
  .logs {
    border: 4px solid $yellow;
    background: $yellow-light;
    border-radius: 16px;
    padding: 12px;
    font-weight: bold;
    height: 240px;
  }
}
</style>
