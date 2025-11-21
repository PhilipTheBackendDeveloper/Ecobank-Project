import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";


const { width } = Dimensions.get("window");

export default function Home() {
  const  [showBalance, setshowBalance]= useState(false) 
  const showBalanceBtn= ()=>{
    setshowBalance(!showBalance)
  };
  return (
    <SafeAreaView  style={styles.safe}>
      <ScrollView
        // contentContainerStyle={styles.scrollContent}
        // showsVerticalScrollIndicator={false}
      >
      <View>
        <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <View style={styles.profileCircle}>
            <Ionicons name="person-outline" size={20} color="#fff" />
          </View>

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

        <Text style={styles.welcome}>Welcome back,</Text>
        <Text style={styles.name}>Philip Odame</Text>
        <View style={{
          height: 1,
          backgroundColor: '#ccc',
          width: '100%',
          marginVertical: 10,}}
        >

        </View>
        
      </View>
      </View>
      <View style={{marginBottom: -70, position: 'relative', zIndex: 1, marginTop: -30}}>
        <View style={styles.accountsRowHeader}>
          <Text style={styles.accountsTitleHeader}>MY ACCOUNTS</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.viewAllHeader}>VIEW ALL</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.accountCardHeader}>
          <View style={styles.cardTopRow}>
            <View>
              <Text style={styles.cardTitle}>Savings Account</Text>
              <Text style={styles.cardNumber}>1441002722376</Text>
            </View>

            <TouchableOpacity style={styles.cardSettings}>
              <Ionicons name="settings-outline" size={18} color="#0C5B78" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity activeOpacity={0.8} onPress={showBalanceBtn}>
            {
              !showBalance ? (
                
                <View style={styles.showBalanceBtn}>
                    <Text style={styles.showBalanceText }>Show my balance</Text>
                </View>
             ) : showBalance && (
              <View style={styles.showBalanceState}>
                 <Text style={{fontSize: 24, color: "#fff"}}>$900,738,998,009,069.50</Text>
                 </View>
            )
           }
          </TouchableOpacity>
        </View>
      </View>
      
       
      <View style={styles.scrollContent}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>QUICK TRANSACTION</Text>
          <Ionicons name="chevron-down" size={18} color="#1581C4" />
        </View>

        <View style={styles.grid}>
          {ACTION_ITEMS.map((a, i) => (
            <TouchableOpacity key={i} style={styles.gridItem} activeOpacity={0.8}>
              <View style={styles.gridItemInner}>
                <View style={styles.gridIconBox}>
                  <Ionicons name={a.icon} size={20} color="#1581C4" />
                </View>
                <Text numberOfLines={1} style={styles.gridText}>
                  {a.label}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        
        <View style={[styles.sectionHeader, { marginTop: 10 }]}>
          <Text style={styles.sectionTitle}>YOUR ACTIVITY</Text>
          <Ionicons name="chevron-down" size={18} color="#1581C4" />
        </View>

        <View style={styles.activityCard}>
          <View style={styles.activityLeft}>
            <View style={styles.activityIcon}>
              <Ionicons name="card-outline" size={20} color="#1581C4" />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.activityTitle}>
                Transfer to mobile money account
              </Text>
              <Text style={styles.activitySubtitle}>
                You have successfully transferred GHS 68.50 via mobile money
              </Text>
            </View>
          </View>

          <View style={styles.activityRight}>
            <Text style={styles.amount}>GHS 68.50</Text>
            <Text style={styles.status}>SUCCESS</Text>
          </View>
        </View>

        <View style={{ height: 80 }} />
        <View>

        </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const ACTION_ITEMS = [
  { label: "Airtime/Data", icon: "phone-portrait-outline" },
  { label: "Transfer", icon: "swap-horizontal-outline" },
  { label: "Pay Bill", icon: "document-text-outline" },
  { label: "Xpress Cash", icon: "walk-outline" },
  { label: "EcobankPay", icon: "qr-code-outline" },
  { label: "Split Payments", icon: "git-branch-outline" },
];

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0C5B78" },

  header: {
    backgroundColor: "#0C5B78",
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 26,
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

  welcome: {
    color: "#CFE9F1",
    marginTop: 16,
    fontSize: 13,
  },

  name: {
    color: "#fff",
    marginTop: 6,
    fontSize: 22,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  accountsRowHeader: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
  },

  accountsTitleHeader: { color: "#ffffffff", fontSize: 12, },
  viewAllHeader: { color: "#fff", fontSize: 12, },

  
  accountCardHeader: {
    backgroundColor: "#1581C4",
    marginTop: 10,
    marginBottom: -40,
    padding: 16,
    width: width - 36,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    marginLeft: 20,
  },

  cardTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardTitle: { color: "#fff", fontSize: 20, fontWeight: "300" },
  cardNumber: { color: "#E6F5FB", marginTop: 6, fontSize: 12 },

  cardSettings: {
    width: 36,
    height: 36,
    borderRadius: 36,
    backgroundColor: "rgba(255,255,255,0.18)",
    alignItems: "center",
    justifyContent: "center",
  },

  showBalanceBtn: {
    marginTop: 14,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.95)",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  showBalanceText: { color: "#fff", fontWeight: "300" ,fontSize: 16 },
  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 16,
    backgroundColor: "#fff",
    marginTop: 50,
  },
  showBalanceState:{
    fontSize: 36,
    marginTop: 10,
    
    width: '100%',
  },
  sectionHeader: {
    marginTop: 53,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: { color: "#1581C4", fontWeight: "300", fontSize: 16 },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  gridItem: {
    width: "48%",
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E6EEF3",
    marginBottom: 12,
    justifyContent: "center",
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 2,
    elevation: 1,
  },

  gridItemInner: { flexDirection: "row", alignItems: "center" },

  gridIconBox: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: "#F7FBFD",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E9F5FA",
    marginRight: 12,
  },

  gridText: { color: "#0C5B78", fontSize: 14, fontWeight: "400", flex: 1 },
  activityCard: {
    marginTop: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ECECEC",
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  activityLeft: { flexDirection: "row", alignItems: "center", flex: 1 },

  activityIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    elevation: 2,
  },

  activityTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#000",
    marginBottom: 6,
  },

  activitySubtitle: { fontSize: 12, color: "#8B8B8B" },

  activityRight: { alignItems: "flex-end", marginLeft: 8 },

  amount: { fontSize: 14, fontWeight: "800", color: "#000" },
  status: { marginTop: 6, fontSize: 12, fontWeight: "300", color: "#12A54A" },
});
