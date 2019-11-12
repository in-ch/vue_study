<template>
    <table style="border-collapse: collapse;">
        <trComponent v-for="(rowData, index) in tableData" :rowData="rowData" :rowIndex="index" :key="index"></trComponent>
    </table>
</template>

<script>
    import trComponent from './trComponent';

    export default {
        components:{
            trComponent,
        },
        data(){
            return{

            };
        },
        props:{
            tableData: Array,
        },

    }
</script>

<style>

</style>