import LoginForm from "./login-form";

export function Modal({ open, onSubmit }: { open: boolean; onSubmit: () => void }) {
    if (!open) {
        return null;
    }
    return (
        <div className="relative z-10">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                        <div>
                            <div className="mt-3 text-center sm:mt-5">
                                {/* <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                    <svg
                                        className="h-6 w-6 text-green-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>
                                </div> */}
                                <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                                    Connectez vous pour finaliser votre réservation
                                </h3>
                                {/* <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam
                                        laudantium explicabo pariatur iste dolorem animi vitae error totam. At sapiente
                                        aliquam accusamus facere veritatis.
                                    </p>
                                </div> */}
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            {/* <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-1"
                            >
                                Register
                            </button>
                            <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                            >
                                Login
                            </button> */}
                            <button
                                onClick={() => onSubmit()}
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-span-2 sm:mt-0"
                            >
                                Fermer
                            </button>
                        </div>
                        <div className="mt-2">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
