import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../images/default.jpg";
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar = defaultImage, name, isOnline }) => {
    return (
        <div className={styles.item}>
            {
                isOnline
                ? (<span className={styles.status_on}></span>)
                : (<span className={styles.status_off}></span>)
            }
            <img className={styles.avatar} src={avatar} alt="" width="48" />
            <p className={styles.name}>{name}</p>
        </div>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;