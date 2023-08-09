const iceCreamState = {
	number : 30,
}

export const iceCreamReducer = (state = iceCreamState, action) => {
	
	switch(action.type)
	{
		case 'BUY_ICECREAM' :
			return {
				...state,
				number : state.number - 1,
			}
		default : return state
	}
}