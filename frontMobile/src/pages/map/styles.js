import { StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingTop: Constants.statusBarHeight,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    searchContainer: {
        width: '100%',
    },
    mapStyles: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    navigateMenu: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#000',
        padding: 3,
        alignItems: 'center',

    },
    iconStyle: {
        width: 35,
        height: 35,
        marginRight: 10
    },
    search: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    }

})