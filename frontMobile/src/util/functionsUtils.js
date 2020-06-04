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

function navigationToLogin() {
    navigation.navigate('Login')
}

