import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../../../Navigation/AppNavigator';

const firstAction = RootNavigator.router.getActionForPathAndParams('AppDrawer');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const secondAction = RootNavigator.router.getActionForPathAndParams('AppDrawer');
const initialNavState = RootNavigator.router.getStateForAction(
    secondAction,
    tempNavState
);

function navigation(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case 'Logout':
            state = undefined;
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Home'}),
                state
            );
            break;
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}

const navigationReducer = combineReducers({
    navigation,
});

export default navigationReducer;