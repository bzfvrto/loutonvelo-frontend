import { ChatBubbleLeftRightIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export function Content() {
    return (
        <section className="">
            {/* <div className="py-5 px-8 mt-4 bg-gradient-to-b from-transparent to-gray-50"></div> */}
            <div className="relative bg-transparent">
                <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
                    <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
                        <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                            <Image
                                className="absolute inset-0 h-full w-full bg-gray-50 object-cover object-center"
                                src="https://www.urbancycle.fr/wp-content/uploads/2024/06/Bullitt-jaune-bbx-et-vitesses-internes-1.jpeg"
                                alt=""
                                height={750}
                                width={700}
                            />
                        </div>
                    </div>
                    <div className="px-6 lg:contents">
                        <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
                            <p className="text-base font-semibold leading-7 text-indigo-600">Loutonvélo</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Find a bike anywhere
                            </h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi,
                                nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at
                                in viverra scelerisque eget. Eleifend egestas fringilla sapien.
                            </p>
                            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                                <p>
                                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                                    mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio
                                    penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa
                                    rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                                    vitae sed turpis id.
                                </p>
                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                    <li className="flex gap-x-3">
                                        <CheckBadgeIcon
                                            className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                            aria-hidden="true"
                                        />
                                        <span>
                                            <strong className="font-semibold text-gray-900">Trusted renters.</strong>{" "}
                                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                                            cupidatat commodo.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <ChatBubbleLeftRightIcon
                                            className="mt-1 h-5 w-5 flex-none text-indigo-600"
                                            aria-hidden="true"
                                        />
                                        <span>
                                            <strong className="font-semibold text-gray-900">
                                                Communicate with renter.
                                            </strong>{" "}
                                            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit
                                            morbi lobortis.
                                        </span>
                                    </li>
                                </ul>
                                <p className="mt-8">
                                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id
                                    blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel.
                                    Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac
                                    tempor et ut. Ac lorem vel integer orci.
                                </p>
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                                    Never be without bike!
                                </h2>
                                <p className="mt-6">
                                    Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis
                                    arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat
                                    vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris.
                                    Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
                                    ipsum eu a sed convallis diam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 px-8 bg-gradient-to-b from-transparent to-30% to-white"></div>
            {/* <div className="py-5 px-8 bg-gradient-to-b from-transparent to-white"></div> */}
        </section>
    );
}
