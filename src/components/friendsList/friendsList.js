import propTypes from "prop-types";
import css from "./friendsList.module.css";

function FriendListItem({ friends }) {
  return (
    <ul className={css["friend-list"]}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={css["friend-item"]}>
          {isOnline ? (
            <span className={css[("friend-status", "online-color")]}></span>
          ) : (
            <span className={css[("friend-status", "offline-color")]}></span>
          )}

          <img
            className={css["friend-avatar"]}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css["friend-name"]}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendListItem.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
    })
  ).isRequired,
};

export { FriendListItem };
