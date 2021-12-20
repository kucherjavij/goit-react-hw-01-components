import PropTypes from "prop-types";

import {ProfileContainer,ImgContainer,Img,ProfileInfo,StatisticsList,StatisticsItems} from '../styled_components/Profile.styled'

const Profile = ({username, tag, location, avatar, stats}) => {return (
<ProfileContainer>
<ImgContainer>
  <Img
    src={avatar}
    alt={username}
   
  />
  <ProfileInfo>{username}</ProfileInfo>
  <ProfileInfo>{tag}</ProfileInfo>
  <ProfileInfo>{location}</ProfileInfo>
</ImgContainer>

<StatisticsList>
  <StatisticsItems>
    <span>followers </span>
    <span>{stats.followers}</span>
  </StatisticsItems>
  <StatisticsItems>
    <span>stats </span>
    <span>{stats.views}</span>
  </StatisticsItems>
  <StatisticsItems>
    <span>likes </span>
    <span>{stats.likes}</span>
  </StatisticsItems>
</StatisticsList>
</ProfileContainer>)}

Profile.propTypes={
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object
}
    
export default Profile