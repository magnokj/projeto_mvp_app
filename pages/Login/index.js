import React,{useContext,useState} from "react";
// import {View,Text,TouchableOpacity} from 'react-native';

import {
    Container,
    Logo,
    CaixaLogin,
    Botao,
    ContainerBotoes,
    BotaoTexto,
    InputTexto,
    Input,
    ForgotPasswordText,
    ContainerSubmit,
    BotaoSubmit,
    BotaoSubmitTexto,
    Containersubmit

} from './styles'

import logoImg from '../../assets/55009.png'

import {UsuarioContext} from '../../contexts/user'
const Login= () => {

const {signIn,signUp} = useContext(UsuarioContext) 

const [email,setEmail] = useState("carlosmarinhodev@gmail.com")
const [password,setPassword]= useState("741852")

const [currentButton,setCurrentButton] = useState('membro');

    return (
       <Container>
           <Logo source={logoImg}/>
 <CaixaLogin>
<ContainerBotoes>
    <Botao lastClick = {currentButton == 'Membro'?true:false}
    onPress = {()=> {setCurrentButton('Membro')}}>
      <BotaoTexto lastClick= {currentButton == 'Membro'?true:false}>Membro</BotaoTexto>
    </Botao>
    <Botao lastClick = {currentButton == 'Convidado'?true:false}
    onPress = {()=> {setCurrentButton('Convidado')}}>
      <BotaoTexto lastClick= {currentButton == 'Convidado'?true:false}>Convidado</BotaoTexto>
    </Botao>
</ContainerBotoes>

<InputTexto>
E-mail
</InputTexto>
<Input
value = {email}
placeholder= "Digite seu email"
onChangeText= {text=>setEmail(text)}
/>

<InputTexto>
Senha
</InputTexto>
<Input
value = {password}
placeholder= "Digite seu email"
onChangeText= {text=>setPassword(text)}
secureTextEntry={true}
/>

<ForgotPasswordText>
    Esqueci minha senha
</ForgotPasswordText>

<Containersubmit>

<BotaoSubmit onPress={()=>{signIn(email,password)}} invert= {true}>
    <BotaoSubmitTexto invert= {true} >Entrar</BotaoSubmitTexto>
</BotaoSubmit>

<BotaoSubmit>
    <BotaoSubmitTexto onPress={()=>{signUp(email,password)}}>Cadastre-se</BotaoSubmitTexto>
</BotaoSubmit>


</Containersubmit>


 </CaixaLogin>
       </Container>

    )
}
export default Login