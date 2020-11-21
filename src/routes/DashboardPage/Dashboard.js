import React from "react";
import { Link } from 'react-router-dom';
import AnimationContainer from '../../components/AnimationContainer/AnimationContainer'
import './Dashboard.css'


class Dashboard extends React.Component {

    render() {
        
        return (
            <div className="main__dashboard">
                <h1>Latest Animations</h1>
              <Link className='dashboard__link--title' to='/editor'><h2>New Animation +</h2></Link> 
              <AnimationContainer />
            </div>
        );
    }
};

export default Dashboard