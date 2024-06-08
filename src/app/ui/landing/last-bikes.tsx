import { Bike } from "@/app/lib/definitions";
import Image from "next/image";

export default function LastBikes({ bikes }: { bikes: Bike[] }) {
    return (
        <section aria-labelledby="collection-heading" className="relative -mt-96 sm:mt-0">
            <h2 id="collection-heading" className="sr-only">
                Collections
            </h2>
            <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
                {bikes.map((bike) => (
                    <div
                        key={bike._id}
                        className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-h-5 sm:aspect-w-4 sm:h-auto"
                    >
                        <div>
                            <div aria-hidden="true" className="inset-0 overflow-hidden rounded-lg">
                                <div className="overflow-hidden group-hover:opacity-75">
                                    <Image
                                        width={450}
                                        height={450}
                                        src={bike.pictures[0].url}
                                        alt={`${bike.model} photography`}
                                        className="object-cover object-center"
                                    />
                                </div>
                                <div className="absolute rounded-lg inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                            </div>
                            <div className="absolute inset-0 flex items-end rounded-lg p-6">
                                <div>
                                    <p aria-hidden="true" className="text-sm text-white">
                                        Book bike
                                    </p>
                                    <h3 className="mt-1 font-semibold text-white">
                                        <a href="#">
                                            <span className="absolute inset-0" />
                                            {bike.model}
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
