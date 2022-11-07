import { useEffect, useState } from 'react';
import { getGifs01 } from '../helpers/getGifs01';

export const useFetchGifs01 = (category = 'goku') => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        const getImages = async () => {
            const newImages = await getGifs01(category);
            setImages(newImages);
            setIsLoading(false);
        }

        getImages();
    }, [category]);

    return {
        images,
        isLoading
    }
}