import React from 'react';
import './App.css';
import Header from './Header';
import Chatbot from './Chatbot';
import ChatbotWidget from './ChatbotWidget';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Chatbot />
      </main>
      <ChatbotWidget />
    </div>
  );
}

export default App;