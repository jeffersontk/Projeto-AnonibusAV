import React from 'react'
import { View, Image, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import logoWhite from '../../assets/logoWhite.png'
import logoIcon from '../../assets/img/logoIcon.png'
import arrowRight from '../../assets/img/arrowRight.png'
import iconProfile from '../../assets/img/iconProfile.png'
import { Icon } from 'react-native-elements'

import styles from './styles'

export default function Room() {

    const navigation = useNavigation()

    function navigationToLogin() {
        navigation.navigate('Login')
    }
    function navigationToProfile() {
        navigation.navigate('Profile')
    }
    function navigationToRoomChat() {
        navigation.navigate('RoomChat')
    }

    function handdleGoback() {
        navigation.goBack()
    }

    return (

        <KeyboardAvoidingView style={styles.background} >

            <View style={styles.container} >
                <View style={styles.containerLogo} >
                    <Image source={logoWhite} />
                </View>
                <View style={styles.containerRoom} >
                    <TouchableOpacity style={styles.btnSubmit} onPress={navigationToRoomChat}>
                        <View style={styles.btnContainer}>
                            <Image style={styles.btnIcon} source={logoIcon} />
                            <Text style={styles.submitText}>Ponto 1</Text>
                            <Image style={styles.arrowRight} source={arrowRight} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnSubmit} onPress={navigationToRoomChat}>
                        <View style={styles.btnContainer}>
                            <Image style={styles.btnIcon} source={logoIcon} />
                            <Text style={styles.submitText}>Ponto 2</Text>
                            <Image style={styles.arrowRight} source={arrowRight} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnSubmit} onPress={navigationToRoomChat}>
                        <View style={styles.btnContainer}>
                            <Image style={styles.btnIcon} source={logoIcon} />
                            <Text style={styles.submitText}>Ponto 3</Text>
                            <Image style={styles.arrowRight} source={arrowRight} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerMenu}>
                    <TouchableOpacity onPress={handdleGoback}>
                        <Icon name="keyboard-arrow-left" type='material' size={45} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={navigationToProfile}>
                        <Image style={styles.btnIcon} source={iconProfile} />
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}