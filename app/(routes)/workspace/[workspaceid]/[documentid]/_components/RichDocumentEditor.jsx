import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
import Delimiter from '@editorjs/delimiter';
import Alert from 'editorjs-alert';
import List from "@editorjs/list";
import NestedList from '@editorjs/nested-list';
import Checklist from '@editorjs/checklist'
import Embed from '@editorjs/embed';
import Table from '@editorjs/table'
import CodeTool from '@editorjs/code';
import Paragraph from '@editorjs/paragraph';    
function RichDocumentEditor() {
  const ref = useRef();
  let editor;

  useEffect(() => {
    InitEditor();
 
  }, []);

  const InitEditor = () => {
    if (!editor?.current) {
      editor = new EditorJS({
        onChange: (api, event) => {
           SaveDocument()
          //ref.current.save().then(async (outputData) => {console.log(outputData)})
        },
        onReady:()=>{
          GetDocumentOutput()
        },
        /**
         * Id of Element that should contain Editor instance
         */
        holder: 'editorjs',
        tools: {
          header: Header,
          delimiter: Delimiter,
          paragraph:Paragraph,
          alert: {
            class: Alert,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+A',
            config: {
              alertTypes: ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark'],
              defaultType: 'primary',
              messagePlaceholder: 'Enter something',
            }
          },
          table: Table,
          list: {
            class: List,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+L',
            config: {
              defaultStyle: 'unordered'
            },
          },
          checklist: {
            class: Checklist,
            shortcut: 'CMD+SHIFT+C',
            inlineToolbar: true,
          },
        //   image: SimpleImage,
          code: {
            class: CodeTool,
            shortcut: 'CMD+SHIFT+P'
          },
          //   textVariant: TextVariantTune


        },

      });
      ref.current = editor;
    }
  }
  return (
    <div className='-ml-40'>
      <div id='editorjs'></div>
    </div>
  );
}

export default RichDocumentEditor;
