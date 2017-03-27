import React from 'react'
import FormInfo from './FormInfo'
import List from './List'

const stylesheet = {
  form: {
    borderStyle:'solid',
    background:'rgb(244,244,244)',
    width:400,
    height:500,
    margin:'auto',
    marginTop:150,
  },
  header: {
    textAlign:'center',
    color:'rgb(235,219,219)',
    fontSize:40,
    fontWeight:100,
  }
}
export default React.createClass({
  render() {
    return (
      <div style={stylesheet.form}>
       <h1 style={stylesheet.header}>todos</h1>
       <FormInfo />
       <List />
      </div>
    )
  }
})
