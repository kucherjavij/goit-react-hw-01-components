import PropTypes from "prop-types";

import {TransactionHistoryTable,TransactionHistoryHead,TransactionHistoryBody } from "../styled_components/TransactionHistory.styled";

const TransactionHistory = ({items} )=>{
    return(
        <TransactionHistoryTable>
  <thead>
    <tr>
      <TransactionHistoryHead>Type</TransactionHistoryHead>
      <TransactionHistoryHead>Amount</TransactionHistoryHead>
      <TransactionHistoryHead>Currency</TransactionHistoryHead>
    </tr>
  </thead>
  
  <tbody>
  {items.map(item => (
  <tr key={item.id}>
      <TransactionHistoryBody>{item.type}</TransactionHistoryBody>
      <TransactionHistoryBody>{item.amount}</TransactionHistoryBody>
      <TransactionHistoryBody>{item.currency}</TransactionHistoryBody>
    </tr>))}
   
  </tbody>
</TransactionHistoryTable>
    )
}

TransactionHistory.propTypes ={
  items: PropTypes.arrayOf(PropTypes.object)
}

export default TransactionHistory