import Image from "next/image";
import NavBar from "../ui/nav-bar";
import { Footer } from "../ui/landing/footer";
import { SVGProps } from "react";

export default function AboutUs() {
    const spreadTheWords = [
        {
            howTo: "Star it on github",
            link: "https://github.com/bzfvrto",
            icon: (props: SVGProps<SVGSVGElement>) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            howTo: "Ecrivez-moi",
            link: "mailto:bazil.f@gmail.com",
            icon: (props: SVGProps<SVGSVGElement>) => (
                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" {...props}>
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                </svg>
            ),
        },
    ];
    return (
        <div className="bg-gradient-to-b from-gray-400 via-transparent via-5% to-gray-200">
            <NavBar />
            <main className="relative isolate pb-16">
                {/* Header section */}
                <div className="px-6 pt-14 lg:px-8">
                    <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
                        <h2 className="text-4xl font-medium tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                            A propos de Louton<span className="font-bold">vélo</span>
                        </h2>
                        {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                            Le projet Louton<span className="font-bold">vélo</span> ambitionne de révolutionner la
                            location de vélo.
                        </p> */}
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Le projet Louton<span className="font-bold">vélo</span> à été réalisé à l&apos;issue de ma
                            formation à{" "}
                            <a href="https://lacapsule.academy" target="_blank" className="text-[#e03743]">
                                La Capsule
                            </a>{" "}
                            où j&apos;ai suivi un bootcamp de développeur fullstack javascript.
                        </p>
                    </div>
                </div>

                {/* Content section */}
                <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none lg:grid-cols-2">
                            <div>
                                <p>
                                    L&apos;idée est de permettre la mise en relation entre particuliers et/ou
                                    professionnels afin de leur offrir un service simple, accessible et adapté aux
                                    besoins.
                                </p>
                                <p className="mt-8">
                                    Evidemment ce projet est juste une ébauche, un produit minimum viable, comme on
                                    dit... n&apos;offrant aucune solution de paiement et aucune garantie. Si
                                    l&apos;usage d&apos;une telle solution vous intéresses n&apos;hésitez pas à me
                                    contacter. Je finaliserai alors ce projet.
                                </p>
                            </div>
                            <div>
                                <p>
                                    Dans l&apos;état actuel cette application est destinée à agrémenter mon portfolio en
                                    vue de trouver une alternance ou un emploi. Le code est disponible sur GitHub, je
                                    vous serai reconnaissant de ne pas l&apos;utiliser à des fins commerciales sans mon
                                    accord.
                                </p>
                                <p className="mt-8">
                                    Cette application m&apos;a permis de pratiquer{" "}
                                    <a href="https://nextjs.org" rel="Nextjs website" target="_blank">
                                        Nextjs
                                    </a>{" "}
                                    et d&apos;avoir une première approche avec les{" "}
                                    <span className="italic">server components</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image section */}
                <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <Image
                        src="https://www.urbancycle.fr/wp-content/uploads/2024/06/Bullitt-orange-interne-2048x2048.jpeg"
                        alt=""
                        width={1025}
                        height={2048}
                        className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
                    />
                </div>

                {/* Thanks */}
                <div className="mx-auto mt-12 sm:mt-32 max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h4 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Remerciements
                        </h4>
                        <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none">
                            <p>
                                Les images utilisés pour illustrer ce site ont été gracieusement fournie par{" "}
                                <a
                                    href="https://urbancycle.fr"
                                    rel="le site de Urban cycle coursier à vélo à Paris"
                                    className="font-medium"
                                >
                                    Urban Cyle
                                </a>{" "}
                                société de livraison rapide et écolo à Paris et en Ile-de-France. Elles ont été
                                réalisées et leurs utilisations autorisées par{" "}
                                <a
                                    href="https://www.romainabeille.com"
                                    rel="site de photographies de Romain Abeille"
                                    className="font-medium"
                                >
                                    Romain Abeille
                                </a>
                                . Je les en remercies sincèrements.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA section */}
                <div className="relative isolate -z-10 mt-8 sm:mt-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                            <Image
                                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                                src="https://www.urbancycle.fr/wp-content/uploads/2024/06/Bullitt-vert-fonce-elec-vitesses-internes-1638x2048.jpeg"
                                alt=""
                                width={1025}
                                height={2048}
                            />
                            <div className="w-full flex-auto">
                                <h2 className="text-3xl font-medium tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                    Vous aimez le Louton<span className="font-bold">vélo</span> ?
                                </h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                                    Faites le moi savoir. Vos réactions déterminerons l&apos;avenir de cette
                                    application.
                                </p>
                                <ul
                                    role="list"
                                    className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-gray-900 dark:text-white sm:grid-cols-2"
                                >
                                    {spreadTheWords.map((method, index) => (
                                        <li key={index} className="flex gap-x-3">
                                            <method.icon className="h-6 w-6" aria-hidden="true" />
                                            <a href={method.link}>{method.howTo}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                        aria-hidden="true"
                    ></div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
