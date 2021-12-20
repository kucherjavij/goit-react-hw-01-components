import PropTypes from "prop-types";

import Friend from "./FriendListItem";

import { FriendsList } from "../styled_components/Friends.styled";

function FriendList ({items}){
return (<FriendsList>
    {items.map(item => (<Friend
    key={item.id}
    avatar={item.avatar}
    name={item.name}
    isOnline={item.isOnline}
    />))}
</FriendsList>)
}

Friend.propTypes={
    items: PropTypes.arrayOf(PropTypes.object)
  }

export default FriendList