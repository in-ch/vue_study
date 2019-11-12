<template>
    <div>
        <div>당첨 숫자</div>
        <div id="결과창">
            <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"></lotto-ball>
        </div>
        <div v-if="bonus">
            <h3>보너스</h3>
            <lotto-ball v-if="bonus" :key="bonus" :number="bonus"></lotto-ball>
        </div>
        <button v-if="redo" @click="reset">한 번 더</button>
    </div>
</template>

<script>
    import LottoBall from './view/lottoBall';

    /* 함수 부분 */
    function getWinNumbers() {
        console.log('getWinNumbers');
        const candidate = Array(45).fill().map((v, i) => i+1);
        const shuffle = [];
        while(candidate.length >0){
            shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length),1)[0]);
        }
        const bonusNumber = shuffle[shuffle.length -1];
        const getWinNumbers = shuffle.slice(0,6).sort((p,c) => p - c);
        return [...getWinNumbers, bonusNumber];
    }

    /* 함수 부분 끝 */

    export default{
        components: {
            'lotto-ball' : LottoBall,
        },
        data() { 
            return{
                windNumbers: getWinNumbers(),
                winBalls: [],
                bonus: null,
                redo: false,
            };
        },
        methods:{
            onSubmitForm(e){
                e.preventDefault();
            },
            reset(){
                this.windNumbers = getWinNumbers();
                this.winBalls = [];
                this.bonus = null;
                this.redo = false;
                this.showBall();
            },
            showBall(){
                for (let i =0; i < this.windNumbers.length -1;i++){
                    setTimeout(() => {
                        this.winBalls.push(this.windNumbers[i]);
                    }, (i + 1)*1000);
                }

                setTimeout(() => {
                        this.bonus = this.windNumbers[6];
                        this.redo = true;
                }, 7000);

            },
        },
        mounted(){
            this.showBall();
        },
    }
</script>

<style>
</style>