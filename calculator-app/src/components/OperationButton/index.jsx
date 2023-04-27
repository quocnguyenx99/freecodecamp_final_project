import styles from './OperationButton.module.css'
import {ACTIONS} from '../../Reducer/actions'

function OperationButton({operation, dispatch, orange}) {
    return ( 
        <button className={orange? styles.orange : null } onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})}>{operation}</button>
     );
}

export default OperationButton;