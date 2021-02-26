import React, { useState } from 'react';
import './App.css';
import marked from "marked"
import ReactMarkdown from ReactMarkdown;


export default function App() {

  const [markdown, setMarkdown] = useState("# sup")

  function handleChange(event) {
    setMarkdown(event.target.value)
  }

  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdown} />
      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
}

