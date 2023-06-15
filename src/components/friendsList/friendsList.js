import propTypes from 'prop-types';


function FriendListItem({friends}) {
    
    return (
        <ul className="friend-list">

            {friends.map(({ avatar, name, isOnline, id }) =>
                
                <li key={id} className="friend-item">

                    {isOnline ? <span className="friend-status online-color"></span>
                        : <span className="friend-status offline-color"></span>
                }
                    
                <img className="friend-avatar" src={avatar} alt="User avatar" width="48" />
                    <p className="friend-name">{name}</p>
                </li>)}
            
        </ul>
    )
}

FriendListItem.propTypes = {
    friends: propTypes.array.isRequired
}

export { FriendListItem };