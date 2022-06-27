import { createContext, useState } from "react";

const LoadingContext = createContext({
    loading: false,
    changeLoadingState: () => {}
})

export const LoadingContextProvider = (props) => {
    const [loading, setLoading] = useState(false)

    const changeLoadingState = () => {
        setLoading(!loading)
    }

    const context = {
        loading: loading,
        changeLoadingState: changeLoadingState
    }

    return (
        <LoadingContext.Provider value={context}>
            {props.children}
        </LoadingContext.Provider>
    )
}

export default LoadingContext