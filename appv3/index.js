import React, { PureComponent } from 'react';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import SplashScreen from './screens/SplashScreen'
import AppWithNavigationState from './navigator'

export default class Application extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
