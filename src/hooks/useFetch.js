import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = async () => {
        try {
            const data = await fetch(url)
            const response = await data.json()
            if(!response.ok) throw new Error('Error with the response')
            setData(response)
        } catch (error) {
            setError(true)
            console.error(error)    
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return [data, loading, error]
}