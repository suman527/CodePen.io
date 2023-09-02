import { useState } from 'react';

const useCode = () => {
  const [html, setHtml] = useState('<div>Hello, World!</div>');
  const [css, setCss] = useState('div { color: blue; }');
  const [js, setJs] = useState('console.log("Hello from JavaScript!");');
  const [srcDoc, setSrcDoc] = useState('');

  const handleRun = () => {
    const newSrcDoc = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>${html}</body>
        <script>${js}</script>
      </html>
    `;
    setSrcDoc(newSrcDoc);
  };

  return {
    html,
    setHtml,
    css,
    setCss,
    js,
    setJs,
    srcDoc,
    handleRun,
  };
};

export default useCode;
