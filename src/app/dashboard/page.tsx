import useAuth from "../hooks/useAuth";
import BookingForToday from "../ui/dashboard/cards/bookings-for-today";

export default async function Page() {
    const user = await useAuth();
    return (
        <main>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4">
                Tableau de bord
            </h1>
            <div className="">{user.role === "reseller" && <BookingForToday />}</div>
        </main>
    );
}
