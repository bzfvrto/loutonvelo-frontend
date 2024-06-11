import Image from "next/image";
import Hero from "./ui/landing/hero";
import { fetchBike } from "./lib/actions";
import LastBikes from "./ui/landing/last-bikes";
import BookingForm from "./ui/landing/booking-form";

export default async function Home() {
    // const bikesResponse = await fetchBike();
    return (
        <>
            <div className="relative pb-36">
                <Hero />
                <div className="-mt-24">
                    <BookingForm />
                    {/* <LastBikes bikes={bikesResponse.data.bikes} /> */}
                </div>
            </div>
        </>
    );
}
