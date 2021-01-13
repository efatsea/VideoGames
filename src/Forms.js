import React , {Component} from 'react';

class Forms extends Component {
	
  render(){
  	return(
      <form>
      	<h3>Add New User</h3>
      	<label>
          First Name:
          <input type='text'/>
      	</label>
      	<br/>
      	<label>
          Last Name:
          <input type='text'/>
      	</label>
        <br/>
        <label>
          Username:
          <input type='text'/>
      	</label>
      </form>
    
    );
  }
}

export default Forms; 