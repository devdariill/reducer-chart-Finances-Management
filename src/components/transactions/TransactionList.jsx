import { useGlobalState } from "../../context/GlobalState"

function TransactionList() {
  const {transactions}=useGlobalState()
  return (
    <section>
      {transactions.map((transaction)=>(
        <div key={transaction.id}>
          <h3>{transaction.description}</h3>
          <p>{transaction.amount}</p>
          <button onClick={()=>console.log(transaction.id)}>❌</button>
        </div>
      ))}
    </section>
  )
}
export default TransactionList