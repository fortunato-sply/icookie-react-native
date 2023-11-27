import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import { UserContext } from "../context/User";

export default function FavoritesPage() {
    const { token, user } = useSelector((store) => store.auth);
    const navigation = useNavigation();

    useEffect(() => {
        console.log(token);
        console.log(user);
        if(token == null)
            navigation.navigate('Login')
    }, [])


    return (
        <>
            <Footer />
        </>
    )
}