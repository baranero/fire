import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const PDFViewerScreen = ({ route }: any) => {
  const { file } = route.params; // Odbieramy nazwę pliku PDF z nawigacji

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri:`https://drive.google.com/file/d/1Zlz6umUVG2Mh-8Zqg1ieOU3U7BBeCpFW/view?usp=drive_link`, cache: true }} // Ścieżka do lokalnego pliku PDF na Androidzie
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});

export default PDFViewerScreen;
