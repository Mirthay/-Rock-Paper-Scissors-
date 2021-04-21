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
      showRules: true,
    };
  },
  mutations: {},
  actions: {},
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
  },
});

export default store;
