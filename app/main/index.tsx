import { TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import useMarkers from "../../hooks/useMarkers";

export default function Main() {

  const markers = useMarkers();

  return (
    <View style={{flex : 1}}>
      <MapView 
        style={{width : '100%', height: "100%"}}
      >
        {
          markers.map((marker : any)=>(
            <Marker
              key={marker.id}
              coordinate={{
                latitude : marker.position.lat,
                longitude : marker.position.lng
              }}
            />
          ))
        }
      </MapView>
      <View style={{position : "absolute", right : 20, top : 15, zIndex : 10, gap : 10}}>
        <TouchableOpacity style={{backgroundColor : "white", width : 40, height : 40, borderRadius : 5, alignItems : "center", justifyContent : 'center'}}>
          <AntDesign name="setting" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor : "white", width : 40, height : 40, borderRadius : 5, alignItems : "center", justifyContent : 'center'}}>
          <Entypo name="megaphone" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}