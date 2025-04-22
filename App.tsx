import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EquipmentListScreen from "./screens/EquipmentListScreen";
import EquipmentDetailScreen from "./screens/EquipmentDetailScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={HomeScreen} />
        <Stack.Screen name="Sprzęt" component={EquipmentListScreen} />
        <Stack.Screen name="Szczegóły" component={EquipmentDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
