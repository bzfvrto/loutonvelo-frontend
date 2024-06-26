"use client";

import { Bike, Brand, Shop } from "@/app/lib/definitions";
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
import { updateBike } from "@/app/lib/actions";
import { useRef, useState, useContext, Suspense, useEffect } from "react";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import { ShopContext } from "@/app/contexts/shopContext";
import { YearInput } from "../inputs/year-input";

export default function Form({ bike, brands }: { bike: Bike; brands: Brand[] }) {
    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>();
    const { data } = useFormStatus();
    console.log(data);
    const { loading, shop } = useContext(ShopContext);
    console.log("updating", bike);

    // const [userShop, setUserShop] = useState<Shop>();
    // useEffect(() => {
    //     console.log("in use effect ", shop);

    //     if (shop !== null) {
    //         setUserShop(shop);
    //         console.log(shop);
    //     }
    // }, [shop]);

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

    if (loading || !shop || shop === null) {
        // throw new Error("No Shop defined");
        return <div></div>;
    }

    const updateBikeWithId = updateBike.bind(null, bike._id);

    return (
        <form action={updateBikeWithId}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <input type="hidden" name="shop" value={shop._id} />
                {/* Bike Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Nom du vélo
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                defaultValue={bike.name}
                                placeholder="Saisissez un nom pour le vélo"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="brand" className="mb-2 block text-sm font-medium">
                        Marque du vélo
                    </label>
                    <div className="relative">
                        <div className="mb-4">
                            <select
                                defaultValue={bike.brand}
                                id="brand"
                                name="brandId"
                                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            >
                                <option value="" disabled>
                                    Sélectionner une marque
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
                        Modèle
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="model"
                                name="model"
                                type="text"
                                defaultValue={bike.model}
                                placeholder="Saisissez le modèle du vélo"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                        </div>
                    </div>
                </div>

                {/* Floor price */}
                <div className="mb-4">
                    <label htmlFor="floorPrice" className="mb-2 block text-sm font-medium">
                        Prix de base
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="floorPrice"
                                name="floorPrice"
                                type="number"
                                step="0.01"
                                defaultValue={bike.floorPrice}
                                placeholder="Saisissez un montant minimum"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <CurrencyEuroIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                {/* Price per hour */}
                <div className="mb-4">
                    <label htmlFor="pricePerHour" className="mb-2 block text-sm font-medium">
                        Tarif horaire
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="pricePerHour"
                                name="pricePerHour"
                                type="number"
                                step="0.01"
                                defaultValue={bike.pricePerHour}
                                placeholder="Saisissez le prix à l'heure"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <CurrencyEuroIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                {/* Bike seats */}
                <div className="mt-2 mb-4">
                    <label htmlFor="pricePerHour" className="mb-2 block text-sm font-medium">
                        Nombre de place
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="seats"
                                name="seats"
                                type="number"
                                step="1"
                                defaultValue={bike.seats}
                                placeholder="Saisissez le nombre de place"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            />
                            <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                {/* Bike color */}
                <div className="mb-4">
                    <label htmlFor="color" className="mb-2 block text-sm font-medium">
                        Couleur
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="color"
                                name="color"
                                type="color"
                                defaultValue={bike.color}
                                className="peer min-h-8 block rounded-md border border-gray-200 outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Bike date */}
                <div className="mb-4">
                    <label htmlFor="year" className="mb-2 block text-sm font-medium">
                        Année de fabrication
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <YearInput
                                id="year"
                                name="year"
                                type="date"
                                defaultValue={new Date(bike.year).getFullYear()}
                                className="bg-gray-50 mt-2 block rounded-md border-0 py-4 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {/* <input
                                id="year"
                                name="year"
                                type="date"
                                // placeholder="Bike conception date"
                                className="peer block rounded-md border border-gray-200 py-4 px-4 text-sm outline-2 placeholder:text-gray-500"
                            /> */}
                        </div>
                    </div>
                </div>

                {/* Bike Size */}
                <div className="mb-4">
                    <label htmlFor="year" className="mb-2 block text-sm font-medium">
                        Taille
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="size"
                                name="size"
                                type="text"
                                defaultValue={bike.size}
                                placeholder="Ex S, M, L or 45, 54, 58"
                                className="peer block rounded-md border border-gray-200 py-4 px-4 text-sm outline-2 placeholder:text-gray-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Bike availability */}
                <div className="mb-4">
                    <fieldset>
                        <legend className="mb-2 block text-sm font-medium">Status du vélo</legend>
                        <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                            <div className="flex gap-4">
                                <div className="flex items-center">
                                    <input
                                        id="available"
                                        name="availability"
                                        type="radio"
                                        value="available"
                                        defaultChecked={bike.availability === "available"}
                                        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    />
                                    <label
                                        htmlFor="available"
                                        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                                    >
                                        Disponible <CheckIcon className="h-4 w-4" />
                                    </label>
                                </div>

                                <div className="flex items-center">
                                    <input
                                        id="unavailable"
                                        name="availability"
                                        type="radio"
                                        value="unavailable"
                                        defaultChecked={bike.availability === "unavailable"}
                                        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    />
                                    <label
                                        htmlFor="unavailable"
                                        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-medium text-white"
                                    >
                                        Indisponible <XMarkIcon className="h-4 w-4" />
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="underReparation"
                                        name="availability"
                                        type="radio"
                                        value="under_reparation"
                                        defaultChecked={bike.availability === "under_reparation"}
                                        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    />
                                    <label
                                        htmlFor="underReparation"
                                        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                    >
                                        En réparation <ClockIcon className="h-4 w-4" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>

                {/* Bike Decription */}
                <div className="mb-4">
                    <label htmlFor="description" className="mb-2 block text-sm font-medium">
                        Description
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <textarea
                                id="description"
                                name="description"
                                defaultValue={bike.description}
                                placeholder="Saisissez une description"
                                rows={6}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            ></textarea>
                            {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                        </div>
                    </div>
                </div>

                {/* Bike Pictures */}
                <div className="mb-4">
                    <label htmlFor="description" className="mb-2 block text-sm font-medium">
                        Photographies
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
                            Ajouter des photos
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
                        Annuler
                    </Link>
                    <Button type="submit">Mettre à jour le vélo</Button>
                </div>
            </div>
        </form>
    );
}
