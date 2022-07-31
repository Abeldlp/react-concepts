import React from 'react'
import { Link } from 'react-router-dom'

const Navigation: React.FC = () => {
    return (
        <div>
            <Link to="/">HOME</Link> | <Link to="/another">ANOTHER</Link>
        </div>
    )
}

export default Navigation
