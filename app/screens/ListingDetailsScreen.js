import React from "react";
import {View, Image, StyleSheet} from "react-native";
import AppText from '../components/AppText/AppText'; 
import colors from '../config/colors';
import ListItem from  '../components/ListItem';

function ListingDetailsScreen(props){
    return (
        <View>
            <Image style={styles.image} source={require('../../assets/logo-red.png')}/>
            <View style ={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jacket for Sale</AppText>
                <AppText style={styles.price}>$100</AppText>

                <View style={styles.userContainer}>
                <ListItem
                    image={require('../../assets/mosh.jpg')}
                    title="Hardik Aswal"
                    subTitle="5 Listings"
                >    
                </ListItem>
                </View>
               
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300 
    },
    detailsContainer: {
        padding: 20
    },
    title :{
        fontSize : 24,
        fontWeight: "500"
    },
    price : {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize:20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 40
    }
});

export default ListingDetailsScreen;
