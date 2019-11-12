<template>
    <div class="ball" :style="ball_style"><center><h3 style="position:relative;top:40px">{{number}}</h3></center></div>
</template>

<script>
    export default {
        name: 'LottoBall',
        props:{
            number: Number,
        },

        data() {
            let background;
            
            return {
                background,
            };
        },
        computed:{
            ball_style(){
                let background;
                if( this.number <= 10){
                    background = 'red';
                } else if ( this.number <= 20){
                    background = 'orange';
                } else if( this.number <=30) {
                    background = 'yellow';
                } else if( this.number <=40) {
                    background = 'blue';
                } else {
                    background = 'green';
                }
                return {
                    width:'150px',height:'150px',background:'red',borderRadius:'75px',display:'inline-block',margin:'10px',
                    background : background,
                };
            },
        },

    }
</script>

<style>

</style>