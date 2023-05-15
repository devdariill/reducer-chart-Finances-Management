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
      <div className="flex justify-between">
        <h4 className="mr-5">Income</h4>
        {income}
      </div>
      <div className="flex justify-between">
        <h4>Expense</h4>      
        {expense}
      </div>
    </>
  )
}
export default IncomeExpenses