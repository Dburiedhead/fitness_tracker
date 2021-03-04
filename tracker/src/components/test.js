import React, { Component } from 'react';


function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
  
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

class Test extends Component {
    render() {

        return (
            <div>
                <h1>Test page</h1>
                <p>affichage conditionné</p>
                {/* Try changing to isLoggedIn={true}: */}
                <Greeting isLoggedIn={false} />,
            </div>
        )
    }
}
  
export default Test;