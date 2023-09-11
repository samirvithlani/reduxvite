export const cartReducer = (state=[],action)=>{

    switch(action.type){
        case 'ADD_TO_CART':
            console.log('cartReducer',action.payload)
            return [...state,action.payload]
        default:
            return state;            
    }

}
