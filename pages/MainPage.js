import { View } from "react-native"
import { StyleSheet } from 'react-native'
import Footer from "../components/Footer";
import MainCard from "../components/MainCard";
import Modal from "../components/Modal";
import TopBar from "../components/TopBar";

export default function MainPage() {
    const mainCardData = { 
        img: "https://static.itdg.com.br/images/360-240/16dea8c3e7084abc502ee2793a583a5f/332854-original.jpg",
        name: 'Strogonoff de Frango',
        prepTime: 40
    }

    return (
        <>
            <Modal />
            <View style={styles.container}>
                <TopBar />
                <MainCard data={mainCardData} />

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
        paddingHorizontal: 24,
    }
});