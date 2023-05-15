import { useGlobalState } from "../context/GlobalState"
function Balance() {
  const {total} = useGlobalState()
  return (
    <div>
      Balance
      {JSON.stringify(total)}
    </div>

  )
}
export default Balance