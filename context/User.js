import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});
UserContext.displayName = 'UserContext';

export const UserProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [user, setUser] = useState({ name: 'John Doe' })

    const login = (user) => {
        setUser(user)
    }

    return (
        <UserContext.Provider
            value={{
                isLoggedIn,
                user,
                login
            }}
        >
            {children}
        </UserContext.Provider>
    )
}