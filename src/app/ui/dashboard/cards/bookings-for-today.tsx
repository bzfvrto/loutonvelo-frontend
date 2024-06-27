import { fetchBookingForShopByDate } from "@/app/lib/actions";
import { bookingAmount } from "@/app/modules/calculatePrice";
import { AtSymbolIcon, ClockIcon, CurrencyEuroIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";

export default async function BookingForToday() {
    const fetchedBookings = await fetchBookingForShopByDate(new Date());
    const bookings = fetchedBookings?.bookings ?? [];

    const totalAmount = () => {
        return bookings
            .map((booking) => bookingAmount(booking))
            .reduce((a, b) => a + b)
            .toFixed(2);
    };
    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:px-6">
                <h4 className="text-base font-semibold leading-6 text-gray-900">Booking du jour</h4>
            </div>
            <div className="px-4 py-5 sm:p-6 bg-gray-50">
                <ul role="list" className="divide-y divide-gray-100">
                    {bookings.map((booking) => (
                        <li
                            key={booking._id}
                            className={clsx("flex items-center justify-between gap-x-6 py-5", {
                                "opacity-25": booking.status === "finished",
                            })}
                        >
                            <div className="min-w-0">
                                <div className="flex items-start gap-x-3">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">
                                        {booking.user.firstName} {booking.user.lastName}
                                    </p>
                                    <p
                                        className={clsx(
                                            "mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
                                        )}
                                    >
                                        {booking.status}
                                    </p>
                                </div>
                                <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                                    <CurrencyEuroIcon className="h-6 w-5 text-gray-600" aria-hidden="true" />
                                    <p className="text-gray-600">{bookingAmount(booking)}</p>
                                    <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                                        <circle cx={1} cy={1} r={1} />
                                    </svg>
                                    <ClockIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                                    <p className="whitespace-nowrap">
                                        {/* A partir de{" "} */}
                                        <time dateTime={new Date(booking.startAt).toLocaleString()}>
                                            {new Date(booking.startAt).toLocaleTimeString()}
                                        </time>
                                    </p>
                                </div>
                                <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                                    <AtSymbolIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                                    <a href={`mailto:${booking.user.email}`} className="truncate">
                                        {/* Mail: */}
                                        {booking.user.email}
                                    </a>
                                </div>
                            </div>
                            {(booking.status === "pending" || booking.status === "started") && (
                                <div className="flex flex-none items-center gap-x-4">
                                    <Link
                                        href={`/dashboard/bookings/${booking._id}/activation`}
                                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
                                    >
                                        {booking.status === "pending" ? "Débuter le booking" : "Clore le booking"}
                                        <span className="sr-only">, {booking._id}</span>
                                    </Link>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-gray-100 px-4 py-4 sm:px-6 text-gray-600 dark:text-gray-400">
                Montant estimé pour la journée :{" "}
                <span className="text-gray-900 dark:text-gray-200 font-bold">{totalAmount()}</span>
            </div>
        </div>
    );
}
