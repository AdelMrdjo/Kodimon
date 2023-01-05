<template>
  <div class="container">
    <HomeLogo class="home-logo" />
    <div class="in-game-screen">
      <div class="opponents">
        <PlayerBox
          class="player1"
          :name="player1.name"
          :image="player1.image"
          :loseHP="loseHP"
          :hp="player1.hp"
          :energy="player1.energy"
          :energyClass="setColorByHP(player1.energy)"
          :attack="player1.attack"
          :defense="player1.defense"
          :speed="player1.speed"
          :firstOrSecondGifClass="'first'"
        />
        <AttackButton
          :attacker="attacker"
          :isAttackInProgress="isAttackInProgress"
          @attack="attack()"
        />
        <PlayerBox
          class="player2"
          :name="player2.name"
          :image="player2.image"
          :loseHP="loseHP"
          :hp="player2.hp"
          :energy="player2.energy"
          :energyClass="setColorByHP(player2.energy)"
          :attack="player2.attack"
          :defense="player2.defense"
          :speed="player2.speed"
          :firstOrSecondGifClass="'second'"
        />
      </div>
      <div class="menu-with-logs">
        <MenuButtons @startNewGame="$emit('startNewGame')" :winner="winner" />
        <LogsBox :logs="logs" />
      </div>
    </div>
  </div>
</template>
<script>
import utils from "~/assets/js/utils";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      loseHP: null,
    };
  },
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
    isAttackInProgress() {
      return this.$store.state.attackInProgress;
    },
  },
  watch: {
    logs() {
      setTimeout(function () {
        // scroll to bottom in logs box after update logs
        var objDiv = document.getElementById("logs");
        objDiv.scrollTop = objDiv.scrollHeight;
      }, 1);
    },
  },
  methods: {
    ...mapMutations([
      "SET_PLAYER",
      "UPDATE_DEFENDER_HP",
      "CHANGE_ATTACK_PROGRESS",
    ]),
    changeAttackProgress(bool) {
      this.CHANGE_ATTACK_PROGRESS(bool);
    },
    updateDefenderHP(attacker, defender, hp) {
      this.UPDATE_DEFENDER_HP({
        attacker: attacker,
        defender: defender,
        hp: hp,
      });
    },
    attack() {
      this.changeAttackProgress(true);
      let attacker = this.attacker == 1 ? this.player1 : this.player2;
      let defender = this.attacker == 1 ? this.player2 : this.player1;
      let weakened_attack = attacker.attack / 2; // divide his attack with 2
      let calc_percent = 100 - defender.defense; // calculate 100% - defense
      let get_total_hp = ((weakened_attack / 100) * calc_percent).toFixed(2);
      if (utils.willYouMissTheShoot()) get_total_hp = 0; // if you miss the shoot, then set total hp to 0
      this.loseHP = get_total_hp;
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
      tl.fromTo(
        `.${defender.slot} .image .hit-info`,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        }
      );
      tl.to(`.${defender.slot} .image .fight-gif`, {
        display: "none",
        duration: 0.5,
      });
      tl.set(`.${defender.slot} .image .hit-info`, { opacity: 0 });
      tl.to(
        `.${attacker.slot} .image .real-image, .${defender.slot} .image .real-image`,
        {
          opacity: 1,
          duration: 0.25,
          ease: "power4",
          delay: -0.1,
          onComplete: () => {
            this.changeAttackProgress(false);
          },
        }
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
.opponents {
  position: relative;
  display: grid;
  width: 1300px;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  align-items: flex-end;
  text-align: center;
}
/////////////
.menu-with-logs {
  display: grid;
  grid-template-columns: auto 50%;
  justify-content: space-between;
  align-items: flex-end;
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
:deep(.player1 .hit-info) {
  left: 260px;
}
:deep(.player2 .hit-info) {
  right: 260px;
}
</style>
