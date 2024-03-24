import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'

const QA = ({navigation}) => {
    const [buoc1Expanded, setBuoc1Expanded] = useState(false);
    const [buoc2Expanded, setBuoc2Expanded] = useState(false);
    const [buoc3Expanded, setBuoc3Expanded] = useState(false);
    const [buoc4Expanded, setBuoc4Expanded] = useState(false);
    const [buoc5Expanded, setBuoc5Expanded] = useState(false);

    const handleExpandBuoc1 = () => {
        setBuoc1Expanded(!buoc1Expanded);
    };
    const handleExpandBuoc2 = () => {
        setBuoc2Expanded(!buoc2Expanded);
    };
    const handleExpandBuoc3 = () => {
        setBuoc3Expanded(!buoc3Expanded);
    };
    const handleExpandBuoc4 = () => {
        setBuoc4Expanded(!buoc4Expanded);
    };
    const handleExpandBuoc5 = () => {
        setBuoc5Expanded(!buoc5Expanded);
    };
    return (
        <View>
            <View style={styles.headerBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View>
                        <Image
                            source={require('../img/back1.png')}
                            style={{ width: 25, height: 25 }}
                            resizeMode="cover"
                        />
                    </View>
                </TouchableOpacity>
                <Text style={styles.cart}>Q&A</Text>
            </View>

            <View style={{ margin: 20 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.buoc}>Tôi trộn các chất dinh dưỡng theo thứ tự nào?</Text>

                    <TouchableOpacity onPress={handleExpandBuoc1}>
                        <Image source={require('../img/arrow.png')}
                            style={{ top: 35 }} />
                    </TouchableOpacity>
                </View>
                {buoc1Expanded && (
                    <View>
                        <ScrollView style={{ maxHeight: 200 }}>
                            <Text style={styles.buocContent}>A, B, C, D,F rồi line E Root Igniter. Nên pha vào xô và cho máy sục oxy vào thì khơi pha dd sẽ tan đều.</Text>
                        </ScrollView>
                    </View>
                )}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.buoc}>Tôi có thể giữ dung dịch dinh dưỡng hỗn hợp trong bao lâu?</Text>

                    <TouchableOpacity onPress={handleExpandBuoc2}>
                        <Image source={require('../img/arrow.png')}
                            style={{ top: 35 }} />
                    </TouchableOpacity>
                </View>
                {buoc2Expanded && (
                    <View>
                        <ScrollView style={{ maxHeight: 200 }}>
                            <Text style={styles.buocContent}>Dinh dưỡng cao cấp nên ko có hạn sử dụng, 
                            chỉ cần bảo quản tốt dưới nhiệt độ mát,
                             tránh ánh sáng trực tiếp là sẽ để được rất lâu, 
                             Để duy trì mức dinh dưỡng tối ưu, chúng tôi khuyên bạn nên thay đổi hồ chứa thuỷ canh của bạn sau mỗi 7 ngày, còn với thổ canh thì pha lần nào tưới lần đó, thừa thì bỏ lần sau pha mới. Đặc biệt có vi sinh Mycorrhizae có hạn sử dụng sau 2 năm kể từ ngày mua.</Text>
                        </ScrollView>
                    </View>
                )}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.buoc}>Khi nào tôi thêm bộ điều chỉnh pH?</Text>

                    <TouchableOpacity onPress={handleExpandBuoc3}>
                        <Image source={require('../img/arrow.png')}
                            style={{ top: 35 }} />
                    </TouchableOpacity>
                </View>
                {buoc3Expanded && (
                    <View>
                        <ScrollView style={{ maxHeight: 200 }}>
                            <Text style={styles.buocContent}>Sau khi bạn thêm A-F nhưng trước khi bạn thêm line E Root Igniter vào thì phải căn chỉnh pH trước rồi.
                             PH tối ưu là giữa 5,8-6,3, nấm rễ phát triển tốt hơn khi pH chuẩn, dinh dưỡng đủ. 
                             Bạn cần thêm 1 số công cụ bút đo nữa nhé.</Text>
                        </ScrollView>
                    </View>
                )}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.buoc}>Các chất điều chỉnh tăng trưởng có được sử dụng trong các sản phẩm Elite không?</Text>

                    <TouchableOpacity onPress={handleExpandBuoc4}>
                        <Image source={require('../img/arrow.png')}
                            style={{ top: 35 }} />
                    </TouchableOpacity>
                </View>
                {buoc4Expanded && (
                    <View>
                        <ScrollView style={{ maxHeight: 200 }}>
                            <Text style={styles.buocContent}>Không. Chúng tôi không sử dụng bất kỳ chất điều chỉnh tăng trưởng nào trong dòng Nutrient của mình. 
                            Điều này bao gồm Paclobutrazol và Daminozide, được chứng minh là có ảnh hưởng tiêu cực đến sức khỏe khi con người ăn phải, đặc biệt là Ung Thư.</Text>
                        </ScrollView>
                    </View>
                )}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.buoc}>Các sản phẩm Planta có phải là hữu cơ không?</Text>

                    <TouchableOpacity onPress={handleExpandBuoc5}>
                        <Image source={require('../img/arrow.png')}
                            style={{ top: 35 }} />
                    </TouchableOpacity>
                </View>
                {buoc5Expanded && (
                    <View>
                        <ScrollView style={{ maxHeight: 200 }}>
                            <Text style={styles.buocContent}>Các sản phẩm dinh dưỡng của chúng tôi là sự pha trộn của tất cả các thành phần hữu cơ và vô cơ tự nhiên, không chứa hormone, nước hoa, thuốc nhuộm hoặc chất điều hòa tăng trưởng.
                             Chúng đã được thiết kế đặc biệt để tối đa hóa khả dụng sinh học của các chất dinh dưỡng để hấp thụ và hiệu quả tối ưu. Chúng tôi hiểu được sự hấp thụ của một khu vườn hữu cơ. Quan trọng hơn, độ chính xác như vậy mang lại kết quả vượt trội với một giải pháp hoàn toàn hữu cơ. 
                            Chúng tôi tiếp tục phát triển các sản phẩm hữu cơ để thử nghiệm và sẽ cung cấp cho các thị trường dựa trên những kết quả chúng tôi thu thập được .</Text>
                        </ScrollView>
                    </View>
                )}

            </View>
        </View>
    )
}

export default QA

const styles = StyleSheet.create({
    headerBar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10
    },
    cart: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        color: "black",
        marginTop: 10,
        marginLeft: 150
    },
    buocContent: {
        color: 'gray',
        fontSize: 16,
        fontWeight: 'normal',
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 10

    },
    buoc: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'normal',
        marginTop: 30
    },
})