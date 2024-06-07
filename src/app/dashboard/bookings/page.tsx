import Table from "@/app/ui/bookings/table";
import { fetchBooking } from "@/app/lib/actions";

export default async function Page() {
    const bookings = await fetchBooking();
    // console.log(bookings);

    return (
        <main>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4">
                Bookings
            </h1>
            {bookings && <Table bookings={bookings.bookings} />}
        </main>
    );
}
