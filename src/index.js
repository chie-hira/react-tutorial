import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// rootをレンダリング
// public/index.htmlの<div id="root"></div>にAppコンポーネントをレンダリングする
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 厳格なモード、エラーがあれば即表示、脆弱性の防止
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
