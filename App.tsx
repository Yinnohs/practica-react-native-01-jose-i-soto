import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { CardHeader } from './src/components';

export default function App() {
  return (
    <View style={styles.container}>
      <CardHeader/>
      <View style={styles.viewContainer}>
        <View style={styles.parragraph}>
          <Text style={styles.textColor}> Mi nombre es Jóse ignacio soto leon, actualmente Soy parte del Equipo de QA de una empresa del sector educativo. </Text>
          <Text style={styles.textColor}> Soy bastante perspicas en mi trabajo ademas de que lo disfruto bastante, me permite cierta flexibilidad para dedicarme a mis tareas díarias y enfocarme en el estudio en caso de que sea necesario</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151422',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContainer:{
    flex:1,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  parragraph:{
    flex:0.3,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    paddingHorizontal:'5%'
  },
  textColor:{
    color:'#7491C2'
  },
});
