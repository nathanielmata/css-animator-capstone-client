import React from "react";
import { Link } from 'react-router-dom';


class Dashboard extends React.Component {


    render() {
        
        return (
            <div className="main__dashboard">
                <h1>Latest Animations</h1>
              <Link to='/editor'>New Animation</Link> 
            </div>
        );
    }
};

export default Dashboard