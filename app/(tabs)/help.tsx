import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Help = () => {
  return (
    <ScrollView style={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          
          <View style={styles.profileCircle}>
            <Ionicons name="person-outline" size={20} color="#fff" />
          </View>

          <Text style={styles.headerText}>Help</Text>

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

      {/* IMAGE + TEXT */}
      <View style={styles.centerSection}>
        <Image
          style={styles.image}
          source={require("../../assets/images/rafiki-ecobank.png")}
        />

        <Text style={styles.mainText}>Hello, Philip Odame</Text>
        <Text style={styles.subText}>How can I help you today?</Text>

        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Let's Chat</Text>
        </TouchableOpacity>
      </View>

      {/* CONTACT SECTION */}
      <Text style={styles.sectionHeader}>Contact Us</Text>

      {/* EMAIL */}
      <View style={styles.contactRow}>
        <View style={styles.contactLabelRow}>
          <Ionicons name="mail-outline" size={20} color="#0C5B78" style={{ marginRight: 8 }} />
          <Text style={styles.contactTitle}>EMAIL US</Text>
        </View>

        <Text style={styles.contactValue}>assist@ecobank.com</Text>

        <View style={styles.divider} />
      </View>

      {/* WEBSITE */}
      <View style={styles.contactRow}>
        <View style={styles.contactLabelRow}>
          <Ionicons name="globe-outline" size={20} color="#0C5B78" style={{ marginRight: 8 }} />
          <Text style={styles.contactTitle}>OUR WEBSITE</Text>
        </View>

        <Text style={styles.contactValue}>www.ecobank.com</Text>

        <View style={styles.divider} />
      </View>

    </ScrollView>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', 
  },

  header: {
    backgroundColor: "#0C5B78",
    paddingHorizontal: 18,
    paddingTop: 45,
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

  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  flagRow: { flexDirection: "row", alignItems: "center" },
  flag: { fontSize: 20 },

  centerSection: {
    alignItems: "center",
    marginTop: 25,
  },

  image: {
    width: 220,
    height: 220,
    resizeMode: "contain",
  },

  mainText: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
  },

  subText: {
    marginTop: 4,
    fontSize: 16,
    color: "#444",
    textAlign: "center",
  },

  button: {
    backgroundColor: '#6DCF00',
    paddingVertical: 16,
    borderRadius: 5,
    marginTop: 25,
    width: '60%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  sectionHeader: {
    marginTop: 35,
    marginLeft: 20,
    fontWeight: "700",
    fontSize: 18,
    color: "#0C5B78",
    marginBottom: 15,
  },

  contactRow: {
    paddingHorizontal: 20,
  },

  contactLabelRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  contactTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0C5B78",
  },

  contactValue: {
    fontSize: 14,
    marginTop: 5,
    marginLeft: 28,
    color: "#333",
  },

  divider: {
    height: 1,
    backgroundColor: "#d3d3d3",
    width: "100%",
    marginVertical: 20,
  },
});
