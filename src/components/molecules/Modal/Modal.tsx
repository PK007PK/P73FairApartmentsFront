import React, { useState, forwardRef, useImperativeHandle, useContext, useEffect } from 'react';
import Portal from 'src/gatsby/portal';
import AppContext from 'src/AppProvider';
import { CommonProps } from 'src/types/commonProps';
import { ModalStyles } from './Modal.style';
import { AiFillCloseCircle as Exit } from '@react-icons/all-files/ai/AiFillCloseCircle';

interface Props extends CommonProps {
    title: string,
}

// eslint-disable-next-line react/display-name
export const Modal = forwardRef((props: Props, ref) => {
    const {forceUpdate} = useContext(AppContext);
    const [display, setDisplay] = useState(false);

    useEffect(()=>{
        forceUpdate();
    },[display])

    const handleOpen = () => {
        setDisplay(true);
    };

    const handleClose = () => {
        setDisplay(false);
        window.location.reload();
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
