export function saveChange<T, K extends keyof T>([state, setState]: [T, (v: T) => void], key: K) {
    return {
        value: state[key],
        onChange: (event: { target: { value: any } }) => setState({
            ...state,
            [key]: event.target.value
        })
    }
}