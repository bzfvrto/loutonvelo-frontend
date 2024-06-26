import Table from "@/app/ui/bookings/table";
import { fetchBooking } from "@/app/lib/actions";

export default async function Page() {
    const bookings = await fetchBooking("user");
    // console.log(bookings);

    return (
        <main>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4">
                Mes réservations
            </h1>
            {bookings && bookings.length > 0 && <Table bookings={bookings} />}
        </main>
    );
}
