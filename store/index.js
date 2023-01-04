export const state = () => ({
  isGameStarted: false, // if 'false' show new game screen, else show in game screen
  attacker: 1, // who is turn to attack, player1 (1) or player2 (2)
  player1: null,
  player2: null
});

export const mutations = {
  SET_PLAYER(state, data) {
    state[data.slot] = {
      "name": data.data.name,
      "image": data.data.sprites.other.dream_world.front_default,
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
    state.attacker = data;
  }
};
