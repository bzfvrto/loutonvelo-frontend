import { fetchBikeById, fetchBrand } from "@/app/lib/actions";
import Form from "@/app/ui/bikes/edit-form";

export default async function EditBike({ params }: { params: { id: string } }) {
    const id = params.id;
    console.log("id from frontend", id);
    // const bike = fetchBikeById(id);
    const [bike, brands] = await Promise.all([fetchBikeById(id), fetchBrand()]);

    console.log(bike);

    return (
        <main>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4">
                Edit Bike
            </h1>
            {brands.brands.length > 0 && <Form bike={bike.data.bike} brands={brands.brands} />}
        </main>
    );
}
