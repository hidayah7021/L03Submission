import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Button, ToastAndroid, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function App() {
    const [userAnswers, setUserAnswers] = useState({
        answer1: '',
        answer2: '',
        answer3: ''
    });

    const correctAnswers = {
        answer1: 'Ducati',
        answer2: 'Yamaha',
        answer3: 'Kawasaki'
    };

    const styles = StyleSheet.create({
        parent: {
            marginTop: 50,
            margin: 20,
            backgroundColor: 'lightgray',
            borderColor: '#0099AA',
            borderWidth: 5,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            padding: 10
        },
        child: {
            flexDirection: 'row',
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: 20,
            marginBottom: 20,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginVertical: 10
        }
    });

    const Bike = ({ iconName, poster, index }) => {
        return (
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <Image source={poster} style={{ width: 400, height: 300 }} />
                <Icon name={iconName} size={20} color="#B23B23" />
                <RNPickerSelect
                    onValueChange={(value) => setUserAnswers((prev) => ({ ...prev, [`answer${index}`]: value }))}
                    items={[
                        { label: 'Yamaha', value: 'Yamaha' },
                        { label: 'Ducati', value: 'Ducati' },
                        { label: 'Kawasaki', value: 'Kawasaki' }
                    ]}
                    value={userAnswers[`answer${index}`]}
                />
            </View>
        );
    };

    const handleSubmit = () => {
        if (
            userAnswers.answer1 === correctAnswers.answer1 &&
            userAnswers.answer2 === correctAnswers.answer2 &&
            userAnswers.answer3 === correctAnswers.answer3
        ) {
            ToastAndroid.show("Good Job! All Correct!", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("Something was wrong, try again :( !", ToastAndroid.SHORT);
        }
    };

    return (
        <View style={styles.parent}>
            <Text style={styles.title}>Get the Bike!</Text>
            <Text>Pick the right brand!</Text>

            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                <Bike
                    iconName="paw"
                    poster={require('./img/ducati.jpg')}
                    index={1}
                />
                <Bike
                    iconName="skull"
                    poster={require('./img/yamahar15.jpg')}
                    index={2}
                />
                <Bike
                    iconName="skull"
                    poster={require('./img/kawasaki.jpg')}
                    index={3}
                />
            </ScrollView>

            <View style={{ padding: 10 }}>
                <Button title="Submit Answers" onPress={handleSubmit} />
            </View>

            <StatusBar style="auto" />
        </View>
    );
}
