import { BikePopulated } from "@/app/lib/definitions";
import Image from "next/image";

export default function LastBikes({ bikes, className }: { bikes: BikePopulated[]; className?: string }) {
    return (
        <section aria-labelledby="collection-heading" className={`${className}`}>
            <div className="border-b border-gray-200 pb-5 mb-4 px-8 mt-12 bg-gradient-to-b from-transparent to-white">
                <h3 className="text-base font-semibold leading-6 text-gray-900 pt-2">Last Bikes added</h3>
            </div>
            <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
                {bikes.map((bike) => (
                    <div
                        key={bike._id}
                        className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-h-5 sm:aspect-w-4 sm:h-auto"
                    >
                        <div>
                            <div aria-hidden="true" className="inset-0 overflow-hidden rounded-lg">
                                <div className="overflow-hidden group-hover:opacity-75">
                                    {bike.pictures[0].url && (
                                        <Image
                                            width={450}
                                            height={450}
                                            src={bike.pictures[0].url}
                                            alt={`${bike.model} photography`}
                                            className="object-cover object-center"
                                        />
                                    )}
                                </div>
                                <div className="absolute rounded-lg inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                            </div>
                            <div className="absolute inset-0 flex items-end rounded-lg p-6">
                                <div>
                                    <h3 className="mt-1 font-semibold text-white">
                                        <a href="#">
                                            <span className="absolute inset-0" />
                                            {bike.model}
                                        </a>
                                    </h3>

                                    <div className="text-sm text-white">
                                        <div>{bike.brand.name}</div>
                                        <div>Available at: {bike.shop.name}</div>
                                        <p className="text-gray-300 italic">{bike.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="border-t border-gray-200 py-8 px-8 mt-4 bg-gradient-to-b from-white"></div>
        </section>
    );
}
