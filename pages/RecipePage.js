import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import Footer from "../components/Footer";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { AccessTime } from "@mui/icons-material";
import { useState } from "react";
import FavoriteButton from "../components/FavoriteButton";

export default function RecipePage({ route, navigation }) {
    // const id = route.params.id
    const [isFavorite, setIsFavorite] = useState(false)

    const renderIngredients = () => {

    }

    const renderSteps = () => {

    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.upside}>
                    <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('iCookie')}>
                        <ArrowCircleLeftIcon style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.textBold}>Banoffee</Text>
                </View>
                <View style={styles.imgContainer}>
                    <Image source={{ uri: 'https://www.divinho.com.br/blog/wp-content/uploads/2022/05/Torta-Banoffee.jpg' }} style={styles.background} />
                </View>
                <View style={styles.info}>
                    <View style={styles.time}>
                        <AccessTime style={styles.timeIcon} />
                        <Text style={styles.timetxt}>40 min</Text>
                    </View>
                    <FavoriteButton isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
                </View>
                <View style={styles.ingredientContainer}>
                    <Text style={styles.ingredientTxt}>Ingredientes</Text>
                    <View style={styles.ingredients}>
                        <Text style={styles.ingredient}>2 colheres (sopa) de manteiga</Text>
                        <Text style={styles.ingredient}>2 xícaras (chá) de açúcar</Text>
                    </View>
                </View>
                <View style={styles.ingredientContainer}>
                    <Text style={styles.ingredientTxt}>Modo de Preparo</Text>
                    <View style={styles.steps}>
                        <View style={styles.step}>
                            <View style={styles.circle}>
                                <Text style={{ fontWeight: 700, fontFamily: 'Poppins', color: '#111', fontSize: 24 }}>1</Text>
                            </View>
                            <Text style={styles.recipeText}>Em um liquidificador adicione os ovos, o chocolate em pó, a manteiga, a farinha de trigo, o açúcar e o leite, depois bata por 5 minutos.</Text>
                        </View>
                        <View style={styles.step}>
                            <View style={styles.circle}>
                                <Text style={{ fontWeight: 700, fontFamily: 'Poppins', color: '#111', fontSize: 24 }}>2</Text>
                            </View>
                            <Text style={styles.recipeText}>Adicione o fermento e misture com uma espátula delicadamente.</Text>
                        </View>
                        <View style={styles.step}>
                            <View style={styles.circle}>
                                <Text style={{ fontWeight: 700, fontFamily: 'Poppins', color: '#111', fontSize: 24 }}>3</Text>
                            </View>
                            <Text style={styles.recipeText}>Adicione o fermento e misture com uma espátula delicadamente.</Text>
                        </View>
                    </View>
                </View>
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
        paddingHorizontal: '8px',
        position: 'fixed',
        top: 0,
        zIndex: 3,
    },
    icon: {
        color: '#FF7B50',
        width: 30,
        height: 30
    },
    timeIcon: {
        width: 28,
        height: 28,
        color: '#fff',
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
    imgContainer: {
        width: 350,
        height: 190,
        marginTop: 20
    },
    background: {
        width: '100%',
        height: '100%',
        borderRadius: 16,
        resizeMode: 'cover',
        opacity: 1,
        position: 'absolute',
    },
    info: {
        display: 'flex',
        alignItems: 'center',
        width: '80%',
        justifyContent: 'space-between',
        marginTop: 20,
        flexDirection: 'row'
    },
    time: {
        alignItems: 'center'
    },
    timetxt: {
        fontFamily: 'Poppins',
        color: '#fff',
        fontSize: 16
    },
    ingredientContainer: {
        width: '100%',
        marginTop: 40,
        display: 'flex',
        alignItems: 'center'
    },
    ingredientTxt: {
        fontWeight: 600,
        color: '#fff',
        fontFamily: 'Poppins',
        fontSize: 20
    },
    ingredients: {
        display: 'flex',
        width: '90%',
        gap: 8,
        marginTop: 20
    },
    ingredient: {
        fontSize: 16,
        fontWeight: 300,
        color: '#fff',
        fontFamily: 'Poppins'
    },
    steps: {
        display: 'flex',
        width: '100%',
        gap: 24,
        marginTop: 20,
        paddingBottom: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    step: {
        width: '90%',
        minHeight: 80,
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center'
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 99,
        backgroundColor: '#FF7B50',
        alignItems: 'center',
        justifyContent: 'center'
    },
    recipeText: {
        color: '#fff',
        fontWeight: 300,
        fontFamily: 'Poppins',
        fontSize: 14
    }
});