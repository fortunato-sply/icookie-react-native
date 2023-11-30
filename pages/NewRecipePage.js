import { AddCircle, AddCircleOutline, ArrowCircleLeft } from "@mui/icons-material";
import { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native"
import * as ImagePicker from 'expo-image-picker';

export default function NewRecipePage() {
    const [image, setImage] = useState(null);
    const renderImg = () => {
        if(image == null)
            return (
                <>
                    <AddCircle style={{ color: '#65D93D', width: 30, height: 30 }} />
                    <Text style={{ fontSize: 16, fontWeight: 600, fontFamily: 'Poppins', color: '#777' }} >Adicionar imagem</Text>
                </>
            )
        else
            return (
                <Image source={{ uri: image }} style={{ width: '100%', height: 200, resizeMode: 'cover', borderRadius: 12 }}  />
            )
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
        })

        if(!result.canceled)
            setImage(result.assets[0].uri);
    }

    return (
        <View style={styles.container}>
            <View style={styles.upside}>
                <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('iCookie')}>
                    <ArrowCircleLeft style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.textBold}>Nova receita</Text>
            </View>
            <View style={styles.pickerContainer}>
                <TouchableOpacity style={styles.picker} onPress={pickImage}>
                    {renderImg()}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1b1b1b',
        width: '100vw',
        minHeight: '100vh',
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingBottom: 78,
        paddingTop: 46
    },
    upside: {
        backgroundColor: '#1b1b1b',
        width: '100%',
        height: '60px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '2px',
        position: 'fixed',
        top: 0,
        zIndex: 3,
    },
    icon: {
        color: '#FF7B50',
        width: 30,
        height: 30,
        position: 'absolute',
        left: 12
    },
    iconBtn: {
        position: 'absolute',
        left: 5,
        width: 50,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBold: {
        fontWeight: '700',
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Poppins'
    },
    pickerContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        marginTop: 30,
    },
    picker: {
        backgroundColor: '#252525',
        width: '100%',
        height: 200,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4
    }
});