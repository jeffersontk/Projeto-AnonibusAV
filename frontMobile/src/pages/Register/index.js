import React from 'react'
import { View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import logoBlack from '../../assets/logo.png'

import styles from './styles'

export default function Register() {
    const navigation = useNavigation()

    function navigationToLogin() {
        navigation.navigate('Login')
    }
    return (
        <KeyboardAvoidingView style={styles.container} >
            <View style={styles.border} >
                <View style={styles.content} >
                    <Image style={styles.logo} source={logoBlack} />
                    <Text style={styles.headerText}>
                        Crie sua conta e tenha conversas de forma anonima
                    </Text>
                    <View style={styles.form}>
                        <Text>Login</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.form}>
                        <Text>Nome Anonimo</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.form}>
                        <Text>Senha</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.buttonMenu}>
                        <TouchableOpacity style={styles.button}>
                            <Text>Cadastrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.opacityButton} onPress={navigationToLogin} >
                            <Text style={styles.signin}>Já tenho login</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.termos} >
                        <Text style={styles.termosText}> Termos de uso </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}