"use client";

import { activateResellerAccount } from "@/app/lib/actions";
import { Button } from "@/app/ui/button";

export default function Page() {
    const activateReseller = async () => {
        console.log("activating");
        const updatedUser = await activateResellerAccount();
        console.log("user updated", updatedUser);
    };

    return (
        <main>
            <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-4">
                Brands
            </h1>
            <div>
                <Button type="button" onClick={activateReseller}>
                    Activate Reseller account
                </Button>
            </div>
        </main>
    );
}
