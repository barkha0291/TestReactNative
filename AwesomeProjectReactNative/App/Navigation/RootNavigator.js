import {
    createStackNavigator, createDrawerNavigator

} from 'react-navigation';
import HomeScreenView from '../Containers/HomeScreenView/HomeScreenView'
import SideMenu from '../Containers/NavigationDrower';


const AppDrawer = createStackNavigator({
        Home: {screen: HomeScreenView},
    },
    {
        index: 0,
        initialRouteName: 'Home',
        navigationOptions: {
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed',
            backgroundColor:'#0071e9',
            headerStyle: {
                backgroundColor: '#0071e9',
                paddingBottom: 1,
                shadowRadius: 0,
                width:400,
                shadowOffset: {
                    height: 0,
                },
                borderBottomWidth: 0,
            }
        }
    });
const App = createDrawerNavigator({
        AppDrawer: {screen: AppDrawer},
    },
    {
        contentComponent: SideMenu,
        drawerWidth: 300,
        headerMode: 'none',
    },
    {
        index: 0,
        initialRouteName: 'Home',
        navigationOptions: {
            gesturesEnabled: false,
            drawerLockMode: 'locked-closed',
            backgroundColor:'#0071e9',

            headerStyle: {
                backgroundColor: '#0071e9',
                paddingBottom: 1,
                shadowRadius: 0,
                shadowOffset: {
                    height: 0,
                },
                borderBottomWidth: 0,

            }
        }
    }
);

export default App;