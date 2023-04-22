import { useState, useEffect, useRef } from "react";
import { marked } from "marked";
import "./App.css";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  const [markdown, setMarkdown] = useState("# Hello React");
  const [html, setHtml] = useState("");
  const previewRef = useRef();

  useEffect(() => {
    setHtml(marked.parse(markdown));
  }, [markdown]);

  

  useEffect(() => {
    if(previewRef.current) {
      previewRef.current.innerHTML = html
    }
  },[html])

  return (
    <>
      <h1 className="title">Markdown Editor</h1>
      <Editor value={{ markdown, setMarkdown }} />
      <Preview ref={previewRef} />
    </>
  );
}

export default App;
