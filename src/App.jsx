import Balance from "./components/Balance"
import ExpenseChart from "./components/ExpenseChart"
import Header from "./components/Header"
import IncomeExpenses from "./components/IncomeExpenses"
import TransactionForm from "./components/transactions/TransactionForm"
import TransactionList from "./components/transactions/TransactionList"
import { GlobalProvider } from "./context/GlobalState"

function App() {
  return (
    <GlobalProvider>
      <main className="h-screen flex justify-center items-center bg-zinc-950">
        <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-10 container w-4/6 mx-auto">
          <div className="grid">
            <section className="grid gap-y-1 my-5 max-h-[300px] max-w-[300px]">
              <Header/>
              <IncomeExpenses/>
              <Balance/>
              <TransactionForm/>
              <ExpenseChart/>
            </section>
          </div>
          <section className="flex-1">
            <TransactionList/>
          </section>
        </div>
      </main>
    </GlobalProvider>
  )
}

export default App
