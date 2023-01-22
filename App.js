import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'lime', flexDirection: 'row' }}>
      <View style={{ backgroundColor: "lime", flex: 1, alignSelf: 'flex-start' }}>
        <Text>react native öğreniyoz hocam</Text>
      </View>
      <View style={{ backgroundColor: 'rebeccapurple', flex: 1, alignSelf: 'flex-start'  }}>
        <Text>react native öğreniyoruz</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

