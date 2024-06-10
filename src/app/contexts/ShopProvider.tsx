"use client";

import { ShopContext } from "@/app/contexts/shopContext";
import { auth } from "@/auth";
import { fetchShop } from "@/app/lib/actions";
import { SessionUser, Shop } from "@/app/lib/definitions";
import { useEffect } from "react";

export function ShopProvider({ user, children }: { user: SessionUser; children: any }) {
    const shopCtxt: { shop: Shop | null } = {
        shop: null,
    };
    useEffect(() => {
        if (user.role === "reseller" && shopCtxt.shop === null) {
            (async () => {
                await fetchShop(user._id)
                    .then((shop) => {
                        if (shop) {
                            shopCtxt.shop = shop;
                        }
                    })
                    .catch((err) => console.error(err));
                console.log("herer", shopCtxt);
            })();
        }
    });
    return <ShopContext.Provider value={shopCtxt}>{children}</ShopContext.Provider>;
}
