import { useLoaderData, Link } from "react-router-dom"

export default function Stats()
{
    const stats = useLoaderData()

    return(
        <div className = "stats">
            {stats.map(stat => (
                <Link to = {stat.id.toString()} key = {stat.id}> 
                <p>{stat.scheduled}</p>
                <p>Based in {stat.venue.name}</p>
                </Link>
            ))}


        </div>

    )
}

//loader function
export const statsLoader  = async () => {
    const res = await fetch('https://api.sportradar.us/cricket-t2/en/teams/sr:competitor:107203/schedule.json?api_key=put8ea6ekdztyzrezyeqds2u')
    if(!res.ok)
    {
        throw Error('Could not fetch the careers')
    }

    return{team: res.team};

}