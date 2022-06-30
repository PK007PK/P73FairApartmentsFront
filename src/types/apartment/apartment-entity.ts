export interface SimpleApartmentEntity {
    id: string;
    lat: number;
    lon: number;
    price: number;
    name: string;
    descriptionShort: string;
}

export interface ApartmentEntity extends SimpleApartmentEntity {
}

export interface NewApartmentEntity extends Omit<ApartmentEntity, 'id'> {
    id?: string;
}
