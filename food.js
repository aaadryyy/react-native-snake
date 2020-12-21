
import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";

class Food extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const x = this.props.position[0];
        const y = this.props.position[1];
        return (
            <Image 
            source={require('./assets/food.png')}
            style={
                [styles.finger, 
                { width: this.props.size, 
                height: this.props.size, 
                left: x * this.props.size, 
                top: y * this.props.size }]
                } />
        );
    }
}

const styles = StyleSheet.create({
    finger: {
        backgroundColor: 'purple',
        position: "absolute"
    }
});

export { Food };