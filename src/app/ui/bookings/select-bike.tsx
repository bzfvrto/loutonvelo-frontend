"use client";
import { Bike } from "@/app/lib/definitions";
import { UserIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function SelectBike({ bikes, name }: { bikes: Bike[]; name: string }) {
    const [selected, setSelected] = useState<string[]>([]);

    console.log(selected);

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
                {/* <select
                        id="bikes"
                        name="bikes"
                        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        defaultValue={[]}
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
                    </select> */}
                <ul
                    role="list"
                    className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
                >
                    {bikes.map((bike) => (
                        <li
                            key={bike._id}
                            onClick={() => {
                                console.log(bike._id);
                                toggleItemSelection(bike._id);
                            }}
                            className={clsx("flex flex-col content-between", {
                                "ring-2 ring-indigo-500 ring-offset-2 ring-offset-gray-100": selected.includes(
                                    bike._id
                                ),
                            })}
                        >
                            <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 mb-4">
                                {bike.pictures.length > 0 && (
                                    <Image
                                        src={bike.pictures[0].url}
                                        alt={`${bike.model} photos`}
                                        height={150}
                                        width={250}
                                        className="pointer-events-none object-cover group-hover:opacity-75"
                                    />
                                )}
                            </div>
                            <div>
                                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 dark:text-gray-400">
                                    {bike.model}
                                </p>
                                <p className="flex flex-row pointer-events-none text-sm font-medium text-gray-500 dark:text-gray-600">
                                    <UserIcon className="pointer-events-none left-3 h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900" />
                                    <span className="text-sm font-light mx-2">x {bike.seats}</span>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
