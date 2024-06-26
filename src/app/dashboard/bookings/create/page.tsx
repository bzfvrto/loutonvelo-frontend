import Form from "@/app/ui/bookings/create-form";

export default async function Page() {
    return (
        <main>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4">
                Créer un réservation
            </h1>
            <Form />
        </main>
    );
}
