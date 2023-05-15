import { useGlobalState } from "../../context/GlobalState"

function TransactionList() {
  const {transactions,deleteTransaction}=useGlobalState()
  return (
    <section>
      {transactions.map((transaction)=>(
        <div key={transaction.id}>
          <h3>{transaction.description}</h3>
          <p>{transaction.amount}</p>
          <button onClick={()=>deleteTransaction(transaction.id)}>❌</button>
        </div>
      ))}
    </section>
  )
}
export default TransactionList