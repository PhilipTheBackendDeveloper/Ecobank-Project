// import { Ionicons } from '@expo/vector-icons';
// import React, { useState } from 'react';
// import { StyleSheet, Switch, Text, View } from 'react-native';

// const help = () => {
//   const [enabled, setEnabled] = useState(false);

//   return (
//     <View>
//       <View>
//         <View style={styles.header}>
//           <View style={styles.headerTopRow}>
            
//             <View style={styles.profileCircle}>
//               <Ionicons name="person-outline" size={20} color="#fff" />
//             </View>

//             <Text style={styles.headerText}>Notification</Text>

         
//             <View style={{ flexDirection: "row", alignItems: "center" }}>
//               <Text style={styles.flag}>🇬🇭</Text>
//               <Ionicons
//                 name="chevron-down-outline"
//                 size={16}
//                 color="#fff"
//                 style={{ marginLeft: 6, marginRight: 10 }}
//               />
//             </View>
            

//           </View>
//         </View>
//       </View>
//       <View style={styles.switchContainer}>
//       <Text style={styles.switchText}>Switch off notifications</Text>

//         <Switch style={styles.switch}
//                 value={enabled}
//                 onValueChange={setEnabled}
//                 trackColor={{ false: "#ccc", true: "#6DCF00" }} 
//                 thumbColor="#fff"
//         />
//       </View>
//       <View style={styles.notificationContainer}>
//         <Text>NEW NOTIFICATIONS</Text>
//         <Text>eAlert Notification</Text>
//         <View style={styles.newNotificationContainer}>
//           <Ionicons
//                         name="home"
//                         size={16}
//                         color="#fff"
//                         style={{ marginLeft: 6 }}
//             />
//           <Text>InApp Notification - GHS 10.00 Debited from ac
//           XX384939 REF:H3409034GHHEE000001 MONTHLY 
//           CARD SERVICES FEES FOR THE MONTH OF JUL2025 
//           - CARD ***5826 on 18-OCT-25. Your Available
//           Balance is GHS 169.93. Keep your Password & PIN 
//           confidential.
//         </Text>

//         </View>
//         <View style={{
//                           height: 2,
//                           backgroundColor: '#9b9b9bff',
//                           width: '100%',
//                           marginVertical: 20,}}
//                         >
//         </View>
        
        

//       </View>
        
//     </View>
//   );
// };

// export default help;

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: "#0C5B78",
//     paddingHorizontal: 18,
//     paddingTop: 18,
//     paddingBottom: 26,
//     marginTop: 40,
//   },

//   headerTopRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },

//   profileCircle: {
//     width: 44,
//     height: 44,
//     borderRadius: 44,
//     backgroundColor: "#F7B941",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   flagRow: { flexDirection: "row", alignItems: "center" },
//   flag: { fontSize: 20 },

//   headerText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "600",
//     letterSpacing: 0.2,
//   },
//   switchContainer:{
//     flexDirection: 'row',
//     justifyContent: "space-between",
//     backgroundColor: "#e02020ff",
//     height: 50,
//   },
//   switchText: {
//     marginLeft: 20,
//     fontSize: 18,
//     marginTop: 10,
//   },
//   switch:{
//     marginTop: 10,
//   },
//   notificationContainer:{
//     backgroundColor: '#c02323ff',
//     marginTop: 15,
//   },
//   newNotificationContainer:{
//     flexDirection: 'row'
//   }
// });

import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

const help = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          
          <View style={styles.profileCircle}>
            <Ionicons name="person-outline" size={20} color="#fff" />
          </View>

          <Text style={styles.headerText}>Notifications</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
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

      <View style={styles.content}>
        
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>Turn off notifications</Text>
          <Switch
            value={enabled}
            onValueChange={setEnabled}
            trackColor={{ false: "#BDBDBD", true: "#6DCF00" }} 
            thumbColor="#fff"
          />
        </View>

        <Text style={styles.sectionTitle}>NEW NOTIFICATIONS</Text>

        <View style={styles.notificationCard}>
          
          <View style={styles.notificationHeader}>
            <Ionicons name="notifications-outline" size={20} color="#0C5B78" />
            <Text style={styles.notificationTitle}>eAlert Notification</Text>
          </View>

          <Text style={styles.notificationMessage}>
            InApp Notification - GHS 10.00 Debited from ac XX384939 
            REF:H3409034GHHEE000001 MONTHLY CARD SERVICES FEES FOR JUL 2025 
            - CARD ***5826 on 18-OCT-25. Your Available Balance is GHS 169.93. 
            Keep your Password & PIN confidential.
          </Text>

        </View>

      </View>

    </View>
  );
};

export default help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e4e4ff",
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
    fontSize: 18,
    fontWeight: "600",
  },

  flag: {
    fontSize: 20,
  },

  content: {
    paddingHorizontal: 18,
    marginTop: 15,
  },

  switchRow: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: -15,
    marginRight: -15
    
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
    color: "#4A4A4A",
  },

  notificationCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },

  notificationHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  notificationTitle: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "600",
    color: "#0C5B78",
  },

  notificationMessage: {
    color: "#333",
    fontSize: 14,
    lineHeight: 20,
  },
});
