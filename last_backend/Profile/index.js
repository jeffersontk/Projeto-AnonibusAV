import React from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import btnArrowLeft from '../assets/img/btnArrowLeft.png'
import logoIconWhite from '../assets/img/logoIconWhite.png'
import iconProfile from '../assets/img/iconProfile.png'
import ChooseProfilePic from '../Upload';
import { AuthContext } from '../context';

import firebase from 'firebase';

export default Profile = () => {

  const { signOut } = React.useContext(AuthContext)

  const handleSignOut = () => {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      signOut();
    }).catch(function (error) {
      alert(error)
    });
  }


  
  const navigation = useNavigation()

  function navigationToRoom() {
      navigation.navigate('Room');
  }

return (
  <KeyboardAvoidingView style={styles.background}  >
      <View style={styles.container}>
          <View style={styles.iconArrowLeftContainer}>
               <TouchableOpacity onPress={navigationToRoom}> 
                  <Image source={btnArrowLeft} style={styles.iconArrowLeft} />
              </TouchableOpacity>
              <Image source={logoIconWhite} style={styles.iconLogo} />
          </View>
          <View style={styles.containerProfile} >
              <Image style={styles.photoProfile} source={iconProfile} />
              <Text style={styles.textname}>Nickname</Text>
          </View>

          <View style={styles.containerMenu}>
              <ChooseProfilePic/>
              <TouchableOpacity style={styles.itemMenu}>
                  <Text style={styles.textMenu}>Change nickname</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemMenu} >
                  <Text style={styles.textMenuDelete}>Delete account</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemMenu} onPress={handleSignOut}>
                  <Text style={styles.textMenu}>Logout</Text>
              </TouchableOpacity>
          </View>
      </View>
  </KeyboardAvoidingView>
)}



//   return (
//     <View style={styles.container}>
//       <Text>PROFILE</Text>
//       <Button title="Sair" onPress={() => handleSignOut()} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   button: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     marginVertical: 10,
//     borderRadius: 5
//   }
// 


