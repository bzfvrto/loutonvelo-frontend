"use client";

import { lusitana } from "@/app/ui/fonts";
import { AtSymbolIcon, KeyIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "@/app/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { register } from "@/app/lib/actions";
import { redirect } from "next/navigation";
import { useActionState } from "react";

export default function RegisterForm() {
    const [errorMessage, formAction, isPending] = useFormState(register, undefined);
    // const handleRegistration = (payload: FormData) => {
    //     console.log("here", FormData);

    //     // try {
    //     dispatch(payload);
    //     redirect("/auth/login");
    //     // } catch (error) {
    //     //     console.log("myerror", error);

    //     // }
    // };
    return (
        <form action={formAction} className="space-y-3">
            <div className="flex-1 rounded-lg bg-gray-50 dark:bg-gray-800 px-6 pb-4 pt-8">
                <h1 className={`${lusitana.className} mb-3 text-2xl text-gray-900 dark:text-gray-50`}>
                    Créer un compte.
                </h1>
                <div className="w-full">
                    <div className="">
                        <div>
                            <label
                                className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-gray-100"
                                htmlFor="firstName"
                            >
                                Prénom
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 bg-gray-50 dark:bg-gray-600 dark:placeholder:text-gray-200 dark:border-gray-400"
                                    id="firstName"
                                    type="text"
                                    name="firstName"
                                    placeholder="Jean"
                                    required
                                />
                                {/* <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                            </div>
                        </div>
                        <div>
                            <label
                                className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-gray-100"
                                htmlFor="lastName"
                            >
                                Nom de famille
                            </label>
                            <div className="relative">
                                <input
                                    className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 bg-gray-50 dark:bg-gray-600 dark:placeholder:text-gray-200 dark:border-gray-400"
                                    id="lastName"
                                    type="text"
                                    name="lastName"
                                    placeholder="Bombeur"
                                    required
                                />
                                {/* <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-gray-100"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 bg-gray-50 dark:bg-gray-600 dark:placeholder:text-gray-200 dark:border-gray-400"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="jean.bombeur@mail.ndd"
                                required
                            />
                            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900 dark:text-gray-100"
                            htmlFor="password"
                        >
                            Mot de passe
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 bg-gray-50 dark:bg-gray-600 dark:placeholder:text-gray-200 dark:border-gray-400"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Votre mot de passe super complexe"
                                required
                                minLength={4}
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>
                <LoginButton />
                <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
                    {errorMessage && (
                        <>
                            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                            <p className="text-sm text-red-500">{errorMessage}</p>
                        </>
                    )}
                </div>
            </div>
        </form>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <Button className="mt-4 w-full" aria-disabled={pending}>
            S&apos;inscrire <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
    );
}
