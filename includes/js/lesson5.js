function randomNumber(min, max){
    return Math.floor(Math.random() * (max -min )) + min;
}
const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0
        };
    },
    computed: {
        monsterBarStyle() {
            return {
                width: this.monsterHealth + '%'
            };
        },
        playerBarStyle() {
            return {
                width: this.playerHealth + '%'
            }
        },
        mayUseSpecialAttack(){
            return this.currentRound % 3 !== 0
        },
    }
    ,
    methods: {
        //The amount of damage that the monster will take
        attackMonster() {
            this.currentRound++;
            const attackValue = randomNumber(5, 15);
            if(this.monsterHealth < attackValue){
                this.monsterHealth = 0;
                this.attackPlayer();
                alert('Player has won!');
            }else{
                this.monsterHealth -= attackValue;
                this.attackPlayer();
            }

        },
        //The amount of damage that the player will take
        attackPlayer(){
            const attackValue = randomNumber(8, 18)
            if(this.playerHealth < attackValue){
                this.playerHealth = 0;
                alert('Monster has won!');
            }else{
                this.playerHealth -= attackValue;
            }

        },
        specialAttac(){
            this.currentRound++;
            const attackValue = randomNumber(12, 25)
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            const healValue = randomNumber(8, 20);
            if(playerHealth + healValue > 100){
                this.playerHealth = 100;
            }else{
                this.playerHealth += healValue;
            }
            
        }

    }
});
app.mount('#game');