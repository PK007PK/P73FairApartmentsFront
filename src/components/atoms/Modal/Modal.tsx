import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Portal from 'gatsby/portal';
import { ModalStyles } from './Modal.styles';
import { AiFillCloseCircle as Exit } from '@react-icons/all-files/ai/AiFillCloseCircle';

interface Props {
    children: React.ReactNode;
    title: string;
}

const Modal = forwardRef((props: Props, ref) => {
    const [display, setDisplay] = useState<Boolean>(false);

    useImperativeHandle(ref, () => ({
        openModal: () => handleOpen(),
        closeModal: () => handleClose(),
    }));

    const handleOpen = () => {
        setDisplay(true);
    };

    const handleClose = () => {
        setDisplay(false);
    };

    if (display) {
        return (
            <Portal>
                <ModalStyles>
                    <div className="modal">
                        <div className="topWrapper">
                            <h3 className="title">{props.title}</h3>{' '}
                            <button className="exitButton" tabIndex={0} type="button" onClick={handleClose}>
                                <Exit className="exitIcon" />
                            </button>
                        </div>
                        {props.children}
                    </div>
                </ModalStyles>
            </Portal>
        );
    }

    return null;
});

export default Modal;
