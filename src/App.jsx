import { Profile } from "./components/Profile/Profile";
import profile from "./data/profile.json";
import React from "react";

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
      {/* <FriendList />
      <Transaction /> */}
    </>
  );
};

export default App;
