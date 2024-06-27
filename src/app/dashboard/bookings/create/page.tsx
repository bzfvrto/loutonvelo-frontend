import CreateForm from "@/app/ui/bookings/create-form";
import BookingForm from "@/app/ui/landing/booking-form";
import { auth } from "@/auth";

export default async function Page() {
    const session = await auth();
    let user = null;
    if (session?.user) {
        user = session?.user;
    }
    return (
        <main>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4">
                Créer un réservation
            </h1>
            {user && <CreateForm user={user} />}
        </main>
    );
}
