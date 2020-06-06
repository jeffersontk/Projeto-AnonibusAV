import React from 'react'
import { View, Text, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import styles from './styles'

import logoIconWhite from '../../assets/img/logoIconWhite.png'
import btnArrowLeft from '../../assets/img/btnArrowLeft.png'
import btnSend from '../../assets/img/btnSend.png'
import btnAddPhoto from '../../assets/img/btnAddPhoto.png'

export default function RoomChat() {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.header}>
                <Image style={{ width: 30, height: 30 }} source={btnArrowLeft} />
                <Text style={styles.titlePage}>Ponto 1</Text>
                <Image style={{ width: 35, height: 35 }} source={logoIconWhite} />
            </View>
            <View style={styles.line}></View>
            <View style={styles.containerChat}>

            </View>
            <View style={styles.containerInput}>
                <View style={styles.input}>
                    <TextInput style={styles.inputM} placeholder="Mande uma mensagem" />
                    <Image source={btnAddPhoto} />
                </View>
                <Image style={{ width: 40, height: 40 }} source={btnSend} />
            </View>
        </KeyboardAvoidingView>
    )
}