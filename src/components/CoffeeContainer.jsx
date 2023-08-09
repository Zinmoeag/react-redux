import {buyCoffee} from '../redux'
import {connect} from 'react-redux'


const CoffeeContainer = ({coffee,buyCoffee}) => {
	return (
		<div>
			<h3>Numbers of Coffee left : {coffee.numOfCoffee} </h3>
			<button
				onClick = {buyCoffee}
			>
			Buy Coffee
			</button>
		</div>
	)
}


const mapStateToProps = state => {
	return {
		coffee : state.coffee,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		buyCoffee : () => dispatch(buyCoffee())
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(CoffeeContainer);