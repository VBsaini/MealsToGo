import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restuarant-info-card";
const isAndroid = Platform.OS === "android";

export const RestaurantScreen = () => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        isAndroid && { marginTop: StatusBar.currentHeight },
      ]}
    >
      <View style={styles.statusBar}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.screen}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    padding: 15,
  },
  screen: {
    flex: 1,
    padding: 15,
  },
});
