<template>
<div>
    <vs-row>
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
   
  </vs-col>
  <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
    <div class="centerx labelx">


    <vs-input label="Task" placeholder="Task" v-model="newTask"/>
    <vs-input label="description" placeholder="Description" v-model="newDescription"/>
    <br/>
    <vs-button color="success" type="gradient" v-on:click="new_entry">Submit!</vs-button>
    
    </div>
    </vs-col>
<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
    
  </vs-col>
  </vs-row>
  </div>
  
    
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
