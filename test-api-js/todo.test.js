var todoservice = require("./todo.service.js");
describe("todo test suite", () => {
  test("truth_value", () => {
    expect(true).toBe(true);
  });

  let todo_service = new todoservice();

  test("if service instance is created", () => {
    expect(todo_service instanceof todoservice).toBe(true);
  });

  // Initial length of the todo list is 3 // 3 default tasks
  test("get_todos", () => {
    expect(todo_service.get_todos().todo.length).toEqual(100);
  });

  test("add_todo", () => {
    todo={
      "title": "First title",
      "describtion": "Main description",
      "done": false,
      
    }
    todo_service.add_todo(todo);

    expect(todo_service.get_todos.todo.length).toEqual(4);
      
    
  });

  test("delete_todo", () => {
    expect(todo_service.delete_todo(0)).toEqual([
      {},
      {
        title: "T1",
        description: "D1",
        done: false,
      },
      {
        title: "T1",
        description: "D1",
        done: false,
      },
      {
        title: "First title",
        describtion: "Main description",
        done: false,
      },
    ]);
  });

  test("update_todo", () => {
    expect(
      todo_service.update_todo(0, {
        title: "First title 2",
        describtion: "Main description 2",
        done: false,
      })
    ).toEqual([
      {
        title: "First title 2",
        describtion: "Main description 2",
        done: false,
      },
      {
        title: "T1",
        description: "D1",
        done: false,
      },
      {
        title: "T1",
        description: "D1",
        done: false,
      },
      {
        title: "First title",
        describtion: "Main description",
        done: false,
      },
    ]);
  });

});
