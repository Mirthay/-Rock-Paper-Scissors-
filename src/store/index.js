import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      title: "Rock, Paper, Scissors",
      score: 0,
      rules: `<p>If the player wins, they gain 1 point.<br><br> If the computer wins, the player loses one point. <br>
        <br> 
          Paper beats Rock <br><br> 
          Rock beats Scissors <br> <br>
          Scissors beats Paper </p> `,
      showRules: false,
      playerSelected: null,
      pcSelected: null,
      gameResult: null,
      winMsg: "WIN !!!",
      loseMsg: "LOST !!!",
      drawMsg: "DRAW !!!",
    };
  },
  mutations: {
    whoWin() {
      if (this.state.playerSelected === this.state.pcSelected) {
        return (this.state.gameResult = this.state.drawMsg);
      } else if (
        this.state.playerSelected === "Paper" &&
        this.state.pcSelected === "Rock"
      ) {
        this.state.score++;
        return (this.state.gameResult = this.state.winMsg);
      } else if (
        this.state.playerSelected === "Scissors" &&
        this.state.pcSelected === "Paper"
      ) {
        this.state.score++;
        return (this.state.gameResult = this.state.winMsg);
      } else if (
        this.state.playerSelected === "Rock" &&
        this.state.pcSelected === "Scissors"
      ) {
        this.state.score++;
        return (this.state.gameResult = this.state.winMsg);
      }
      this.state.score--;
      return (this.state.gameResult = this.state.loseMsg);
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
