// eslint-disable-next-line react-refresh/only-export-components
export default (state,action)=>{
    console.log(state,action)
    switch (action.type) {
        case "ADD_TRANSACTION":
            return state
        default: 
            return state
    }    
}