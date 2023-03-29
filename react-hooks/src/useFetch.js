import React from 'react';

const useFetch = () => {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(null)
    const [error, setError] = React.useState(null)

    const request = React.useCallback(async (url, options) => {
        let response;
        let json;
        try{
            setError(null)
            setLoading(true)
             response = await fetch(url, options)
             json = await response.json()
            setData(json)
        }
        catch(error) {
            setError('Erro')
        }
        finally {
            setLoading(false)
            return {response, json}
        }
    },[])

    return {data, loading, error, request}
}

export default useFetch;