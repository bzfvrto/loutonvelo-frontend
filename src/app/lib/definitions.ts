import { DefaultSession } from "next-auth";

export type User = {
    _id: string;
    username?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    token: string;
};

export type Picture = {
    url: string;
}

export type Bike = {
    _id: string;
    name: string;
    brand: string;
    model: string;
    seats: number;
    availability: string;
    pictures: Picture[];
    year: Date;
    color: string;
    description: string;
    externalLink: string;
    floorPrice: number;
    pricePerHour: number;
    size: string;
    shop: string;
};

export type Brand = {
    _id: string;
    name: string;
    description: string;
    website: string | null;
}

export type Booking = {
    _id: string;
    bikes: Bike[];
    user: User;
    startAt: Date;
    endAt: Date;
    status: string;
}

export type Address = {
    housenumber: number;
    street: string;
    city: string;
    postcode: string;
    country: string;
}
export type Shop = {
    _id: string;
    name: string;
    description: string;
    website: string;
    address: Address;
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

export type UpsertBookingApiResponse = {
    data?: {
        result: boolean;
        booking: Booking;
    },
    errors?: Array<{message: string}>
}

export type BookingsApiResponse = {
    data?: {
        result: boolean;
        bookings: Booking[];
    },
    errors?: Array<{message: string}>
}

export type UpsertShopApiResponse = {
    data?: {
        result: boolean;
        shop: Shop;
    },
    errors?: Array<{message: string}>
}

export type ShopApiResponse = {
    data?: {
        result: boolean;
        shops: Shop[];
    },
    errors?: Array<{message: string}>
}

export type LoginUserApiResponse = {
    data?: {
        result: boolean;
        user: User;
    },
    errors?: Array<{message: string}>
}
export type SessionUser = {
    _id: string;
    role: string;
} & DefaultSession["user"];

export type FileEventTarget = EventTarget & { files: FileList };
