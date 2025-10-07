import { createContext, useContext, useState } from "react";

import { expenses } from "../data";

const AppContext = createContext(undefined);

export function AppProvider({ children }) {

    const [items, setItems] = useState(expenses);

    function addExpense(exp) {
        const id = `e${items.length + 1}`;
        setItems((prev) => [...prev, { id, ...exp }]);
    };

    function getTotal() {

        const totalOfMonth = items.reduce(
            (sum, item) => sum + item.amount,
            0
        ).toFixed(2);

        return totalOfMonth;
    }

    function getItemsByDate() {
        const uniqueDates = [...new Set(items.map(item => item.date))];

        const itemsByDate = uniqueDates.map(date => {
            const dailyItems = items.filter(exp => exp.date === date);
            return {
                date,
                items: dailyItems
            };
        });

        return itemsByDate;
    };

    function getDailyAmount() {
        const result = [];

        for (let day = 1; day <= 31; day++) {
            const dayStr = String(day).padStart(2, "0");

            const total = items
                .filter(item => item.date.split('-')[2] === dayStr)
                .reduce((sum, exp) => sum + exp.amount, 0);

            result.push({
                day: dayStr,
                totalExpense: total
            });
        }

        return result;
    };


    const value = {
        items,
        getTotal,
        getItemsByDate,
        getDailyAmount,
        addExpense
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    const ctx = useContext(AppContext);
    if (!ctx) throw new Error("useApp must be used inside <AppProvider>");
    return ctx;
}