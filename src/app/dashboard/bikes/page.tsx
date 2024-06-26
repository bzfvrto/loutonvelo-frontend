import Table from "@/app/ui/bikes/table";
import { fetchBikeForUserShop } from "@/app/lib/actions";
import Link from "next/link";
import { Button } from "@/app/ui/button";

export default async function Page() {
    const bikesResponse = await fetchBikeForUserShop();
    console.log("bikesResponse.data.bikes", bikesResponse.data.bikes);

    return (
        <main>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4">
                Mes vélos
            </h1>

            <div className="flex justify-end">
                <Link href="/dashboard/bikes/create">
                    <Button type="button">Ajouter un vélo</Button>
                </Link>
            </div>

            {bikesResponse && <Table bikes={bikesResponse.data.bikes} />}
        </main>
    );
}
