import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

export default function AcmeLogo() {
    return (
        <div className={`${lusitana.className} flex flex-col items-center leading-none text-white`}>
            {/* <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="140" r="40" stroke="black" stroke-width="4" fill="none" />

                <circle cx="140" cy="140" r="40" stroke="black" stroke-width="4" fill="none" />

                <path d="M 60 140 Q 80 100 100 60 Q 120 100 140 140" stroke="black" stroke-width="4" fill="none" />

                <line x1="60" y1="140" x2="140" y2="140" stroke="black" stroke-width="4" />

                <path d="M 100 60 Q 90 40 80 60 Q 90 80 100 60" stroke="black" stroke-width="4" fill="none" />

                <path d="M 100 100 Q 90 90 80 100" stroke="black" stroke-width="4" fill="none" />
            </svg> */}
            <div className="flex items-center justify-center w-24 h-24">
                <div className=" text-gray-500">
                    <svg className="w-full h-auto" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="140" r="40" stroke="white" strokeWidth="6" fill="none" />
                        <circle cx="150" cy="140" r="40" stroke="white" strokeWidth="6" fill="none" />
                        <path
                            d="M 50 140 Q 80 100 100 60 Q 120 100 150 140"
                            stroke="white"
                            strokeWidth="4"
                            fill="none"
                        />
                        <line x1="52" y1="140" x2="151" y2="140" stroke="white" strokeWidth="4" />
                        <path d="M 100 60 Q 90 40 80 60 Q 90 80 100 60" stroke="white" strokeWidth="4" fill="none" />
                        <path d="M 100 100 Q 80 90 78 100" stroke="white" strokeWidth="3" fill="none" />
                    </svg>
                </div>
            </div>
            <p className="text-2xl">Loutonvélo</p>
        </div>
    );
}
