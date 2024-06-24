import Image from "next/image";
import Hero from "./ui/landing/hero";
import { fetchBike } from "./lib/actions";
import LastBikes from "./ui/landing/last-bikes";
import BookingForm from "./ui/landing/booking-form";
import { auth } from "@/auth";
import { Content } from "./ui/landing/content";
import { Footer } from "./ui/landing/footer";

export default async function Home() {
    const bikesResponse = await fetchBike();

    const session = await auth();
    let user = null;
    if (session?.user) {
        user = session?.user;
    }

    return (
        <>
            <div className="relative">
                <Hero />
                <div className="-mt-24">
                    <BookingForm user={user} />
                    <LastBikes bikes={bikesResponse.data.bikes} className="mt-8" />
                    <Content />
                    <Footer />
                </div>
            </div>
        </>
    );
}
