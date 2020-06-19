import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingTop: Constants.statusBarHeight,
    },
    container: {
        backgroundColor: '#000',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10


    },
    header: {
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    titlePage: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    },
    line: {
        height: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    containerChat: {
        flex: 1,
        width: '100%'
    },
    containerInput: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        alignItems: 'center',
        padding: 10
    },
    input: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '85%',
        height: 40,
        borderRadius: 10,
        padding: 10,

    },
    inputM: {
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: 10,
    },

})