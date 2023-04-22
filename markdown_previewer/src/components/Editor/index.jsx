import { FaFreeCodeCamp } from "react-icons/fa";
import styles from "./Editor.module.css";
function Editor({ value: { markdown, setMarkdown } }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.editor__title}>
        <p className={styles.editor__name}>Editor</p>
        <FaFreeCodeCamp className={styles.editor__icon} />
      </div>
      <textarea
        className={styles.editor__area}
        value={markdown}
        onChange={({ target }) => setMarkdown(target.value)}
        spellCheck='false'
        name="editor"
        id="editor"
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
}

export default Editor;
