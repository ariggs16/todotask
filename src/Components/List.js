import React from 'react'

export default React.createClass({
	getInitialState() {
		return {
			aList: []

		}
	},
	addTask(a) {
		console.log(a)
		var aTask = {
			name: a,
			done: false
		}
		this.setState({
			aList: [...this.state.aList, aTask]
		})
	},

	render() {
		return (
		<div>
			{
				this.state.aList.map((task,index)=> {
					return <div>{task.name}</div>
				})
			}
		</div>
	  	)
	}
})