"use client";

import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { SessionUser, User } from "@/app/lib/definitions";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: "Home", href: "/dashboard", icon: HomeIcon },
    {
        name: "Bikes",
        href: "/dashboard/bikes",
        icon: DocumentDuplicateIcon,
        role: "reseller",
    },
    { name: "Brands", href: "/dashboard/brands", icon: UserGroupIcon, role: "reseller" },
    { name: "Bookings", href: "/dashboard/bookings", icon: ClipboardDocumentListIcon, role: "reseller" },
    { name: "Account", href: "/dashboard/account", icon: UserGroupIcon },
];

export default function NavLinks({ user }: { user: SessionUser }) {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return !link?.role || user.role === link.role ? (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 dark:bg-gray-800 p-3 text-sm font-medium hover:bg-sky-100 dark:hover:bg-sky-800 hover:text-blue-600 dark:hover:text-blue-100 md:flex-none md:justify-start md:p-2 md:px-3",
                            {
                                "bg-sky-100 text-blue-600": pathname === link.href,
                            }
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                ) : (
                    ""
                );
            })}
        </>
    );
}
