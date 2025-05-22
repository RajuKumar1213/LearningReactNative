import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from "yup";


export default function PasswordGenerator() {

    const passwordSchema = Yup.object().shape({
        passwordLength : Yup.number()
        .min(4, "Password length must be at least 4 characters")
        .max(20, "Password length must be at most 20 characters")
        .required("Password length is required"),
    })



  return (
    <View style={styles.container}>
      <Text style={styles.heading}>PasswordGenerator</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: "auto",
    margin: 12,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})
