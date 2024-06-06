import { fetchBike } from "@/app/lib/actions";
import Form from "@/app/ui/bookings/create-form";

export default async function Page() {
    const bikesResponse = await fetchBike();
    return (
        <main>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4">
                Create Booking
            </h1>
            {bikesResponse.data.bikes.length > 0 && <Form bikes={bikesResponse.data.bikes} />}
        </main>
    );
}
