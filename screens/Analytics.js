import React, { useEffect, useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { AdminContext } from "../context/AdminContext";
import { BarChart } from "react-native-chart-kit";
import Users from "../components/Users";

const Analytics = () => {
  const [visible, setVisible] = useState(false);
  const {
    state: { size, day, week, month, month3, year },
    actions: { getDay, getWeek, getMonth, get3Month, getYear },
  } = useContext(AdminContext);
  const { width } = useWindowDimensions();

  useEffect(async () => {
    await getDay();
    await getWeek();
    await getMonth();
    await get3Month();
    await getYear();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View>
          <Text style={styles.title}>Registered Users:</Text>
          <Text style={styles.sizeTitle}>
            {size}
            <Text style={styles.size}> users</Text>
          </Text>
        </View>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity activeOpacity={1} onPress={() => setVisible(true)}>
          <BarChart
            data={{
              labels: ["24 hours", "1 week", "1 month", "3 months", "1 year"],
              datasets: [
                {
                  data: [day, week, month, month3, year],
                },
              ],
            }}
            width={width}
            height={width}
            chartConfig={{
              backgroundColor: "#1cc910",
              backgroundGradientFrom: "white",
              backgroundGradientTo: "white",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            style={{
              borderRadius: 16,
            }}
          />
        </TouchableOpacity>
        <Users visible={visible} setVisible={setVisible} />
      </View>
    </View>
  );
};

export default Analytics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff2d47",
  },
  container1: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 25,
  },
  sizeTitle: {
    fontSize: 35,
    color: "white",
    marginLeft: "5%",
  },
  size: {
    fontSize: 20,
  },
  container2: {
    flex: 3,
    backgroundColor: "white",
    justifyContent: "flex-end",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
});
