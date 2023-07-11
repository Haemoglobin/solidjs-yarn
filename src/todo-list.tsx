import react, {useState, useRef} from 'react'
type Todo = { id: number; text: string; completed: boolean };

export const TodoList = () => {
  const input = useRef();
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (text: string) => {
    setTodos(todos => [...todos, { id: todos.length, text, completed: false }]);
  };
  const toggleTodo = (id: number) => {
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  };

  return (
    <>
      <div>
        <input placeholder="new todo here" ref={input} />
        <button
          onClick={(e) => {
            if (!input.current.value.trim()) return;
            addTodo(input.current.value);
            input.current.value = ''
          }}
        >
          Add Todo
        </button>
      </div>
      {todos.map((todo) => {
          const { id, text } = todo;
          return (
            <div key={id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(id)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
              >
                {text}
              </span>
            </div>
          );
        })
      }
    </>
  );
};
