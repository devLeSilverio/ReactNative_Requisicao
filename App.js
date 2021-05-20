import React, {Component} from 'react';
import { StyleSheet, Text, View ,Button, TextInput} from 'react-native';
import Api from './components/Api';
import Clima from './components/Clima'

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      clima:[],
      nameCity:''
    };
    this.loading = this.loading.bind(this); //autorização para mudar o estado
  }

  async componentDidMount(){
    const response = await Api.get('weather?format=json-cors&fields=only_results,temp,time,description,date&key=ab0481a0&city_name='+this.state.nameCity);
    this.setState({
      clima: response.data
    })
  }

   async loading(){
    const response = await Api.get('weather?format=json-cors&fields=only_results,temp,time,description,date&key=ab0481a0&city_name='+this.state.nameCity);
    this.setState({
      clima: response.data
    })
  }

  render(){
    return (
      <View style={styles.container}>

        <View style={styles.title}>
          <Text style={styles.text}>Buscar por clima: </Text>
          <TextInput 
              style={styles.input}
              placeholder="Digite sua cidade: " 
              onChangeText={
                (value)=> this.setState({nameCity:value})
          }/>
        </View>

        <View style={styles.result}>
           <Clima data={this.state.clima}/>
        </View>

        <View style={styles.button}>
           <Button title="Buscar" onPress={this.loading} color="#0E3A6F"/>
        </View>

      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    flex:1,
    marginTop:50,
  },
  text:{
    fontSize:30,
    fontWeight:"bold",
    backgroundColor:"#8CE8F5",
    borderBottomLeftRadius:200,
    borderTopRightRadius:200,
    textAlign: 'center',
  },
  input:{
    marginTop:30,
    width:400,
    height:50,
    fontSize:30,
    textAlign: 'center',
    borderWidth:2,
  },
  result:{
    flex:1,
    alignItems: 'center',
    marginTop:10
  },
  button:{
    marginTop:15,
    flex:1,
    fontSize:30,
    width:300
  }
});

export default App