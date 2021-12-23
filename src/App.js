import Profile from "./components/Profile/Profile";
import user from "./json/user-profiles.json";
import Statistics from "./components/Statistics/Statistics";
import stats from "./json/statistical-data.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./json/friends-list.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./json/transactions-history.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
