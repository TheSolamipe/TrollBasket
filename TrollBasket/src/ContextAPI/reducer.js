export const initialState = {
  basket: [],
  view: [],
  user: null,
};

//A selector to give us information at the ui side
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
      case "ADD_TO_VIEW":
        //Logic for adding item to View
        return {
          ...state,
          view: [...state.view, action.payload],
        };
        case "EMPTY_VIEW":
          return {
            ...state,
            view: [],
          };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "REMOVE_FROM_BASKET":
      //LOGIC FOR REMOVING ITEM FROM BASKET

      //cloned basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //it exists in basket, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id} as its not in basket)`
        );
      }
      return { ...state, basket: newBasket };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}

export default reducer;
