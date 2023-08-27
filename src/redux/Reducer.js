const initialState = {
    money : ''
}


export const Reducer = (state = initialState , action) => {

     switch(action.type) {
        case 'ADD_MONEY' : 
        // if(state.money !== 200){
            return {...state , money : state.money + action.payload};
        // }else{
        //     return {...state , money : state.money  + 0}
        // }

    
       
        // case 'GET_MONEY' : 
        // if(state.money !== 0)
        // return {...state , money : state.money - action.payload  } 
        default : {
            return state
        }
     }

}