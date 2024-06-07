import { Bike } from "@/app/lib/definitions";

export default function SelectBike({ bikes }: { bikes: Bike[] }) {
    return (
        <div className="mb-4">
            <label htmlFor="bikes" className="mb-2 block text-sm font-medium">
                Choose Bikes
            </label>
            <div className="relative">
                <div className="mb-4">
                    <select
                        id="bikes"
                        name="bikes"
                        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        defaultValue={[]}
                        multiple
                    >
                        <option value="" disabled>
                            Select bikes
                        </option>
                        {bikes.map((bike) => (
                            <option key={bike._id} value={bike._id}>
                                {bike.model}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}
