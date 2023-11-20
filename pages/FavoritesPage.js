import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import { UserContext } from "../context/User";

export default function FavoritesPage() {
    const { isLoggedIn } = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(() => {
        if(!isLoggedIn)
            navigation.navigate('Login')
    }, [])


    return (
        <>
            <Footer />
        </>
    )
}