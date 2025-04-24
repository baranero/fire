import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EquipmentListScreen from "./screens/EquipmentListScreen";
import EquipmentDetailScreen from "./screens/EquipmentDetailScreen";
import HomeScreen from "./screens/HomeScreen";
import EquipmentTypeScreen from "./screens/EquipmentTypeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={HomeScreen} />
        <Stack.Screen name="Sprzęt" component={EquipmentTypeScreen} />
        <Stack.Screen name="SprzętWysokościowy" component={EquipmentListScreen} options={{ title: "Sprzęt wysokościowy" }}/>
        <Stack.Screen name="Szczegóły" component={EquipmentDetailScreen} />
        {/* <Stack.Screen name="SprzętWysokościowy" component={SprzetWysokosciowyScreen} />
<Stack.Screen name="SprzętGaśniczy" component={SprzetGasniczyScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
