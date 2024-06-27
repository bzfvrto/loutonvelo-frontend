import { Bike, Booking } from "../lib/definitions";

export const bookingAmount = (booking: Booking) => {
    const duration = bookingDuration(new Date(booking.startAt).getTime(), new Date(booking.endAt).getTime());
    return booking.bikes.reduce((acc, bike) => {
        return acc + pricePerBikeBooked(bike, duration);
    }, 0);
};

export const bookingDuration = (startAtInMs: number, endAtInMs: number): number => {
    const diffInMs = endAtInMs - startAtInMs;
    return diffInMs / 1000 / 60;
};

export const pricePerBikeBooked = (bike: Bike, duration: number): number => {
    const pricePerMin = bike.pricePerHour / 60;
    return bike.floorPrice + pricePerMin * duration;
};
