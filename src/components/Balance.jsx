import { useGlobalState } from "../context/GlobalState"

function Balance() {
  const {transactions}=useGlobalState()
  const amounts =transactions.map((transaction)=>(
    +transaction.amount
  ))
  const total=amounts.reduce((acc,item)=>(acc+=item),0)
  return (
    <div>
      Balance $
      {
        JSON.stringify(total,null,2)
      }
    </div>

  )
}
export default Balance