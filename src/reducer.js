export const initialState = {
    basket:[],
    user:null,
}

// selector and reduce func of javascript
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state,action)=>{
    console.log(action);
    switch(action.type){
        case'ADD_TO_BASKET':
            return {...state,//current state all properties eg:user
                basket:[...state.basket,action.item]}//change basket -> keep watever we had in current basket and add the action item performed
        case "REMOVE_FROM_BASKET": 
            //clone current basket       
           let newBasket = [...state.basket];
           const index = state.basket.findIndex((basketItem)=>
               basketItem.id === action.id
           )
               if(index >=0 ){
                //remove item if exists
                newBasket.splice(index,1) //remove 

               }
               else {
                   console.warn(`Can't remove product {id: ${action.id} } as its not available`)
               }
           return {...state,basket:newBasket}  
           //if you just return {state}, it will break
           //however if you return {..state} , it will not
        case 'EMPTY_BASKET':
            return {
              ...state,
              basket: []
            }

        case "SET_USER":
            return {
              ...state,
              user: action.user
            }
        default:
            return state;
    }
}


export default reducer;