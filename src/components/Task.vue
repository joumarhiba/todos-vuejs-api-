<template>
    <div @click="$emit('toggle-reminder',task.id)" :class="[task.reminder ? 'reminder' : 'task']">
        <h3>
            {{ task.text }} </h3>
            <input @click="onDelete(task.id)" type="submit" class="fermer" value="fermer">
            
        <p>{{ task.day }}</p>
    </div>
</template>

<script>
export default {
    name:'Task',
    props:{
        task:Object
    },
    methods:{
        onDelete(id){
            this.$emit('delete-task',id)
        }
    }
}
</script>

<style>
.task{
    background-color: antiquewhite;
    padding: 4px;
}
.fermer{
    background-color: red;
    border: none;
    color: aliceblue;
    padding: 4px;
    margin-left: 60%;
    cursor: pointer;
}
.reminder{
    background-color: rgba(133, 250, 162, 0.322);
        padding: 4px;

}
</style>