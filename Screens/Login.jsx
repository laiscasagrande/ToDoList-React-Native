import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";
import { useState } from "react";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function handleLogin() {
        //Lógica de autenticação
        if (password === "123") {
            navigation.navigate("Home")
        } else {
            setError("Senha incorreta")
        }

    }

    function handleForget() {

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela de Login</Text>
            <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail} //para setar o valor da variável
                keyboardType="none"
                style={styles.input}
            />

            <TextInput
                label="Senha"
                value={password}
                onChangeText={setPassword} //para setar o valor da variável
                secureTextEntry
                style={styles.input}
            />

            {error ? <Text style={styles.error}>{error}</Text> : null}

            <Button mode="contained" onPress={handleLogin} styçe={styles.button}>
                Login
            </Button>

            <Button mode="text" onPress={handleForget} styçe={styles.button}>
                Esqueci minha senha
            </Button>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: "center"
    },
    input: {
        marginBottom: 10,
    },
    button: {
        marginTop: 10,
    },
    error: {
        color: "red",
        marginBottom: 10,
        textAlign: "center"
    }
})
