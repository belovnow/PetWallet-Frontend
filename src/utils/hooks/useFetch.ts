import {useEffect, useState} from "react";

export interface UseFetchResult<T> {
    data: T | undefined;
    loading: boolean;
    error: Error | undefined;
    load: () => void;
}

export function useFetch<T>(get: () => Promise<T>): UseFetchResult<T> {

    const [data, setData] = useState<T | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | undefined>(undefined);

    const load = () => {
        setLoading(true);
        setError(undefined);
        get()
            .then((result) => {
                setLoading(false);
                setData(result);
            })
            .catch((error) => {
                setLoading(false);
                setData(undefined);
                setError(error);
                console.error(error);
            })
    }

    useEffect(() => {
        load();
    }, []);

    return {data, loading, error, load};
}
