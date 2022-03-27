<template>
    <form @submit="onSubmit" class="add-form">
        <div class="form-control">
        <label>Task</label>
        <input v-model="text" type="text" name="text" placeholder="Add Task">
    </div>
    <div class="form-control">
        <label>Day and Time</label>
        <input v-model="day" type="text" name="day" placeholder="Add Day and Time">
    </div>
    <div class="form-control form-control-check">
        <label>Set Reminder</label>
        <input v-model="reminder" type="checkbox" name="reminder" >
    </div>
    <input type="submit" value="Save Task" class="btn btn-block">
    </form>
</template>

<script>
export default { 
    name:'AddTask',
    data(){
        return {
            text:"",
            day:"",
            reminder:false
        }
    },
    methods:{
        onSubmit(e){
            e.preventDefault()
            if(!this.text){
                alert('Please enter a new task');
                return
            }
            const newTask = {
                // id:Math.floor(Math.random() * 100000),
                text:this.text,
                day:this.day,
                reminder:this.reminder,
            }
            this.$emit('add-task',newTask)

            this.text ='',
            this.day ='',
            this.reminder =false
        }
    }
}
</script>

<style scoped>
.form-control , .form-control-check{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.form-control input{
    width: 80%;
}
.btn{
    margin-left: 60%;
    margin-top: 2%;
    padding: 2%;
    color: aliceblue;
    background-color: green;
    margin-bottom: 2%;
}
</style>