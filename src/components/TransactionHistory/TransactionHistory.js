import React from "react";
import PropTypes from "prop-types";
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.transaction_history}>
            <thead>
                <tr>
                    <th className={styles.name}>Type</th>
                    <th className={styles.name}>Amount</th>
                    <th className={styles.name}>Currency</th>
                </tr>
            </thead>
            
            <tbody>
                {
                    items.map(({ id, type, amount, currency }) =>
                        <tr key={id}>
                            <td className={styles.type}>{type}</td>
                            <td className={styles.text}>{amount}</td>
                            <td className={styles.text}>{currency}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ).isRequired,
}

export default TransactionHistory;