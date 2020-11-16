import React from "react";
import { Link } from 'react-router-dom';
import AnimationContainer from './AnimationContainer/AnimationContainer'


class Dashboard extends React.Component {


    render() {
        
        return (
            <div className="main__dashboard">
                <h1>Latest Animations</h1>
              <Link to='/editor'>New Animation</Link> 
              <AnimationContainer />
            </div>
        );
    }
};

export default Dashboard