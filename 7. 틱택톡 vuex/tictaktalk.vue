<template>
    <div>
        <tableComponent :tableData = "tableData"></tableComponent>
        <div><h5>{{ turn }}님의 턴입니다. </h5></div>

        <h4 v-if = "winner">{{ winner }}</h4>
    </div>
</template>

<script>
    import TableComponent from './view/tableComponent';

    export default{
        components: {
            tableComponent :TableComponent,
        },
        data() { 
            return{
                tableData:[
                    ['','',''],
                    ['','',''],
                    ['','',''],
                ],
                turn :'O',
                winner : '',
            };
        },
        methods:{
            onSubmitForm(e){
                e.preventDefault();
            },
        },
        mounted(){
            
        },
    }
</script>

<style scoped>

</style>