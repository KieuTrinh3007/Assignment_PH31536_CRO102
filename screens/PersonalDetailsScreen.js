import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { URL } from './HomeScreen';

const PersonalDetailsScreen = ({ navigation, route }) => {
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [repassword, setrepassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowRePassword = () => {
        setShowRePassword(!showRePassword);
    };

    const [showErrors, setshowErrors] = useState(false);
    const [errors, seterrors] = useState({});

    useEffect(() => {
        if (route.params) {
            const { username, email } = route.params;
            setusername(username || '');
            setemail(email || '');
        }
    }, [route.params]);

    const getErrors = (email, username, password, repassword) => {
        const errors = {};
        if (!email) {
            errors.email = "Vui lòng nhập Email"
        } else if (!email.includes('@') || !email.includes('.')) {
            errors.email = "Email không hợp lệ";
        }

        if (!username) {
            errors.username = "Vui lòng nhập Username"
        } else if (username.length < 6) {
            errors.username = "Username phải có tối thiểu 6 ký tư"
        }

        if (!password) {
            errors.password = "Vui lòng nhập Password"
        } else if (password.length < 6) {
            errors.password = "Password phải có tối thiểu 6 ký tự"
        }

        if (!repassword) {
            errors.repassword = "Nhập lại Password"
        } else if (repassword.length < 6) {
            errors.repassword = "Password phải có tối thiểu 6 ký tự"
        } else if (password !== repassword) {
            errors.repassword = 'Password không khớp'

        }
        return errors;
    }
    const handelSave = async () => {
        const errors = getErrors(email, username, password, repassword);
        if (Object.keys(errors).length > 0) {
            setshowErrors(true)
            seterrors(showErrors && errors)
            console.log(errors);
        } else {
            const response = await fetch(`${URL}/users`, {
                method: 'PUT',
                body: JSON.stringify({
                    id: Date.now() + Math.random(),
                    username: username,
                    email: email,
                    password: password,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })

            const result = await response.json();
            if(result.id){
                seterrors({});
                setshowErrors(false);
                console.log('Đăng ký thành công');
                navigation.goBack();
            }
           
        }

    }

    return (
        <SafeAreaView style={{ backgroundColor: "black", ...StyleSheet.absoluteFillObject }}>

            <View>

                <View style={styles.headerBar}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View>
                            <Image
                                source={require('../img/back1.png')}
                                style={styles.image1}
                                resizeMode="cover"
                            />
                        </View>
                    </TouchableOpacity>

                    <View>
                        <Text style={styles.cart}>Personal Details</Text>
                    </View>

                </View>



                <View style={styles.ImageContainer}>


                    <Image
                        source={require('../img/info.png')}
                        style={{ width: 150, height: 150, alignSelf: 'center', margin: 20 }}
                        resizeMode="cover"
                    />

                </View>

                <TextInput
                    style={styles.khung}
                    value={username}
                    onChangeText={(txt) => { setusername(txt) }}
                    placeholder="Username"
                    placeholderTextColor="gray"


                />

{errors.username && (
                            <Text style={{ fontSize: 16, color: 'red', marginLeft: 20 }}>
                                {errors.username}
                            </Text>
                        )}

                <TextInput
                    style={styles.khung}
                    value={email}
                    onChangeText={(txt) => { setemail(txt) }}
                    placeholder="Email"
                    placeholderTextColor="gray"


                />
                 {errors.email && (
                            <Text style={{ fontSize: 16, color: 'red', marginLeft: 20 }}>
                                {errors.email}
                            </Text>
                        )}

                <View>
                    <TextInput
                        style={styles.khung}
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

                <View>
                    <TextInput
                        style={styles.khung}
                        value={repassword}
                        onChangeText={(txt) => { setrepassword(txt) }}
                        placeholder="Re-Password"
                        placeholderTextColor="gray"
                        secureTextEntry={!showPassword}

                    />
                     {errors.repassword && (
                            <Text style={{ fontSize: 16, color: 'red', marginLeft: 20 }}>
                                {errors.repassword}
                            </Text>
                        )}

                    <TouchableOpacity
                        onPress={toggleShowRePassword}
                        style={{ position: 'absolute', right: 40, top: 40 }}
                    >
                        <Image
                            source={showPassword ? require('../img/eye.png') : require('../img/eye1.png')}
                            style={{ width: 24, height: 24, tintColor: 'white' }}
                        />
                    </TouchableOpacity>
                </View>


            </View>

            <TouchableOpacity
                onPress={() => handelSave()}
                style={styles.khungButton}

            >
                <Text style={{ color: "white", textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Save</Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

export default PersonalDetailsScreen

const styles = StyleSheet.create({
    headerBar: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
    },
    cart: {
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 110,
        color: "white",
    },
    khung: {
        borderColor: "orange",
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        margin: 20,
        color: "white",
        fontSize: 20
    },
    khungButton: {
        backgroundColor: "#D2691E",
        borderWidth: 1,
        borderRadius: 25,
        padding: 15,
        margin: 15
    },


})