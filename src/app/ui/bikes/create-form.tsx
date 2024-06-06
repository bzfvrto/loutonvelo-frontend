import { Brand } from "@/app/lib/definitions";
import Link from "next/link";
import {
    CheckIcon,
    ClockIcon,
    CurrencyDollarIcon,
    CurrencyEuroIcon,
    UserCircleIcon,
    UserIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import { createBike } from "@/app/lib/actions";

export default function Form({ brands }: { brands: Brand[] }) {
    return (
        <form action={createBike}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4">
                    <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                        Choose brands
                    </label>
                    <div className="relative">
                        <div className="mb-4">
                            <select
                                id="brand"
                                name="brandId"
                                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select a brand
                                </option>
                                {brands.map((brand) => (
                                    <option key={brand.id} value={brand.id}>
                                        {brand.name}
                                    </option>
                                ))}
                            </select>
                            {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
                        </div>
                    </div>
                    {/* Bike Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="mb-2 block text-sm font-medium">
                            Bike Name
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter bike name"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                />
                                {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                            </div>
                        </div>
                    </div>

                    {/* Bike Model */}
                    <div className="mb-4">
                        <label htmlFor="model" className="mb-2 block text-sm font-medium">
                            Bike Model
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="model"
                                    name="model"
                                    type="text"
                                    placeholder="Enter bike model"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                />
                                {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                            </div>
                        </div>
                    </div>

                    {/* Floor price */}
                    <div className="mb-4">
                        <label htmlFor="pricePerHour" className="mb-2 block text-sm font-medium">
                            Floor Price
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="pricePerHour"
                                    name="pricePerHour"
                                    type="number"
                                    step="0.01"
                                    placeholder="Enter amount for floor price"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                />
                                <CurrencyEuroIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                    </div>

                    {/* Price per hour */}
                    <div className="mb-4">
                        <label htmlFor="pricePerHour" className="mb-2 block text-sm font-medium">
                            Price per hour
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="pricePerHour"
                                    name="pricePerHour"
                                    type="number"
                                    step="0.01"
                                    placeholder="Enter amount"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                />
                                <CurrencyEuroIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                    </div>

                    {/* Bike availability */}
                    <fieldset>
                        <legend className="mb-2 block text-sm font-medium">Bike current status</legend>
                        <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                            <div className="flex gap-4">
                                <div className="flex items-center">
                                    <input
                                        id="available"
                                        name="availability"
                                        type="radio"
                                        value="available"
                                        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    />
                                    <label
                                        htmlFor="available"
                                        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                                    >
                                        Available <CheckIcon className="h-4 w-4" />
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="unavailable"
                                        name="availability"
                                        type="radio"
                                        value="unavailable"
                                        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    />
                                    <label
                                        htmlFor="unavailable"
                                        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-medium text-white"
                                    >
                                        Unavailable <XMarkIcon className="h-4 w-4" />
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="underReparation"
                                        name="availability"
                                        type="radio"
                                        value="under_reparation"
                                        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    />
                                    <label
                                        htmlFor="under_reparation"
                                        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                    >
                                        Under Reparation <ClockIcon className="h-4 w-4" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    {/* Bike seats */}
                    <div className="mt-2 mb-4">
                        <label htmlFor="pricePerHour" className="mb-2 block text-sm font-medium">
                            Seats
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="seats"
                                    name="seats"
                                    type="number"
                                    step="1"
                                    placeholder="Enter seats"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                />
                                <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                    <Link
                        href="/dashboard/bikes"
                        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        Cancel
                    </Link>
                    <Button type="submit">Create Invoice</Button>
                </div>
            </div>
        </form>
    );
}
