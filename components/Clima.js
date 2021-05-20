import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class Clima extends Component{
  render(){
        return(
          <>
            <Text style={styles.font}>Data: {this.props.data.date}</Text>
            <Text style={styles.font}>Horário: {this.props.data.time}</Text>
            <Text style={styles.font}>Temperatura: {this.props.data.temp}</Text>
            <Text style={styles.font}>Descrição: {this.props.data.description}</Text>
            
          </>
          )

  }
}

const styles = StyleSheet.create({
  font:{
    fontSize:22,
    alignItems: 'center',
    color:"#051617",
    width:250,
  }
});

export default Clima;