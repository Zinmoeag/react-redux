const initailState = {

	cakes : {
		pucci : 5,
		goodmorning :3,
		aroma:2,
	},
	numOfcake : 10,

}

export const cakeReducer = (state = initailState , action) => {

	switch(action.type){
		case 'BUY_CAKE' :

			const item = action.item;

			return {
				...state,
				cakes : {
					...state.cakes,
					pucci : item === 'pucci' ? state.cakes["pucci"] - 1 : state.cakes["pucci"],
					aroma : item === 'aroma' ? state.cakes["aroma"] - 1 : state.cakes["aroma"],
					goodmorning : item === 'goodmorning' ? state.cakes["goodmorning"] - 1 : state.cakes["goodmorning"],
				},
				numOfcake : state.numOfcake - 1,
			}

		default: return state
	}
}