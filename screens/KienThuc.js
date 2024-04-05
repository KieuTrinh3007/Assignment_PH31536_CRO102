import { StyleSheet, Text, View, StatusBar, ImageBackground, Image, TouchableOpacity, Pressable, ScrollView, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { URL } from './HomeScreen';


const KienThuc = ({ navigation, route }) => {

    const { image, title, loaiSP, classify } = route.params;
    const [expanded, setExpanded] = useState(false);
    const [buoc1Expanded, setBuoc1Expanded] = useState(false);
    const [buoc2Expanded, setBuoc2Expanded] = useState(false);
    const [buoc3Expanded, setBuoc3Expanded] = useState(false);

    const [expanded1, setExpanded1] = useState(false);
    const [buoc4Expanded, setBuoc4Expanded] = useState(false);
    const [buoc5Expanded, setBuoc5Expanded] = useState(false);
    const [buoc6Expanded, setBuoc6Expanded] = useState(false);
    const [buoc7Expanded, setBuoc7Expanded] = useState(false);
    const [buoc8Expanded, setBuoc8Expanded] = useState(false);

    // Hàm để xử lý sự kiện khi nhấn vào dấu "+"
    const handleExpand = () => {
        setExpanded(!expanded); // Đảo ngược trạng thái mở rộng
    };
    const handleExpand1 = () => {
        setExpanded1(!expanded1); // Đảo ngược trạng thái mở rộng
    };

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

    const handleExpandBuoc6 = () => {
        setBuoc6Expanded(!buoc6Expanded);
    };

    const handleExpandBuoc7 = () => {
        setBuoc7Expanded(!buoc7Expanded);
    };

    const handleExpandBuoc8 = () => {
        setBuoc8Expanded(!buoc8Expanded);
    };



    return (
        <View style={styles.container}>


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
                <Text style={styles.cart}>{title}</Text>

                
            </View>

            <Image
                source={{ uri: image }}
                style={styles.headerImage}
            />

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ backgroundColor: 'green', width: '30%',textAlign: 'center', padding: 5, color: 'white', marginHorizontal: 30, paddingLeft: 13, marginVertical: 20 }}>{loaiSP}</Text>
                { classify ? <Text style={{ backgroundColor: 'green', width: '30%', padding: 5, textAlign: 'center',color: 'white', marginHorizontal: 30, paddingLeft: 13, marginVertical: 20 }}>{classify}</Text>
: null}
            </View>
            <View style={{ marginHorizontal: 30 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 'normal' }}>Kiến thức cơ bản</Text>
                    <TouchableOpacity onPress={handleExpand}>
                        <Text style={{ color: 'green', fontSize: 25, fontWeight: 'normal' }}>{expanded ? '_' : '+'}</Text>
                    </TouchableOpacity>
                </View>

                {/* Hiển thị các bước nếu được mở rộng */}
                {expanded && (
                    <View style={styles.buocContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.buoc}>Bước 1: Chuẩn bị vật dụng, chất trồng</Text>
                            <TouchableOpacity onPress={handleExpandBuoc1}>
                                <Image source={require('../img/arrow.png')}
                                    style={{ top: 5 }} />
                            </TouchableOpacity>
                        </View>
                        {buoc1Expanded && (
                            <View>
                                <ScrollView style={{ maxHeight: 200 }}>
                                    <Text style={styles.buocContent}>- Chậu nhỏ hoặc chậu to nếu sau này không muốn thay chậu nữa) hoặc khay ươm nếu gieo số lượng nhiều. Dù bạn dự tính trồng thẳng trong chậu hoặc sẽ chuyển xuống đất trồng thì cũng nên uơm hạt trong chậu trước vì dễ quản lí đô ẩm, sâu bệnh, dinh dưỡng…
                                        - Thuốc trừ nấm: Thuốc trừ nấm cũng là 1 phần không thể thiếu trong khâu chuẩn bị. Nó giúp hạn chế các loại nấm mốc có hại cho hạt giống ảnh hưởng tới cây trồng của bạn sau này.
                                        - Đất trồng: Theo phản ảnh và kinh nghiệm thực tế của các nhà vườn, gieo hạt bằng hỗn hợp cám dừa + tro trấu (tỷ lệ 7:3. thậm chí 100% cám dừa) có kết quả tốt hơn gieo hạt bằng đất sạch. Tuy nhiên cám dừa cần ngâm xả nhiều lần cho hết chất tanin (màu vàng nâu) mới sử dụng được, tro trấu cũng nên ngâm xả nhiều lần để bớt muối.
                                        - Tủ Trồng
                                        - Điều Hòa Độ Ẩm</Text>
                                </ScrollView>
                            </View>
                        )}

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.buoc}>Bước 2: Tiến hành gieo hạt</Text>
                            <TouchableOpacity onPress={handleExpandBuoc2}>
                                <Image source={require('../img/arrow.png')}
                                    style={{ top: 5 }} />
                            </TouchableOpacity>
                        </View>

                        {buoc2Expanded && (
                            <View>
                                <ScrollView style={{ maxHeight: 200 }}>
                                    <Text style={styles.buocContent}>- Chuẩn bị chất trồng: Chất trồng sau khi trộn đều, chúng ta cho vào chậu hoặc khay uơm. Tưới đẫm chất trồng. Phun thuốc trừ nấm lên mặt chất trồng (bước này rất quan trọng). Tốt nhất phun liên tục 2-3 lần để thuốc thấm xuống sâu hơn.
                                        - Ngâm hạt giống: Đối với các loại hạt có vỏ mỏng (như cà, ớt…) có thể ngâm bằng nước ấm khoảng 5-8 tiếng. Đối với các loại hạt có vỏ dày (như các loại đậu, bầu, khổ qua…) thì nên ngâm bằng nước ấm (nguyên tắc pha nước 7 lạnh 3 nóng) ngâm 1 đêm cho vỏ hạt nở ra rồi hãy tiến hành gieo (cho nên bước này phải thực hiện có kế hoạch và làm trước các bước chuẩn bị)
                                        - Ủ hạt giống: Sau khi ngâm hạt giống cây trồng, tiến hành ủ hạt (tùy loại hạt, có loại cần ủ vài tiếng, 1 hoặc nhiều ngày), cũng có loại hạt không cần ngâm ủ.
                                        - Chú ý: Đối với các loại hạt khó nảy mầm như các loại huơng thảo, oải huơng thì khuyến khích sử dụng GA3, Atonik (chất kích thích nẩy mầm) để tăng tỷ lệ nẩy mầm (nhưng phải nắm rõ nồng độ và thời gian xử lý, nếu dùng quá liều có thể làm chết hạt).
                                        - Gieo hạt: Nguyên tắc gieo hạt là chôn hạt với độ sâu bằng 2-3 lần đường kính của hạt. Đối với các loại hạt rất nhỏ, thì chúng ta gieo trực tiếp trên mặt đất ẩm, sau đó phun suơng cho hạt bám vào chất trồng là được. Đối với hạt to hơn thì nên chôn sâu khoảng 1-2cm (chú ý ko nén đất quá chặt sau khi chôn hạt). Sau khi gieo hạt xong nên phun sương lên bề mặt vài lần để đất và hạt tiếp xúc với nhau. Đặc biết đối với các hạt xứ lạnh, sau khi gieo hạt nên xử dụng màng thực phẩm, hay tấm kiếng đậy lại chậu hoặc khay uơm để tăng độ ẩm (đặt chậu nơi ít nắng), giúp hạt nảy mầm nhanh hơn. Các loại hạt xứ nóng không cần thực hiện bước này.</Text>
                                </ScrollView>
                            </View>
                        )}

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.buoc}>Bước 3: Chăm sóc sau khi gieo hạt</Text>

                            <TouchableOpacity onPress={handleExpandBuoc3}>
                                <Image source={require('../img/arrow.png')}
                                    style={{ top: 5 }} />
                            </TouchableOpacity>
                        </View>
                        {buoc3Expanded && (
                            <View>
                                <ScrollView style={{ maxHeight: 200 }}>
                                    <Text style={styles.buocContent}>- Nhiệt độ: Tùy loại mà hạt cần nhiệt độ khác nhau để nẩy mầm, tuy nhiên dao động từ khoảng 20-25 độ C thích hợp cho đại đa số hạt.
                                        - Độ ẩm của đất trồng: Chú ý luôn đảm bảo độ ẩm cho đất, không được để đất bị khô. Bao lâu phun 1 lần thì phụ thuộc vào nhiều yếu tố nơi gieo hạt giống cây trồng(nhiệt độ, sức gió…). Vấn đề này đòi hỏi bạn phải có kinh nghiệm và quan sát thường xuyên.
                                        - Đặt chậu hoặc khay ươm ở nơi có ánh sáng khuyếch tán (che lưới lan màu đen loại 50%)
                                        Vì hạt cần ánh sáng để nẩy mầm, nhưng nếu cường độ quá mạnh sẽ đốt cháy hạt và làm khô chất trồng nhanh chóng. Cũng có 1 số ít (rất ít) loại cần gieo hạt ở nơi râm mát.
                                        - Thay chậu hoặc chuyển vào đất trồng: Khi cây con đã lớn đến mức độ nào đó (thân đủ cứng cáp, rễ mạnh…), chúng ta có thể chuyển qua chậu to hơn hoặc chuyển xuống đất trồng trực tiếp. Nếu trước đó đã gieo hạt trong chậu to thì có thể trồng tiếp mà không cần sang chậu. Chú ý bón lót phân hữu cơ vào đất trồng.
                                        - Bón phân: Đối với cây con, hệ rễ vẫn chưa đủ mạnh để hấp thụ phân có nồng độ cao, cho nên việc dùng phân bón lá là thích hợp nhất. Thông thường chỉ nên tưới phân bón lá bằng 1/2 hoặc 2/3 nồng độ trên bao bì hướng dẫn.
                                        - Sâu bệnh: Giai đoạn cây con phải chú ý quan sát thường xuyên vì rất dễ bị sâu ăn lá tấn công. Chúng ta nên phun thuốc trừ nấm, trừ sâu (dạng vi sinh) 1 tuần 1 lần. Ngoài ra cũng chú ý đất trồng không được để úng tránh cây bị thối.</Text>
                                </ScrollView>
                            </View>
                        )}
                    </View>
                )}

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>



                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 'normal' }}>Các giai đoạn</Text>
                    <TouchableOpacity onPress={handleExpand1}>
                        <Text style={{ color: 'green', fontSize: 25, fontWeight: 'normal' }}>{expanded1 ? '_' : '+'}</Text>
                    </TouchableOpacity>
                </View>

                {/* Hiển thị các bước nếu được mở rộng */}
                {expanded1 && (
                    <View style={styles.buocContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.buoc}>1. Ngâm hạt và ủ hạt(48 tiếng)</Text>
                            <TouchableOpacity onPress={handleExpandBuoc4}>
                                <Image source={require('../img/arrow.png')}
                                    style={{ top: 5 }} />
                            </TouchableOpacity>
                        </View>
                        {buoc4Expanded && (
                            <View>
                                <ScrollView style={{ maxHeight: 200 }}>
                                    <Text style={styles.buocContent}>- Cần ngâm hạt vào nước sạch khoảng 48 tiếng, thay nước mỗi 24 tiếng. {'\n'}

                                        - Hạt đã hút no nước trong thời gian trên vớt ra và ủ khô trong 24 tiếng.</Text>
                                </ScrollView>
                            </View>
                        )}

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.buoc}>2. Nảy mầm (3-5 ngày)</Text>
                            <TouchableOpacity onPress={handleExpandBuoc5}>
                                <Image source={require('../img/arrow.png')}
                                    style={{ top: 5 }} />
                            </TouchableOpacity>
                        </View>

                        {buoc5Expanded && (
                            <View>
                                <ScrollView style={{ maxHeight: 200 }}>
                                    <Text style={styles.buocContent}>-Điều kiện nảy mầm: 25-28 độ C
                                        Độ ẩm: 25 - 35%
                                        Ánh sáng: 8h/ngày
                                        Đất: đất mùn
                                        Phân bón: phân động vật ủ ít nhất 3 tháng
                                        Tỉ lệ phân x đất nền: 3x7
                                        Dinh dưỡng: Elite Nutrition A
                                        - Lưu ý:
                                        Giai đoạn nhạy cảm khi thêm nước cần nhẹ tay hoặc tưới gốc.
                                        Cần đảm bảo lượng không khí, chủ yếu là oxy cho mầm và rễ phát triển.
                                        Nên sử dụng ly nhựa nhỏ đục lỗ dưới đáy ly để thoát nước và khí cho bộ rễ.
                                        Chiều cao: từ 10-20cm</Text>
                                </ScrollView>
                            </View>
                        )}

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.buoc}>3. Bắt đầu phát triển (2-3 tuần)</Text>

                            <TouchableOpacity onPress={handleExpandBuoc6}>
                                <Image source={require('../img/arrow.png')}
                                    style={{ top: 5 }} />
                            </TouchableOpacity>
                        </View>
                        {buoc6Expanded && (
                            <View>
                                <ScrollView style={{ maxHeight: 200 }}>
                                    <Text style={styles.buocContent}>- Điều kiện phát triển:
                                        20-27 độ C
                                        Độ ẩm: 30-40%
                                        Ánh sáng: 10/ ngày
                                        Cần 1 thìa phốt pho để phát triển bộ rễ
                                        Dinh Dưỡng: Elite Nutrition B
                                        - Lưu ý: Giai đoạn cây phát triển thành cây lớn
                                        Tùy từng loại hạt sẽ có từ 2-4 lá mầm ban đầu, rối sẽ phát triển thành 5-7-9 nhánh tùy chất lượng hạt
                                        Sử dụng chậu nhỏ có trộn đất mùn hoặc đất sạch tribat.</Text>
                                </ScrollView>
                            </View>
                        )}

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.buoc}>4. Trưởng thành (4-6 tuần)</Text>

                            <TouchableOpacity onPress={handleExpandBuoc7}>
                                <Image source={require('../img/arrow.png')}
                                    style={{ top: 5 }} />
                            </TouchableOpacity>
                        </View>
                        {buoc7Expanded && (
                            <View>
                                <ScrollView style={{ maxHeight: 200 }}>
                                    <Text style={styles.buocContent}>- Điều kiện trưởng thành:
                                        24-27 độ C
                                        Độ ẩm: 30-40%
                                        Ánh sáng: 6h/ngày
                                        Thêm Elite Nutrition C vào nước khi tưới (tỉ lệ 1:9)
                                        - Lưu ý: Giai đoạn phát triển có cấu trúc thân, cành, lá khỏe mạnh để nâng đỡ cụm hoa/quả. Cây lớn nhanh về chiều cao từ 50cm - 70m
                                        Rễ phát triển lớn, nếu chậu không đủ to hãy chuyển sang chậu lớn hơn.</Text>
                                </ScrollView>
                            </View>
                        )}

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.buoc}>5. Ra hoa (4-6 tuần)</Text>

                            <TouchableOpacity onPress={handleExpandBuoc8}>
                                <Image source={require('../img/arrow.png')}
                                    style={{ top: 5 }} />
                            </TouchableOpacity>
                        </View>
                        {buoc8Expanded && (
                            <View>
                                <ScrollView style={{ maxHeight: 200 }}>
                                    <Text style={styles.buocContent}>- Điều kiện ra hoa:
                                        24-30 độ C
                                        Độ ẩm: 50-55%
                                        Ánh sáng:12h/ngày
                                        Thêm Elite Nutrition D vào nước khi tưới (tỉ lệ 1:9)
                                        -Lưu ý: Cần tỉa bớt lá to và cấu ngọn để cây có thể ra hoa.
                                        Ánh sáng cực kì quan trọng tại giai đoạn này.
                                        Cần theo dõi các nhánh để tránh tình trạng bông quá nặng các nhánh không chịu nổi sẽ phải dùng biện nâng đỡ.</Text>
                                </ScrollView>
                            </View>
                        )}
                    </View>
                )}
            </View>


        </View>

    )
}

export default KienThuc

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        flex: 7,

    },
    headerImage: {
        width: '100%',
        height: '35%',
        resizeMode: 'cover',

    },

    headerText: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },

    body: {
        borderRadius: 20,
        margin: 20,
        backgroundColor: 'white'


    },
    tripInfo: {
        fontSize: 15,
        lineHeight: 24,
        fontWeight: 'normal',
        color: 'black',
        marginTop: 10,
        height: 70,

    },
    footer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        paddingVertical: 10,

    },
    price: {
        flex: 2,
    },
    priceText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    bookButton: {
        marginHorizontal: 20,
        backgroundColor: 'green',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        borderRadius: 15,
        marginTop: 20


    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',

    },

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
        marginLeft: 100
    },
    image1: {
        width: 40,
        height: 40,
        marginRight: 120,
        marginLeft: 10,
        borderRadius: 10,
        marginBottom: 5
    },
    buocContainer: {
        marginTop: 5,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    buoc: {
        color: 'gray',
        fontSize: 18,
        fontWeight: 'normal',
    },
    buocContent: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'normal',
        marginLeft: 20,
        marginBottom: 10,
    },
})