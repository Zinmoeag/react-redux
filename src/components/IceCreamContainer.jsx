import {buyIceCream} from '../redux'
import {connect} from "react-redux"

const IceCreamConatiner = (props) => {
	return (

		<>
			<h3>This is Iccrem  : {props.numOfIceCream}</h3>


			<button
				onClick = {props.buyIceCream}
			>
				buy icrem
			</button>
		</>
	)
}


const mapStateToProps = state => {
	return {
		numOfIceCream : state.iceCream.numOfIceCream,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		buyIceCream : () => dispatch(buyIceCream()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamConatiner);