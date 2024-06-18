"use client";

import { ShopContext } from "@/app/contexts/shopContext";
import { auth } from "@/auth";
import { fetchOwnerShop } from "@/app/lib/actions";
import { SessionUser, Shop } from "@/app/lib/definitions";
import { useEffect, useState } from "react";

export function ShopProvider({ user, children }: { user: SessionUser; children: any }) {
    const [loading, setLoading] = useState<boolean>(false);
    const [shop, setShop] = useState<Shop | null>(null);

    const userShop = async () => {
        setLoading(true);
        await fetchOwnerShop(user._id)
            .then((userFetchedShop) => {
                if (userFetchedShop) {
                    setShop(userFetchedShop);
                    setLoading(false);
                }
            })
            .catch((err) => {
                setLoading(false);
                console.error("err", err);
            });
    };

    useEffect(() => {
        if (user.role === "reseller" && shop === null) {
            userShop();
            // const shopCtxt: { loading: boolean; shop: Shop | null } = {
            //     loading: false,
            //     shop: null,
            // };
        }
    });
    return <ShopContext.Provider value={{ loading, shop }}>{children}</ShopContext.Provider>;
}
