import { Fragment } from 'react';

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
    return (
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
        </Fragment>
    );
};

export default Modal;