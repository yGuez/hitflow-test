import { useState } from 'react'
import { EXPO_PUBLIC_API_URL } from '@env'

const usePost = () => {
    const apiUrl = EXPO_PUBLIC_API_URL
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const postApi = async (url: string, body: object) => {
        console.log('url', apiUrl)
        setIsLoading(true)
        try {
            const response = await fetch(`${apiUrl}${url}`, {
                method: 'POST',
                body: JSON.stringify(body),
            })
            const data = await response.json()
            setData(data)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    return { data, error, isLoading, postApi }
}

export default usePost
