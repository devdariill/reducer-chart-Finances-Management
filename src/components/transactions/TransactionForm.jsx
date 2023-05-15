import { useState } from "react"
import { useGlobalState } from "../../context/GlobalState"

function TransactionForm() {
  const {addTransaction}=useGlobalState()
  const [description, setDescription] = useState(0)
  const [amount, setAmount] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault()
    addTransaction({
      id:window.crypto.randomUUID(),
      description,
      amount
    })
    console.log(description,amount)
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Description" 
          onChange={(e)=>setDescription(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="00.00" 
          step={0.01}
          onChange={(e)=>setAmount(e.target.value)} 
        />
        <button>Add Transaction</button>
      </form>
    </section>
  )
}
export default TransactionForm