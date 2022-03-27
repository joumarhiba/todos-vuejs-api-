<template>
 <div class="container">
   <Header @toggle-add-task="toggleAddTask" title="Task tracker" :showAddTask="showAddTask" />
  <div v-show="showAddTask">
     <AddTask @add-task="addTask" />
  </div>
   <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />

  <!-- <Footer /> -->
 </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Tasks from '@/components/Tasks.vue'
import AddTask from '@/components/add.vue'
import Footer from '@/components/Footer.vue'


export default {
  
  name: 'HomeView',
  components:{
    Header,Tasks,AddTask,Footer
  },
   data(){
        return {
            tasks:[],
            showAddTask:false,
        }
    },
    methods:{ 
      toggleAddTask(){
        this.showAddTask = !this.showAddTask
      },
      async addTask(task){
       const res = await fetch(`http://localhost:3000/tasks`,{
         method:'POST',
         headers:{
           'Content-type':'application/json'
         },
         body:JSON.stringify(task)
       })
       const data =  await res.json();
        this.tasks = [...this.tasks,data]
      },
     async  deleteTask(id){
        if(confirm('Are you suuure ?')){
          // this.tasks = this.tasks.filter((task) => task.id !==id)
          const res = await fetch(`http://localhost:3000/tasks/${id}`,{
            method:'DELETE'
          })
          res.status ===200 ? (this.tasks = this.tasks.filter((task) => task.id !==id)) : alert('error deleting')
        }
      },
      async toggleReminder(id){
        const taskToToggle = await this.fetchTask(id)
        const updTask = {...taskToToggle,reminder: !taskToToggle.reminder}

        const res = await fetch(`http://localhost:3000/tasks/${id}`,{
          method:'PUT',
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(updTask)
        }) 
        const data = await res.json()
        this.tasks = this.tasks.map((task)=>task.id ===id ? {...task, reminder: data.reminder } : task )
      },
      async fetchTasks(){
        const res = await fetch('http://localhost:3000/tasks')
        const data = await res.json();
        return data
      },
      async fetchTask(id){
        const res = await fetch(`http://localhost:3000/tasks/${id}`)
        const data = await res.json();
        return data
      },
    },
  async created() {
        this.tasks = await this.fetchTasks()
  // this.tasks = [
  //   {
  //     id: 1,
  //     text: "Doctors Appointment",
  //     day: "Match 1st at 2:30pm",
  //     reminder: true
  //   },
  //   {
  //   id: 2,
  //   text: "Meeting At School",
  //     day: "Match 3rd at 1:30pm",
  //     reminder: true
  //   },
  //   {
  //     id: 3,
  //     text: "Food Shooping",
  //     day: "Match 3rd at 11:30pm",
  //     reminder: false
  //   },
  //   {
  //     id: 4,
  //     text: "reading a book",
  //     day: "Match 3rd at 00:30am",
  //     reminder: true
  //   }
  // ]
    }
}
</script>

<style scoped>


</style>
