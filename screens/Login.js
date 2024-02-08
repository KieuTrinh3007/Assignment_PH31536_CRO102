import { Image, ScrollView, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { URL } from './HomeScreen';



const Login = (props) => {
    const {navigation} = props;
    const [email, setemail] = useState('trinhpkph31536@fpt.edu.vn');
    const [password, setpassword] = useState('nhokgl9x');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, seterrors] = useState({});



    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };



    const doLogin = () => {

        const errors = getErrors(email, password);
        if (Object.keys(errors).length > 0) {
           
            seterrors(errors)
           
            return;
            
        } else {
           
                // thực hiện fetch lấy dữ liệu về
                let url_check_login = `${URL}/users?email=` + email;
                fetch(url_check_login)
                    .then((res) => { return res.json(); })
                    .then(async (res_login) => {
                        if (res_login.length != 1) {
                            // seterrors('Invalid email.');
                            seterrors({ email: 'Email không tồn tại' });
                        } else {
                            let objU = res_login[0];
                            if (objU.password !== password) {
                              
                                // seterrors('Invalid password.');
                                seterrors({ password: 'Mật khẩu không đúng' });
                                return;
                            } else {
                                try {
                                    const jsonString = JSON.stringify(objU);
                                    await AsyncStorage.setItem('loginInfo', jsonString);
                                    seterrors({});
                                    // setshowErrors(false);
                                    console.log('Đăng nhập thành công');
                                    props.navigation.navigate('DrawerNavigator')
                                } catch (e) {
                                    // saving error
                                    console.log(e);
                                }
                            }
                        }


                    }


                    )
            }

        }


        const getErrors = (email, password) => {
            const errors = {};
           
            if (!email) {
                errors.email = "Vui lòng nhập Email"
            } else if (!email.includes('@') || !email.includes('.')){
                errors.email = "Email không hợp lệ";
            }
            // !email.includes('@') || !email.includes('.com')

            if (!password) {
                errors.password = "Vui lòng nhập Password"
            } else if (password.length < 6) {
                errors.password = "Mật khẩu tối thiểu phải có 6 ký tự"
            }

            return errors;
        }

        return (
            <SafeAreaView style={st.background}>
                <KeyboardAvoidingView>
                    <ScrollView>

                        {/* // Logo app */}

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                            <Image
                                resizeMode='contain'
                                source={require('../img/logo_login.png')}
                                style={{ width: 200, height: 120 }}
                            />
                        </View>
                        <Text style={st.welcom}>Welcom to Lungo !!</Text>
                        <Text style={st.welcom2}>Login to Continue</Text>

                        {/* // Nhập username */}
                        <TextInput
                            style={st.khung}
                            value={email}
                            onChangeText={(txt) => { setemail(txt) }}
                            placeholder="Email Address"
                            placeholderTextColor="gray"
                        />

                        {errors.email && (
                            <Text style={{ fontSize: 16, color: 'red', marginLeft: 20 }}>
                                {errors.email}
                            </Text>
                        )}

                        {/* // Nhập password */}
                        <View>
                            <TextInput
                                style={st.khung}
                                value={password}
                                onChangeText={(txt) => { setpassword(txt) }}
                                placeholder="Password"
                                placeholderTextColor="gray"
                                secureTextEntry={!showPassword}

                            />
                            {errors.password && (
                                <Text style={{ fontSize: 16, color: 'red', marginLeft: 20 }}>
                                    {errors.password}
                                </Text>
                            )}

                            <TouchableOpacity
                                onPress={toggleShowPassword}
                                style={{ position: 'absolute', right: 40, top: 40 }}
                            >
                                <Image
                                    source={showPassword ? require('../img/eye.png') : require('../img/eye1.png')}
                                    style={{ width: 24, height: 24, tintColor: 'white' }}
                                />
                            </TouchableOpacity>
                        </View>



                        {/* // Button Login */}

                        <TouchableOpacity
                            onPress={doLogin}
                            style={st.khungButton}

                        >
                            <Text style={{ color: "white", textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Login</Text>
                        </TouchableOpacity>

                        {/* // Button Google */}

                        <TouchableOpacity

                            style={st.khungButton1}
                        >

                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={require('../img/icon_google.png')}
                                    style={{ width: 30, height: 30, marginLeft: 20 }}
                                />
                                <Text style={{ color: "black", textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginLeft: 60 }}>
                                    Sign in with Google
                                </Text>

                            </View>


                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
                            <Text style={{ color: "gray", fontWeight: 'bold', textAlign: 'center', marginTop: 15 }}>
                                Don't have account? Click</Text>

                            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                                <Text style={{ color: "orange", fontWeight: 'bold', marginTop: 15 }}> Register</Text>
                            </TouchableOpacity>


                        </View>


                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
                            <Text style={{ color: "gray", fontWeight: 'bold', textAlign: 'center', marginTop: 15 }}>
                                Forget Password? Click</Text>

                            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                                <Text style={{ color: "orange", fontWeight: 'bold', marginTop: 15 }}> Reset</Text>
                            </TouchableOpacity>


                        </View>


                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>

        )
    }

    export default Login

    const st = StyleSheet.create({
        background: { ...StyleSheet.absoluteFillObject, backgroundColor: "black" },
        welcom: { fontSize: 27, textAlign: "center", color: "white", fontWeight: 'bold' },
        welcom2: { fontSize: 20, textAlign: "center", color: "gray", marginTop: 20, fontWeight: 'bold', marginBottom: 20 },
        khung: { borderColor: "orange", borderWidth: 1, borderRadius: 10, padding: 20, margin: 20, color: "white", fontSize: 20 },
        khungButton: { backgroundColor: "#D2691E", borderWidth: 1, borderRadius: 25, padding: 15, margin: 15 },
        khungButton1: { backgroundColor: "#FFFFFF", borderWidth: 1, borderRadius: 25, padding: 15, margin: 15, marginTop: 5 },

        checkboxContainer: {
            flexDirection: 'row',
            marginBottom: 20,
        },
        checkbox: {
            alignSelf: 'center',
        },
        label: {
            margin: 8,
        },
    })