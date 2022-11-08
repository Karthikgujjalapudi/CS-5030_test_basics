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
    expect(todo_service.get_todos().todo.length).toEqual(3);
  });

  test("add_todo", () => {
    expect(
      todo_service.add_todo({
        title: "sample title",
        describtion: "sample description",
        done: false,
      })
    ).toEqual([
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
        title: "T1",
        description: "D1",
        done: false,
      },
      {
        title: "sample title",
        describtion: "sample description",
        done: false,
      },
    ]);
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
        title: "sample title",
        describtion: "sample description",
        done: false,
      },
    ]);
  });

  test("update_todo", () => {
    expect(
      todo_service.update_todo(0, {
        title: "sample title 2",
        describtion: "sample description 2",
        done: false,
      })
    ).toEqual([
      {
        title: "sample title 2",
        describtion: "sample description 2",
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
        title: "sample title",
        describtion: "sample description",
        done: false,
      },
    ]);
  });

});
