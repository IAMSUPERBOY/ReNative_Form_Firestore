import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import { useState } from "react";
import FormInput from "./components/FormInput";
import React from "react";
import { useForm, Controller } from 'react-hook-form';
export default function FormReader() {
   return (
    <ScrollView>

     <View>
      <FormInput textbox={styles.textbox} qnbox={styles.qnbox} Questions={[
        "What is your name?",
        "What is your favorite color?",
        "What is your hobby?",
        "Where are you from?",
        "What is your profession?"
      ]}/>
    </View>
      </ScrollView>
  );
}
const styles = StyleSheet.create({
  textbox: {
    padding: 10,
    backgroundColor: '#fff',
    margin: 20,
    borderWidth:1
  },
  qnbox:{
    margin:10,
    fontWeight:'bold',
    borderColor:'#000'
  }
})

