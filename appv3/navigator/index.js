import SplashScreen from '../screens/SplashScreen'
import { createStackNavigator } from 'react-navigation'
import {connect} from 'react-redux'
import PropTypes from "prop-types";
import React from "react";



export const AppNavigator = createStackNavigator({
    Splash: { screen: SplashScreen }
})


const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator />
);
AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
};
  
  const mapStateToProps = state => ({
    nav: state.nav
  });
  
  export default connect(mapStateToProps)(AppWithNavigationState);
  
