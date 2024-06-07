import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
// import Search from "@/app/ui/search";
import { Bike, Booking } from "@/app/lib/definitions";

export default async function BrandsTable({ bookings }: { bookings: Booking[] }) {
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
            <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>Brands</h1>
            {/* <Search placeholder="Search bookings..." /> */}
            <div className="mt-6 flow-root">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
                            <div className="md:hidden">
                                {bookings?.map((booking) => (
                                    <div key={booking._id} className="mb-2 w-full rounded-md bg-white p-4">
                                        <div className="flex items-center justify-between border-b pb-4">
                                            <div>
                                                <div className="mb-2 flex items-center">
                                                    <div className="flex items-center gap-3">
                                                        {/* <Image
                                                            src={booking.image_url}
                                                            className="rounded-full"
                                                            alt={`${booking.name}'s profile picture`}
                                                            width={28}
                                                            height={28}
                                                        /> */}
                                                        <p>
                                                            {booking.user.username} - {booking.bikes[0].model}
                                                        </p>
                                                    </div>
                                                </div>
                                                <p>
                                                    from : {new Date(booking.startAt).toLocaleString()} to :{" "}
                                                    {new Date(booking.endAt).toLocaleString()}
                                                </p>
                                                <p className="text-sm text-gray-500">{booking.status}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                                    <tr>
                                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                            User Name
                                        </th>
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Period
                                        </th>
                                        <th scope="col" className="px-3 py-5 font-medium">
                                            Amount
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 text-gray-900">
                                    {bookings.map((booking) => (
                                        <tr key={booking._id} className="group">
                                            <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                                                <div className="flex items-center gap-3">
                                                    {/* <Image
                                                        src={booking.image_url}
                                                        className="rounded-full"
                                                        alt={`${booking.name}'s profile picture`}
                                                        width={28}
                                                        height={28}
                                                    /> */}
                                                    <p>
                                                        {booking.user.username} - {booking.bikes[0].model}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                                From : {new Date(booking.startAt).toLocaleString()} To :{" "}
                                                {new Date(booking.endAt).toLocaleString()}
                                            </td>
                                            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                                                {bookingAmount(booking)}
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
