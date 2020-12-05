function randomNumber(min, max){
    return Math.floor(Math.random() * (max -min )) + min;
}
const app = Vue.createApp({
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
            if(this.monsterHealth < 0){
                return { width: '0%' }
            }
            return {
                width: this.monsterHealth + '%'
            };
        },
        playerBarStyle() {
            if(this.playerHealth < 0){
                return { width: '0%' }
            }
            return {
                width: this.playerHealth + '%'
            }
        },
        mayUseSpecialAttack(){
            return this.currentRound % 3 !== 0
        },
    },
    watch: {
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                //A draw
                this.winner = 'draw';
            }else if(value <= 0){
                //Player Lost
                this.winner = 'monster'
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                //A draw
                this.winner = 'draw';
            }else if(value <= 0){
                //Player won
                this.winner = 'player';
            }
        }
    },
    methods: {
        //Start new game
        startNewGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
        //The amount of damage that the monster will take
        attackMonster() {
            this.currentRound++;
            const attackValue = randomNumber(5, 15);
            this.monsterHealth -= attackValue;
            this.addLogMessage('Player', 'attack', attackValue);
            this.attackPlayer();
        },
        //The amount of damage that the player will take
        attackPlayer(){
            const attackValue = randomNumber(8, 18)
            this.addLogMessage('Monster', 'attack', attackValue);
            this.playerHealth -= attackValue;
        },
        specialAttac(){
            this.currentRound++;
            const attackValue = randomNumber(12, 25)
            this.monsterHealth -= attackValue;
            this.addLogMessage('Player', 'special-attack', attackValue);
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            const healValue = randomNumber(15, 40);
            if(this.playerHealth + healValue > 100){
                this.playerHealth = 100;
                this.addLogMessage('Player', 'heal', healValue);
                this.attackPlayer();
            }else{
                this.playerHealth += healValue;
                this.addLogMessage('Player', 'heal', healValue);
                this.attackPlayer();
            }
            
        },
        surrender(){
            this.winner = 'monster';
        },

        // Adding message with props who = who did something, what = what happened (attack or heal), value (damage or heal)
        addLogMessage(who, what, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            });
        },

    }
});
app.mount('#game');