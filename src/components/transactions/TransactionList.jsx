import { useGlobalState } from "../../context/GlobalState"

function TransactionList() {
  const {transactions,deleteTransaction}=useGlobalState()
  return (
    <section className="w-full">
      <h3 className="mb-5">History</h3>
      <ul className="grid gap-y-5 gap-x-5">
      {transactions.map((transaction)=>(
        <li key={transaction.id} className="bg-zinc-600 px-5 py-1 rounded-lg flex w-full mb-2 items-center flex-col ">
          <p className="">{transaction.description}</p>
          <div className="flex gap-x-5 items-center justify-centerw-full ">
            <button className="text-sm bg-transparent" onClick={()=>deleteTransaction(transaction.id)}>X</button>
            <span>$ {transaction.amount}</span>
          </div>
        </li>
      ))}
      </ul>
    </section>
  )
}
export default TransactionList