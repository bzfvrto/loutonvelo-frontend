import Table from "@/app/ui/brands/table";
import { fetchBrand } from "@/app/lib/actions";

export default async function Page() {
    const brands = await fetchBrand();
    console.log(brands);

    return (
        <main>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4">
                Brands
            </h1>
            {brands && <Table brands={brands.brands} />}
        </main>
    );
}
