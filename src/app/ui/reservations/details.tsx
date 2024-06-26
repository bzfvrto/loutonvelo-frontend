import { Bike, Booking } from "@/app/lib/definitions";
import { CalendarDaysIcon, CreditCardIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function ReservationDetails({ reservation }: { reservation: Booking }) {
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
                <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
                    <dl className="flex flex-wrap">
                        <div className="flex-auto pl-6 pt-6">
                            <dt className="text-sm font-semibold leading-6 text-gray-900">Montant</dt>
                            <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
                                {bookingAmount(reservation)}
                            </dd>
                        </div>
                        <div className="flex-none self-end px-6 pt-4">
                            <dt className="sr-only">Status</dt>
                            <dd className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                {reservation.status}
                            </dd>
                        </div>
                        <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                            <dt className="flex-none">
                                <span className="sr-only">Shop</span>
                                <UserCircleIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                            </dt>
                            <dd className="text-sm font-medium leading-6 text-gray-900">{reservation.shop.name}</dd>
                        </div>
                        <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                            <dt className="flex-none">
                                <span className="sr-only">Jour et heure de début</span>
                                <CalendarDaysIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                            </dt>
                            <dd className="text-sm leading-6 text-gray-500">
                                <time dateTime={new Date(reservation.startAt).toLocaleDateString()}>
                                    {new Date(reservation.startAt).toLocaleDateString()}
                                </time>
                            </dd>
                        </div>
                        <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                            <dt className="flex-none">
                                <span className="sr-only">Status</span>
                                <CreditCardIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                            </dt>
                            <dd className="text-sm leading-6 text-gray-500">A régler</dd>
                        </div>
                    </dl>
                    <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
                        <p className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                            Code pour activer la réservation auprès du loueur{" "}
                            <span className="font-bold px-2 py-1 mx-2 rounded-md border border-gray-200">
                                {reservation.activationCode ?? "1234"}
                            </span>
                        </p>
                    </div>
                    {/* <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Télécharger la facture <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
