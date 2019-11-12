<template>
    <div>
        <h1>{{ result }}</h1>
    </div>
    <form v-on:submit="onSubmitForm">
        <input ref="answer" maxlength="4" v-model="value" />
    </form>
</template>

<script>
    export default{
        data(){

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