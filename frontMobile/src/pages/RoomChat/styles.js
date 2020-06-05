import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
        padding: 10
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    titlePage: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    },
    line: {
        height: 2,
        backgroundColor: '#fff',
        width: '100%'
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
    }
})