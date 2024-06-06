import Form from "@/app/ui/bikes/create-form";

export default function Page() {
    const brands = [
        {
            id: "1",
            name: "Test",
            description: "Description test",
            website: null,
        },
    ];

    return (
        <main>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4">
                Create Bike
            </h1>
            <Form brands={brands} />
        </main>
    );
}
