import React from 'react';
import {
    Dimensions,
    FlatList,
    Text,
    View,
    StyleSheet,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import navigationOpt from "../../Config/NavigatorOption";
import { connect } from "react-redux";
import { GET_HOME_DETAIL } from "../../Config/WMActionTypes";
import { HOME_URL } from '../../Config/WMConstants';
import store from '../../redux/store';
import _ from 'underscore';
import ExpendableButton from '../../Components/ExpandbleViewCard';
import { SearchBar } from 'react-native-elements';

class HomeScreenView extends React.Component {

    static navigationOptions = ({ navigation }) => {
        let option = {
            headerTitle: "",
        }
        return navigationOpt(navigation, option)
    }


    constructor(props) {
        super(props)
        this.state = {
            screenWidth: Dimensions.get('window').width,
            prepareFood: true,
            pageTitle: '',
            expandProduction: false,
            expandMerchant: false,
            expandSpeciality: false,
            expandMember: false,
            connectivity: true,
            searchText: "",
            data: [],
            filteredData: []
        }

    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        store.dispatch({ type: GET_HOME_DETAIL, url: HOME_URL })
    }

    static getDerivedStateFromProps(props, state) {
        if (state.data !== props.homeData && props.homeData !== undefined && props.homeData.results.length > 0) {
          return {
            data: props.homeData.results,
          }
        }
        return null
      }

    search = searchText => {
        this.setState({searchText: searchText})
        const newData = this.state.data.filter(item => {      
            const itemData = `${item.name.toUpperCase()}   
            ${item.name.toUpperCase()} ${item.name.toUpperCase()}`;
            
             const textData = searchText.toUpperCase();
              
             return itemData.indexOf(textData) > -1;    
          });
          
          this.setState({ filteredData: newData });  
      };
    
    render() {

        const { homeData, loading } = this.props;
        let data = homeData || [];
        return (
            <View style={inner_styles.container}>
                <Spinner
                    visible={loading}
                    textContent={'Loading...'}
                    textStyle={inner_styles.spinnerTextStyle}
                />
                <SearchBar
                lightTheme
                clearIcon={{
                    iconStyle: { margin: 10 },
                    containerStyle: { margin: -10 },
                  }}
                    placeholder="Type Here..."
                    autoCorrect={false}
                    onChangeText={this.search}
                    value={this.state.searchText}
                />

                <FlatList
                    style={{ backgroundColor: '#f4f4f9' }}
                    data={this.state.filteredData && this.state.filteredData.length > 0 ? this.state.filteredData : data.results}
                    refreshing={false}
                    onRefresh={() => store.dispatch({ type: GET_HOME_DETAIL, url: HOME_URL })}
                    testID={'homeCardScrollView'}
                    renderItem={({ item, index }) => {
                        return (
                            <ExpendableButton
                                data={item}
                                key={index}
                                keyIndex={index}
                            />
                        )
                    }}
                />

                {loading ? <View style={inner_styles.exceptionView}>
                    {loading ? <Text style={inner_styles.exceptionText}>Loading </Text> : null}
                </View> : null}



            </View>);
    }
}

const mapStateToProps = state => ({
    homeData: state.apiReducer.homeData,
    loading: state.userReducer.loading
});

const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenView);

const inner_styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10,
        backgroundColor: '#f4f4f9',

    },
    spinnerTextStyle: {
        color: '#fff',
        fontSize: 12
    },
    exceptionText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#ccc',
        alignSelf: 'center'
    },
    exceptionView: {
        justifyContent: 'center',
        marginBottom: 300
    }
});