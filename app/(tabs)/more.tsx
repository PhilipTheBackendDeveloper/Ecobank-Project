import { Ionicons } from "@expo/vector-icons";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const more = () => {
  return (
       <View style={styles.container}>
      <View>
        <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <View style={styles.profileCircle}>
            <Ionicons name="person-outline" size={20} color="#fff" />
          </View>
          <Text style={styles.headerText}>More Services</Text>


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
      <View style={{padding: 20, backgroundColor: '#ffffffff',}}>
        <View style={{flexDirection: "row",}}>
          <Ionicons name="home" size={24} color="#000000ff" style={{marginRight: 10}} />
          <Text style={{ fontSize: 20, fontWeight:"400" , color:"#000000ff"}}>Settings</Text>
          <Ionicons name="chevron-forward" size={20} color="#000000ff" style={{marginLeft: 'auto'}} />
        </View>
        <View style={{
                  height: 2,
                  backgroundColor: '#9b9b9bff',
                  width: '100%',
                  marginVertical: 20,}}
                >
        
          </View>
        </View>
        <View style={{padding: 20, backgroundColor: '#ffffffff',}}>
        <View style={{flexDirection: "row",}}>
          <Ionicons name="home" size={24} color="#000000ff" style={{marginRight: 10}} />
          <Text style={{ fontSize: 20, fontWeight:"400" , color:"#000000ff"}}>Manage Beneficiaries</Text>
          <Ionicons name="chevron-forward" size={20} color="#000000ff" style={{marginLeft: 'auto'}} />
        </View>
        <View style={{
                  height: 2,
                  backgroundColor: '#9b9b9bff',
                  width: '100%',
                  marginVertical: 20,}}
                >
        
          </View>
      </View>
      <View style={{padding: 20, backgroundColor: '#ffffffff',}}>
        <View style={{flexDirection: "row",}}>
          <Ionicons name="home" size={24} color="#000000ff" style={{marginRight: 10}} />
          <Text style={{ fontSize: 20, fontWeight:"400" , color:"#000000ff"}}>Loans and Deposits</Text>
          <Ionicons name="chevron-forward" size={20} color="#000000ff" style={{marginLeft: 'auto'}} />
        </View>
        <View style={{
                  height: 2,
                  backgroundColor: '#9b9b9bff',
                  width: '100%',
                  marginVertical: 20,}}
                >
        
          </View>
      </View>
      <View style={{padding: 20, backgroundColor: '#ffffffff',}}>
        <View style={{flexDirection: "row",}}>
          <Ionicons name="home" size={24} color="#000000ff" style={{marginRight: 10}} />
          <Text style={{ fontSize: 20, fontWeight:"400" , color:"#000000ff"}}>Cheque Services</Text>
          <Ionicons name="chevron-forward" size={20} color="#000000ff" style={{marginLeft: 'auto'}} />
        </View>
        <View style={{
                  height: 2,
                  backgroundColor: '#9b9b9bff',
                  width: '100%',
                  marginVertical: 20,}}
                >
        
          </View>
      </View>
      <View style={{padding: 20, backgroundColor: '#ffffffff',}}>
        <View style={{flexDirection: "row",}}>
          <Ionicons name="home" size={24} color="#000000ff" style={{marginRight: 10}} />
          <Text style={{ fontSize: 20, fontWeight:"400" , color:"#000000ff"}}>Full Statement</Text>
          <Ionicons name="chevron-forward" size={20} color="#000000ff" style={{marginLeft: 'auto'}} />
        </View>
        <View style={{
                  height: 2,
                  backgroundColor: '#9b9b9bff',
                  width: '100%',
                  marginVertical: 20,}}
                >
        
          </View>
      </View>
      <View style={{padding: 20, backgroundColor: '#ffffffff',}}>
        <View style={{flexDirection: "row",}}>
          <Ionicons name="home" size={24} color="#000000ff" style={{marginRight: 10}} />
          <Text style={{ fontSize: 20, fontWeight:"400" , color:"#000000ff"}}>Legal</Text>
          <Ionicons name="chevron-forward" size={20} color="#000000ff" style={{marginLeft: 'auto'}} />
        </View>
        <View style={{
                  height: 2,
                  backgroundColor: '#9b9b9bff',
                  width: '100%',
                  marginVertical: 20,}}
                >
        
          </View>
      </View>
      <View style={{padding: 20, backgroundColor: '#ffffffff',}}>
        <View style={{flexDirection: "row",}}>
          <Ionicons name="home" size={24} color="#000000ff" style={{marginRight: 10}} />
          <Text style={{ fontSize: 20, fontWeight:"400" , color:"#000000ff"}}>Locate Us</Text>
          <Ionicons name="chevron-forward" size={20} color="#000000ff" style={{marginLeft: 'auto'}} />
        </View>
        <View style={{
                  height: 2,
                  backgroundColor: '#9b9b9bff',
                  width: '100%',
                  marginVertical: 20,}}
                >
          </View>
      </View>
    </View>
    )
}

export default more

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
    marginTop: 40,
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
})