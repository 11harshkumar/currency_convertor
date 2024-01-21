import { useEffect, useState } from "react"

// Currency is an argument, Many a time HOOKS take optional argument
function useCurrencyInfo(currency) {
    const [data,setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((response) => response.json())
            .then((response)=> setData(response[currency]))
    }, [currency])
    console.log(data)
    return data;
}

export { useCurrencyInfo };