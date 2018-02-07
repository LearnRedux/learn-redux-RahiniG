describe("Actions", () => {

  it('we define action types as a string chk1', () => {
    const ADD_TODO = 'ADD_TODO';
    expect(ADD_TODO).toEqual(expect.any(String));
  });

  it('actions are serializable objects chk2', () => {
    const ADD_TODO = 'ADD_TODO';
    const addTodoAction = {
      type: ADD_TODO,
      text: 'Build my first Redux app',
    };

    expect(addTodoAction).toBeInstanceOf(Object);
  });

  it('actions always have a field called type which is a string chk31', () => {
    const TOGGLE_TODO = 'TOGGLE_TODO';
    const toggleTodoAction = {
      type: TOGGLE_TODO,
      index: 5,
    };

    expect(toggleTodoAction).toMatchObject({type: expect.any(String)});
  });

  it('define action creators -aka functions- to create actions chk41', () => {
    const ADD_TODO = 'ADD_TODO';
    const addTodo = (text) => ({
      type: ADD_TODO,
      text
    });
    console.log('addToDo ',addTodo.type);
    expect(addTodo()).toMatchObject({type: expect.any(String)});
  });

});
