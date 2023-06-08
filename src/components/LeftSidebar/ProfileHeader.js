import React from "react";

function ProfileHeader({ user, showNewConvoTab, searchChange }) {
  let handleClick = () => {
    showNewConvoTab(true);
  };

  return (
    <>
      <div className="l">
        <div className="header">
          <img className="avatar" src={user.image} alt="profile-pic" />
          <p>{user.name}</p>
        </div>
        <div className="new-convo">
          <span>
            {" "}
            <span onClick={handleClick}>New Chat</span>
          </span>
        </div>
      </div>
      <div
        style={{
          margin: "auto",
          paddingTop: "px",
        }}
      >
        <input
          id="inputStyle"
          className="mb-3"
          placeholder="Search Name"
          onChange={searchChange}
        ></input>
      </div>
    </>
  );
}

export default ProfileHeader;
