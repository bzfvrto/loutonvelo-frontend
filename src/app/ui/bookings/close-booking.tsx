import { terminateBooking } from "@/app/lib/actions";

export function CloseBooking({ id, onClosingDone }: { id: string; onClosingDone: () => void }) {
    const handleBookingClosing = async () => {
        console.log("termination initiated");
        if (confirm("Êtes-vous certain de vouloir clôturer ce booking")) {
            console.log("OK");
            const closingResponse = await terminateBooking(id);
            console.log(closingResponse);
            onClosingDone();
        }
    };
    return (
        <div className="mb-4">
            <label htmlFor="activationCode" className="mb-2 block text-sm font-medium">
                Clôturer le booking
            </label>
            <div className="relative mt-2 rounded-md">
                <div className="relative">
                    <button
                        onClick={() => handleBookingClosing()}
                        className="rounded-md border p-2 hover:bg-red-200 border-red-600 text-red-600 w-full"
                    >
                        Cloturer le booking
                    </button>
                </div>
            </div>
        </div>
    );
}
