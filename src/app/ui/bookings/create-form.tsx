"use client";

import Link from "next/link";
import {
    CheckIcon,
    ClockIcon,
    CurrencyDollarIcon,
    CurrencyEuroIcon,
    GlobeAltIcon,
    UserCircleIcon,
    UserIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import { Bike } from "@/app/lib/definitions";
import SelectBike from "./select-bike";
import { createBooking, fetchBikeAvailable } from "@/app/lib/actions";
import { useState, useEffect } from "react";

export default function Form() {
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [availableBikes, setAvailableBikes] = useState([]);
    const [fetchError, setFetchError] = useState<string[]>([]);
    // const bikesResponse = await fetchBikeAvailable();
    console.log(fetchError);
    console.log(availableBikes);

    useEffect(() => {
        (async () => {
            if (startDate !== "" && endDate !== "") {
                console.log(startDate, endDate);

                setFetchError((msgs) => []);
                const { data, errors } = await fetchBikeAvailable(startDate, endDate);
                console.log("bikesResponse", data, errors);
                if (errors) {
                    console.log("isset errors");

                    setFetchError((msgs) => [errors.message]);
                }
                if (data && data.result) {
                    console.log("isset results");

                    setAvailableBikes((bikes) => data.bikes);
                }
            }
        })();
        return () => {};
    }, [startDate, endDate]);
    return (
        <form action={createBooking}>
            <div className="rounded-md bg-gray-50 dark:bg-gray-800 p-4 md:p-6">
                {/* Booking Start at */}
                <div className="mb-4">
                    <label htmlFor="startAt" className="mb-2 block text-sm font-medium">
                        Jour et heure de début
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="startAt"
                                name="startAt"
                                onChange={(e) => setStartDate(e.target.value)}
                                type="datetime-local"
                                placeholder="Select start time for your booking"
                                className="peer block rounded-md border border-gray-200 py-2 px-5 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Booking End at */}
                <div className="mb-4">
                    <label htmlFor="endAt" className="mb-2 block text-sm font-medium">
                        Jour et heure de fin
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="endAt"
                                name="endAt"
                                onChange={(e) => setEndDate(e.target.value)}
                                type="datetime-local"
                                placeholder="Select end time for your booking"
                                className="peer block rounded-md border border-gray-200 py-2 px-5 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>
                {fetchError &&
                    fetchError.length > 0 &&
                    fetchError.map((error: string, index: number) => <p key={index}>{error}</p>)}
                {availableBikes.length > 0 && (
                    <>
                        {/* Bikes bookable */}
                        <div className="mb-4">
                            <label htmlFor="bikes" className="mb-2 block text-sm font-medium">
                                Sélectionnez un vélo
                            </label>
                            <SelectBike bikes={availableBikes} name="bikes" />
                        </div>
                    </>
                )}

                <div className="mt-6 flex justify-end gap-4">
                    <Link
                        href="/dashboard/bookings"
                        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        Annuler
                    </Link>
                    <Button type="submit">Enregistrer</Button>
                </div>
            </div>
        </form>
    );
}
