import React from 'react'
import Card from '@material-ui/core/Card';
import classes from './TransactionCard.css';

function TransactionCard() {
  return (
    <div className={classes.transaction_container}>
        <Card>Here comes the search bar</Card>
        <Card>Here the table of transaction</Card>
        <Card>Here the table of transaction</Card>

        <Card>Here the table of transaction</Card>
        <Card>Here the table of transaction</Card>
        <Card>Here the table of transaction</Card>
        <Card>Here the table of transaction</Card>

    </div>
  )
}

export default TransactionCard