import React, { SyntheticEvent, useEffect, useState } from 'react';

import { NewApartmentEntity } from 'src/types/apartment';
import { FormApartmentStyle } from './FormApartment.style';

import { Button } from 'src/components/atoms/Button/Button';
import { FormField } from 'src/components/atoms/FormField/FormField';
import { CommonProps } from 'src/types/commonProps';
import { detectEnvForApiCalls } from 'src/hooks/detectEnvForApiCalls';

export interface FormApartmentStylingProps extends CommonProps {}

interface FormApartmentProps extends FormApartmentStylingProps {
    id?: string;
}

const emptyApartment: NewApartmentEntity = {
    name: '',
    descriptionShort: '',
    price: 0,
    lat: 0,
    lon: 0,
    mainImgLink: '',
}

export const FormApartment: React.FunctionComponent<FormApartmentProps> = (props) => {
    const [loading, setLoading] = useState(false);
    const [added, setAdded] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [id, setId] = useState('');
    const [form, setForm] = useState<NewApartmentEntity>(emptyApartment);

    useEffect(() => {
        props.id ? setId(props.id) : null;
    }, [props])

    const checkIfRequiredFieldsEntered = () => 
        form.name === "" || form.price === 0 || form.lat === 0 || form.lon === 0
      
    const prefix = detectEnvForApiCalls();

    useEffect(() => {
        if (id) {
            (async (): Promise<void> => {
                try {
                    const resp = await fetch(`${prefix}/api/apartment/${id}`);
                    const data = await resp.json();
                    setForm(data);
                } catch (err) {
                    console.log(err);
                }
            })()
        }
    }, [id, props])

    const addOrUpdateApartment = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${prefix}/api/apartment/${id ? "update" : "add"}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                }),
            });
            if (!id) {
                const data = await res.json();
                setId(data.id);
            }
            setAdded(true);
        } finally {
            setLoading(false);
        }
    };

    const deleteApartment = async (id: string) => {
        setLoading(true);

        try {
            const res = await fetch(`${prefix}/api/apartment/delete/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            const { isDeleted } = await res.json();
            setDeleted(isDeleted);
        } finally {
            setForm(emptyApartment);
            setLoading(false);
        }
    };

    const updateForm = (key: string, value: any) => {
        if (typeof [key] === "number") {
            setForm(form => ({
                ...form,
                [key]: Number(value),
            }));
        } else {
            setForm(form => ({
                ...form,
                [key]: value,
            }));
        }
    };

    if (deleted) {
        return <FormApartmentStyle>Apartament usunięty</FormApartmentStyle>
    }

    if (added) {
        return <FormApartmentStyle>Apartament dodany lub zmieniony</FormApartmentStyle>
    }

    return (
        <FormApartmentStyle>
            {loading && <div className='loading'>Loading...</div>}
            <form action="" className="add-form" onSubmit={addOrUpdateApartment}>
                <FormField 
                    placeholder="Podaj nazwę"
                    label='Nazwa:'
                    type="text"
                    name="name"
                    required
                    maxLength={99}
                    value={form.name}
                    onChange={e => updateForm('name', e.target.value)}
                />
                <FormField 
                    label='Krótki opis:'
                    name="descriptionShort"
                    maxLength={999}
                    value={form.descriptionShort}
                    onChange={e => updateForm('descriptionShort', e.target.value)}
                    as="textarea"
                />
                <FormField 
                    label='Cena:'
                    type="number"
                    name="price"
                    required
                    min="0"
                    max="999999"
                    value={form.price}
                    onChange={e => updateForm('price', Number(e.target.value))}
                />
                <FormField 
                    label='Szerokość geograficzna:'
                    type="number"
                    name="lat"
                    required
                    value={form.lat}
                    onChange={e => updateForm('lat', Number(e.target.value))}
                />
                <FormField 
                    label='Długość geograficzna:'
                    type="number"
                    name="lon"
                    required
                    value={form.lon}
                    onChange={e => updateForm('lon', Number(e.target.value))}
                />
                <FormField 
                    label='Link do głównego zdjęcia:'
                    type="text"
                    name="mainImgLink"
                    value={form.mainImgLink}
                    onChange={e => updateForm('mainImgLink', e.target.value)}
                />
                <Button disabled={checkIfRequiredFieldsEntered()}>Zapisz</Button>
            </form>
            {id && <Button className='deleteBtn' onClick={() => deleteApartment(id)}>Usuń</Button>}
        </FormApartmentStyle>
    );
}
