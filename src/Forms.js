import React , {Component} from 'react';

class Forms extends Component {
  constructor(props){
    super(props)
    this.state={
      query1:'',
      query2:'',
      query3:''  
    }
  }
  handleName=(event)=>{
    this.setState({query1:event.target.value})
  }
  handleLastName=(event)=>{
    this.setState({query2:event.target.value})
  }
  handleUsername=(event)=>{
    this.setState({query3:event.target.value})
  }
  render(){
  	return(
      <form>
      	<h3>Add New User</h3>
      	<label>
          First Name:
          <input type='text' 
                 value={this.state.query1}
  				 onChange={this.handleName}/>
      	</label>
      	<br/>
      	<label>
          Last Name:
          <input type='text' 
                 value={this.state.query2}
                 onChange={this.handleLastName}/>
      	</label>
        <br/>
        <label>
          Username:
          <input type='text'
				 value={this.state.query3}
                 onChange={this.handleUsername}/>
      	</label>
      	<br/>
      	<button>Add</button>
      </form>
    
    );
  }
}

export default Forms; 