import React from 'react'
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import logoIconWhite from '../../assets/img/logoIconWhite.png'
import { Icon } from 'react-native-elements'
import btnSend from '../../assets/img/btnSend.png'
import btnAddPhoto from '../../assets/img/btnAddPhoto.png'

export default function RoomChat() {
    const navigation = useNavigation()
    function handdleGoback() {
        navigation.goBack()
    }
    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handdleGoback}>
                        <Icon name="keyboard-arrow-left" type='material' size={55} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.titlePage}>Ponto</Text>
                    <Image style={{ width: 35, height: 35, marginRight: 10 }} source={logoIconWhite} />
                </View>
                <View style={styles.line} />
                <View style={styles.containerChat}>

                </View>
                <View style={styles.containerInput}>
                    <View style={styles.input}>
                        <TextInput style={styles.inputM} placeholder="Mande uma mensagem" />
                        <Image source={btnAddPhoto} />
                    </View>
                    <Image style={{ width: 40, height: 40 }} source={btnSend} />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}