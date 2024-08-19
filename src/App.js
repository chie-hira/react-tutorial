import { useState, useRef } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const defaultTodos = [
    { id: 1, name: '掃除', completed: false },
    { id: 2, name: '洗濯', completed: false },
    { id: 3, name: '料理', completed: false },
  ];
  const [todos, setTodos] = useState(defaultTodos); 

  // create
  // inputの値を取得するためのref
  const inputRef = useRef();

  const handleAddTodo = () => {
    // inputも文字列を取得
    const inputName = inputRef.current.value;
    
    const newTodo = { id: uuidv4(), name: inputName, completed: false };
    setTodos([...todos, newTodo]);

    inputRef.current.value = '';
  }
  
  return (
    <> 
      <TodoList todos={todos}/>
      <input type="text" ref={inputRef} />
      <button onClick={handleAddTodo}>タスクの追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </>
  );
}

export default App;
