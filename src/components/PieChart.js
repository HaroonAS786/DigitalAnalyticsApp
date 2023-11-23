import { StyleSheet, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const PieChartComponent = () => {
    const pieData = [
        { value: 54, color: '#177AD5', text: '50%' },
        { value: 40, color: '#964514', text: '10%' },
        { value: 20, color: '#FF3C2A', text: '10%' },
        { value: 20, color: '#ED2555', text: '15%' },
        { value: 20, color: '#B39E83', text: '15%' },
    ];

    return (
        <View style={styles.container}>
            <PieChart
                donut
                showText
                textColor="black"
                radius={130}
                textSize={12}
                showTextBackground
                textBackgroundRadius={16}
                data={pieData}
            />
        </View>
    )
};

export default PieChartComponent

const styles = StyleSheet.create({

    container: {
        alignSelf: "center"
    }

})