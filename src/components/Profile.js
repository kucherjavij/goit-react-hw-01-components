const Profile = ({username, tag, location, avatar, stats}) => {return (
<div>
<div>
  <img
    src={avatar}
    alt={username}
   
  />
  <p>{username}</p>
  <p>{tag}</p>
  <p>{location}</p>
</div>

<ul>
  <li>
    <span>followers </span>
    <span>{stats.followers}</span>
  </li>
  <li>
    <span>stats </span>
    <span>{stats.views}</span>
  </li>
  <li>
    <span>likes </span>
    <span>{stats.likes}</span>
  </li>
</ul>
</div>)}
    
export default Profile