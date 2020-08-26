import React from 'react';
import authContext from './authContext'

const UserInfo = () => (
  <authContext.Consumer>
    {
      ({currentUser}) => (
        <div>
          <img style={styles.avatar} src={currentUser.avatarUrl}/>
          {currentUser.firstName}
        </div>
      )
    }
  </authContext.Consumer>
);

export default UserInfo;

const styles = {
  avatar: {
    maxWidth: '30px',
    maxHeight: '30px', 
  },
}