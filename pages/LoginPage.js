import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native-web";
import Footer from "../components/Footer";
const logo = require('../assets/stencilLogo.png')

export default function LoginPage() {
    return (
        <>
            <View style={styles.container}>
                <Image  style={styles.img} source={logo} />
                <View style={styles.inputs}>
                    <TextInput style={styles.input} placeholderTextColor='#DFDFDF' placeholder='E-mail'></TextInput>
                    <TextInput style={styles.input} placeholderTextColor='#DFDFDF' placeholder='Senha' secureTextEntry></TextInput>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{ color: '#000', fontSize: 24, fontFamily:'Poppins', fontWeight: 600 }}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <Footer />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1b1b1b',
        width: '100vw',
        minHeight: '100vh',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '600',
        marginTop: 20
    },
    cards: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        flexWrap: 'wrap',
        rowGap: 8
    },
    img: {
        marginTop: 140,
        width: 280,
        height: 90
    },
    inputs: {
        gap: 14,
        width: '100%',
        marginTop: 80
    },
    input: {
        backgroundColor: '#252525',
        width: '100%',
        height: 70,
        paddingHorizontal: 16,
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Poppins',
        color: '#fff',
        borderRadius: 12
    },
    btn: {
        width: '100%',
        backgroundColor: '#FF7B50',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        borderRadius: 12,
        marginTop: 80
    }
});