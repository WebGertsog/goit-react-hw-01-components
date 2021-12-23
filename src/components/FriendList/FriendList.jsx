import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((i) => (
        <FriendListItem obj={i} key={i.id} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;
