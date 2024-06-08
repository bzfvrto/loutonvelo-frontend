"use client";
import { fetchBikeAvailable } from "@/app/lib/actions";
import { useEffect, useState } from "react";
import SelectBike from "../bookings/select-bike";
import { Button } from "../button";

export default function BookingForm() {
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
        <div className="relative bg-white rounded-lg w-5/6 mx-auto">
            <h4 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl pt-4">
                Book a Bike
            </h4>
            <div className="bg-white px-6 py-8 shadow sm:rounded-lg sm:px-12">
                <form>
                    <div className="flex flex-row justify-around">
                        {/* Booking Start at */}
                        <div className="mb-4">
                            <label htmlFor="startAt" className="mb-2 block text-sm font-medium">
                                Booking start at
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
                                Booking end at
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
                    </div>
                    <div>
                        {fetchError &&
                            fetchError.length > 0 &&
                            fetchError.map((error: string, index: number) => <p key={index}>{error}</p>)}
                        {availableBikes.length > 0 && (
                            <>
                                {/* Bikes bookable */}
                                <div className="mb-4">
                                    <label htmlFor="bikes" className="mb-2 block text-sm font-medium">
                                        Choose Bikes
                                    </label>
                                    <SelectBike bikes={availableBikes} name="bikes" />
                                </div>
                            </>
                        )}
                    </div>
                    <div className="flex mt-6">
                        <Button type="submit" className="w-full justify-center">
                            Book now
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
