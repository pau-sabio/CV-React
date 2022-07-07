import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { Button } from '@nextui-org/react';





export default function Navbar() {
    
    return (

        <nav className="nav">
        <ul>
            <li><Button shadow color="primary" auto><CustomLink to="/">CV</CustomLink></Button></li>
            <li><Button shadow color="secondary" auto><CustomLink to="/work">Work</CustomLink></Button></li>
            <li><Button shadow color="success" auto><CustomLink to="/contact">Contact</CustomLink></Button></li>
        </ul>
        
        </nav>

    )
}

    function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
        </Link>
        </li>
    )
}
