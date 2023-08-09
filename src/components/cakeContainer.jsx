import {connect} from 'react-redux'
import { buyCake } from '../redux'


const Button = ({onClick, item, condition}) => {

	
	if(condition){	
		return(
			<button
				onClick = {onClick}
				item = {item}
			>
				Buy {item}
			</button>
		)
	}
}


const cakeContainer =  ({numOfcake, cakes, buyCake}) => {

	return (
		<div>

			<h3>Cake : {numOfcake}</h3>

			<ul>
				<li>pucci : {cakes.pucci}</li>
				<li>aroma : {cakes.aroma}</li>
				<li>goodmorning : {cakes.goodmorning}</li>
			</ul>


			<Button 
				condition = {cakes.pucci > 0}
				onClick = {buyCake}
				item = 'pucci'
			/>

			<Button 
				condition = {cakes.aroma > 0}
				onClick = {buyCake}
				item = 'aroma'
			/>

			<Button 
				condition = {cakes.goodmorning > 0}
				onClick = {buyCake}
				item = 'goodmorning'
			/>

		</div>
	)
}


const mapStateToProps = state => {
	return {
		numOfcake : state.cake.numOfcake,
		cakes : state.cake.cakes
	}
}

const mapDispatchToProps = dispatch => {
	return {
		buyCake : (e) => (dispatch(buyCake(e)))
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(cakeContainer);


