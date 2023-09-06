import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Readfile from './components/ReadFile';
import Output from './components/Output';
import { useState } from 'react';

function App() {
  const [content, setContent] = useState(null);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to={"/read-file"} />} />
        <Route path="/read-file" element={<Readfile content={content} setContent={setContent}/>} />
        <Route path="/output" element={<Output content={content}/>} />
      </Routes>
    </div>
  );
}

export default App;
