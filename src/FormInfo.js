import React from 'react'

const stylesheet = {
	layout: {
		textAlign:'center',
		height:40,
	}
}
export default React.createClass ({
	render() {
		return (
			<form style={stylesheet.layout}>
				<input type="text" placeholder="What needs to be done?" />
			</form>
		)
	}
})