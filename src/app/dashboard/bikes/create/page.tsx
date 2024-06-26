import Form from "@/app/ui/bikes/create-form";
import { fetchBrand } from "@/app/lib/actions";

export default async function Page() {
    const brands = await fetchBrand();
    console.log(brands);

    return (
        <main>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4">
                Ajouter un vélo
            </h1>
            {brands.brands.length > 0 && <Form brands={brands.brands} />}
        </main>
    );
}
