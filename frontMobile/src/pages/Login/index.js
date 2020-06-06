import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Animated, Keyboard, Modal, Alert, TouchableHighlight } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import logoWhite from '../../assets/logoWhite.png'

import styles from './styles'

export default function Login() {
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }))
    const [opacity] = useState(new Animated.Value(0))
    const [logo] = useState(new Animated.ValueXY({ x: 270, y: 65 }))
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)

        Animated.parallel([

            Animated.spring(offset.y, {
                toValue: 0,
                speed: 0.3,
                bounciness: 5
            }),
            Animated.timing(
                opacity, {
                toValue: 1,
                duration: 800
            }
            )
        ]).start()
    }, [])

    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 165,
                duration: 300,
            }),
            Animated.timing(logo.y, {
                toValue: 42,
                duration: 300,
            })
        ]).start()
    }
    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 270,
                duration: 300,
            }),
            Animated.timing(logo.y, {
                toValue: 65,
                duration: 300,
            })
        ]).start()
    }

    const navigation = useNavigation()

    function navigationToRegister() {
        navigation.navigate('Register')
    }
    function navigationToRoom() {
        navigation.navigate('Room')
    }
    return (
        <KeyboardAvoidingView style={styles.background} >

            <View style={styles.containerLogo} >
                <Animated.Image style={{
                    width: logo.x,
                    height: logo.y
                }} source={logoWhite} />
            </View>
            <Animated.View style={[styles.container, {
                opacity: opacity,
                transform: [
                    { translateY: offset.y }
                ]
            }]} >

                <TextInput placeholder="E-mail" autoCorrect={false} style={styles.input} onChangeText={email => setEmail(email)} Value={email} />

                <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input} onChangeText={senha => setSenha(senha)} Value={senha} />


                <TouchableOpacity style={styles.btnSubmit} onPress={navigationToRoom} >
                    <Text style={styles.submitText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnRegister} onPress={navigationToRegister}>
                    <Text style={styles.registerText}>Não tenho login!</Text>
                </TouchableOpacity>

                <Modal animationType="slide" transparent={true} visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Eu aceito os termos de uso ao me cadastrar neste aplicativo,
                                me responsabilizando por quaisquer atos que fogem de uma boa conduta durante o uso.</Text>
                            <TouchableHighlight style={styles.openButton} onPress={() => { setModalVisible(!modalVisible); }}>
                                <Text style={styles.textStyle}>X</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity style={styles.termos} onPress={() => {
                    setModalVisible(!modalVisible);
                }} >
                    <Text style={styles.termosText}> Termos de uso </Text>
                </TouchableOpacity>
            </Animated.View>

        </KeyboardAvoidingView>
    )
}