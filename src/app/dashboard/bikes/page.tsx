import Table from "@/app/ui/bikes/table";
import { fetchBike } from "@/app/lib/actions";

export default async function Page() {
    const bikesResponse = await fetchBike();
    console.log(bikesResponse.data.bikes);

    return (
        <main>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4">
                Bikes
            </h1>
            {bikesResponse && <Table bikes={bikesResponse.data.bikes} />}
        </main>
    );
}
