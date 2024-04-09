import { useState } from 'react'
import { EXPO_PUBLIC_API_URL } from '@env'

interface UsePostApiReturnType<T>  {
    isLoading: boolean;
    error: Error | null;
    data: T | null;
    postApi: (url:string, requestData: any) => Promise<void>;
  };

const usePost = <T>(): UsePostApiReturnType<T> => {
    const apiUrl = EXPO_PUBLIC_API_URL
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<T | null>(null);

    const postApi = async (url: string, body: object) => {
        setIsLoading(true)
        setError(null);
        try {
            const response = await fetch(`${apiUrl}${url}`, {
                method: 'POST',
                body: JSON.stringify(body),
            })
            const data = await response.json()
            setData(data)
        } catch (error) {
            setError(error as Error)
        } finally {
            setIsLoading(false)
        }
    }

    return { data, error, isLoading, postApi }
}

  
export default usePost
