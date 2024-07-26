import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App (){
    const formatUserName = (userName) => `@${userName}`;
    return(
        <>
            <TwitterFollowCard 
            formatUserName = {formatUserName}
            userName="midudev" 
            name="Miguel Angel"
            initialisFollowing={true}/>

            <TwitterFollowCard 
            formatUserName = {formatUserName}
            userName="ochoa8al" 
            name="Abener Ochoa Lazo"
            initialisFollowing={false}/>        
        </>
        
    )
}