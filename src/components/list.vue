<template>
    <ul class="list">
        <li 
        v-for="(item,index) in data" 
        :key='index'
        @click="getTitleHandle(item.title)"
        >{{item.title}}</li>
        <!-- <li>html5+css3</li>
        <li>javascript</li>
        <li>angular</li>
        <li>react</li>
        <li>vue</li>
        <li>jquery</li>
         <li>node.js</li> -->
    </ul>
</template>

<script>
export default {
   // props:['data'],
    data () {
        return {

        }
    },
    computed: {
        data(){
            return this.$store.state.list;
        }
    },
    methods: {
        getTitleHandle(title){
        //改变vuex的状态
        this.$store.commit("changeTitle",{title})
        }
    },
    created () {
        //获取数据
        this.$store.dispatch('getListAction');

    }

}
</script>

<style>

</style>
