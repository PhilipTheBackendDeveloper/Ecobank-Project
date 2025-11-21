import { Ionicons } from "@expo/vector-icons";
import React from 'react';
import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const debitCardsImg = require('../../assets/images/debit-cards.png');
const virtualCardsImg = require('../../assets/images/virtual-cards.png');
const attachedCardsImg = require('../../assets/images/attached-cards.png');
const travelNotificationImg = require('../../assets/images/travel-notification1.png');






const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Virtual Cards',
    imageName: virtualCardsImg,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Debit Cards',
    imageName: debitCardsImg,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Attached Cards',
    imageName: attachedCardsImg,

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Travel Notification',
    imageName: travelNotificationImg,

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Credit Card Repayment',
    imageName: virtualCardsImg,

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Prepaid Card TopUp',
    imageName: debitCardsImg,

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Credit Cards',
    imageName: attachedCardsImg,
  },

];

type ItemProps ={ title: string; iconName?: keyof typeof Ionicons.glyphMap;  
  imageName?: ImageSourcePropType;
};




const Item = ({title, iconName, imageName}: ItemProps) => (
  <View>
    <View style={styles.item}>
   {
    imageName && 
    (
     <Image source={imageName} style={{ width: 30, height: 30, marginRight: 10 }} 
    />
    )
   }
    
    <Text style={styles.title}>{title}</Text>
    <Ionicons name="chevron-forward" size={20} color="#bbbbbbff" style={{marginLeft: 'auto'}} />
    
  </View>
    <View style={{
                  height: 1,
                  backgroundColor: '#e0e0e0ff',
                  width: '100%',
                 }}
                >
        
          </View>
  </View>
  
  
);


const card = () => {
  return (
     <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
      <View>
        <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <View style={styles.profileCircle}>
            <Ionicons name="person-outline" size={20} color="#fff" />
          </View>
          <Text style={styles.headerText}>Cards Services</Text>


          <View style={styles.flagRow}>
            <Text style={styles.flag}>🇬🇭</Text>
            <Ionicons
              name="chevron-down-outline"
              size={16}
              color="#fff"
              style={{ marginLeft: 6 }}
            />
            
          </View>
        </View>

        
        
      </View>
      </View>
      {/* <View style={{padding: 20, backgroundColor: '#ffffffff',}}>
        <View style={{flexDirection: "row",}}>
          <Ionicons name="home" size={24} color="#000000ff" style={{marginRight: 10}} />
          <Text style={{ fontSize: 20, fontWeight:"400" , color:"#000000ff"}}>Virtual Cards</Text>
          <Ionicons name="chevron-forward" size={20} color="#000000ff" style={{marginLeft: 'auto'}} />
        </View>
        <View style={{
                  height: 2,
                  backgroundColor: '#9b9b9bff',
                  width: '100%',
                  marginVertical: 20,}}
                >
        
          </View>
        </View> */}
        <View style={{padding: 20, backgroundColor: '#ffffffff',}}>
          
          <FlatList 
        data={DATA}
        renderItem={({item}) => <Item title={item.title }   imageName={item.imageName}/>}
        keyExtractor={item => item.id}
        
           />
        </View>
        
    </View>
      </SafeAreaView>
        
     </SafeAreaProvider>
       
   
  )
}

export default card

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#0C5B78',
    
  },
   header: {
    backgroundColor: "#0C5B78",
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 26,
    marginTop: 36,
    },

  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  profileCircle: {
    width: 44,
    height: 44,
    borderRadius: 44,
    backgroundColor: "#F7B941",
    alignItems: "center",
    justifyContent: "center",
  },

  flagRow: { flexDirection: "row", alignItems: "center" },
  flag: { fontSize: 20 },

  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    marginVertical: 3,
    marginHorizontal: 16,
    marginLeft: -20
  },
  title: {
    fontSize: 15,
  },
})