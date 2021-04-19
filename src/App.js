import React from "react";
import Profile from "./components/Profile/Profile";
import user from './components/Profile/user.json';
import Statistics from "./components/Statistics/Statistics";
import statisticalData from './components/Statistics/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from "./components/FriendList/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import items from "./components/TransactionHistory/transactions.json";
import './App.css'

const App = () => {
    return (
        <div className="container">
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Upload stats" stats={statisticalData} />
            <Statistics stats={statisticalData} />
            <FriendList friends={friends} />
            <TransactionHistory items={items} />
        </div>
  );
};

export default App;