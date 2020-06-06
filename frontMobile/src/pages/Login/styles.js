import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',

    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    input: {
        backgroundColor: '#fff',
        width: '90%',
        height: 50,
        marginBottom: 15,
        color: '#222',
        fontSize: 18,
        borderRadius: 7,
        padding: 10
    },

    btnSubmit: {
        backgroundColor: '#fff',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    submitText: {
        fontSize: 18
    },
    btnRegister: {
        marginTop: 15
    },
    registerText: {
        color: '#fff',
        fontSize: 16
    },
    termos: {
        marginTop: 70,
        alignItems: 'center',

    },
    termosText: {
        color: '#999'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalView: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10,
        width: '90%'
    },
    modalText: {
        fontSize: 17,
        width: '85%',
    },
    openButton: {

        borderRadius: 50,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'

    },
    textStyle: {
        fontSize: 22,
        color: '#fff'
    }

})