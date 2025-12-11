import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Genre {
    id: number;
    name: string;
};

interface FetchGenresResponse {
    count: number;
    results: Genre[];
};

const useGenres = () => {
    const [generes, setGeneres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
            .get<FetchGenresResponse>("/genres", { signal: controller.signal })
            .then((response) => {
                setGeneres(response.data.results);
                setLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);
    return { generes, error, isLoading };
};

export default useGenres;