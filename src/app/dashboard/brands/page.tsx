import Table from "@/app/ui/brands/table";
import { fetchBrand } from "@/app/lib/actions";
import Link from "next/link";
import { Button } from "@/app/ui/button";

export default async function Page() {
    const brands = await fetchBrand();
    console.log(brands);

    return (
        <main>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4">
                Brands
            </h1>
            <div className="flex justify-end">
                <Link href="/dashboard/brands/create">
                    <Button type="button">Add brand</Button>
                </Link>
            </div>
            {brands && <Table brands={brands.brands} />}
        </main>
    );
}
