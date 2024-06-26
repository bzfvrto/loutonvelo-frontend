import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
// import Search from "@/app/ui/search";
import { Bike, Booking } from "@/app/lib/definitions";
import { ShowReservation } from "./buttons";

export default async function ReservationsTable({ bookings }: { bookings: Booking[] }) {
    // console.log(bookings[0].bikes);
    const bookingAmount = (booking: Booking) => {
        const duration = bookingDuration(new Date(booking.startAt).getTime(), new Date(booking.endAt).getTime());
        return booking.bikes.reduce((acc, bike) => {
            return acc + pricePerBikeBooked(bike, duration);
        }, 0);
    };

    const bookingDuration = (startAtInMs: number, endAtInMs: number): number => {
        const diffInMs = endAtInMs - startAtInMs;
        return diffInMs / 1000 / 60;
    };

    const pricePerBikeBooked = (bike: Bike, duration: number): number => {
        const pricePerMin = bike.pricePerHour / 60;
        return bike.floorPrice + pricePerMin * duration;
    };

    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>Toutes mes réservations</h1>
            {/* <Search placeholder="Search bookings..." /> */}
            <div className="mt-6 flow-root">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden rounded-md bg-gray-50 dark:bg-gray-800 p-2 md:pt-0">
                            <div className="md:hidden">
                                {bookings?.map((booking) => (
                                    <div
                                        key={booking._id}
                                        className="mb-2 w-full rounded-md bg-white dark:bg-gray-900 p-4"
                                    >
                                        <div className="flex items-center justify-between w-full pb-4">
                                            <div className="mb-2 flex items-center w-full">
                                                <div className="flex w-full space-x-3">
                                                    <Image
                                                        src={booking.bikes[0].pictures[0].url}
                                                        className="rounded-lg flex-shrink-0"
                                                        alt={`${booking.bikes[0].model} picture`}
                                                        width={64}
                                                        height={64}
                                                    />
                                                    <div className="flex flex-col flex-1">
                                                        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                                                            {booking.user.firstName} {booking.user.lastName} -{" "}
                                                            {booking.bikes[0].model}
                                                        </h4>
                                                        <p className="text-sm text-gray-500">
                                                            At : {new Date(booking.startAt).toLocaleString()}
                                                        </p>
                                                    </div>
                                                    <p className="text-sm text-gray-500">{booking.status}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <table className="hidden min-w-full rounded-md text-gray-900 dark:text-gray-50 md:table">
                                <thead className="rounded-md bg-gray-50 dark:bg-gray-800 text-left text-sm font-normal">
                                    <tr>
                                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                            Nom de l&apos;utilisateur
                                        </th>
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Période
                                        </th>
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Montant
                                        </th>
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 dark:divide-gray-600 text-gray-900 dark:text-gray-200">
                                    {bookings.map((booking) => (
                                        <tr key={booking._id} className="group">
                                            <td className="whitespace-nowrap bg-white dark:bg-gray-900 py-5 pl-4 pr-3 text-sm text-black dark:text-white group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                                                <div className="flex items-center gap-3">
                                                    {/* <Image
                                                        src={booking.image_url}
                                                        className="rounded-full"
                                                        alt={`${booking.name}'s profile picture`}
                                                        width={28}
                                                        height={28}
                                                    /> */}
                                                    <p>
                                                        {booking.user.firstName} {booking.user.lastName} -{" "}
                                                        {booking.bikes[0].model}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap bg-white dark:bg-gray-900 px-4 py-5 text-sm">
                                                De : {new Date(booking.startAt).toLocaleString()} a :{" "}
                                                {new Date(booking.endAt).toLocaleString()}
                                            </td>
                                            <td className="whitespace-nowrap bg-white dark:bg-gray-900 px-4 py-5 text-sm">
                                                {bookingAmount(booking)}
                                            </td>
                                            <td className="whitespace-nowrap bg-white dark:bg-gray-900 px-4 py-5 text-sm">
                                                <div className="flex justify-end gap-3">
                                                    <ShowReservation id={booking._id} />
                                                </div>
                                            </td>
                                            {/* <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                                {booking.website ? (
                                                    <a href={booking.website} target="_blank" rel={booking.name}>
                                                        {booking.website}
                                                    </a>
                                                ) : (
                                                    "n/a"
                                                )}
                                            </td> */}
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
