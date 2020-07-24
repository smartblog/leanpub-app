import React from 'react';

class AuthorCard extends React.Component {
    render() {
        const {
            author: { name, email, avatar, about}
        } = this.props;

        return (
            <div style={styles.authorCard}>
                <div>Author</div>
                <div >
                    <img src={avatar} alt={name} style={styles.avatar}/>
                </div>
                <div>{name}</div>
                <div>{about}</div>
                <div>{email}</div>
            </div>
        )
    }
}

export default AuthorCard;

const styles = {
    authorCard: {
        padding: '15px 10px'
    },
    avatar: {
        maxHeight: '100px',
        width: 'auto'
    }
}