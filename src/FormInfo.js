import React from 'react'
import List from './Components/List.js'

const stylesheet = {
	layout: {
		textAlign:'center',
		height:40,
	}
}
export default React.createClass ({
	getInitialState() {
		return {
			aInput: ''
		}
	},
	aHandler(evt) {
		
		this.setState({
			aInput: evt.target.value
		})
	},
	handleSubmit(evt) {
		evt.preventDefault()
		this.refs.info.addTask(this.state.aInput)
		this.setState({
			aInput: ''
		})
	},
	render() {
		return (
			<div>
			<form style={stylesheet.layout} onSubmit={this.handleSubmit}>

				<input type="text" placeholder="What needs to be done?" onChange={this.aHandler} value={this.state.aInput} />
			</form>
			<List ref='info'/>
			</div>
		)
	}
})