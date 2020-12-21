import React, { Component } from "react";
import { StyleSheet, View, Image} from "react-native";

class Head extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const x = this.props.position[0];
        const y = this.props.position[1];
        return (
          <>
            <Image         
              source={this.props.headUrl}
              style={[styles.finger,
               { 
                width: this.props.size, 
                height: this.props.size, 
                left: x * this.props.size, 
                top: y * this.props.size 
               }]}
            />
          </>
        );
    }
}

const styles = StyleSheet.create({
    finger: {
        backgroundColor: '#888888',
        position: "absolute"
    }
});

export { Head };