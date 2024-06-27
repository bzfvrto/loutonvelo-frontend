import { Bike, Booking } from "@/app/lib/definitions";
import { CalendarDaysIcon, CreditCardIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import ActivateBooking from "./activate-booking";
import clsx from "clsx";
import { CloseBooking } from "./close-booking";

export default function BookingDetails({
    booking,
    onBookingChange,
}: {
    booking: Booking;
    onBookingChange: () => void;
}) {
    // Following lines must be extracted in module
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
        <div className="rounded-md bg-gray-50 dark:bg-gray-800 p-4 md:p-6">
            <div className="lg:col-start-3 lg:row-end-1">
                <h2 className="sr-only">Détails</h2>
                <div className="rounded-lg bg-gray-50 dark:bg-gray-600 shadow-sm ring-1 ring-gray-900/5">
                    <dl className="flex flex-wrap">
                        <div className="flex-auto pl-6 pt-6">
                            <dt className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">
                                Montant
                            </dt>
                            <dd className="mt-1 text-base font-semibold leading-6 text-gray-900 dark:text-gray-300">
                                {bookingAmount(booking)}
                            </dd>
                        </div>
                        <div className="flex-none self-end px-6 pt-4">
                            <dt className="sr-only">Status</dt>
                            <dd
                                className={clsx(
                                    "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset",
                                    {
                                        "bg-green-50 text-green-700 ring-green-600/20":
                                            booking.status === "paid" || booking.status === "started",
                                        "bg-slate-50 text-slate-700 ring-slate-600/20":
                                            booking.status === "pending" || booking.status === "rejected",
                                        "bg-red-50 text-red-700 ring-red-600/20":
                                            booking.status === "due" || booking.status === "conflict",
                                    }
                                )}
                            >
                                {booking.status}
                            </dd>
                        </div>
                        <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-100/45 px-6 pt-6">
                            <dt className="flex-none">
                                <span className="sr-only">Client</span>
                                <UserCircleIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                            </dt>
                            <dd className="text-sm font-medium leading-6 text-gray-500">
                                {booking.user.firstName} {booking.user.lastName}
                            </dd>
                        </div>
                        <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                            <dt className="flex-none">
                                <span className="sr-only">Jour et heure de début</span>
                                <CalendarDaysIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                            </dt>
                            <dd className="text-sm leading-6 text-gray-500">
                                <time dateTime={new Date(booking.startAt).toLocaleDateString()}>
                                    {new Date(booking.startAt).toLocaleDateString()}
                                </time>
                            </dd>
                        </div>
                        <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                            <dt className="flex-none">
                                <span className="sr-only">Status</span>
                                <CreditCardIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                            </dt>
                            <dd className="text-sm leading-6 text-gray-500">
                                {booking.status === "pending" || booking.status === "started" ? "A régler" : "Payé"}
                            </dd>
                        </div>
                    </dl>
                    <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
                        <ActivateBooking booking={booking} onActivation={onBookingChange} />
                    </div>
                    {booking.status === "started" && (
                        <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
                            <CloseBooking id={booking._id} onClosingDone={onBookingChange} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
