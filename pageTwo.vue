<template>
    <div class="pageTwo" :style="{width:this.$store.state.width_s+'px'}">
           <v-touch @swipeleft="menuThree" @swiperight="menuOne">
                <div class="page">页面2</div>
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
        menuOne(){
            this.$router.push({"path":"/pageOne"})
        },
        menuThree(){
            this.$router.push({
                "path":"/pageThree"
            })
        }
    }
}
</script>
<style>
.pageTwo .page{
    width:100%;
    height: 400px;
    background:green;
}
</style>


