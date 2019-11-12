<template>
    <div>
        <h1>{{ result }}</h1>
    
        <form v-on:submit="onSubmitForm">
            <input ref="answer" maxlength="4" v-model="value">
            <button >입력</button>
        </form>
        <h5>시도: {{  }} </h5>
    </div>
</template>

<script>
    export default{
        data(){ 
            return{
                value:'',
                result: 'asdf',
            }
        },
        methods:{
            onSubmitForm(e){
                e.preventDefault();
            }
        }
    }
</script>

<style>

</style>