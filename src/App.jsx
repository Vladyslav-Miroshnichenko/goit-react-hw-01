import { Profile } from "./components/Profile/Profile";
import { FriendList } from "./components/FriendList/FriendList";
import profile from "./profile.json";
import friends from "./friends.json";

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
      {/* <Transaction /> */}
    </>
  );
};

export default App;
