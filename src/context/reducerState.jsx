// eslint-disable-next-line react-refresh/only-export-components
export default (state,action)=>{
  console.log("reducer",state,action)
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        transactions:[...state.transactions,action.payload]
      }
    case "DELETE_TRANSACTION":
      console.log("action.payload - DELETE_TRANSACTION",action.payload)
      return {
        ...state,
        transactions:state.transactions.filter((transaction)=>transaction.id!==action.payload)
      }
    default: 
      return state
  }    
}