import {AppScreens, navigationRef, TabScreens} from '@navigators/options';
import {StackActions} from '@react-navigation/native';

class NavigationService {
  static shared = new NavigationService();

  isReady = () => {
    return navigationRef.current?.isReady() || false;
  };

  goBack = number => {
    if (!this.isReady()) {
      return;
    }
    if (!number) {
      navigationRef.current?.goBack();
      return;
    }
    navigationRef.dispatch(StackActions.pop(number));
  };

  popToTop = () => {
    if (this.isReady()) {
      navigationRef.current?.dispatch(StackActions.popToTop());
    }
  };

  navigate(name, params) {
    // console.error('called');
    if (this.isReady()) {
      if (navigationRef.current?.getCurrentRoute()?.name === name) {
        return;
      }
      navigationRef.current?.dispatch(StackActions.push(name, params));
    }
  }

  getCurrentRoute() {
    if (this.isReady()) {
      return navigationRef.current?.getCurrentRoute();
    }
  }

  replace(screen, params) {
    console.log('screen', screen, params);
    if (this.isReady()) {
      console.log('screen', screen, 'ready');
      navigationRef.current?.dispatch(StackActions.replace(screen, params));
    }
  }

  replaceDashborad() {
    this.replace(AppScreens.Home);
  }
}

export default NavigationService;
