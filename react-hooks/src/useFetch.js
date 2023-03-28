import React from 'react';

const useFetch = () => {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(null)
    const [error, setError] = React.useState(null)

    async function resquest(url, options) {
        try{
            const response = await fetch('http://ranekapi.origamid.dev/json/api/produto/')
            const json = response.json()
            setData(json)
        }
        catch(error) {

        }
    }

    return {data, loading, error}
}