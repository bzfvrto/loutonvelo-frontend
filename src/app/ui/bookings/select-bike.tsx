"use client";
import { Bike } from "@/app/lib/definitions";
import { UserIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SelectBike({
    bikes,
    name,
    onSelect,
    initialeValue = [],
}: {
    bikes: Bike[];
    name: string;
    onSelect?: (selected: { bikes: string[]; shop: string | null }) => void;
    initialeValue?: string[];
}) {
    const [selected, setSelected] = useState(initialeValue);

    const toggleItemSelection = (bike: Bike) => {
        if (selected.includes(bike._id)) {
            const filteredBikeIds = selected.filter((item) => {
                return item !== bike._id;
            });
            updateSelected(filteredBikeIds);
            if (onSelect) {
                onSelect({ bikes: filteredBikeIds, shop: filteredBikeIds.length > 0 ? bike.shop : null });
            }
        } else {
            updateSelected([...selected, bike._id]);
            if (onSelect) {
                onSelect({ bikes: [...selected, bike._id], shop: bike.shop });
            }
        }
    };

    const updateSelected = (bikeIds: string[]) => {
        setSelected((selected) => bikeIds);
    };

    return (
        <div className="relative">
            <input type="hidden" name={name} value={selected} />
            <div className="mb-4">
                <ul
                    role="list"
                    className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
                >
                    {bikes.map((bike: Bike) => (
                        <li
                            key={bike._id}
                            onClick={() => {
                                // console.log(bike._id);
                                toggleItemSelection(bike);
                            }}
                            className={clsx(
                                "flex flex-col content-between rounded-lg bg-gray-100 dark:bg-gray-600 shadow-md hover:shadow-inner",
                                {
                                    "ring-2 ring-indigo-500 ring-offset-2 ring-offset-gray-100": selected.includes(
                                        bike._id
                                    ),
                                }
                            )}
                        >
                            <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-t-lg shadow-sm bg-gray-100">
                                {bike.pictures.length > 0 && (
                                    <Image
                                        src={bike.pictures[0].url}
                                        alt={`${bike.model} photos`}
                                        height={250}
                                        width={450}
                                        className="pointer-events-none object-cover group-hover:opacity-75"
                                    />
                                )}
                            </div>
                            <div className="p-4">
                                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 dark:text-gray-400">
                                    {bike.model}
                                </p>
                                <div className="flex flex-row w-full justify-between pointer-events-none text-sm font-medium text-gray-500 dark:text-gray-600 mt-1">
                                    <div className="text-sm font-light mx-2 text-gray-500 dark:text-gray-400">
                                        Size: <span>{bike.size}</span>
                                    </div>
                                    <div className="flex flex-row">
                                        {/* <UserIcon className="pointer-events-none left-3 mt-1 h-4 w-4 text-gray-500 dark:text-gray-400 peer-focus:text-gray-900" /> */}
                                        <span className="text-sm font-light mx-2 text-gray-500 dark:text-gray-400">
                                            Seats: {bike.seats}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
