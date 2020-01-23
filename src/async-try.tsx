import { ChangeContext } from './app-routes'
import { useContext } from 'react'

export function useHandler() {
    const { contextId, setContextId } = useContext(ChangeContext)
    return async <T,>(foo?: Promise<T>) => {
        try {
            var result = await foo;
            if (!contextId) setContextId(true)
            return result;
        } catch (e) {
            console.log(e)
        }
        setContextId(false)
    }
}