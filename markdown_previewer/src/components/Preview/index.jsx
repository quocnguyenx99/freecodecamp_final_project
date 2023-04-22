import { forwardRef} from "react";
import styles from './Preview.module.css'
import { FaFreeCodeCamp } from "react-icons/fa";

function Preview(props,ref) {
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.preview__title}>
                <p className={styles.preview__name}>Preview</p>
                <FaFreeCodeCamp className={styles.preview__icon} />
            </div>
            <div ref={ref} className={styles.preview__content}>Hello React</div>
        </div>
     );
}

export default forwardRef(Preview);