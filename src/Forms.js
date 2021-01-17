import React , {Component} from 'react';

const user={};
let quer1
let quer2
let quer3

class Forms extends Component {
  
  constructor(props){
    super(props)
     this.addParent = this.addParent.bind(this);
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
 addParent=(event)=>{
   event.preventDefault();
   quer1=this.state.query1;
   quer2=this.state.query2;
   quer3=this.state.query3;
   this.props.addUser(quer1,quer2,quer3); 
    this.setState({query1:'',query2:'',query3:''})
   
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
        {this.state.query1!=='' & this.state.query2!=='' &&
        	<button onClick={this.addParent}>Add</button>
        }
      	
      </form>
    
    );
  }
}

export default Forms; 