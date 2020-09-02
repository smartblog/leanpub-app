import React from 'react';
import AuthContext from './AuthContext'

const UserInfo = () => (
  <AuthContext.Consumer>
    {
      ({currentUser}) => (
        <div>
          <img style={styles.avatar} src={currentUser.avatarUrl}/>
          {currentUser.firstName}
        </div>
      )
    }
  </AuthContext.Consumer>
);

export default UserInfo;

const styles = {
  avatar: {
    maxWidth: '30px',
    maxHeight: '30px', 
  },
}