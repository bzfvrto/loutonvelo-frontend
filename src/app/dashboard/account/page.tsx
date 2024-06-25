import { SessionUser } from "@/app/lib/definitions";
import { ToggleReseller } from "@/app/ui/reseller/toggle-reseller";
import { auth } from "@/auth";
import { useState } from "react";

export default async function Page() {
    const session = await auth();
    if (!session?.user) {
        throw new Error("User must be authenticated");
    }
    const user = session?.user;
    return (
        <main>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-50 sm:truncate sm:text-3xl sm:tracking-tight mb-4">
                Account
            </h1>
            {/* {session && <ResellerForm user={user} />} */}
            {/* <div>{user.email}</div>
            {user.role} */}
            <div>More to come in few days...</div>
            <div className="mt-4">
                {/* Toggle reseller acount */}
                <ToggleReseller user={user} />
            </div>
        </main>
    );
}
