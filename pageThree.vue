<template>
    <div class="pageThree" :style="{width:this.$store.state.width_s+'px'}">
           <v-touch @swiperight="menuTwo">
                <div class="page">页面3</div>
           </v-touch>

    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        menuTwo(){
            this.$router.push({"path":"/pageTwo"})
        }
    }
}
</script>
<style>
.pageThree .page{
    width:100%;
    height: 400px;
    background:green;
}
</style>


