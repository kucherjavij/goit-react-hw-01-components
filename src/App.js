import { Fragment } from 'react';
import Profile  from './components/Profile'
import user from './user.json'
function App() {
  return (
    <Fragment>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
    </Fragment>
  );
}

export default App;
