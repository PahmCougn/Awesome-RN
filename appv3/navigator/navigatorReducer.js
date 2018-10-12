import { AppNavigator } from "../navigator"
import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'

const initialNavState = createStateForNewScreen("Splash")

const applicationNavigationReducer = (state = initialNavState, action) => {
    let nextState
    switch (action.type) {
        case "Splash":
            {
                nextState = createStateForNewScreen("Splash", state);
            }
            break;

        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState
}

function createStateForNewScreen(screenName, currentState) {
    return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: screenName }),
        currentState
    );
}

export default applicationNavigationReducer