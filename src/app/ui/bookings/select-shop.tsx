"use client";
import { Shop } from "@/app/lib/definitions";
import { UserIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function SelectShop({ shops, name }: { shops: Shop[]; name: string }) {
    const [selected, setSelected] = useState<string[]>([]);

    const toggleItemSelection = (bikeId: string) => {
        if (selected.includes(bikeId)) {
            setSelected((items) => items.filter((item) => item !== bikeId));
        } else {
            setSelected((items) => [...items, bikeId]);
        }
    };

    return (
        <div className="relative">
            <input type="hidden" name={name} value={selected} />
            <div className="mb-4">
                <ul
                    role="list"
                    className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
                >
                    {shops.map((shop) => (
                        <li
                            key={shop._id}
                            onClick={() => {
                                console.log(shop._id);
                                toggleItemSelection(shop._id);
                            }}
                            className={clsx(
                                "flex flex-col content-between p-4 rounded-lg bg-gray-100 dark:bg-gray-600 shadow-md hover:shadow-inner",
                                {
                                    "ring-2 ring-indigo-500 ring-offset-2 ring-offset-gray-100": selected.includes(
                                        shop._id
                                    ),
                                }
                            )}
                        >
                            <div>
                                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 dark:text-gray-400">
                                    {shop.name}
                                </p>
                                <p className="w-full justify-between pointer-events-none text-sm font-medium text-gray-500 dark:text-gray-600 mt-1">
                                    <div className="text-sm font-light my-1 mx-2 text-gray-500 dark:text-gray-400">
                                        <span className="font-normal mx-2">Address:</span>
                                        <span className="flex flex-row">
                                            {shop.address.city} {shop.address.postcode}
                                        </span>
                                    </div>
                                    <div className="flex flex-row">
                                        <span className="text-sm font-light mx-2 text-gray-500 dark:text-gray-400">
                                            <span className="font-normal mx-2">Description:</span>
                                            {shop.description}
                                        </span>
                                    </div>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
