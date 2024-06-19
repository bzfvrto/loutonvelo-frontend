"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { Booking, BookingFormData } from "../lib/definitions";

type BookingContextType = {
    booking: BookingFormData;
    setBooking: Dispatch<SetStateAction<BookingFormData>>;
}

export const BookingContext = createContext<BookingContextType>(null!)
