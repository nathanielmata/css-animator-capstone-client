import React from 'react'
<<<<<<< HEAD
/* import './landingPage.css' */
import CustomButton from '../../components/CustomButton/CustomButton'
=======
import './landingPage.css'
import CustomButton from '../../components/customButton/CustomButton'
>>>>>>> animation-station-auth
import colors from '../../constants/colors'
import { useHistory } from 'react-router-dom'


const LandingPage = props =>{
    const history = useHistory()
    return(
        <section>
            
            <div className="landing">
                <h1>Animation Station</h1>
                <h4>Lets be creative.....
                Create and save CSS animatons right in your browser</h4>
                {/* <button onClick={() => history.push("/login")}>Try for free</button> */}
                <CustomButton onClickDo={() => history.push("/login") } color={colors.purple} >Animate</CustomButton>
            </div>
        </section>
        
    )
}

export default LandingPage;