<template>
  <div>
    
    <Tasks />
    
  </div>
</template>
//
<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
import Tasks from '@/components/Tasks.vue'
export default {
  name: "home",
  components:{
    Tasks
  },
  
}
</script>
