import { fetchBookingById } from "@/app/lib/actions";
import ReservationDetails from "@/app/ui/reservations/details";

export default async function ReservationDetail({ params }: { params: { id: string } }) {
    const id = params.id;
    const reservation = await fetchBookingById(id);
    console.log("resa is", reservation);

    return (
        <main>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4">
                Réservation détail
            </h1>
            {reservation && <ReservationDetails reservation={reservation.data.booking} />}
        </main>
    );
}
