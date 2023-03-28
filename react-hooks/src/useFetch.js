import React from 'react';

const useFetch = () => {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(null)
    const [error, setError] = React.useState(null)

    async function request(url, options) {
        try{
            const response = await fetch(url, options)
            const json = await response.json()
            setData(json)
        }
        catch(error) {

        }
    }

    return {data, loading, error, request}
}

export default useFetch;