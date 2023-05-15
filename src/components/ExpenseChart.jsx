import { VictoryLabel, VictoryPie } from "victory"
import { useGlobalState } from "../context/GlobalState"

function ExpenseChart() {
  const {transactions}=useGlobalState()
  
  const income =transactions.
   filter(({amount})=>amount>0).
   reduce((acc,{amount})=>acc+Number(amount),0)
  const expense =transactions.
    filter(({amount})=>amount<0).
    reduce((acc,{amount})=>acc+Number(amount),0)*-1
  if(transactions.length===0){
    return <p className="text-center">No transactions yet</p>
  }
  return (
    <>
    {
      JSON.stringify(income)
    }
    {
      JSON.stringify(expense)
    }
    <VictoryPie 
      colorScale={["#f87171","#34d399"]}
      data={[
        {x:"Expenses",y:expense },
        {x:"Incomes",y:income }
      ]} 
      labelComponent={<VictoryLabel 
        angle={45}
        style={{fill:"white"}}
        />}
        animate={{
          duration:2000,        
        }}
        labels={({datum})=>`$ ${datum.y}`}
        // labels={({datum})=>`${datum.x}: $${datum.y}`}
      />      
    </>
  )
}
export default ExpenseChart