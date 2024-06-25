"use client";

import { ShopContext } from "@/app/contexts/shopContext";
import { auth } from "@/auth";
import { fetchOwnerShop } from "@/app/lib/actions";
import { SessionUser, Shop } from "@/app/lib/definitions";
import { useEffect, useState } from "react";

export function ShopProvider({ user, children }: { user: SessionUser; children: any }) {
    const [loading, setLoading] = useState<boolean>(false);
    const [shop, setShop] = useState<Shop | null>();

    const userShop = async () => {
        setLoading(true);
        try {
            const userFetchedShop = await fetchOwnerShop(user._id);
            // console.log("userFetchedShop", userFetchedShop);
            if (userFetchedShop) {
                setShop(userFetchedShop);
            } else {
                setShop(null);
                // throw new Error("An error has occured");
            }
        } catch (error) {
            console.log("error", error);
        } finally {
            setLoading(false);
        }
        // await fetchOwnerShop(user._id)
        //     .then((userFetchedShop) => {
        //         // if (userFetchedShop) {
        //         console.log("userFetchedShop", userFetchedShop);

        //         setShop(userFetchedShop);
        //         setLoading(false);
        //         // }
        //     })
        //     .catch((err) => {
        //         setLoading(false);
        //         console.error("err", err);
        //     });
    };

    useEffect(() => {
        console.log(typeof shop === "undefined");

        if (user.role === "reseller" && typeof shop === "undefined") {
            userShop();
            // const shopCtxt: { loading: boolean; shop: Shop | null } = {
            //     loading: false,
            //     shop: null,
            // };
        }
    });
    return <ShopContext.Provider value={{ loading, shop }}>{children}</ShopContext.Provider>;
}
