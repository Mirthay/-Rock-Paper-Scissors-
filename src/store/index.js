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
      pcSelected: null,
      gameResult: "WIN/LOSE",
    };
  },
  mutations: {
    whoWin() {
      if (this.state.playerSelected === this.state.pcSelected) {
        return (this.state.gameResult = "DRAW !!!");
      } else if (
        this.state.playerSelected === "Paper" &&
        this.state.pcSelected === "Rock"
      ) {
        this.state.score++;
        return (this.state.gameResult = "WIN !!!");
      } else if (
        this.state.playerSelected === "Scissors" &&
        this.state.pcSelected === "Paper"
      ) {
        this.state.score++;
        return (this.state.gameResult = "WIN !!!");
      } else if (
        this.state.playerSelected === "Rock" &&
        this.state.pcSelected === "Scissors"
      ) {
        this.state.score++;
        return (this.state.gameResult = "WIN !!!");
      }
      this.state.score--;
      return (this.state.gameResult = "LOST !!!");
    },
    playerSelect(state, payload) {
      state.playerSelected = payload;
    },
    pcSelect(state, payload) {
      state.pcSelected = payload;
    },
    winOrLose(state, payload) {
      state.gameResult = payload;
    },
  },
  actions: {
    playerSelect(context, payload) {
      context.commit("playerSelect", payload);
    },
    pcSelect(context, payload) {
      context.commit("pcSelect", payload);
    },
    winOrLose(context, payload) {
      context.commit("winOrLose", payload);
    },
    whoWin(context, payload) {
      context.commit("whoWin", payload);
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
    gameResult(state) {
      return state.gameResult;
    },
  },
});

export default store;
