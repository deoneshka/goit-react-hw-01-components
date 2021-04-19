import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../images/default.jpg";
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar=defaultImage, stats }) => {
    const { followers, views, likes } = stats;

    return (
    <div className={styles.profile}>
        <div className={styles.description}>
            <img
                src={avatar}
                alt="Аватар пользователя"
                className={styles.avatar}
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
            <li className={styles.item}>
                <span className={styles.label}>Followers</span>
                <span className={styles.quantity}>{followers}</span>
            </li>
            <li className={styles.item}>
                <span className={styles.label}>Views</span>
                <span className={styles.quantity}>{views}</span>
            </li>
            <li className={styles.item}>
                <span className={styles.label}>Likes</span>
                <span className={styles.quantity}>{likes}</span>
            </li>
        </ul>
        </div>
    )
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        })
};

export default Profile;