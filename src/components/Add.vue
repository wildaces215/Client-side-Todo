<template>
    <div>
        Task: <input v-model="newTask">
        <br/>
        Description <input v-model="newDescription"/>
        <br/>
        <button v-on:click="new_entry">Submit!</button>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
    name:'add',
    data(){
        return {
            newTask:'',
            newDescription:''
        }
    },
    methods:{
        new_entry:function(){
            axios.post("http://localhost:4000/api/tasks/new",
            {
                task:this.newTask,
                description:this.newDescription
            }).then(function(response){
                router.go(-1);
            }).catch(function(err){
                console.log(err)
            })
        }
    }
}
</script>

<style>

</style>
