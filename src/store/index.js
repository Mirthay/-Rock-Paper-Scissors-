import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      title: "Rock,Paper,Scissors",
      score: 0,
      rules:
        "If the player wins, they gain 1 point. If the computer wins, the player loses one point. - Paper beats Rock -Rock beats Scissors - Scissors beats Paper ",
    };
  },
  mutations: {},
  actions: {},
  getters: {
    title(state) {
      state.title;
    },
  },
});

export default store;
