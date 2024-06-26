import { searchAddress } from "@/app/lib/actions";
import { useState } from "react";

export default function Address({
    address,
}: {
    address?: { street: string; postcode: string; city: string; country: string };
}) {
    // const [queryString, setQueryString] = useState("");
    // const handleSearch = (value: string) => {
    //     setQueryString(value);
    //     searchAddress(value);
    // };
    // console.log(address);

    return (
        <div>
            {/* <div className="mb-4">
                <label htmlFor="search" className="mb-2 block text-sm font-medium">
                    Shop Address
                </label>
                <div className="relative mt-2 rounded-md">
                    <div className="relative">
                        <input
                            id="search"
                            // name="website"
                            value={queryString}
                            onChange={(e) => handleSearch(e.target.value)}
                            type="text"
                            placeholder="Search address"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                    </div>
                </div>
            </div> */}

            {/* Street Address */}
            <div className="mb-4">
                <label htmlFor="street" className="mb-2 block text-sm font-medium">
                    Rue et numéro
                </label>
                <div className="relative mt-2 rounded-md">
                    <div className="relative">
                        <input
                            id="street"
                            name="street"
                            defaultValue={address?.street}
                            type="text"
                            placeholder="171 avenue MessFam"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:border-gray-400 bg-gray-50 dark:bg-gray-600 text-gray-900 dark:text-gray-200"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-row justify-between">
                {/* Postal Code */}
                <div className="mb-4">
                    <label htmlFor="postcode" className="mb-2 block text-sm font-medium">
                        Code postal
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="postcode"
                                name="postcode"
                                defaultValue={address?.postcode}
                                type="text"
                                placeholder="75018"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:border-gray-400 bg-gray-50 dark:bg-gray-600 text-gray-900 dark:text-gray-200"
                            />
                        </div>
                    </div>
                </div>

                {/* City */}
                <div className="mb-4">
                    <label htmlFor="city" className="mb-2 block text-sm font-medium">
                        Ville
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="city"
                                name="city"
                                defaultValue={address?.city}
                                type="text"
                                placeholder="Paris"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:border-gray-400 bg-gray-50 dark:bg-gray-600 text-gray-900 dark:text-gray-200"
                            />
                        </div>
                    </div>
                </div>

                {/* Country */}
                <div className="mb-4">
                    <label htmlFor="country" className="mb-2 block text-sm font-medium">
                        Pays
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="country"
                                name="country"
                                defaultValue={address?.country}
                                type="text"
                                placeholder="France"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 dark:placeholder:text-gray-400 dark:border-gray-400 bg-gray-50 dark:bg-gray-600 text-gray-900 dark:text-gray-200"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
