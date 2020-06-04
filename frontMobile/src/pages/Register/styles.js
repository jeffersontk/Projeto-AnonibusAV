import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'

    },
    border: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10

    },
    content: {
        flex: 1,
        borderWidth: 5,
        borderRadius: 10,
        padding: 10,

    },
    headerText: {
        fontSize: 32,
        marginTop: 10,
        marginBottom: 20
    },
    form: {
        paddingTop: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
    },
    buttonMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        width: 120,
        height: 30,

        borderRadius: 5,
    },
    opacityButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 30,
    },
    singnin: {
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: '#000',
    },
    termos: {
        marginTop: 60,
        alignItems: 'center',

    },
    termosText: {
        color: '#999'
    }
})