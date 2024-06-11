"use client";
import { createBooking, fetchBikeAvailable, fetchShopsInCity } from "@/app/lib/actions";
import { useEffect, useState } from "react";
import SelectBike from "../bookings/select-bike";
import { Button } from "../button";
import SelectShop from "../bookings/select-shop";

export default function BookingForm() {
    const [city, setCity] = useState("");
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [availableBikes, setAvailableBikes] = useState([]);
    const [fetchError, setFetchError] = useState<string[]>([]);
    const [shopsInCity, setAvailableShopsInCity] = useState([]);

    // console.log(fetchError);
    // console.log(availableBikes);

    useEffect(() => {
        (async () => {
            console.log(city);

            if (city === "") {
                setFetchError((msgs) => []);
                setAvailableShopsInCity([]);
                setAvailableBikes([]);
            } else {
                const { data, errors } = await fetchShopsInCity(city);
                console.log("fetched shops", data, errors);

                if (errors) {
                    console.log("isset errors");
                    setFetchError((msgs) => [errors.message]);
                    setAvailableBikes([]);
                }
                if (data && data.result) {
                    console.log("isset results");
                    setFetchError((msgs) => []);
                    setAvailableShopsInCity((shops) => data.shops);
                }
            }
        })();
    }, [city]);

    useEffect(() => {
        (async () => {
            if (startDate !== "" && endDate !== "" && city !== "") {
                console.log(startDate, endDate);

                const { data, errors } = await fetchBikeAvailable(startDate, endDate, city);
                console.log("bikesResponse", data, errors);
                if (errors) {
                    console.log("isset errors");
                    setFetchError((msgs) => [errors.message]);
                    setAvailableBikes([]);
                }
                if (data && data.result) {
                    console.log("isset results");
                    setFetchError((msgs) => []);
                    setAvailableBikes((bikes) => data.bikes);
                }
            }
        })();
        return () => {};
    }, [startDate, endDate, city]);
    return (
        <div className="relative bg-white dark:bg-gray-800  rounded-lg w-5/6 mx-auto">
            <h4 className="text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-6xl pt-4">
                Book a Bike
            </h4>
            <div className="bg-white dark:bg-gray-800 px-6 py-8 shadow sm:rounded-lg sm:px-12">
                <form action={createBooking}>
                    {/* Booking City */}
                    <div className="mb-4">
                        <label
                            htmlFor="city"
                            className="mb-2 w-2/3 md:mx-auto block text-sm font-medium text-gray-900 dark:text-gray-200"
                        >
                            City
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="city"
                                    name="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    type="text"
                                    placeholder="Search city with bookable bike"
                                    className="peer w-2/3 md:mx-auto block rounded-md border border-gray-200 py-2 px-5 text-sm outline-2 placeholder:text-gray-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                                />
                            </div>
                        </div>
                    </div>

                    {shopsInCity.length > 0 && <SelectShop shops={shopsInCity} name="shops" />}

                    {city !== "" && shopsInCity.length > 0 && (
                        <div className="flex flex-col md:flex-row justify-around">
                            {/* Booking Start at */}
                            <div className="mb-4">
                                <label
                                    htmlFor="startAt"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200"
                                >
                                    Booking start at
                                </label>
                                <div className="relative mt-2 rounded-md">
                                    <div className="relative">
                                        <input
                                            id="startAt"
                                            name="startAt"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                            type="datetime-local"
                                            placeholder="Select start time for your booking"
                                            className="peer block rounded-md border border-gray-200 py-2 px-5 text-sm outline-2 placeholder:text-gray-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Booking End at */}
                            <div className="mb-4">
                                <label
                                    htmlFor="endAt"
                                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200"
                                >
                                    Booking end at
                                </label>
                                <div className="relative mt-2 rounded-md">
                                    <div className="relative">
                                        <input
                                            id="endAt"
                                            name="endAt"
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                            type="datetime-local"
                                            placeholder="Select end time for your booking"
                                            className="peer block rounded-md border border-gray-200 py-2 px-5 text-sm outline-2 placeholder:text-gray-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div>
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
                    {fetchError.length > 0 &&
                        fetchError &&
                        fetchError.length > 0 &&
                        fetchError.map((error: string, index: number) => <p key={index}>{error}</p>)}
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
