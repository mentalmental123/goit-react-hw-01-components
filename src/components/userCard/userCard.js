import propTypes from "prop-types";

import css from "./userCard.module.css";
//

function UserCard({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css["profile"]}>
      <div className={css["description"]}>
        <img src={avatar} alt={username} className="avatar" />
        <p className={css["name"]}>{username}</p>
        <p className={css["tag"]}>@{tag}</p>
        <p className={css["location"]}>{location}</p>
      </div>

      <ul className={css["stats"]}>
        <li>
          <span className={css["label"]}>Followers</span>
          <span className={css["quantity"]}>{followers}</span>
        </li>
        <li>
          <span className={css["label"]}>Views</span>
          <span className={css["quantity"]}>{views}</span>
        </li>
        <li>
          <span className={css["label"]}>Likes</span>
          <span className={css["quantity"]}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

UserCard.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string,
  stats: propTypes.shape({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
  }).isRequired,
};

export { UserCard };
