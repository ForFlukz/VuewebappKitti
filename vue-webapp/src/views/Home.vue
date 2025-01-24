<template>
    <div class="app">
        <h1>To-Do List</h1>
        <input v-model="newTask" placeholder="Add a new task" @keyup.enter="addTask"/>
        <button @click="addTask">Add Task</button>
        <ul>
            <li v-for="(task , index) in tasks" :key="index">
                <input type="checkbox" v-model="task.completed"/>
                <span :class="{ 'completed-task' : task.completed }">{{ task.text }}</span>
                <button @click="removeTask(index)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            newTask: '',
            tasks: [] 
        };
    },
    methods: {
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push({ text: this.newTask , completed: false });
                    this.newTask = '';
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        }
    }
};
</script>
<style scoped>
.app {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ebe9e9;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    color: #333;
    font-family: 'Arial', sans-serif;
}

input[type="text"] {
    width: 100%;
    padding: 50px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 15px;
}

button {
    background-color: #0084ff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-left: 80px;
    margin-top: 15px;
    margin-bottom: 10;
}

button:hover {
    background-color: #19afd4;
    transition: 0.5s;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}


</style>
