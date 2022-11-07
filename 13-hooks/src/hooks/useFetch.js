import { useEffect, useState } from "react";


export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    useEffect(() => {

        const getFetch = async () => {
            
            let err = null;
            let data = null;
            try {
                const resp = await fetch(url);
                data = await resp.json();
            } catch (error) {
                alert(error)
                err = error
            }

            setState({
                data,
                isLoading: false,
                hasError: err,
            });
        }
        getFetch();
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}
