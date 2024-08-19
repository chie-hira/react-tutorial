import { useState, useRef } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // const defaultTodos = [
  //   { id: 1, name: '掃除', completed: false },
  //   { id: 2, name: '洗濯', completed: false },
  //   { id: 3, name: '料理', completed: false },
  // ];
  // const [todos, setTodos] = useState(defaultTodos); 

  const [todos, setTodos] = useState([]); 

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

  // update
  const toggleTodo = (id) => {
    // コピーして新しい配列を作成
    // 状態管理されているものを直接編集することは良くない
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed; // trueとfalseを切り替える
    setTodos(newTodos);
  }

  // delete
  const handleDeleteTodo = () => {
    // 未完了のタスクだけを残す
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }
  
  return (
    <> 
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input type="text" ref={inputRef} />
      <button onClick={handleAddTodo}>タスクの追加</button>
      <button onClick={handleDeleteTodo}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}

export default App;
