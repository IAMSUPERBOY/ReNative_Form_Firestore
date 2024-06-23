import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import { useCallback, useEffect, useState } from "react";
import React from "react";
import { useForm, Control, } from 'react-hook-form';
import { writeQnA } from "@/firebase/firestore/helper";
export default function FormInput(props: any) {
    const { register, handleSubmit, setValue } = useForm();
    const onSubmit = useCallback((data: any) => {
        writeQnA(data); 
        console.log(data);

    }, []);
    const onChangeField = useCallback((fieldName: string) => (text: any) => {
        setValue(fieldName, text);
    }, []);
    useEffect(() => {
        if (typeof props.Questions != undefined){
           try{
            props.Questions.map((key:string)=>
                {
                    register(key);
                });
           }catch(e){}
        }
    }, [register])
     return(
        <View>
    
            {props.Questions.map((Qn:any)=>(<View key={Qn}>
            <Text style={props.qnbox}>{Qn}</Text>
            <TextInput style={props.textbox} placeholder='' onChangeText={onChangeField(Qn)}/>
            </View>))}
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>

    );
}

/* <View>
            <TextInput style={props.textbox} placeholder="A" onChangeText={onChangeField('A')} />
            <TextInput style={props.textbox} placeholder="B" onChangeText={onChangeField('B')} />
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View> */