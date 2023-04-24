import { FaFreeCodeCamp } from "react-icons/fa";
import { MdZoomOutMap, MdZoomInMap } from "react-icons/md";
import styles from "./Editor.module.css";
function Editor({
  markdownValue: { markdown, setMarkdown },
  visible: { editorFullHeight, setEditorFullHeight },
}) {
  const handleClick = () => {
    setEditorFullHeight((prev) => !prev);
  };

  return (
    <div
      className={`${styles.wrapper} ${
        editorFullHeight ? styles.editor__zoomOut : ""
      }`}
    >
      <div className={styles.editor__title}>
        <div className={styles.editor__titleName}>
          <p className={styles.editor__name}>Editor</p>
          <FaFreeCodeCamp className={styles.editor__icon} />
        </div>

        {editorFullHeight ? (
          <MdZoomInMap
            onClick={handleClick}
            className={styles.editor__iconZoomIn}
          />
        ) : (
          <MdZoomOutMap
            onClick={handleClick}
            className={styles.editor__iconZoomOut}
          />
        )}
      </div>
      <textarea
        className={styles.editor__area}
        value={markdown}
        onChange={({ target }) => setMarkdown(target.value)}
        spellCheck="false"
        name="editor"
        id="editor"
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
}

export default Editor;
