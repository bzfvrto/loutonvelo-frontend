export type User = {
    id: string;
    username: string;
    email: string;
    password: string;
    type: string;
};

export type Bike = {
    id: string;
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
    id: string;
    name: string;
    description: string;
    website: string | null;
}
