"use client";
// import { Brand } from "@/app/lib/definitions";
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
import { createBrand } from "@/app/lib/actions";
import { useContext } from "react";
import { ShopContext } from "@/app/contexts/shopContext";

export default function Form() {
    const { loading, shop } = useContext(ShopContext);

    if (loading || !shop || shop === null) {
        return <div></div>;
    }

    return (
        <form action={createBrand}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4">
                    <input type="hidden" name="shop" value={shop._id} />
                    {/* Brand Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="mb-2 block text-sm font-medium">
                            Nom de la marque
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Saisissez le nom de la marque du vélo"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                />
                                {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                            </div>
                        </div>
                    </div>

                    {/* Brand Description */}
                    <div className="mb-4">
                        <label htmlFor="description" className="mb-2 block text-sm font-medium">
                            Description
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="description"
                                    name="description"
                                    type="text"
                                    placeholder="Saisissez une description de la marque"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                />
                                {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                            </div>
                        </div>
                    </div>

                    {/* Brand Website */}
                    <div className="mb-4">
                        <label htmlFor="website" className="mb-2 block text-sm font-medium">
                            Site web
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="website"
                                    name="website"
                                    type="text"
                                    placeholder="Saisissez le site internet"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                />
                                <GlobeAltIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                    <Link
                        href="/dashboard/brands"
                        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        Annuler
                    </Link>
                    <Button type="submit">Ajouter</Button>
                </div>
            </div>
        </form>
    );
}
