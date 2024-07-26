/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"

export function TwitterFollowCard({userName, name, initialisFollowing,formatUserName}){

    const [isFollowing,setFollowing] = useState(initialisFollowing)

    const classFollowing = isFollowing ? 'tw-follow-button isFollowing': 'tw-follow-button'

    const textButton = isFollowing ? 'Siguiendo':'Seguir'

    const handleclick = () => setFollowing(!isFollowing)

    return(
        <article className='tw-follow-card'>
            <header className='tw-follow-header'>
                <img src={`https://unavatar.io/${userName}`} alt="Imagen de twitter" className='tw-follow-avatar'/>
                <div className='tw-follow-cardinfo'>
                    <strong>{name}</strong>
                    <span className='tw-follow-userid'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={classFollowing} onClick={handleclick}>{textButton}</button>
            </aside>
        </article>
    )
}