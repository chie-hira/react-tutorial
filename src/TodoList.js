// rafceで雛形を作成
import React from 'react'
import Todo from './Todo'

// 関数コンポーネント作成
const TodoList = ({todos}) => {
  
  // 配列の中身を表示
  // ユニークなkeyを指定しないとエラーが出る
  return todos.map((todo) => <Todo todo={todo} key={todo.id} />);
  
  // そのまま表示
  // return (
  //   // JSX記法:{javascriptの式を記述できる、関数、変数を記述できる}
  //   <div>{todos}</div>
  // )
}

export default TodoList
