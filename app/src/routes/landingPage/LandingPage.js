import React from 'react'
import './landingPage.css'
import CustomButton from '../../components/customButton/CustomButton'
import colors from '../../constants/colors'

const LandingPage = props =>{
    return(
        <section>
            <CustomButton onClickDo={() => {}} color={colors.primaryColor} >Animate</CustomButton>
        </section>
    )
}

export default LandingPage;