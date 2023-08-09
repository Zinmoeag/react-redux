import {connect} from "react-redux"


import Button from "./Button"

const ItemContainer = (props) => {
	return (
		<>
			<div>
				<h3>
					{props.itemType} : {props.numOfItem} 
				</h3>

				<Button 
					itemType = {props.itemType}
				 />
			</div>
		</>
	)
}


const mapStateToProps = (state,ownProps) => {

	let item;
	switch(ownProps.itemType){
		case 'iceCream':
			item = state.iceCream
			break
		case 'coffee':
			item = state.coffee
	}


	return {
		numOfItem : item.number
	}
}


export default connect(mapStateToProps)(ItemContainer)