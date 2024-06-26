import Table from "@/app/ui/bookings/table";
import { fetchBookings } from "@/app/lib/actions";
import { ShopContext } from "@/app/contexts/shopContext";
import { useContext } from "react";

export default async function Page() {
    // const { loading, shop } = useContext(ShopContext);
    // if (!shop) {
    //     return <div>No shop found</div>;
    // }
    const bookings = await fetchBookings("shop");
    console.log("bookings", bookings);

    return (
        <main>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4">
                Les réservations de mon shop
            </h1>
            {/* {bookings && <div>here: {JSON.stringify(bookings)}</div>} */}
            {/* {bookings && bookings.length === 0 && <div>No booking found</div>} */}
            {bookings && bookings.length > 0 && <Table bookings={bookings} />}
        </main>
    );
}
