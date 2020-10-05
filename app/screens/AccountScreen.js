import React from 'react';
import { View , StyleSheet, FlatList} from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparatorComponent from '../components/ListItemSeparator';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
    {
    title: "My Listings", 
     icon: {
         name:"format-list-bulletin",
         backgroundColor: colors.primary
        }    
    },
    {
        title: "My Messages", 
         icon: {
             name:"email",
             backgroundColor: colors.secondary
            }    
        }

]
 
function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
            <ListItem
                title="Hardik Aswal"
                subTitle="hardik.aswal@gmail.com"
                image={require('../../assets/mosh.jpg')}
            />

            </View>
            <View style={styles.container}>
                <FlatList 
                data={menuItems}
                keyExtractor={menuItem => menuItem.title} 
                ItemSeparatorComponent={ListItemSeparatorComponent}
                renderItem={({item})=>
                <ListItem
                    title={item.title}
                    IconComponent={
                        <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
                    }
                ></ListItem>}
                />
                </View>
                <ListItem 
                    title="Log Out"
                    IconComponent={
                        <Icon name="logout" backgroundColor="#ffe66d"/>
                    }
                />

        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
});

export default AccountScreen;