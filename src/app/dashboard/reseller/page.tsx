import { SessionUser } from "@/app/lib/definitions";
import ResellerForm from "@/app/ui/reseller/shop-form";
import { auth } from "@/auth";

export default async function Page() {
    const session = await auth();
    if (!session?.user) {
        throw new Error("User must be authenticated");
    }
    const user = session?.user;

    return (
        <main>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-50 sm:truncate sm:text-3xl sm:tracking-tight mb-4">
                Reseller Settings
            </h1>
            {session && <ResellerForm user={user} />}
        </main>
    );
}
