"use client";

import { createContext } from "react";
import { Shop } from "../lib/definitions";

type ShopContextType = {
    shop: Shop | null;
}

export const ShopContext = createContext<ShopContextType>({
    shop: null,
})
