import { useState } from 'react';
import TodoList from './TodoList';

function App() {
  // 今回はフックとしてuseStateを使用
  const defaultTodos = [
    { id: 1, name: '掃除', completed: false },
    { id: 2, name: '洗濯', completed: false },
    { id: 3, name: '料理', completed: false },
  ];
  const [todos, setTodos] = useState(defaultTodos); 
  
  return (
    <> 
      <TodoList todos={todos}/>
      <input type="text" />
      <button>タスクの追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </>
  );
}

export default App;
