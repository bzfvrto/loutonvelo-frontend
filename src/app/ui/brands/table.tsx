import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
// import Search from "@/app/ui/search";
import { Brand } from "@/app/lib/definitions";

export default async function BrandsTable({ brands }: { brands: Brand[] }) {
    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>Brands</h1>
            {/* <Search placeholder="Search brands..." /> */}
            <div className="mt-6 flow-root">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
                            <div className="md:hidden">
                                {brands?.map((brand) => (
                                    <div key={brand._id} className="mb-2 w-full rounded-md bg-white p-4">
                                        <div className="flex items-center justify-between border-b pb-4">
                                            <div>
                                                <div className="mb-2 flex items-center">
                                                    <div className="flex items-center gap-3">
                                                        {/* <Image
                                                            src={brand.image_url}
                                                            className="rounded-full"
                                                            alt={`${brand.name}'s profile picture`}
                                                            width={28}
                                                            height={28}
                                                        /> */}
                                                        <p>{brand.name}</p>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-500">{brand.website}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                                    <tr>
                                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                            Nom
                                        </th>
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Description
                                        </th>
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Website
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 text-gray-900">
                                    {brands.map((brand) => (
                                        <tr key={brand._id} className="group">
                                            <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                                                <div className="flex items-center gap-3">
                                                    {/* <Image
                                                        src={brand.image_url}
                                                        className="rounded-full"
                                                        alt={`${brand.name}'s profile picture`}
                                                        width={28}
                                                        height={28}
                                                    /> */}
                                                    <p>{brand.name}</p>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                                {brand.description}
                                            </td>
                                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                                {brand.website ? (
                                                    <a href={brand.website} target="_blank" rel={brand.name}>
                                                        {brand.website}
                                                    </a>
                                                ) : (
                                                    "n/a"
                                                )}
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
