import { View } from "react-native"
import { StyleSheet } from 'react-native'
import Modal from "../components/Modal";
import TopBar from "../components/TopBar";

export default function MainPage() {
    return (
        <View style={styles.container}>
            <Modal />
            <TopBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1b1b1b',
        width: '100vw',
        minHeight: '100vh'
    }
});