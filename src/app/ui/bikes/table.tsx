import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
// import Search from "@/app/ui/search";
import { Bike } from "@/app/lib/definitions";
import { UpdateBike } from "./buttons";

export default async function BrandsTable({ bikes }: { bikes: Bike[] }) {
    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>Bikes</h1>
            {/* <Search placeholder="Search bikes..." /> */}
            <div className="mt-6 flow-root">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
                            <div className="md:hidden">
                                {bikes?.map((bike) => (
                                    <div key={bike._id} className="mb-2 w-full rounded-md bg-white p-4">
                                        <div className="flex items-center justify-between border-b pb-4">
                                            <div>
                                                <div className="mb-2 flex items-center">
                                                    <div className="flex items-center gap-3">
                                                        {/* <Image
                                                            src={bike.image_url}
                                                            className="rounded-full"
                                                            alt={`${bike.name}'s profile picture`}
                                                            width={28}
                                                            height={28}
                                                        /> */}
                                                        <p>{bike.name}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500">{bike.model}</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-end gap-2">
                                                <UpdateBike id={bike._id} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                                    <tr>
                                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                            Name
                                        </th>
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Model
                                        </th>
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Description
                                        </th>
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Availability
                                        </th>
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Details
                                        </th>
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Floor Price
                                        </th>
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Price per hour
                                        </th>
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 text-gray-900">
                                    {bikes.map((bike) => (
                                        <tr key={bike._id} className="group">
                                            <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                                                <div className="flex items-center gap-3">
                                                    {/* <Image
                                                        src={bike.image_url}
                                                        className="rounded-full"
                                                        alt={`${bike.name}'s profile picture`}
                                                        width={28}
                                                        height={28}
                                                    /> */}
                                                    <p>{bike.name}</p>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                                {bike.model}
                                            </td>
                                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                                {bike.description}
                                            </td>
                                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                                {bike.availability}
                                            </td>
                                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                                <ul>
                                                    <li className="mb-1">
                                                        <span className="font-medium">Year : </span>{" "}
                                                        {new Date(bike.year).toLocaleDateString()}
                                                    </li>
                                                    <li>
                                                        <span className="font-medium">Color : </span>{" "}
                                                        <span
                                                            style={{
                                                                backgroundColor: bike.color,
                                                                padding: 5,
                                                                borderRadius: 5,
                                                            }}
                                                        >
                                                            {bike.color}
                                                        </span>
                                                    </li>
                                                </ul>
                                            </td>
                                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                                {bike.floorPrice}
                                            </td>
                                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                                {bike.pricePerHour}
                                            </td>
                                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                                <div className="flex justify-end gap-3">
                                                    <UpdateBike id={bike._id} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
