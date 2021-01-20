import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user/actions';

const UsersContainer = ({ userData }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(userData);

  return (
    <>
      {userData.loading && <h2>Loading</h2>}

      {!userData.loading && (
        userData.error && <h2>{userData.error}</h2>,
        !userData.error && (
          <div>
            <h2>Users List</h2>
            <div>
              {userData &&
                userData.users &&
                userData.users.map((user, index) => {
                  return (
                    <p key={index}>{user.name}</p>
                  );
                })
              }
            </div>
          </div>
        )
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      return dispatch(fetchUsers());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
