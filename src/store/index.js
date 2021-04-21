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
      computerSelected: null,
    };
  },
  mutations: {
    playerSelect(state, payload) {
      state.playerSelected = payload;
    },
  },
  actions: {
    playerSelect(context, payload) {
      context.commit("playerSelect", payload);
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
  },
});

export default store;
