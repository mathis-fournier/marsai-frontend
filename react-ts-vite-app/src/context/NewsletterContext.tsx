import React, { createContext, useState } from 'react';

export type NewsletterContextType = {
    object: string;
    setObject: React.Dispatch<React.SetStateAction<string>>;
};

export const MyContext = createContext<NewsletterContextType>({
    object: '',
    setObject: () => {},
});

export const NewsletterProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [object, setObject] = useState<string>('');
    return <MyContext.Provider value={{ object, setObject }}>{children}</MyContext.Provider>;
};