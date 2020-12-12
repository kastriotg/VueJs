<template>
  <section class="container" v-if="winner">
    <h2>Game Over!</h2>
    <h3 v-if="winner === 'monster'">You lost!</h3>
    <h3 v-else-if="winner === 'player'">You won!</h3>
    <h3 v-else>It`s a draw!</h3>
    <button @click="startNewGame">Start new Game</button>
  </section>

  <section id="monster" class="container">
    <h2>Monster Health</h2>
    <div class="healthbar">
      <div class="healthbar__value" :style="monsterBarStyle"></div>
    </div>
  </section>
  <section id="player" class="container">
    <h2>Your Health</h2>
    <div class="healthbar">
      <div class="healthbar__value" :style="playerBarStyle"></div>
    </div>
  </section>

  <section id="controls" v-if="!winner">
    <button @click="attackMonster">ATTACK</button>
    <button :disabled="mayUseSpecialAttack" @click="specialAttac">
      S. ATTACK
    </button>
    <button :disabled="mayHeal" @click="healPlayer">HEAL</button>
    <button @click="surrender">SURRENDER</button>
  </section>
  <section id="log" class="container">
    <h2>Battle Log</h2>
    <ul>
      <li v-for="(log, index) in logMessages" :key="index">
        {{ log.actionBy }} has {{ log.actionType }} for {{ log.actionValue }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: [],
    };
  },
  computed: {
    monsterBarStyle() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return {
        width: this.monsterHealth + "%",
      };
    },
    playerBarStyle() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return {
        width: this.playerHealth + "%",
      };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
    mayHeal() {
      return this.currentRound % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        //A draw
        this.winner = "draw";
      } else if (value <= 0) {
        //Player Lost
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        //A draw
        this.winner = "draw";
      } else if (value <= 0) {
        //Player won
        this.winner = "player";
      }
    },
  },
  methods: {
    //Start new game
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    //The amount of damage that the monster will take
    attackMonster() {
      this.currentRound++;
      const attackValue = Math.floor(Math.random() * (15 - 5)) + 5;
      this.monsterHealth -= attackValue;
      this.addLogMessage("Player", "attack", attackValue);
      this.attackPlayer();
    },
    //The amount of damage that the player will take
    attackPlayer() {
      const attackValue = Math.floor(Math.random() * (18 - 8)) + 8;
      this.addLogMessage("Monster", "attack", attackValue);
      this.playerHealth -= attackValue;
    },
    specialAttac() {
      this.currentRound++;
      const attackValue = Math.floor(Math.random() * (25 - 12)) + 12;
      this.monsterHealth -= attackValue;
      this.addLogMessage("Player", "special-attack", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = Math.floor(Math.random() * (40 - 15)) + 15;
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
        this.addLogMessage("Player", "heal", healValue);
        this.attackPlayer();
      } else {
        this.playerHealth += healValue;
        this.addLogMessage("Player", "heal", healValue);
        this.attackPlayer();
      }
    },
    surrender() {
      this.winner = "monster";
    },

    // Adding message with props who = who did something, what = what happened (attack or heal), value (damage or heal)
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
};
</script>

<style scoped>
.healthbar {
  width: 100%;
  height: 40px;
  border: 1px solid #575757;
  margin: 1rem 0;
  background: #fde5e5;
}

.healthbar__value {
  background-color: #00a876;
  width: 100%;
  height: 100%;
}

.container {
  text-align: center;
  padding: 0.5rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

#monster h2,
#player h2 {
  margin: 0.25rem;
}

#controls {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

button {
  margin-bottom: 1rem;
}

button:focus {
  outline: none;
}

button:hover,
button:active {
  background-color: #af0a78;
  border-color: #af0a78;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}

button:disabled {
  background-color: #ccc;
  border-color: #ccc;
  box-shadow: none;
  color: #3f3f3f;
  cursor: not-allowed;
}
ul {
  margin: 1rem 0;
  list-style: none;
}

ul li {
  margin: 1rem 0;
}
</style>
