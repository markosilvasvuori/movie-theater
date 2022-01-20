import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
    return (
        <div 
            className={classes.backdrop} 
            onClick={props.onClick}>
        </div>
    );
};

const Modal = (props) => {
    return ReactDOM.createPortal(
        <Fragment>
            <Backdrop onClick={props.onClick} />
            <div className={classes.modal}>
                <header>
                    <h3>{props.title}</h3>
                    <button 
                        className={classes['close-button']}
                        onClick={props.onClick}
                    >
                            X
                    </button>
                </header>
                {props.children}
            </div>
        </Fragment>,
        document.querySelector('#root-modal')
    );
};

export default Modal;