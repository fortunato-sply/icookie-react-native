import { useContext, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { PreferencesContext } from '../context/Preferences';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

export default function Modal() {
    const { isModalOpen, toggleModal } = useContext(PreferencesContext);

    const renderModal = () => {
        if (isModalOpen)
            return (
                <Animatable.View style={styles.container} animation={
                    {
                        from: {
                            marginLeft: 300,   
                        },
                        to: {
                            marginLeft: 0
                        }
                    }
                } iterationCount={1} duration={300} >
                    <View style={styles.upside}>
                        <TouchableOpacity style={styles.iconBtn} onPress={() => toggleModal()}>
                            <ArrowCircleLeftIcon style={styles.icon} />
                        </TouchableOpacity>
                        <Text style={styles.textBold}>Opções</Text>
                    </View>
                </Animatable.View>
            )
    }

    return (
        <>
            {renderModal()}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#252525'
    },
    upside: {
        width: '100%',
        height: '46px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '8px',
        position: 'relative'
    },
    img: {
        width: '140px',
        height: '100%'
    },
    icon: {
        color: '#FF7B50',
        width: 30,
        height: 30
    },
    iconBtn: {
        position: 'absolute',
        left: 10,
        width: 50,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBold: {
        fontWeight: '700',
        color: '#fff',
        fontSize: '1rem',
        fontFamily: 'Poppins'
    }
});