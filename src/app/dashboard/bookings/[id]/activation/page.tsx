"use client";
import { fetchBookingByIdForShop } from "@/app/lib/actions";
import { Booking } from "@/app/lib/definitions";
import BookingDetails from "@/app/ui/bookings/details";
import { useEffect, useState } from "react";

export default function ActivateBooking({ params }: { params: { id: string } }) {
    const [booking, setBooking] = useState<Booking>();
    const id = params.id;

    useEffect(() => {
        if (!booking) {
            (async () => {
                const fetchedBooking = await fetchBookingByIdForShop(id);
                setBooking(fetchedBooking.data.booking);
            })();
        }
    });

    const refreshBooking = async () => {
        const fetchedBooking = await fetchBookingByIdForShop(id);
        setBooking(fetchedBooking.data.booking);
    };

    return (
        <main>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4">
                Réservation détail
            </h1>
            {booking && <BookingDetails booking={booking} onBookingChange={refreshBooking} />}
        </main>
    );
}
