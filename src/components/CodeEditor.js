import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

const CodeEditor = ({ language, value, onChange }) => {
  return (
    <CodeMirror
      value={value}
      onBeforeChange={(editor, data, value) => {
        onChange(value);
      }}
      options={{
        mode: language,
        theme: 'material',
        lineNumbers: true,
      }}
    />
  );
};

export default CodeEditor;
