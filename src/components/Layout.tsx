import { ReactNode } from 'react';

interface Props {
   children: ReactNode; 
}

const Layout = ({children}: Props) => {
    return (
        <>
            Upper Layout 
            {children}
            Lower Layout 
        </>
    )
}

export default Layout
