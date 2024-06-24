import Image from "next/image";
import { auth } from "@/auth";
import Link from "next/link";

export default async function NavBar() {
    const session = await auth();

    const navigation = [
        { name: "Bikes", href: "#" },
        { name: "Renters", href: "#" },
        // { name: 'Marketplace', href: '#' },
        // { name: 'Company', href: '#' },
    ];
    return (
        <header className="absolute inset-x-0 top-0 z-40">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Loutonvélo</span>
                        {/* <Image
                            width={125}
                            height={250}
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                            alt=""
                        /> */}
                        <svg className="w-16 h-16" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="140" r="40" stroke="white" strokeWidth="6" fill="none" />
                            <circle cx="150" cy="140" r="40" stroke="white" strokeWidth="6" fill="none" />
                            <path
                                d="M 50 140 Q 80 100 100 60 Q 120 100 150 140"
                                stroke="white"
                                strokeWidth="4"
                                fill="none"
                            />
                            <line x1="52" y1="140" x2="151" y2="140" stroke="white" strokeWidth="4" />
                            <path
                                d="M 100 60 Q 90 40 80 60 Q 90 80 100 60"
                                stroke="white"
                                strokeWidth="4"
                                fill="none"
                            />
                            <path d="M 100 100 Q 80 90 78 100" stroke="white" strokeWidth="3" fill="none" />
                        </svg>
                    </a>
                </div>
                {/* <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div> */}
                {/* <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                            {item.name}
                        </a>
                    ))}
                </div> */}
                {/* {session?.user && <div className="text-white">Welcome, {session?.user.email}</div>} */}
                <div className="flex flex-row gap-x-12  flex-1 justify-end">
                    {/* lg:flex lg:flex-row lg:gap-x-12  lg:flex-1 lg:justify-end */}
                    {session?.user ? (
                        <div>
                            <Link
                                href="/dashboard"
                                className="text-sm font-semibold leading-6 text-white hover:text-gray-300 hover:ring-2 hover:ring-pink-800 hover:ring-offset-1 rounded-lg px-2 py-1"
                            >
                                Dashboard
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="">
                                <Link
                                    href="/auth/register"
                                    className="text-sm font-semibold leading-6 text-white hover:text-gray-300 hover:ring-2 hover:ring-pink-800 hover:ring-offset-1 rounded-lg px-2 py-1"
                                >
                                    Register
                                </Link>
                            </div>
                            <div className="">
                                <Link
                                    href="/auth/login"
                                    className="text-sm font-semibold leading-6 text-white  hover:text-gray-300 hover:ring-2 hover:ring-pink-800 hover:ring-offset-1 rounded-lg px-2 py-1"
                                >
                                    Log in <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}
