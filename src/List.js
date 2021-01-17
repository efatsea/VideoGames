import React, {Component} from 'react';

class List extends Component {

  render(){
  	return(
    	<div className='Container'>
      		<h3> List of Gamers </h3>
            <ol className='listGamers'>
              {this.props.users.map((use)=>{
      			return(
                    <li key={use.lastName}>          
                      <p>{`${use.username} played 0 games`}</p>
                    </li>
                  )
              })}
            </ol>
      	</div>
    )
  }
}

export default List;