"use client";

import { Brand } from "@/app/lib/definitions";
import Link from "next/link";
import {
    CheckIcon,
    ClockIcon,
    CurrencyDollarIcon,
    CurrencyEuroIcon,
    PlusCircleIcon,
    UserCircleIcon,
    UserIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import { createBike } from "@/app/lib/actions";
import { useRef, useState } from "react";
import Image from "next/image";
import { useFormStatus } from "react-dom";

export default function Form({ brands }: { brands: Brand[] }) {
    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>();
    const { data } = useFormStatus();
    console.log(data);

    const handleFileBtnClick = () => {
        if (hiddenFileInput.current) {
            hiddenFileInput.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const imgs = Array.from(event.target.files);
            setFiles((files) => {
                if (files) {
                    return [...files, ...imgs];
                }
                return imgs;
            });
        }
    };

    const removeImage = (photo: File) => {
        setFiles((files) => {
            if (files) {
                return files.filter((file) => file.name !== photo.name);
            }
        });
    };

    return (
        <form action={createBike}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
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

                <div className="mb-4">
                    <label htmlFor="brand" className="mb-2 block text-sm font-medium">
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
                                    <option key={brand._id} value={brand._id}>
                                        {brand.name}
                                    </option>
                                ))}
                            </select>
                            {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
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
                    <label htmlFor="floorPrice" className="mb-2 block text-sm font-medium">
                        Floor Price
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="floorPrice"
                                name="floorPrice"
                                type="number"
                                step="0.01"
                                defaultValue={0}
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
                                defaultValue={1}
                                placeholder="Enter seats"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                {/* Bike color */}
                <div className="mb-4">
                    <label htmlFor="color" className="mb-2 block text-sm font-medium">
                        Color
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="color"
                                name="color"
                                type="color"
                                placeholder="Bike color"
                                className="peer min-h-8 block rounded-md border border-gray-200 outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Bike date */}
                <div className="mb-4">
                    <label htmlFor="year" className="mb-2 block text-sm font-medium">
                        Date
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="year"
                                name="year"
                                type="month"
                                placeholder="Bike conception date"
                                className="peer block rounded-md border border-gray-200 py-4 px-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Bike availability */}
                <div className="mb-4">
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
                                        htmlFor="underReparation"
                                        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                    >
                                        Under Reparation <ClockIcon className="h-4 w-4" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>

                {/* Bike Decription */}
                <div className="mb-4">
                    <label htmlFor="description" className="mb-2 block text-sm font-medium">
                        Bike Description
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Enter bike description"
                                rows={6}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            ></textarea>
                            {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                        </div>
                    </div>
                </div>

                {/* Bike Decription */}
                <div className="mb-4">
                    <label htmlFor="description" className="mb-2 block text-sm font-medium">
                        Bike Pictures
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <input
                            type="file"
                            name="pictures"
                            multiple
                            ref={hiddenFileInput}
                            onChange={handleFileChange}
                            accept="image/*"
                            style={{ display: "none" }}
                        />
                        <button
                            className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150"
                            type="button"
                            onClick={handleFileBtnClick}
                            aria-label="file upload"
                        >
                            Upload file
                        </button>
                        <div className="relative">
                            {files && files.length > 0 && (
                                <div className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500">
                                    <ul
                                        role="list"
                                        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
                                    >
                                        {files &&
                                            files.length > 0 &&
                                            files.map((photo, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="relative focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
                                                    >
                                                        <Image
                                                            key={index}
                                                            alt={"bike photos"}
                                                            src={URL.createObjectURL(photo)}
                                                            // className="dark:invert"
                                                            width={100}
                                                            height={150}
                                                            priority
                                                            onClick={() => removeImage(photo)}
                                                        />
                                                    </li>
                                                );
                                            })}
                                    </ul>
                                </div>
                            )}
                            {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
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
                    <Button type="submit">Create Bike</Button>
                </div>
            </div>
        </form>
    );
}
