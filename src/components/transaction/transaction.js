import propTypes from 'prop-types';

function TransactionHistory({ transactions }) {
   
    return (
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

        <tbody>
            {transactions.map(({ id, type, amount, currency }) => <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                )} 
          
    </tbody>
    </table>
    )
};
  
TransactionHistory.propTypes = {
    transactions: propTypes.array.isRequired,
}


export { TransactionHistory };