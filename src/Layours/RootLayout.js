
import {NavLink} from 'react-router-dom'
export default function RootLayout()
{
    return(
        <div className = "root-layout">
         <header>
            <nav>
            <h1>Cricket Stats Saga</h1>
            <NavLink to = "/">Home </NavLink>
            <NavLink to = "stats">Stats</NavLink>
        </nav>
            



         </header>
         </div>
    )
}