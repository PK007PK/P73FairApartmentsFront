export interface SimpleApartmentEntity {
    id: string;
    lat: number;
    lon: number;
    price: number;
}

export interface ApartmentEntity extends SimpleApartmentEntity {
    name: string;
    descriptionShort: string;
    staticSiteUrl: string;
}

export interface NewApartmentEntity extends Omit<ApartmentEntity, 'id'> {
    id?: string;
}
