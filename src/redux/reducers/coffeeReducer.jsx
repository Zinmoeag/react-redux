const coffeeState = {
	number : 20,
}

export const coffeeReducer = (state = coffeeState , action) => {
	switch(action.type){
		case "BUY_COFFEE":
			return {
				...state,
				number : state.number - 1,
			}

		default :
			return {
				...state,
			}
	}
}
