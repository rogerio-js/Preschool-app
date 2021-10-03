import { ReactNode } from 'react';

interface Props {
   children: ReactNode; 
}

const Layout = ({children}: Props) => {
    return (
        <div>
            Upper Layout 
            {children}
            Lower Layout 
        </div>
    )
}

export default Layout
