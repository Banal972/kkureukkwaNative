import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { Image } from "expo-image"
import KkwabaegiIMG from "../assets/images/storetype/kkwabaegi.png";
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image source={KkwabaegiIMG} style={{width : 128, height:128}}></Image>
        <Text style={styles.iconText}>꾸르꽈에 오신걸 환영해요!</Text>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>카카오로 로그인하기</Text>
      </TouchableOpacity>
      <Link href={"/main"} style={{fontSize : 12, color : "gray"}}>로그인없이 둘러보기</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : "center",
    justifyContent : "center",
    paddingHorizontal : 20
  },
  icon : {
    alignItems : "center"
  },
  iconText : {
    marginTop : 15
  },
  loginButton : {
    backgroundColor : "#ffb24e",
    width : "100%",
    alignItems : "center",
    paddingVertical : 10,
    borderRadius : 20,
    marginVertical : 30
  },
  loginButtonText : {
    color : "#fff"
  }
});
