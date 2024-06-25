export function YearInput({ ...rest }) {
    const thisYear = new Date().getFullYear();

    const availableDate = () => {
        const dates = [];
        for (let i = thisYear; i >= thisYear - 50; i--) {
            dates.push(i);
        }
        return dates;
    };
    console.log("rest", rest);

    return (
        <select {...rest}>
            <option value="">Select Year</option>
            {availableDate().map((date: number) => {
                return (
                    <option key={date} value={date}>
                        {date}
                    </option>
                );
            })}
        </select>
    );
}
