import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    /*
        const [images, setImages] = useState([]);

        const getImages = async () => {
            const newImages = await getGifs(category);
            setImages(newImages);
        };

        useEffect(() => {
            getImages(); // Obtener Gifs
        }, []) 
    */

    return (
        <>
            {/* Gif Item */}
            <h3 className='text-center'>{category}</h3>
            {
                isLoading && <h2 className='text-center'>Cargando...</h2>
            }

            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
