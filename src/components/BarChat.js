import React from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';


const BarChartComponent = () => {

    const barData = [
        { value: 10, label: 'Jan', frontColor: '#FFA9A9' },
        { value: 20, label: 'Feb', frontColor: '#FF3C2A' },
        { value: 30, label: 'Mar', frontColor: '#F7A06D' },
        { value: 40, label: 'Apr', frontColor: '#964514' },
        { value: 50, label: 'May', frontColor: '#177AD5' },
        { value: 60, label: 'Jun', frontColor: '#FFC259' },
        { value: 70, label: 'Jul', frontColor: '#FFA9A9' },
        { value: 80, label: 'Aug', frontColor: '#FFC259' },
        { value: 90, label: 'Sep', frontColor: '#FFEE4D' },
        { value: 100, label: 'Oct', frontColor: '#F6E9D9' },
        { value: 110, label: 'Nov', frontColor: '#B39E83' },
        { value: 120, label: 'Dec', frontColor: '#FFA036' },
    ];

    return (
        <View>
            <BarChart
                barWidth={40}
                noOfSections={5}
                barBorderRadius={4}
                frontColor="lightgray"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
            />
        </View>
    );
};

export default BarChartComponent;
