import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { UserCard }  from './components/userCard/userCard'
import userInfo from './data/user.json';

import uploadStats from './data/data.json';
import { Statistic } from './components/statSection/statSection';

import friends from './data/friends.json';
import { FriendListItem } from './components/friendsList/friendsList';

import transactions from './data/transactions.json';
import { TransactionHistory } from './components/transaction/transaction';

// syles
import './components/userCard/userCard.css'
import './components/statSection/statSection.css'
import './components/friendsList/friendsList.css'
import './components/transaction/transaction.css'






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <UserCard {...userInfo} />
      
    <Statistic title='Upload stats' stats={uploadStats} />
    <Statistic stats={uploadStats} />
    
    <FriendListItem friends={friends} />
    
    <TransactionHistory transactions= {transactions} />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

