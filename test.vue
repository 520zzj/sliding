<template>
    <div class="test">
        <ul>
            <li>
                <router-link to="/pageOne">页面1</router-link>
                <router-link to="/pageTwo">页面2</router-link>
               <router-link to="/pageThree">页面3</router-link>
            </li>
        </ul>
        <div class="swipe">
            <transition :name="direction">
                <keep-alive>
                    <router-view class=".router-view" key="index" v-if="$route.meta.keepAlive"></router-view>        
                </keep-alive>
            </transition>
        </div>
     
    </div>
</template>
<script>
import vueOne from "./pages/pageOne.vue"
import vueTwo from "./pages/pageTwo.vue"
import vueThree from "./pages/pageThree.vue"
export default {
    data(){
        return{
            direction:"forward"
        }
    },
    components:{
        vueOne,
        vueTwo,
        vueThree
    },
    watch:{
        '$route' (to,from){
            this.direction=to.meta.index<from.meta.index?"back":"forward"
        }
    },
}   
</script>
<style>
.swipe{
    width:100%;
    height: 400px;
}

.router-view{
    position: absolute;
    top:0;
    left:0;
}
/* 左滑也就是前进的样式 */
.forward-leave-active{
    transition:all 1s linear;
}
.forward-leave-to{
    transform: translateX(-100%);
}
.forward-enter{
    transform: translateX(100%);
}
.forward-enter-active{
    transition: all 1s linear;
}
/* 右滑既是后退的样式 */
.back-enter{
    transform: translateX(-100%);
}
.back-enter-active{
    transition: all 1s linear;
}
.back-leave-to{
    transform: translateX(100%);
}
.back-leave-active{
    transition: all 1s linear;
}
.transitionBody{
    transition: all 1s linear;
}
</style>


