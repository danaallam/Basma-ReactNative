import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Table = ({ item }) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.td1Container}>
        <Text style={styles.rowTxt}>{item.id}</Text>
      </View>
      <View style={styles.td2Container}>
        <Text style={styles.rowTxt}>{item.first_name}</Text>
      </View>
      <View style={styles.td3Container}>
        <Text style={styles.rowTxt}>{item.email}</Text>
      </View>
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingVertical: "1%"
  },
  td1Container: {
    flex: 1,
    alignItems: "center",
  },
  td2Container: {
    flex: 2,
    alignItems: "center",
  },
  td3Container: {
    flex: 4,
    alignItems: "center",
  },
  rowTxt: {
    fontSize: 13,
    textAlign: "center",
  },
});
