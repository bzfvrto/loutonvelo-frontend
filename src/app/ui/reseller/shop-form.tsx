"use client";

import { activateResellerAccount, createShop } from "@/app/lib/actions";
import { Button } from "@/app/ui/button";
import clsx from "clsx";
import { useEffect, useState, useContext } from "react";
import Address from "./address";
import Link from "next/link";
import { SessionUser, Shop, User } from "@/app/lib/definitions";
import { Session } from "next-auth";
import { ShopContext } from "@/app/contexts/shopContext";
import { useFormState } from "react-dom";

export default function ShopForm({ user }: { user: SessionUser }) {
    const { loading, shop } = useContext(ShopContext);

    if (user.role === "reseller" && loading) {
        return <div></div>;
    }

    // const [userShop, setUserShop] = useState<Shop | null>(null);
    // const [shopName, setShopName] = useState("");
    // const [shopDesc, setShopDesc] = useState("");
    // const [shopWebsite, setShopWebsite] = useState("");
    // const [shopAddress, setShopAddress] = useState({ street: "", city: "", postcode: "", country:  });

    return (
        <div>
            <form action={createShop}>
                {/* Reseller Form */}
                <div className="mt-8">
                    {/* Shop Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="mb-2 block text-sm font-medium">
                            Shop Name
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    defaultValue={shop?.name}
                                    placeholder="Enter bike name"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:border-gray-400 bg-gray-50 dark:bg-gray-600 text-gray-900 dark:text-gray-200"
                                />
                                {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                            </div>
                        </div>
                    </div>

                    {/* Shop Description */}
                    <div className="mb-4">
                        <label htmlFor="description" className="mb-2 block text-sm font-medium">
                            Shop Description
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <textarea
                                    id="description"
                                    name="description"
                                    defaultValue={shop?.description}
                                    placeholder="Enter shop description"
                                    rows={6}
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:border-gray-400 bg-gray-50 dark:bg-gray-600 text-gray-900 dark:text-gray-200"
                                ></textarea>
                                {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                            </div>
                        </div>
                    </div>

                    {/* Shop Website */}
                    <div className="mb-4">
                        <label htmlFor="website" className="mb-2 block text-sm font-medium">
                            Shop Website
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="website"
                                    name="website"
                                    defaultValue={shop?.website}
                                    type="text"
                                    placeholder="Enter shop website"
                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:border-gray-400 bg-gray-50 dark:bg-gray-600 text-gray-900 dark:text-gray-200"
                                />
                                {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                            </div>
                        </div>
                    </div>

                    {/* Shop Address */}
                    <div className="mt-8">
                        <span className="my-2 block text-sm font-medium">Shop Address</span>
                        <Address address={shop?.address} />
                    </div>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                    <Link
                        href="/dashboard"
                        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        Cancel
                    </Link>
                    <Button type="submit">Save Shop</Button>
                </div>
            </form>
        </div>
    );
}
