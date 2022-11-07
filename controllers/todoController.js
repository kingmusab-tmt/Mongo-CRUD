const { Todos } = require("../models/Todo");
const {v4: uuid} = require("uuid");
const todoModel = require("../models/Todo");

exports.getTasks = async (req, res) => {
    try{
        const todos = Todos;
        // let todos = await Todos.find();
        if(todos.length === 0)
            return res.status(404).json({
                success: false,
                message: "No Task on the list",
            });
        res.status(200).json({
            length: Todos.length,
            success: true,
            message: "Tasks Found",
            todos,
        });
    } catch(err){
        res.status(500).json({message: err.message});
    }
}
exports.getTask = async (req, res) =>{
    try{
        let id = req.params.id;
        // let todo = await Todos.findOne(id);
        const todo = Todos.find((todo)=> todo.id === id);
        if(!todo) return res.status(404).json({
            success: false,
            message: "User not Found",
        })
        res.status(200).json({
            success: true,
            message: "Task Found",
            todo,
        });
    } catch(err){
        res.status(500).json({message: err.message});
    }
}
exports.addTask = async (req, res)=>{
    try{
        const { title, descritption, time, date } = await req.body;
        const newTask = {
            id: uuid(),
            title,
            descritption,
            time,
            date,
        };

        Todos.push(newTask);
        
        res.status(201).json({
            message: "Task Added",
            newTask,
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.updateTask = async (req, res) =>{
    try{
        let id = req.params.id;
        const todo = Todos.find((todo)=> todo.id === id);
        const { title, descritption, time, date } = await req.body;
        todo.title = title;
        todo.descritption = descritption;
        todo.time = time;
        todo.date = date;
        res.status(200).json({
            message: "Task updated",
            todo,
        });
    } catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.deleteTask = async (req, res) =>{
    try{
        let id = req.params.id;
        const todo = Todos.find((todo)=> todo.id === id);
        Todos.splice(Todos.indexOf(todo), 1);
        res.status(200).json({
            message: "Task Deleted", 
            todo,
        });

    }catch(err){
        res.status(500).json({message: err.message});
    }
};


