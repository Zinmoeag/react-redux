// action
export const buyCake = (e) => {
	const item = e.target.getAttribute("item")

	return {
		type : 'BUY_CAKE',
		item : item,
	}
}