<template>
    <div>
        <mine-form />
        <div>{{ timer }}</div>
        <table-component />
        <div>{{ result }}</div>
    </div>
</template>

<script>
    import TableComponent from './view/TableComponent';
    import MineForm from './view/MineForm';
    import store from './store';
    import { mapState } from 'vuex';



    /* 함수 부분 끝 */

    let interval;

    export default{
        store,
        components: {
            TableComponent,
            MineForm,
        },
        computed: {
            ...mapState(['timer','result']),
        },
        methods: {
            
        },
        watch: {
            halted(value, oldValue) {
                console.log('gogo');
                if(value === false) {
                    interval = setInterval(()=> {
                        this.$store.commmit(INCREMENT_TIMER);
                    }, 1000);
                } else { // 게임 중단
                    clearInterval(interval); 
                }
            },
        },
        methods:{
           
        },
        mounted(){
                 
        },
    }
</script>

<style>

</style>