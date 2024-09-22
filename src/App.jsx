import { Profile } from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import Transaction from "./components/Transaction/Transaction";
import profile from "./profile.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

export const App = () => {
  return (
    <>
      <Profile
        name={profile.username}
        tag={profile.tag}
        location={profile.location}
        image={profile.avatar}
        stats={profile.stats}
      />
      <FriendList friends={friends} />
      <Transaction items={transactions} />
    </>
  );
};

export default App;
