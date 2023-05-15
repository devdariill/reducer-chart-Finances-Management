import { useGlobalState } from "../context/GlobalState"
function Balance() {
  const {transactions} = useGlobalState()
  return (
    <div>
      Balance
      {JSON.stringify(transactions)}
    </div>

  )
}
export default Balance