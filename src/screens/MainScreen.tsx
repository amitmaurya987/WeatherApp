import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Record from '../componants/Record';
// import TabNavigation from '../componants/TabNavigastion';

const MainScreen = () => {

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/img1.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <View>
                <Text style={styles.deg}>90°C</Text>
                <Text style={styles.text}>Precipitations</Text>
                <View>
                    <View style={styles.range}>
                        <Text style={styles.text}>Max: 24°C</Text>
                        <Text style={styles.text}>Min:18°C</Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerBottom}>
                <Image
                    source={require('../assets/images/House.png')}
                    style={styles.image2}
                    resizeMode="contain"
                />

                <LinearGradient
                    colors={["#3E2D8F", "#8D4CA7"]} // gradient colors
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.gradientBox}
                >
                    <View style={styles.header}>
                        <Text style={styles.text1}>Today</Text>
                        <Text style={styles.text1}>July 21</Text>
                    </View>
                  
                     <ScrollView
  horizontal
  showsHorizontalScrollIndicator={true}
  contentContainerStyle={styles.pannel}
>
  <Record temperature="10" time="01.00" />
  <Record temperature="10" time="10.00" />
  <Record temperature="10" time="15.00" />
  <Record temperature="10" time="15.00" />
  <Record temperature="10" time="15.00" />
  <Record temperature="10" time="15.00" />
  <Record temperature="10" time="15.00" />
  <Record temperature="10" time="15.00" />
  <Record temperature="10" time="15.00" />
  <Record temperature="10" time="15.00" />
  <Record temperature="10" time="15.00" />
  <Record temperature="10" time="15.00" />
</ScrollView>
                </LinearGradient>
            </View>
            <View style={styles.bottomPannel}>
                {/* <TabNavigation /> */}
            </View>
        </View>
    );
};
const { width, height } = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        height: height,
        backgroundColor: "#7A2D91"
    },
    deg: {
        fontSize: 64,
        fontWeight: "500",
        color: "#fff",
        textAlign: "center",
        marginTop: -30,
        marginBottom: 10,
    },
    text: {
        fontSize: 25,
        textAlign: "center",
        color: "#fff"

    },
    image: {
        width: 244,
        height: 244,
    },

    range: {
        flex: 0,
        flexDirection: 'row',
        gap: 20,
        marginTop: 8,
        justifyContent: "flex-start",
        alignItems: "baseline"

    },
    containerBottom: {

        flex: 1,
        justifyContent: "flex-end",
        alignContent: "center",
    },
    image2: {
        width: 336,
        height: 198,
        marginHorizontal: 'auto'
    },

    gradientBox: {
        width: width,
        borderRadius: 16,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 6,
    },

    header: {
        borderBottomWidth: 1,
        borderBottomColor: "#ffffff3c",
        paddingHorizontal: 30,
        paddingVertical: 10,
        width: "100%",
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text1: {
        fontSize: 14,
        color: "#fff",
        textAlign: "center"
    },
    pannel: {
        flex: 0,
        flexDirection: 'row',
        padding: 30,
        justifyContent: 'space-between',
        overflow:'scroll',


    },
    bottomPannel:{
        height:100,
        width:"100%"
    }

});

export default MainScreen;
