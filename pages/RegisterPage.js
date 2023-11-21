import { Link } from "@react-navigation/native";
import { useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
import CheckBox from "../components/CheckBox";
import Footer from "../components/Footer";
import * as Animatable from 'react-native-animatable'

export default function RegisterPage({ navigation }) {
    const [isChecked, setIsChecked] = useState(true);

    return (
        <>
            <View 
                style={styles.container}
                animation= 'slideInUp'
                iterationCount={1} duration={300}
            >
                <Animatable.View 
                    animation= 'slideInUp'
                    iterationCount={1} 
                    duration={300}
                    style={styles.box}
                >
                    <View style={styles.inputs}>
                        <TextInput style={styles.input} placeholderTextColor='#DFDFDF' placeholder='E-mail'></TextInput>
                        <TextInput style={styles.input} placeholderTextColor='#DFDFDF' placeholder='Nome'></TextInput>
                        <TextInput style={styles.input} placeholderTextColor='#DFDFDF' placeholder='Senha' secureTextEntry></TextInput>
                        <TextInput style={styles.input} placeholderTextColor='#DFDFDF' placeholder='Confirmar senha' secureTextEntry></TextInput>
                    </View>
                    <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ color: '#000', fontSize: 24, fontFamily: 'Poppins', fontWeight: 600 }}>Cadastrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.register}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.registerTxt}>Voltar</Text>
                    </TouchableOpacity>
                </Animatable.View>
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
        alignItems: 'center',
    },
    box: {
        backgroundColor: '#252525',
        width: '100vw',
        minHeight: '75vh',
        paddingHorizontal: 20,
        alignItems: 'center',
        position: 'fixed',
        bottom: 78,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '600',
        marginTop: 20
    },
    inputs: {
        gap: 14,
        width: '100%',
        marginTop: 50
    },
    input: {
        backgroundColor: '#1B1B1B',
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
        marginTop: 40
    },
    register: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    registerTxt: {
        color: '#DCDCDC',
        textDecorationLine: 'underline',
        fontFamily: 'Poppins',
        fontSize: 18
    }
});