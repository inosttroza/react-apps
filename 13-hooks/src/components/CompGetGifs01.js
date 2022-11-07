import { useFetchGifs01 } from '../hooks/useFetchGifs01';

export const CompGetGifs01 = () => {

    const { images, isLoading } = useFetchGifs01('vegeta');

    return (
        <>
            {
                isLoading ? (<h2>Cargando...</h2>)
                    :
                    images.map(x => (
                        <div key={x.id} style={{border:"1px solid"}}>
                            <img src={x.url} alt={x.title} />
                            <p>{x.title}</p>
                        </div>
                    ))
            }
        </>
    )
}

