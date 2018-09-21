import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

let store=new Vuex.Store({
    state:{
        title:'',
        list:[]
    },
    mutations: {
        changeTitle(state,payload){
            state.title=payload.title;
        },
        changeList(state,list){
            state.list=list
        }
    },
    actions: {
        getListAction({commit}){
            //发送请求
            axios.get('https://easy-mock.com/mock/5ba3997d00424530fc9db8d1/example/list')
            .then((data)=>{
               commit("changeList",data.data); // 拿到数据后提交mutations
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    }

})

export default store