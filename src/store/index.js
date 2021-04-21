import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      title: "Rock, Paper, Scissors",
      score: 0,
      rules: `<p>If the player wins, they gain 1 point. If the computer wins, the player loses one point. <br>
        <br> 
      - Paper beats Rock <br> 
         - Rock beats Scissors <br> 
         - Scissors beats Paper </p> `,
      showRules: false,
      playerSelected: null,
      pcSelected: "test",
    };
  },
  mutations: {
    playerSelect(state, payload) {
      state.playerSelected = payload;
    },
    pcSelect(state, payload) {
      state.pcSelected = payload;
    },
  },
  actions: {
    playerSelect(context, payload) {
      context.commit("playerSelect", payload);
    },
    pcSelect(context, payload) {
      context.commit("pcSelect", payload);
    },
  },
  getters: {
    title(state) {
      return state.title;
    },
    showRules(state) {
      return state.showRules;
    },
    rules(state) {
      return state.rules;
    },
    score(state) {
      return state.score;
    },
    playerSelected(state) {
      return state.playerSelected;
    },
    pcSelected(state) {
      return state.pcSelected;
    },
  },
});

export default store;
