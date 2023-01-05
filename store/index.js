import utils from "~/assets/js/utils";
export const state = () => ({
  isGameStarted: false, // if 'false' show new game screen, else show in game screen
  attacker: 1, // who is turn to attack, player1 (1) or player2 (2)
  player1: null,
  player2: null,
  winner: null,
  logs: []
});

export const mutations = {
  SET_PLAYER(state, data) {
    state[data.slot] = {
      "name": data.data.name,
      "slot": data.slot,
      "image": data.data.sprites.other.dream_world.front_default,
      "energy": 100.00,
      "hp": data.data.stats.filter(el => {
        return el.stat.name === 'hp'
      })[0].base_stat,
      "attack": data.data.stats.filter(el => {
        return el.stat.name === 'attack'
      })[0].base_stat,
      "defense": data.data.stats.filter(el => {
        return el.stat.name === 'defense'
      })[0].base_stat,
      "speed": data.data.stats.filter(el => {
        return el.stat.name === 'speed'
      })[0].base_stat
    }
  },
  GAME_STARTED(state, data) {
    state.isGameStarted = data
  },
  SET_ATTACKER(state, data) {
    state.attacker = data; // set attacker at new game depending higher speed
    state.winner = null // reset winner
    state.logs = [] // reset logs
  },
  UPDATE_DEFENDER_HP(state, data) {
    let new_hp = (state[data.defender].energy - data.hp).toFixed(2)
    if (new_hp > 0) {
      state[data.defender].energy = new_hp // update HP
      state.attacker = state.attacker == 1 ? 2 : 1; // change attacker
      let attacker_name = utils.capitalizeFirstLetter(state[data.attacker].name);
      let defender_name = utils.capitalizeFirstLetter(state[data.defender].name);
      if (data.hp == 0) state.logs.push(`${attacker_name} missed ${defender_name}`) // save logs when he miss
      else state.logs.push(`${attacker_name} attacked ${defender_name} for ${data.hp} dmg`); // save logs when he shoot 
    }
    else {
      state[data.defender].energy = 0; // set HP to 0
      state.winner = state[data.attacker] // winner is last attacker
    }
  },
  UPDATE_LOGS(state, data) {
    state.logs.push(data)
  }
};
