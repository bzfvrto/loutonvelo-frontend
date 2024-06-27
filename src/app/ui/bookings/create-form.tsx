"use client";
import { createBooking, fetchBikeAvailable, fetchShopsInCity } from "@/app/lib/actions";
import { useContext, useEffect, useState } from "react";
import SelectBike from "../bookings/select-bike";
import { Button } from "../button";
import SelectShop from "../bookings/select-shop";
import { User } from "next-auth";
import { Bike } from "@/app/lib/definitions";
import { useFormState, useFormStatus } from "react-dom";
import { ArrowRightIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function CreateForm({ user }: { user: User }) {
    const [city, setCity] = useState("");
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [availableBikes, setAvailableBikes] = useState([]);
    const [fetchError, setFetchError] = useState<string[]>([]);
    const [shopsInCity, setAvailableShopsInCity] = useState([]);

    const [showConnectModal, setShowConnectModal] = useState(false);

    const [selectedShop, setSelectedShop] = useState<string | null>(null);
    const [selectedBikes, setSelectedBikes] = useState<string[]>([]);
    // const { booking, setBooking } = useContext(BookingContext);
    const [bikeInputKey, setBikeInputKey] = useState(Date.now);

    const [errorMessage, dispatch] = useFormState(createBooking, undefined);

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
    }, [startDate, endDate, city]);

    const handleBookingCreation = (formData: FormData) => {
        if (formData) {
            dispatch(formData);
        }
    };
    const handleShopSelected = (shopId: string | null) => {
        setSelectedShop(shopId);
        setBikeInputKey(Date.now());
    };

    const handleBikeSelected = (selected: { bikes: string[]; shop: string | null }) => {
        console.log("selecteddddd", selected);

        setSelectedShop(selected.shop ? selected.shop : null);
        setSelectedBikes(selected.bikes);
    };

    return (
        <form action={handleBookingCreation}>
            {/* Booking City */}
            <div className="mb-4">
                <label
                    htmlFor="city"
                    className="mb-2 w-full md:mx-auto block text-sm font-medium text-gray-900 dark:text-gray-200"
                >
                    Saisissez le nom d&apos;une ville pour afficher les vélos disponibles.
                </label>
                <div className="relative mt-2 rounded-md">
                    <div className="relative">
                        <input
                            id="city"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            type="text"
                            placeholder="Recherchez une ville avec des vélos à louer"
                            className="peer w-full md:mx-auto block rounded-md border border-gray-200 py-2 px-5 text-sm outline-2 placeholder:text-gray-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                        />
                    </div>
                </div>
            </div>

            {city !== "" && shopsInCity.length > 0 && (
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Booking Start at */}
                    <div className="mb-4">
                        <label
                            htmlFor="startAt"
                            className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200"
                        >
                            Jour et heure de début
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="startAt"
                                    name="startAt"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    type="datetime-local"
                                    placeholder="Choisissez un jour et une heure de début"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 px-5 text-sm outline-2 placeholder:text-gray-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
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
                            Jour et heure de fin
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="endAt"
                                    name="endAt"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    type="datetime-local"
                                    placeholder="Choisissez un jour et une heure de fin"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 px-5 text-sm outline-2 placeholder:text-gray-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {shopsInCity.length > 0 && (
                <div className="mb-4">
                    <label htmlFor="shop" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200">
                        Lieux de location à {city}
                    </label>
                    <SelectShop
                        shops={shopsInCity}
                        name="shop"
                        onSelect={(selected) => handleShopSelected(selected)}
                        initialeValue={selectedShop}
                    />
                </div>
            )}

            <div>
                {availableBikes.length > 0 && (
                    <>
                        {/* Bikes bookable */}
                        <div className="mb-4">
                            <label htmlFor="bikes" className="mb-2 block text-sm font-medium">
                                Choisissez un vélo
                            </label>
                            <SelectBike
                                key={bikeInputKey}
                                bikes={availableBikes.filter((bike: Bike) => {
                                    console.log("filtering from booking-form ", bike.shop, selectedShop);

                                    return selectedShop === null ? true : bike.shop === selectedShop;
                                })}
                                name="bikes"
                                onSelect={(selected) => handleBikeSelected(selected)}
                            />
                            {/* .filter((bike: Bike) => {
                                        console.log(bike);
                                        return bike.shop === selectedShop;
                                    }) */}
                        </div>
                    </>
                )}
            </div>
            {fetchError.length > 0 &&
                fetchError &&
                fetchError.length > 0 &&
                fetchError.map((error: string, index: number) => <p key={index}>{error}</p>)}
            <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
                {errorMessage && (
                    <>
                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                        <p className="text-sm text-red-500">{errorMessage}</p>
                    </>
                )}
            </div>
            <div className="flex mt-6">{selectedBikes.length > 0 && <CreateBookingButton />}</div>
        </form>
    );
}

function CreateBookingButton() {
    const { pending } = useFormStatus();

    return (
        <Button className="w-full justify-center group" aria-disabled={pending} type="submit">
            <span className="flex flex-shrink-0">Réserver maintenant</span>
            <ArrowRightIcon className="ml-4 group-hover:ml-[55%] group-hover:md:ml-[75%] transform duration-300 h-5 w-5 text-gray-50" />
        </Button>
    );
}
