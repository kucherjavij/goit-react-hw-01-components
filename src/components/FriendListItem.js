import PropTypes from "prop-types";

import { FriendsItem } from "../styled_components/Friends.styled";

const Friend = ({avatar, name, isOnline }) => {return(
    <FriendsItem>
    <span >{isOnline}</span>
    <img src={avatar} alt="User avatar" width="48" />
    <p>{name}</p>
  </FriendsItem>
)}

Friend.propTypes={
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string
}

export default Friend