class todoservice{
    todo_data = {
        "todo":[{
            "id":1,
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "id":2,
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "id":3,
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        // Your code here
        this.todos.todo.push(todo);
        return this.todos;
    }

    delete_todo(id){
        // Your code here
        this.todo_data.todo[id] = {};
        return this.todo_data.todo;
    }

    update_todo(id, todo){
        // Your code here
        this.todo_data.todo[id] = todo;
        return this.todo_data.todo;
    }
}


module.exports= todoservice;
