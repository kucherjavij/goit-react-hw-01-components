import { Fragment } from 'react';

import Profile  from '../components/Profile'
import user from '../user.json'

import Statistics from '../components/Statistics';
import data from '../data.json'
import Section from '../components/Section'

import FriendList from '../components/FriendList';
import friends from '../friends.json';

import TransactionHistory from '../components/TransactionHistory'
import transactions from '../transactions.json'

import {Container} from './App.styled'

function App() {
  return (
    <Container>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />

    <Section title="Upload stats" >
    <Statistics stats={data}/>
    </Section>

    <FriendList items={friends} />
    
    <TransactionHistory items={transactions} />

    </Container>
  );

}

export default App;
