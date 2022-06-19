import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { AiFillCloseCircle as Exit } from '@react-icons/all-files/ai/AiFillCloseCircle';

import { ModalStyles } from './Modal.style';
import { CommonProps } from 'types/commonProps';
import Portal from 'gatsby/portal';

interface Props extends CommonProps {
    title: string,
}

// eslint-disable-next-line react/display-name
export const Modal = forwardRef((props: Props, ref) => {
    const [display, setDisplay] = useState(false);

    const handleOpen = () => {
        setDisplay(true);
    };

    const handleClose = () => {
        setDisplay(false);
    };

    useImperativeHandle(ref, () => ({
        openModal: () => handleOpen(),
        closeModal: () => handleClose(),
    }));

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
