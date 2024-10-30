import React from 'react';
import './App.css'; // 引入 CSS 文件

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>關於我</h1>
      <ul>
        <li>我的名字是歐子靖，我來自高雄</li>
        <li>我就讀淡江大學資訊管理學系3年級</li>
        <li>我出生於2004年8月6日，今年20歲</li>
      </ul>

      <h1>我的興趣</h1>
      <ul>
        <li>繪畫</li>
        <li>健走</li>
        <li>看漫畫</li>
      </ul>

      <h1>我最喜歡的三種食物</h1>
      <ul>
        <li>馬鈴薯</li>
        <li>番茄</li>
        <li>鮭魚</li>
      </ul>

      <h1>我最喜歡的動畫角色</h1>
      <p>少女與戰車 - 米卡</p>
      <img src="mika.png" alt="米卡" />
      <a href="https://girlsundpanzer.fandom.com/it/wiki/Mika">角色介紹</a>
    </div>
  );
}

export default App;
