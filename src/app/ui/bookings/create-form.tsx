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
import { createBooking } from "@/app/lib/actions";

export default function Form({ bikes }: { bikes: Bike[] }) {
    return (
        <form action={createBooking}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Brand Name */}
                {/* <div className="mb-4">
                    <label htmlFor="bikes" className="mb-2 block text-sm font-medium">
                        Choose Bikes
                    </label>
                    <div className="relative">
                        <div className="mb-4">
                            <select
                                id="bikes"
                                name="bikes"
                                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue=""
                                multiple
                            >
                                <option value="" disabled>
                                    Select bikes
                                </option>
                                {bikes.map((bike) => (
                                    <option key={bike._id} value={bike._id}>
                                        {bike.model}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div> */}
                <SelectBike bikes={bikes} />

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
                                type="datetime-local"
                                placeholder="Select end time for your booking"
                                className="peer block rounded-md border border-gray-200 py-2 px-5 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-end gap-4">
                    <Link
                        href="/dashboard/bookings"
                        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        Cancel
                    </Link>
                    <Button type="submit">Validate booking</Button>
                </div>
            </div>
        </form>
    );
}
