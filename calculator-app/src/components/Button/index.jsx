import styles from './Button.module.css'
import {ACTIONS} from '../../Reducer/actions'

function Button({name, dispatch, span_two}) {
    return ( 
        <button className={span_two ? styles.span_column: null}  onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: name})}>{name}</button>
     );
}

export default Button;