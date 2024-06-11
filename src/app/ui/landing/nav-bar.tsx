import Image from "next/image";

export default function NavBar() {
    const navigation = [
        { name: "Bikes", href: "#" },
        { name: "Renters", href: "#" },
        // { name: 'Marketplace', href: '#' },
        // { name: 'Company', href: '#' },
    ];
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image
                            width={125}
                            height={250}
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                            alt=""
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    {/* <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(true)}
            >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button> */}
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-row lg:gap-x-12  lg:flex-1 lg:justify-end">
                    <div className="">
                        <a
                            href="/auth/register"
                            className="text-sm font-semibold leading-6 text-white hover:text-gray-300 hover:ring-2 hover:ring-pink-800 hover:ring-offset-1 rounded-lg px-2 py-1"
                        >
                            Register
                        </a>
                    </div>
                    <div className="">
                        <a
                            href="/auth/login"
                            className="text-sm font-semibold leading-6 text-white  hover:text-gray-300 hover:ring-2 hover:ring-pink-800 hover:ring-offset-1 rounded-lg px-2 py-1"
                        >
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
                {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="/auth/login" className="text-sm font-semibold leading-6 text-white">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div> */}
            </nav>
            {/* <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <Image width={125} height={250}
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt=""
                    />
                </a>
                <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                    <div className="space-y-2 py-6">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="py-6">
                        <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                        >
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </DialogPanel>
    </Dialog> */}
        </header>
    );
}
