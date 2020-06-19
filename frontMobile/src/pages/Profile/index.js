import React from 'react'
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { Icon } from 'react-native-elements'
import logoIconWhite from '../../assets/img/logoIconWhite.png'
import iconProfile from '../../assets/img/iconProfile.png'

export default function Profile() {

    const navigation = useNavigation()

    function handdleGoback() {
        navigation.goBack()
    }
    return (
        <KeyboardAvoidingView style={styles.background}  >
            <View style={styles.container}>
                <View style={styles.iconArrowLeftContainer}>
                    <TouchableOpacity onPress={handdleGoback}>
                        <Icon name="keyboard-arrow-left" type='material' size={60} color="#fff" />
                    </TouchableOpacity>
                    <Image source={logoIconWhite} style={styles.iconLogo} />
                </View>
                <View style={styles.containerProfile} >
                    <Image style={styles.photoProfile} source={iconProfile} />
                    <Text style={styles.textname}>Apelido</Text>
                </View>
                <View style={styles.containerMenu}>
                    <TouchableOpacity style={styles.itemMenu}>
                        <Text style={styles.textMenu}>Mudar de apelido</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemMenu}>
                        <Text style={styles.textMenu}>Mudar Foto </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemMenu}>
                        <Text style={styles.textMenuDelete}>Deletar conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemMenu}>
                        <Text style={styles.textMenu}>Deslogar conta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}