import { useGlobalState } from "../context/GlobalState"

function IncomeExpenses() {
  const {transactions}=useGlobalState()
  const income =transactions.
    filter(({amount})=>amount>0).
    reduce((acc,{amount})=>acc+Number(amount),0)
  const expense =transactions.
     filter(({amount})=>amount<0).
    reduce((acc,{amount})=>acc+Number(amount),0)

  return (
    <>
      <div>
        <h4>Income</h4>
        {income}
      </div>
      <div>
        <h4>Expense</h4>      
        {expense}
      </div>
    </>
  )
}
export default IncomeExpenses