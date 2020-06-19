import React, { useState } from 'react'
import { View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import MapView from 'react-native-maps'
import { Icon } from 'react-native-elements'
import { SearchBar } from 'react-native-elements';
import iconProfile from '../../assets/img/iconProfile.png'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function BusMaps() {
    const [searchItem, setSearchItem] = useState('')
    const navigation = useNavigation()

    function handdleGoback() {
        navigation.goBack()
    }

    function handdleToRoom() {
        navigation.navigate('Room')
    }
    function handdleToProfile() {
        navigation.navigate('Profile')
    }
    return (
        <KeyboardAvoidingView style={styles.background} >

            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <SearchBar containerStyle={{ backgroundColor: '#000' }} round placeholder="Linha de onibus" onChangeText={setSearchItem} value={searchItem} />
                </View>

                <MapView style={styles.mapStyles} />

                <View style={styles.navigateMenu}>
                    <TouchableOpacity onPress={handdleGoback}>
                        <Icon name="first-page" type='material' size={45} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handdleToRoom} >
                        <Icon name="forum" type='material' size={40} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handdleToProfile}>
                        <Image style={styles.iconStyle} source={iconProfile} />
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
