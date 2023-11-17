import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import Footer from "../components/Footer";
import { UserContext } from "../context/User";

export default function FavoritesPage() {
    const { isLoggedIn } = useContext(UserContext);
    const navigation = useNavigation();

    if(isLoggedIn)
        return (
            <>
                <Footer />
            </>
        )
    else
        navigation.navigate('Login')
}