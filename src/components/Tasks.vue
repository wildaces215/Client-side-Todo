<template>
<div>

<vs-table stripe :data="tasks">
  <template slot="header">
    <h1>Tasks</h1>
  </template>
  <template slot="thead">
    <vs-th>Task</vs-th>
    <vs-th>Description</vs-th>
    <vs-th>Update</vs-th>
    <vs-th>Delete</vs-th>
  </template>
 <template slot-scope="{data}">
   <vs-tr :key="task._id" v-for="(task,_id) in tasks">
     <vs-td :data="task.task">
       {{task.task}}
     </vs-td>
     <vs-td >
       {{task.description}}
     </vs-td>
     <vs-td>
       <transition name="component-fade" mode="out-in">
       <router-link :to="{name:'update',params:{id: task._id }}">Update</router-link>
     </transition>
     </vs-td>
     <vs-td>
       <vs-button color="danger" type="flat" v-on:click="destory(task._id)">
         Delete
       </vs-button>
     </vs-td>
   </vs-tr>
 </template>
</vs-table>

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