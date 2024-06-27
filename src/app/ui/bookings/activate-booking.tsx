"use client";

import { activateBooking } from "@/app/lib/actions";
import { Booking } from "@/app/lib/definitions";
import clsx from "clsx";
import { useState } from "react";

export default function ActivateBooking({ booking, onActivation }: { booking: Booking; onActivation: () => void }) {
    console.log("booking is", booking);
    const [currentBooking, setCurrentBooking] = useState(booking);
    const [isValid, setIsValid] = useState<boolean>();
    console.log(isValid);

    const handleActivationCodeVerification = (code: string) => {
        console.log(code, code.length, currentBooking.activationCode?.length);

        if (currentBooking.activationCode && code.length === currentBooking.activationCode.length) {
            verifyAndActivateBooking(code, currentBooking.activationCode);
        }
    };

    const verifyAndActivateBooking = async (code: string, bookingCode: string) => {
        console.log(code === bookingCode, code, bookingCode);

        if (code === bookingCode) {
            setIsValid(true);
            const activationResult = await activateBooking(booking._id);
            console.log("activationResult", activationResult);
            setCurrentBooking(activationResult);
            onActivation();
        } else {
            setIsValid(false);
        }
    };

    return (
        <div className="mb-4">
            <label htmlFor="activationCode" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400">
                Activation code
            </label>
            <div className="relative mt-2 rounded-md">
                <div className="relative">
                    {!isValid &&
                    (currentBooking.status === "pending" ||
                        currentBooking.status === "paid" ||
                        currentBooking.status === "accepted") ? (
                        <input
                            id="activationCode"
                            name="activationCode"
                            type="text"
                            placeholder="1234"
                            onChange={(e) => handleActivationCodeVerification(e.target.value)}
                            className={clsx(
                                "peer block rounded-md border border-gray-200 py-4 px-4 text-sm outline-2 placeholder:text-gray-500",
                                {
                                    "border-red-500 bg-red-100": isValid === false,
                                }
                            )}
                        />
                    ) : (
                        <span className="font-bold text-center peer block rounded-md border border-lime-400 py-4 px-4 outline-2">
                            <span className="text-lime-500">{currentBooking.activationCode}</span>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
