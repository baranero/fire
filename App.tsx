import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EquipmentListScreen from "./screens/EquipmentListScreen";
import EquipmentDetailScreen from "./screens/EquipmentDetailScreen";
import HomeScreen from "./screens/HomeScreen";
import EquipmentTypeScreen from "./screens/EquipmentTypeScreen";
import RescueCategoryScreen from "./screens/RescueCategoryScreen";

// Nowe ekrany
import GBA_Rt_3_16_Scania from "./screens/GBA_Rt_3_16_ScaniaScreen";
import GBA_Rt_2_5_16_4_Mercedes from "./screens/GBA_Rt_2_5_16_4_MercedesScreen";
import GCBA_Rt_5_40_Man from "./screens/GCBA_Rt_5_40_ManScreen";
import GCBA_8_56_Scania from "./screens/GCBA_8_56_ScaniaScreen";
import SCHD_37_Mercedes from "./screens/SCHD_37_MercedesScreen";
import SCH_68_Scania from "./screens/SCH_68_ScaniaScreen";
import SRWys_Man from "./screens/SRWys_ManScreen";
import BazaWiedzyScreen from "./screens/BazaWiedzyScreen";
import RatownictwoChemiczneScreen from "./screens/RatownictwoChemiczneScreen";
import RatownictwoTechniczneScreen from "./screens/RatownictwoTechniczneScreen";
import RatownictwoWodneScreen from "./screens/RatownictwoWodneScreen";
import RatownictwoWysokoscioweScreen from "./screens/RatownictwoWysokoscioweScreen";
import RatownictwoMedyczneScreen from "./screens/RatownictwoMedyczneScreen";
import PoszukiwawczoRatowniczeScreen from "./screens/PoszukiwawczoRatowniczeScreen";
import GaszeniePozarowScreen from "./screens/GaszeniePozarowScreen";
import PDFViewerScreen from "./screens/PDFViewerScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={HomeScreen} />
        <Stack.Screen name="Sprzęt" component={EquipmentTypeScreen} />
        <Stack.Screen
          name="SprzętWysokościowy"
          component={EquipmentListScreen}
          options={{ title: "Sprzęt wysokościowy" }}
        />
        <Stack.Screen
          name="SprzętGaśniczy"
          component={RescueCategoryScreen}
          options={{ title: "Sprzęt ratowniczy" }}
        />
        <Stack.Screen name="Szczegóły" component={EquipmentDetailScreen} />

        {/* Pojazdy ratownicze */}
        <Stack.Screen name="GBA_Rt_3_16_Scania" component={GBA_Rt_3_16_Scania} />
        <Stack.Screen name="GBA_Rt_2_5_16_4_Mercedes" component={GBA_Rt_2_5_16_4_Mercedes} />
        <Stack.Screen name="GCBA_Rt_5_40_Man" component={GCBA_Rt_5_40_Man} />
        <Stack.Screen name="GCBA_8_56_Scania" component={GCBA_8_56_Scania} />
        <Stack.Screen name="SCHD_37_Mercedes" component={SCHD_37_Mercedes} />
        <Stack.Screen name="SCH_68_Scania" component={SCH_68_Scania} />
        <Stack.Screen name="SRWys_Man" component={SRWys_Man} />

        <Stack.Screen name="BazaWiedzy" component={BazaWiedzyScreen} />
        <Stack.Screen
          name="RatownictwoChemiczne"
          component={RatownictwoChemiczneScreen}
          options={{ title: "Ratownictwo chemiczne i ekologiczne" }}
        />
        <Stack.Screen
          name="RatownictwoTechniczne"
          component={RatownictwoTechniczneScreen}
          options={{ title: "Ratownictwo techniczne" }}
        />
        <Stack.Screen
          name="RatownictwoWodne"
          component={RatownictwoWodneScreen}
          options={{ title: "Ratownictwo wodne" }}
        />
        <Stack.Screen
          name="RatownictwoWysokosciowe"
          component={RatownictwoWysokoscioweScreen}
          options={{ title: "Ratownictwo wysokościowe" }}
        />
        <Stack.Screen
          name="RatownictwoMedyczne"
          component={RatownictwoMedyczneScreen}
          options={{ title: "Ratownictwo medyczne" }}
        />
        <Stack.Screen
          name="PoszukiwawczoRatownicze"
          component={PoszukiwawczoRatowniczeScreen}
          options={{ title: "Działania poszukiwawczo-ratownicze" }}
        />
        <Stack.Screen
          name="GaszeniePozarow"
          component={GaszeniePozarowScreen}
          options={{ title: "Gaszenie pożarów" }}
        />
<Stack.Screen name="PDFViewer" component={PDFViewerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
