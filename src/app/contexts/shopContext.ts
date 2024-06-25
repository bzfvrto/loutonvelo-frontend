"use client";

import { createContext } from "react";
import { Shop } from "../lib/definitions";

type ShopContextType = {
    loading: boolean;
    shop: Shop | null | undefined;
}

export const ShopContext = createContext<ShopContextType>({
    loading: false,
    shop: null,
})
