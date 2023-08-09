import {connect} from 'react-redux'

import {buyCoffee} from "../redux"
import {buyIceCream} from "../redux"

const Button = (props) => {
	return (
		<button
			onClick = {props.buyItem}
		>
			Buy {props.itemType}
		</button>
	)
}


const mapDipatchToProps = (dispatch, ownProps) => {
	let buyItem;

	switch(ownProps.itemType){
		case "coffee" : 
			buyItem = buyCoffee
			break
		case "iceCream" : 
			buyItem = buyIceCream
			break
	}

	return {
		buyItem : () => {
			dispatch(buyItem())
		}
	}
	
}


export default connect(null, mapDipatchToProps)(Button);