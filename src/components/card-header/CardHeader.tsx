import React from "react"
import { View, Image, StyleSheet, Text, } from "react-native"
export const CardHeader : React.FC= ()=>{
    return(
        <View style={styles.headerContainer}>
            <Image source={require('../../images/profile-pic.png')}  style={styles.headerImage}/>
            <Text style={styles.headerText}> José Ignacio Soto León </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    headerContainer:{
        flex:0.3,
        width:'100%',
        display:"flex",
        flexDirection:'row',
        alignItems:'center',
        justifyContent: "space-evenly",
        backgroundColor:'#191835',
        paddingTop:'10%'
    },

    headerImage:{

        height:110,
        width: 110,
        borderRadius:100/2,
        borderWidth:0.1,
        marginHorizontal:'5%',
        borderColor:'#7491C2',

    },

    headerText:{
        fontSize: 20,
        fontWeight:'700',
        color:'#7491C2',
        marginRight:'5%'

    }

})