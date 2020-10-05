import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import {AppForm, AppFormField, SubmitButton} from '../components/forms';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).matches().label("Password")
});

function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image 
            style= {styles.logo} 
            source={require('../../assets/logo-red.png')} />

            <AppForm
                initialValues={{email: '', password: ''}}
                onSubmit={(values)=>console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address" 
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress" //Autofill the email frm stored emails
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect="false"
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry = {true}
                />

                <SubmitButton/>
            </AppForm>
            
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    } 
});

export default LoginScreen;