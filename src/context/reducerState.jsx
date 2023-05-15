// eslint-disable-next-line react-refresh/only-export-components
export default (state,action)=>{
  console.log("reducer",state,action)
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        transactions:[...state.transactions,action.payload]
      }
    default: 
      return state
  }    
}