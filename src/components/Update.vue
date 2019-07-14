
<template>
    <div>
        
        <h1>Update Task</h1>
        <h3>Task</h3>
        <input v-model="firstInput"/>
        <h3>Description</h3>
        <input v-model="secondInput"/>
        <button v-on:click="to_database">Submit!</button>
    </div>
</template>

<script>
import axios from 'axios';
import router from'../router'
export default {
    
    name:'update',
    data(){
        return{
            firstInput:'',
            secondInput:'',
            id:""
        }
    },
    created(){
        this.id = this.$route.params.id;
    },
    methods:{
        to_database:function(){
            axios.put("http://localhost:4000/api/update/" + this.id,{
                task:this.firstInput,
                description:this.secondInput
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
'