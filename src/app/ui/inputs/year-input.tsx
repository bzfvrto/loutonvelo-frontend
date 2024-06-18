export function YearInput({ ...rest }) {
    const thisYear = new Date().getFullYear();

    const availableDate = () => {
        const dates = [];
        for (let i = thisYear; i >= thisYear - 50; i--) {
            dates.push(i);
        }
        return dates;
    };

    return (
        <select {...rest} defaultValue={thisYear}>
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
