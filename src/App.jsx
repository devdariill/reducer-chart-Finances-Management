import Balance from "./components/Balance"
import Header from "./components/Header"
import IncomeExpenses from "./components/IncomeExpenses"
import TransactionForm from "./components/transactions/TransactionForm"
import TransactionList from "./components/transactions/TransactionList"
import { GlobalProvider } from "./context/GlobalState"

function App() {
  return (
    <GlobalProvider>
      <main className="h-screen flex justify-center items-center bg-zinc-950">
        <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-10 container w-3/6 mx-auto">
          <section className="grid gap-y-1 w-4/6 my-5">
            <Header/>
            <IncomeExpenses/>
            <Balance/>
            <TransactionForm/>
          </section>
          <TransactionList/>
        </div>
      </main>
    </GlobalProvider>
  )
}

export default App
