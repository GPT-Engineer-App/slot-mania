import React from 'react';

const Account = ({ user, balance }) => {
  return (
    <div>
      <h1>Account</h1>
      <p>Username: {user.username}</p>
      <p>Balance: {balance}</p>
      {}
    </div>
  );
};

export default Account;