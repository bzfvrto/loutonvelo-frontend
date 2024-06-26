"use client";

import { activateResellerAccount } from "@/app/lib/actions";
import { SessionUser } from "@/app/lib/definitions";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import { useState } from "react";

export function ToggleReseller({ user }: { user: SessionUser }) {
    const [isReseller, setIsReseller] = useState(user.role === "reseller");
    const { update, data: other } = useSession();
    console.log("other", other);

    const toggleResellerAccount = () => {
        const currentRole = isReseller;

        setIsReseller((current) => !current);
        activateResellerAccount(!currentRole);
        update({ ...other, role: "reseller" });
        console.log(!currentRole ? "reseller" : "user");
    };

    return (
        <div className="flex items-center justify-between">
            <span className="flex flex-grow flex-col">
                <label className="text-sm font-medium leading-6 text-gray-900 dark:text-gray-400">
                    Activer votre compte loueur
                </label>
                <p className="text-sm text-gray-500">Activer cette option si vous voulez louer votre vélo.</p>
            </span>
            <button
                type="button"
                className={clsx(
                    "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent dark:border-gray-800 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2",
                    {
                        "bg-gray-200 dark:bg-gray-600": !isReseller,
                        "bg-green-100 dark:bg-green-600": isReseller,
                    }
                )}
                role="switch"
                aria-checked="false"
                aria-labelledby="availability-label"
                aria-describedby="availability-description"
                onClick={toggleResellerAccount}
            >
                <span
                    aria-hidden="true"
                    className={clsx(
                        "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-gray-50 shadow ring-0 transition duration-200 ease-in-out",
                        { "translate-x-0": !isReseller, "translate-x-5": isReseller }
                    )}
                >
                    <span
                        className={clsx(
                            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity",
                            {
                                "opacity-0 duration-100 ease-out": isReseller,
                                "opacity-100 duration-200 ease-in": !isReseller,
                            }
                        )}
                        aria-hidden="true"
                    >
                        <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                            <path
                                d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <span
                        className={clsx(
                            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity",
                            {
                                "opacity-100 duration-200 ease-in": isReseller,
                                "opacity-0 duration-100 ease-out": !isReseller,
                            }
                        )}
                        aria-hidden="true"
                    >
                        <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                        </svg>
                    </span>
                </span>
            </button>
        </div>
    );
}
