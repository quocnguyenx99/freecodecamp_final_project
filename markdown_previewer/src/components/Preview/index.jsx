import { forwardRef } from "react";
import styles from "./Preview.module.css";
import { FaFreeCodeCamp } from "react-icons/fa";
import { MdZoomOutMap, MdZoomInMap } from "react-icons/md";

function Preview(props, ref) {
  const handleClick = () => {
    props.visible.setPreivewFullHeight((prev) => !prev);
  };
  return (
    <div
      className={`${styles.wrapper} ${
        props.visible.previewFullHeight ? styles.preivew__zoomOut : ""
      } ${props.editorFullHeight ? styles.hidden : ""}`}
    >
      <div className={styles.preview__title}>
        <div className={styles.preview__titleName}>
          <p className={styles.preview__name}>Preview</p>
          <FaFreeCodeCamp className={styles.preview__icon} />
        </div>
        {props.visible.previewFullHeight ? (
          <MdZoomInMap
            onClick={handleClick}
            className={styles.preview__iconZoomIn}
          />
        ) : (
          <MdZoomOutMap
            onClick={handleClick}
            className={styles.preview__iconZoomOut}
          />
        )}
      </div>
      <div ref={ref} className={`${styles.preview__content}`}>
        Hello React
      </div>
    </div>
  );
}

export default forwardRef(Preview);
