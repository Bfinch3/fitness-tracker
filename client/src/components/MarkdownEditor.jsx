import { useEffect, useRef, useState } from "react";
import MarkdownEditorToolbar from "./MarkdownEditorToolbar";

function MarkdownEditor({ text, setText }) {
  const [mode, setMode] = useState("write");
  const textArea = useRef();
  const markdownPreview = useRef();
  const markdownConverter = new showdown.Converter();

  useEffect(() => {
    textArea.current.value = text;
  }, [text]);

  useEffect(() => {
    if(mode == "preview") {
      markdownPreview.current.innerHTML = markdownConverter.makeHtml(text);
    }
  }, [text, mode]);

  return (
    <div className="d-flex flex-column gap-3">
      <div>
        <ul className="nav nav-pills bg-light-subtle rounded-2 overflow-hidden">
          <li className="nav-item">
            <button className={`nav-link rounded-0 ${mode == "write" ? 'active' : ''}`} onClick={() => setMode("write")}>Write</button>
          </li>
          <li className="nav-item">
            <button className={`nav-link rounded-0 ${mode == "preview" ? 'active' : ''}`} onClick={() => setMode("preview")}>Preview</button>
          </li>
        </ul>
          <div className={mode != "write" ? "d-none" : ""}>
            <MarkdownEditorToolbar textArea={textArea} setText={setText} />
            <textarea className="form-control" spellCheck="false" ref={textArea} style={{height: "4in"}} onInput={() => setText(textArea.current.value)}></textarea>
          </div>
          <div ref={markdownPreview} className={`markdown-view py-3 ${mode == "write" ? "d-none" : ""}`}></div>
      </div>
    </div>
  );
}

export default MarkdownEditor;