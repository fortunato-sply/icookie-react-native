import { useContext, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Animated, Image } from 'react-native'
import { PreferencesContext } from '../context/Preferences';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { UserContext } from '../context/User';

const coffeIcon = require('../assets/coffeIcon.png');
const plusIcon = require('../assets/plusIcon.png');
const userIcon = require('../assets/userIcon.png');
const editIcon = require('../assets/editIcon.png');

export default function CustomizedModal() {
    const { toggleModal } = useContext(PreferencesContext);
    const { isLoggedIn, user, logout } = useContext(UserContext);

    const renderAdmOptions = () => {
        if(user.isAdmin)
            return (
                <View style={styles.optionsContainer}>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins', fontWeight: 600, color: '#bbb' }}>Administrador</Text>
                    <View style={styles.options}>
                        <TouchableOpacity style={styles.option}>
                            <Image source={coffeIcon} style={styles.optionIcon} />
                            <Text style={{ fontSize: 18, color: '#fff', fontWeight: 500, fontFamily: 'Poppins' }}>Nova receita</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.option}>
                            <Image source={plusIcon} style={styles.optionIcon} />
                            <Text style={{ fontSize: 18, color: '#fff', fontWeight: 500, fontFamily: 'Poppins' }}>Gerenciar receitas</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
    }

    const renderUserOptions = () => {
        if(!isLoggedIn)
            return (
                <View style={styles.optionsContainer}>
                    <Text style={{ fontSize: 16, fontFamily: 'Poppins', fontWeight: 600, color: '#bbb' }}>Dados pessoais</Text>
                    <View style={styles.options}>
                        <TouchableOpacity style={styles.option}>
                            <Image source={userIcon} style={{ width: 36, height: 36, resizeMode: 'center' }} />
                            <Text style={{ fontSize: 18, color: '#fff', fontWeight: 500, fontFamily: 'Poppins' }}>Meu perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.option}>
                            <Image source={editIcon} style={styles.optionIcon} />
                            <Text style={{ fontSize: 18, color: '#fff', fontWeight: 500, fontFamily: 'Poppins' }}>Editar meus dados</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
    }

    return (
        <View style={styles.container}>
            <View style={styles.upside}>
                <TouchableOpacity style={styles.iconBtn} onPress={() => toggleModal()}>
                    <ArrowCircleLeftIcon style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.textBold}>Opções</Text>
            </View>
            <View style={styles.infoContainer}>
                {renderAdmOptions()}
                {renderUserOptions()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#252525',
    },
    infoContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 24,
        gap: 24
    },
    upside: {
        width: '100vw',
        height: '46px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginTop: 6
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
        fontSize: 18,
        fontFamily: 'Poppins'
    },
    optionsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
    },
    options: {
        gap: 8,
    },
    option: {
        flexDirection: 'row',
        gap: 16,
        width: '100%',
        height: 40,
        alignItems: 'center'
    },
    optionIcon: {
        width: 34,
        height: 34,
        resizeMode: 'contain'
    }
});