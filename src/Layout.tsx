import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    children: React.ReactElement
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <div style={{ position: 'fixed', top: 50, left: 50 }}>
                <Link to="/">HOME</Link> | <Link to="/another">ANOTHER</Link>
            </div>
            <div>{children}</div>
        </div>
    )
}

export default Layout
