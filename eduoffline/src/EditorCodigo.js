import React, { useState } from 'react';

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/theme-terminal";

import "./EditorCodigo.css";

const extension = {
    "c_cpp": "cpp",
    "javascript": "js",
    "java": "java",
    "html": "html",
    "python": "py"
};

function EditorCodigo({ codigoInicial, extensionArchivo }) {
    const [lenguaje, setLenguaje] = useState(extensionArchivo || "c_cpp");
    const [codigo, setCodigo] = useState(codigoInicial);

    function onChange(newValue) {
        setCodigo(newValue);
    }
    return (
        <div className="editorCodigo">
            <div>
                <select className="select" onChange={e => setLenguaje(e.target.value)}>
                    <option value="c_cpp">C++</option>
                    <option value="javascript">Javascript</option>
                    <option value="java">Java</option>
                    <option value="html">HTML</option>
                    <option value="python">Python</option>
                </select>
                <a className="button nounderline" href={`data:text/plain;charset=utf-8,${encodeURIComponent(codigo)}`} download={`codigo.${extension[lenguaje]}`}>Descargar Como Archivo</a>
            </div>

            <AceEditor
                mode={lenguaje}
                theme="terminal"
                className="editorCodigoEditor"
                width="auto"
                onChange={onChange}
                editorProps={{ $blockScrolling: true }}
                value={codigo}
            />
        </div>
    )
}

export default EditorCodigo;
