<template>
    <section class="warp">
        <div class="searchIpt clearFix">
            <select-input :is-show.sync="listShow"></select-input>
            <list  v-show="listShow" :data="listData"></list>
        </div>
    </section>
</template>

<script>
import selectInput from '@/components/selectInput'
import list from '@/components/list'

let ListData=[
    {
        title:'javascript'
    },
    {
        title:'html+css'
    },
    {
        title:'jQuery'
    },
    {
        title:'react'
    },
    {
        title:'node.js'
    }
]
export default {

        components: {
        selectInput,
        list
    },
    data () {
        return {
            listShow:false,
        }
    },
    methods: {
       
    }


}
</script>

<style>

</style>
