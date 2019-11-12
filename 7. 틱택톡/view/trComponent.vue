<template>
    <tr style="width:150px;height:150px;border:1px solid #000">
        <tdComponent v-for="(cellData, index) in rowData" :cellData="cellData" :cellIndex="index" :rowIndex="rowIndex" :key="index"></tdComponent>        
    </tr>
</template>

<script>
    import tdComponent from './tdComponent';
    
    export default {
        
        components:{
            tdComponent,
        },
        props:{
          rowData : Array,
          rowIndex : Number,  
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>