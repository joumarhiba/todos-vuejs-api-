<template>
    <button @click="onClick()" :style="{background:color,color:clr}" >{{ text }}</button>
</template>

<script>
export default {
    name:'Button',
    props:{
        color: String,
        text:String,
        clr:String,
    },
    methods:{
        onClick(){
            this.$emit('btn-click')        }
    },
   
    
}
</script>


<style scoped>
button{
    border: none;
    height: 30%;
    margin-top: 10%;
    padding: 6px;
    cursor: pointer;
}
</style>