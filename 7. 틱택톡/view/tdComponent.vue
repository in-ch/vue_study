<template>
    <td @click="clickTd" style="border:1px solid #000;width:150px;text-align:center"> {{ cellData }}</td>
</template>

<script>
    export default {
        props:{
            cellData : String,
            rowIndex : Number,
            cellIndex : Number,
        },
        data(){
            return {

            };
        },
        methods:{
            clickTd(){
                if(this.cellData) return; //이미 데이터가 들어있다면 return -1;

                this.$root.$data.winner = '';
                this.$set(this.$root.$data.tableData[this.rowIndex],this.cellIndex ,this.$root.$data.turn);
                this.$root.$data.turn = this.$root.$data.turn === 'O' ? 'X' : 'O';

                let all = true;
                
                this.$root.$data.tableData.forEach((row) => {
                    row.forEach((cell) => {
                        if(!cell){
                            all = false;
                        }
                    });
                });

                if(all === true){  //무승부
                    this.$root.$data.tableData = [
                        ['','',''],
                        ['','',''],
                        ['','','']                        
                    ];
                    this.$root.$data.turn = 'O';
                    this.$root.$data.winner = '무승부니깐 게임을 다시 시작합니다.';
                }
            },
        }   
    }
</script>

<style scoped>

</style>