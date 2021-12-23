import PropTypes from "prop-types";

function FriendListItem({ obj }) {
  const { avatar, name, isOnline } = obj;
  return (
    <li className="item">
      <span className="status"></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  obg: PropTypes.exact({
    key: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
export default FriendListItem;
