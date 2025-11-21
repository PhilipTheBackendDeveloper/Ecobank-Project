import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';

const NotificationScreen = () => {
  const [enabled, setEnabled] = useState(true);

  return (

    <ScrollView>
      <View style={styles.container}>
      
      
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          
          <View style={styles.profileCircle}>
            <Ionicons name="person-outline" size={20} color="#fff" />
          </View>

          <Text style={styles.headerText}>Notifications</Text>

          <View style={styles.flagRow}>
            <Text style={styles.flag}>🇬🇭</Text>
            <Ionicons name="chevron-down-outline" size={16} color="#fff" style={{ marginLeft: 6 }} />
          </View>

        </View>
      </View>

    
      <View style={styles.content}>

        
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Switch off notifications</Text>
          <Switch
            value={enabled}
            onValueChange={setEnabled}
            trackColor={{ false: "#BDBDBD", true: "#6DCF00" }}
            thumbColor="#fff"
          />
        </View>

        <Text style={styles.sectionTitle}>NEW NOTIFICATIONS</Text>

       
        <View style={styles.notificationWrapper}>
          
          
          <View style={styles.iconBox}>
            <Text style={styles.iconLetter}>E</Text>
            <View style={styles.redDot} />
          </View>

         
          <View style={{ flex: 1 }}>
            <Text style={styles.notificationTitle}>eAlert Notification</Text>

            <Text style={styles.notificationMessage}>
              InApp Notification - GHS 10.00 Debited from ac XX722376 
              REF:H29XGCCGHS000001 MONTHLY CARD SERVICE FEES FOR THE MONTH OF JUL2025 
              - CARD ***5826 on 18-OCT-25. Your Available Balance is GHS 159.93. 
              Keep your Password & PIN confidential.
            </Text>

            <Text style={styles.notificationTime}>18 Oct 2025, 06:22 AM</Text>
        <View style={styles.divider} />

          </View>

        </View>

        
        <View style={styles.notificationWrapper}>
          
          
          <View style={styles.iconBox}>
            <Text style={styles.iconLetter}>E</Text>
            <View style={styles.redDot} />
          </View>

         
          <View style={{ flex: 1 }}>
            <Text style={styles.notificationTitle}>eAlert Notification</Text>

            <Text style={styles.notificationMessage}>
              InApp Notification - GHS 10.00 Debited from ac XX722376 
              REF:H29XGCCGHS000001 MONTHLY CARD SERVICE FEES FOR THE MONTH OF JUL2025 
              - CARD ***5826 on 18-OCT-25. Your Available Balance is GHS 159.93. 
              Keep your Password & PIN confidential.
            </Text>

            <Text style={styles.notificationTime}>18 Oct 2025, 06:22 AM</Text>
          </View>

        </View>

      </View>

    </View>
    </ScrollView>
    
  );
};

export default NotificationScreen;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
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

  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },

  flagRow: { flexDirection: "row", alignItems: "center" },
  flag: { fontSize: 20 },

  
  content: {
    paddingHorizontal: 18,
    marginTop: 15,
  },

  switchRow: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  switchLabel: {
    fontSize: 16,
    fontWeight: "500",
  },

  sectionTitle: {
    marginTop: 25,
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "700",
    color: "#0C5B78",
  },

 
  notificationWrapper: {
    backgroundColor: "#fff",
    padding: 15,
    // borderRadius: 10,
    flexDirection: "row",
  },

  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#EFF3F6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  iconLetter: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0C5B78",
  },

  redDot: {
    width: 8,
    height: 8,
    backgroundColor: "red",
    borderRadius: 10,
    position: "absolute",
    right: -2,
    top: -2,
  },

  notificationTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },

  notificationMessage: {
    color: "#4A4A4A",
    fontSize: 14,
    lineHeight: 20,
  },

  notificationTime: {
    marginTop: 8,
    color: "#8A8A8A",
    fontSize: 12,
  },

  divider: {
    height: 1,
    backgroundColor: "#D9D9D9",
    marginVertical: 10,
   

  },
});
