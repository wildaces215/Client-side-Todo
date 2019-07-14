<template>
<div>
<h1>Tasks</h1>
<ul v-for="data in tasks" :key="data._id" >
 {{data.task}}
 {{data.description}}
 <br>
<router-link :to="{name:'update',params:{id: data._id }}">Update</router-link>
<br>
<button v-on:click="destory(data._id)">Delete</button>
</ul>


</div>
</template>

<script>
import axios from 'axios';
import router from '../router'
export default {
    name:'Tasks',
    data(){
    return {
      tasks:null
    }
  },
  methods:{
    destory(id){
      axios.delete("http://localhost:4000/api/tasks/delete/"+id)
      .then(function(response){
        alert("Entry Deleted!")
      })
    }
  },
  created() {
          axios.get('http://localhost:4000/api/tasks/all').then(response => {
            this.tasks = response.data
          })
        },
    updated(){
      axios.get('http://localhost:4000/api/tasks/all').then(response => {
            this.tasks = response.data
          })
    }
}
//Hi!
</script>