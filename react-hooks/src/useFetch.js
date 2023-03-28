import React from 'react';

const useFetch = () => {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(null)
    const [error, setError] = React.useState(null)

    async function request(url, options) {
        try{
            setLoading(true)
            const response = await fetch(url, options)
            const json = await response.json()
            setData(json)
        }
        catch(error) {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }

    return {data, loading, error, request}
}

export default useFetch;