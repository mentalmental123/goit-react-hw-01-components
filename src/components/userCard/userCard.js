import propTypes from 'prop-types';


// 

function UserCard({username, tag, location, avatar, stats : {followers, views, likes}} ) {
    
    return (<div className="profile">
        <div className="description">
            <img
                src={avatar}
                alt={username}
                className="avatar"
            />
            <p className="name">{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{likes}</span>
            </li>
        </ul>
    </div>);
    
};

UserCard.propTypes = {
    username: propTypes.string.isRequired,
    tag:propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string,
    followers: propTypes.number,
    views: propTypes.number,
    likes: propTypes.number,
    
}


export { UserCard };