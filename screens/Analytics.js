import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useContext } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Table from "../components/Table";
import { AdminContext } from "../context/AdminContext";

const Analytics = () => {
  const {
    state: { size2, time, usersPerDate },
    actions: { getAllUsers, average, setTime },
  } = useContext(AdminContext);

  useEffect(async () => {
    if (!time) {
      await getAllUsers();
    }
  }, [time]);

  useEffect(async () => {
    if (time) {
      await average();
    }
  }, [time]);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View>
          <Text style={styles.title}>Registered Users:</Text>
          <Text style={styles.sizeTitle}>
            {size2}
            <Text style={styles.size}> users</Text>
          </Text>
        </View>
        <Text style={styles.filterTxt}>Users per: </Text>
        <View style={styles.filter}>
          <View style={styles.filterElement}>
            <Text style={styles.filt}>24 hrs</Text>
            <TouchableOpacity
              onPress={() => {
                if (time == "day") {
                  setTime(0);
                } else {
                  setTime("day");
                }
              }}
            >
              <Ionicons
                name={time == "day" ? "radio-button-on" : "radio-button-off"}
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.filterElement}>
            <Text style={styles.filt}>1 week</Text>
            <TouchableOpacity
              onPress={() => {
                if (time == "week") {
                  setTime(0);
                } else {
                  setTime("week");
                }
              }}
            >
              <Ionicons
                name={time == "week" ? "radio-button-on" : "radio-button-off"}
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.filterElement}>
            <Text style={styles.filt}>1 month</Text>
            <TouchableOpacity
              onPress={() => {
                if (time == "month") {
                  setTime(0);
                } else {
                  setTime("month");
                }
              }}
            >
              <Ionicons
                name={time == "month" ? "radio-button-on" : "radio-button-off"}
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.filterElement}>
            <Text style={styles.filt}>3 months</Text>
            <TouchableOpacity
              onPress={() => {
                if (time == "3months") {
                  setTime(0);
                } else {
                  setTime("3months");
                }
              }}
            >
              <Ionicons
                name={
                  time == "3months" ? "radio-button-on" : "radio-button-off"
                }
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.filterElement}>
            <Text style={styles.filt}>1 year</Text>
            <TouchableOpacity
              onPress={() => {
                if (time == "year") {
                  setTime(0);
                } else {
                  setTime("year");
                }
              }}
            >
              <Ionicons
                name={time == "year" ? "radio-button-on" : "radio-button-off"}
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.tableContainer}>
          <View style={styles.th1Container}>
            <Text style={styles.headerTxt}>Id</Text>
          </View>
          <View style={styles.th2Container}>
            <Text style={styles.headerTxt}>First Name</Text>
          </View>
          <View style={styles.th3Container}>
            <Text style={styles.headerTxt}>Email</Text>
          </View>
        </View>
        <Animated.FlatList
          data={usersPerDate}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Table item={item} />}
        />
      </View>
    </View>
  );
};

export default Analytics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
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
  filter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "5%",
  },
  filterTxt: {
    color: "white",
    fontSize: 17,
  },
  filt: {
    color: "white",
    fontSize: 13,
  },
  filterElement: {
    flexDirection: "row",
    alignItems: "center",
  },
  container2: {
    backgroundColor: "white",
    flex: 3,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  tableContainer: {
    paddingVertical: "2%",
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  th1Container: {
    flex: 1,
    alignItems: "center",
  },
  th2Container: {
    flex: 2,
    alignItems: "center",
  },
  th3Container: {
    flex: 4,
    alignItems: "center",
  },
  headerTxt: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
