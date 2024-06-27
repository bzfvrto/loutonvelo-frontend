import { IdentificationIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function ActivateBookingBtn({ id }: { id: string }) {
    return (
        <Link href={`/dashboard/bookings/${id}/activation`} className="rounded-md border p-2 hover:bg-gray-100">
            <IdentificationIcon className="w-5" />
        </Link>
    );
}
