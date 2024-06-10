"use client";

import { activateResellerAccount, createShop } from "@/app/lib/actions";
import { Button } from "@/app/ui/button";
import clsx from "clsx";
import { useState } from "react";
import Address from "./address";
import Link from "next/link";
import { SessionUser, User } from "@/app/lib/definitions";
import { Session } from "next-auth";

export default function ResellerForm({ user }: { user: SessionUser }) {
    const [isReseller, setIsReseller] = useState(user.role === "reseller");
    const toggleResellerAccount = () => {
        setIsReseller((current) => !current);
    };
    // const activateReseller = async () => {
    //     console.log("activating");
    //     const updatedUser = await activateResellerAccount();
    //     console.log("user updated", updatedUser);
    // };
    return (
        <div>
            <form action={createShop}>
                {/* Toggle reseller acount */}
                <div className="flex items-center justify-between">
                    <span className="flex flex-grow flex-col">
                        <label className="text-sm font-medium leading-6 text-gray-900 dark:text-gray-400">
                            Activate reseller account
                        </label>
                        <p className="text-sm text-gray-500">Activate this options if you some bike to rent.</p>
                    </span>
                    <button
                        type="button"
                        className={clsx(
                            "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent dark:border-gray-800 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2",
                            {
                                "bg-gray-200 dark:bg-gray-600": !isReseller,
                                "bg-green-100 dark:bg-green-600": isReseller,
                            }
                        )}
                        role="switch"
                        aria-checked="false"
                        aria-labelledby="availability-label"
                        aria-describedby="availability-description"
                        onClick={toggleResellerAccount}
                    >
                        <span
                            aria-hidden="true"
                            className={clsx(
                                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-gray-50 shadow ring-0 transition duration-200 ease-in-out",
                                { "translate-x-0": !isReseller, "translate-x-5": isReseller }
                            )}
                        >
                            <span
                                className={clsx(
                                    "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity",
                                    {
                                        "opacity-0 duration-100 ease-out": isReseller,
                                        "opacity-100 duration-200 ease-in": !isReseller,
                                    }
                                )}
                                aria-hidden="true"
                            >
                                <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                                    <path
                                        d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <span
                                className={clsx(
                                    "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity",
                                    {
                                        "opacity-100 duration-200 ease-in": isReseller,
                                        "opacity-0 duration-100 ease-out": !isReseller,
                                    }
                                )}
                                aria-hidden="true"
                            >
                                <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
                                    <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                                </svg>
                            </span>
                        </span>
                    </button>
                </div>

                {/* Reseller Form */}
                {isReseller && (
                    <>
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
                                <Address />
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
                    </>
                )}
            </form>
        </div>
    );
}
