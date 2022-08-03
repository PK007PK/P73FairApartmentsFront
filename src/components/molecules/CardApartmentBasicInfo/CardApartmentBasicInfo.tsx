import React, { useRef } from 'react';
import { Logo } from 'components';
import { Modal } from 'components';
import { FormApartment } from 'components';
import { CardApartmentBasicInfoStyle } from './CardApartmentBasicInfo.style';

interface Props {
    name: string,
    id: string,
    image?: string,
}

export const CardApartmentBasicInfo: React.FunctionComponent<Props> = (props) => {
    const { name, image, id } = props;
    const modalRef1 = useRef();

    return (
        <div>
            <CardApartmentBasicInfoStyle onClick={() => modalRef1.current.openModal()}>
                <div className="imgWrapper">
                    {image ? (
                        <img
                            className="picture"
                            src={image}
                            placeholder='blurred'
                            alt={name}
                        />
                    ) : (
                        <Logo />
                    )}
                </div>
                <div className="textWrapper">
                    <h3 className="title">{name}</h3>
                </div>
            </CardApartmentBasicInfoStyle>

            <Modal ref={modalRef1} title="Edytuj apartament">
                <FormApartment id={id} />
            </Modal>
        </div>
    );
};
