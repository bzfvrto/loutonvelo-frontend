"use client";

import { BookingContext } from "@/app/contexts/bookingContext";
import { ReactNode, useEffect, useState } from "react";
import { Booking, BookingFormData } from "../lib/definitions";

export function BookingProvider({ children }: { children: ReactNode }) {
    const [booking, setBooking] = useState<BookingFormData>({
        city: "",
        bikes: "",
        shop: "",
        startAt: "",
        endAt: "",
    });

    return <BookingContext.Provider value={{ booking, setBooking }}>{children}</BookingContext.Provider>;
}
