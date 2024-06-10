import SideNav from "@/app/ui/dashboard/sidenav";
import { auth } from "@/auth";
import { ShopProvider } from "../contexts/ShopProvider";

export default async function Layout({ children }: { children: React.ReactNode }) {
    const session = await auth();
    if (!session?.user) {
        throw new Error("User must be authenticated to access dashboard");
    }
    const user = session?.user;

    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <ShopProvider user={user}>
                <div className="w-full flex-none md:w-64">
                    <SideNav />
                </div>
                <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
            </ShopProvider>
        </div>
    );
}
