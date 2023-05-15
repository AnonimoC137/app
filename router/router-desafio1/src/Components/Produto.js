import React from 'react'
import styles from './Produto.module.css'
import { useParams } from 'react-router-dom'
import Head from './Head';

const Produto = () => {
    const [produto, setProduto] = React.useState(null);
    const [carregando, setCarregando] = React.useState(false);
    const [error, setError] = React.useState(null);
    const {id} = useParams()
    console.log(id)

    React.useEffect(() => {
        async function fetchProduto(url) {
            try {
                setCarregando(true)
                const response = await fetch(url)
                const json = await response.json()
                setProduto(json)
            } catch(erro) {
                setError('um erro ocorreu')
            } finally {
                setCarregando(false)
            }
            
        }
        fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
    }, [id])

    if(error) <p>{error}</p>

    if(carregando) return <div>Carregando...</div>

    if(produto === null) return null
  return (
    <section className={`${styles.produto} animeLeft`}>
        
        <Head title={`${produto.nome}`} description={`${produto.descricao}`}/>

        {produto.fotos.map((foto) => (
            <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
        <div>
            <h1>{produto.nome}</h1>
            <span className={styles.preco}>{produto.preco}</span>
            <p className={styles.descricao}>{produto.descricao}</p>
        </div>
      
    </section>
  )
}

export default Produto
