import React from 'react';
import CodeEditor from './components/CodeEditor';
import useCode from './hooks/useCode';
import './App.css'; // Import your CSS file

const App = () => {
  const { html, setHtml, css, setCss, js, setJs, srcDoc, handleRun } = useCode();

  return (
    <div className="app">
      <div className="editor-container">
        <CodeEditor language="htmlmixed" value={html} onChange={setHtml} />
        <CodeEditor language="css" value={css} onChange={setCss} />
        <CodeEditor language="javascript" value={js} onChange={setJs} />
      </div>
      <div className="result-container">
        <button onClick={handleRun}>Run</button>
        <iframe
          srcDoc={srcDoc}
          title="Result"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default App;
