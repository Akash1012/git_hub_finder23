import React from "react";
import UserItem from "./UserItem";
import Spinner from "../Layout/Spinner";
import PropTypes from "prop-types";

const Users = props => {
  const { users, loading } = props;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} data={user} />
        ))}
      </div>
    );
  }
};

// Type Checking of Props
Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

// Adding CSS
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default Users;
