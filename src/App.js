import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView, Alert, Linking, ToastAndroid } from 'react-native';
import foto from './assets/foto.png';
import Icon from 'react-native-vector-icons/Feather'
import { rosybrown } from 'color-name';

import Card from './components/Card';

export default function App() {
  
  function handleRedeSocial(rede_social){
    
    switch(rede_social){
      
      case 'linkedin': 
        Alert.alert('Meu Linkedin','https://www.linkedin.com/in/carlos-daniel-da-silva-b15758204/')
        break;

      case 'dribbble': 
        Alert.alert('Meu Dribbble','https://dribbble.com/carlosdUI')
        break;
        
      case 'github': 
        Alert.alert('Meu Github','https://github.com/carlosdUI')
        break;  
    }
  }
 
  return (
    <>
    <ScrollView style={{backgroundColor: '#ecf0f1'}}>
      <View style={styles.page}>
        <View style={styles.containerCabecalho}>
          <View style={styles.containerCabecalhoFoto}>
            <Image source={foto} style={styles.foto} />
            </View>
          <View styles={styles.containerCabecalhoTexto}>  
            <Text style={styles.nome}>CARLOS DANIEL</Text>  
            <Text style={styles.funcao}>UI/UX Designer, Dev Mobile Jr</Text>
          </View>
        
        </View>

        <View style={styles.containerRedesSociais}>     
          <View style={styles.redesSociais}>
            <TouchableOpacity onPress={() => Linking.openURL('http://dribbble.com/carlosDUI')} style={styles.btnSociais}>
              <Icon name="dribbble" size={30} color={'#ecf0f1'}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('http://github.com/carlosDUI')} style={styles.btnSociais}>
              <Icon name="github" size={30} color={'#ecf0f1'}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/carlos-daniel-da-silva-b15758204/')} style={styles.btnSociais}>
              <Icon name="linkedin" size={30} color={'#ecf0f1'}/>
            </TouchableOpacity>
          </View>
        </View> 
        
        <Card titulo="Formação acadêmica">
          <Text style={styles.cardContentText}>SENAC</Text>
          <Text style={styles.cardContentText}>FATEC</Text>
          <Text style={styles.cardContentText}>EEEP Joaquim Nogueira</Text>
        </Card>

        <Card titulo="Experiências profissionais">
          <Text style={styles.cardContentText}>UI/UX Designer - Fábricainfo</Text>
          <Text style={styles.cardContentText}>Dev Mobile - Fábricainfo</Text>
          <Text style={styles.cardContentText}>Dev Front End - Fábricainfo</Text>
        </Card>

      </View>  
    </ScrollView>  

    </>
    
  );
}

const styles = StyleSheet.create({
  
  page: {
    backgroundColor: '#ecf0f1',
    flex: 1,
  },

  containerCabecalho: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    
  },


  containerCabecalhoTexto: {
    marginLeft: 20,
  },

  foto: {
    width: 150,
    height: 150,
    borderRadius: 125,
    borderWidth: 4,
    borderColor: '#3498db',

  },

  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#3498db'
  },

  funcao: {
    color: '#7f8c8d',
    marginBottom: 5,
  },

  containerRedesSociais: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  btnSociais: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },

  redesSociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginVertical: 20,
    
  },

  cardContentText: {
    color: '#7f8c8d',
    marginBottom: 10,
  }

});
