import React,{useContext,useState,useEffect} from 'react';
import {StyleSheet,Text,View} from 'react-native'


import {
    Container,
    Button,ButtonText,
    Message
} from './styles'


import firebaseApp from "../../services/firebase";

import {
    getFirestore,
    addDoc,
    collection,
    onSnapshot,
    query,
    where
}from 'firebase/firestore';



const Chat= () => {
 const [messages,setMessages] = useState ([]);
 
useEffect(()=>{
const unsub = onSnapshot(query(collection(db,"mensagens"),where("lido","!=",true)),
(querySnapshot)=>{
    const tmp = [];

    querySnapshot.forEach(async(document)=>{
        tmp.push({
            id:document.id,
            ...document.data()
    })
})
setMessages(tmp);

})
return () =>{
    unsub()
    
}

},[])

 const db = getFirestore (firebaseApp)


 async function handleMessage() {
    try {
await addDoc(collection(db,'mensagens'), {
    lido:false,
    mensagem:'alo'
})
    } catch (err) {
        console.log('err',err)
    }
 }
 
    return (
<Container>
 <Button onPress={()=>{handleMessage()}}>
    <ButtonText>Enviar Mensagem</ButtonText>

   

</Button>
{messages.map((item)=>(
        <Message key = {item.id}>{item.id}</Message>
    ))}

</Container>

    )

}

export default Chat