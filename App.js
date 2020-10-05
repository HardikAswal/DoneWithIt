import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Switch} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText/AppText';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppButton from './app/components/AppButton';
import Card from './app/components/card'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon'; 
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreens';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

const categories = [
  {label: "Furniture", value: 1},
  {label: "Clothing", value: 2},
  {label: "Cameras", value: 3}
];

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState(categories[0]);
  

   return (
    // <View style={{ 
    //   backgroundColor:"#f8f4f4",
    //   padding:20,
    //   paddingTop:50,
    // }}>
    // <Card
    //   title="Red Jacket for sale"
    //   subTitle="$100"
    //   img={require('./assets/chair.jpg')}
    //   />
    // </View> 
    // <WelcomeScreen/>
    // <ListingDetailsScreen />
    // <ViewImageScreen/>
    // <MessagesScreen/>
    // <Screen>
    //   <ListItem 
    //   title="My Title" 
    //   subTitle="My subTitle"
    //   image = {require('./assets/mosh.jpg')}
    //   ImageComponent={<Icon name="email" />} />
    //   {/* // ImageComponent={require('./assets/mosh.jpg')} /> */}
    // </Screen>
    // <AccountScreen></AccountScreen>
    // <ListingScreen></ListingScreen>
    // <Screen>
    //   <Text>{firstName} </Text>
    //   <TextInput 
    //     maxLength={5}
    //     keyboardType="default"
    //     clearButtonMode="always"
    //     secureTextEntry={true} //Capture Passwords
    //     onChangeText={(text) => setFirstName(text)}
    //     placeholder="First Name"
    //     style={{
    //       borderBottomColor:"#ccc",
    //       borderBottomWidth: 1
    //     }}
    //   />
    // </Screen>
    // <AppTextInput placeholder="Username" icon="email"></AppTextInput>
    // <Screen>
    //   <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)}/>
    // </Screen>
    // <Screen>
    //   <AppPicker
    //    selectedItem={category}
    //    onSelectItem={item => setCategory(item)}
    //    items ={categories} icon="apps" placeholder="Category"/>
    //   <AppTextInput icon="email" placeholder="Email"/>
    // </Screen>
    // <LoginScreen></LoginScreen>
    <ListingEditScreen></ListingEditScreen>
  );
}

const styles= StyleSheet.create({
  container:{
    
  }
})



