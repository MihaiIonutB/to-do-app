import { ChangeContext } from './app-routes'
import { useContext, useEffect } from 'react'

export function useHandler(foo?: Promise<any>, deps?: readonly any[]) {
    const { contextId, setContextId } = useContext(ChangeContext)
    // useEffect(() => {
    return async () => {
        try {
            await foo;
            if (!contextId) setContextId(true)
        } catch (e) {
            console.log(e)
        }
        setContextId(false)
    }
    // }, deps);
    // return async () => {
    //     try {
    //         await foo;
    //         //if (!contextId) setContextId(true)
    //     } catch (e) {
    //         console.log(e)
    //     }
    //     //  setContextId(false)
    // }
} 