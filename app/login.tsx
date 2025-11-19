import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Login = () => {
  const handleProceed = () => {
    router.push("/(tabs)/home"); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.langRow}>
          <Image
            source={require('../assets/images/us-flag.webp')}
            style={styles.flag}
          />

          <Text style={styles.langText}>EN</Text>
          <Ionicons name="caret-down" size={16} color="#2687BA" style={{ marginLeft: 3 }} />
        </View>
        <Ionicons name="chatbubble-ellipses-outline" size={26} color="#2687BA" />
      </View>
      <Text style={styles.headerText}>Welcome to Ecobank</Text>
      <Text style={styles.subHeader}>Have an Ecobank account?</Text>
      <Text style={styles.subHeader}>Enter your mobile number to get started</Text>
      <View style={styles.countryRow}>
        <Text style={styles.placeholder}>Please select your country</Text>
        <Ionicons name="chevron-forward" size={20} color="#ABABAB" />
      </View>
      <View style={styles.phoneRow}>
        <Text style={{ color: '#909090' }}>+234</Text>
        <Ionicons name="chevron-down" size={15} color="#909090" style={{ marginLeft: 6 }} />
        <Text style={{ marginLeft: 20, color: '#909090' }}>Enter your mobile number</Text>
      </View>

      <Text style={styles.smallHint}>
        A one-time PIN will be sent via SMS on this number
      </Text>
      <Text style={styles.termsText}>
        By tapping "Proceed", you are accepting our{' '}
        <Text style={styles.linkText}>Terms & Conditions</Text> as well as our{' '}
        <Text style={styles.linkText}>Privacy policy</Text>.
      </Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleProceed}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
      <Text style={styles.noAccountText}>Don’t have an Ecobank Account</Text>

      <TouchableOpacity style={styles.outlineButton}>
        <Text style={styles.outlineButtonText}>Open New Account</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    alignItems: 'center',
  },

  langRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  flag: {
    width: 40,
    height: 25,
  },

  langText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#2687BA',
  },

  headerText: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 40,
    marginLeft: 25,
  },

  subHeader: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 15,
    marginLeft: 25,
  },

  countryRow: {
    marginTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '85%',
    alignSelf: 'center',
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  placeholder: {
    color: '#ABABAB',
    fontSize: 16,
  },

  phoneRow: {
    marginTop: 35,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '85%',
    alignSelf: 'center',
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  smallHint: {
    marginTop: 10,
    marginLeft: 25,
    color: '#ABABAB',
    fontSize: 12,
  },

  termsText: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 30,
    paddingHorizontal: 25,
  },

  linkText: {
    color: '#005B82',
  },

  button: {
    backgroundColor: '#6DCF00',
    paddingVertical: 16,
    borderRadius: 5,
    marginTop: 25,
    width: '85%',
    alignSelf: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },

  noAccountText: {
    marginLeft: 25,
    marginTop: 40,
    fontSize: 18,
    fontWeight: '600',
  },

  outlineButton: {
    borderWidth: 1.5,
    borderColor: '#D9D9D9',
    borderRadius: 7,
    paddingVertical: 16,
    alignItems: 'center',
    width: '85%',
    alignSelf: 'center',
    marginTop: 100,
  },

  outlineButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2687BA',
  },
});
