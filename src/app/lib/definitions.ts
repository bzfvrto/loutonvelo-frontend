export type User = {
    _id: string;
    username: string;
    email: string;
    password: string;
    type: string;
};

export type Bike = {
    _id: string;
    name: string;
    brand: string;
    model: string;
    seats: number;
    availability: string;
    pictures: object[];
    year: Date;
    color: string;
    description: string;
    externalLink: string;
    floorPrice: number;
    pricePerHour: number;
};

export type Brand = {
    _id: string;
    name: string;
    description: string;
    website: string | null;
}

export type UpsertBikeApiResponse = {
    data?: {
        result: boolean;
        bike: Omit<Bike, 'fetchedAt'>;
    },
    errors?: Array<{message: string}>
}

export type BikesApiResponse = {
    data?: {
        result: boolean;
        bikes: Bike[];
    },
    errors?: Array<{message: string}>
}

export type UpsertBrandApiResponse = {
    data?: {
        result: boolean;
        brand: Brand;
    },
    errors?: Array<{message: string}>
}

export type BrandsApiResponse = {
    data?: {
        result: boolean;
        brands: Brand[];
    },
    errors?: Array<{message: string}>
}
