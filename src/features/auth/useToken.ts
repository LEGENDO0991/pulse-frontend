import { useState } from "react";

function useToken(): [string | null, (token: string) => void] {
    const [token, setTokenState] = useState<string | null>(
        () => localStorage.getItem("token")
    );

    const setToken = (newToken: string) => {
        setTokenState(newToken);
        localStorage.setItem("token", newToken);
    };

    return [token, setToken];
}

export default useToken;
