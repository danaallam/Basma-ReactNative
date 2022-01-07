import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useContext, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Modal,
} from "react-native";
import Table from "../components/Table";
import { AdminContext } from "../context/AdminContext";

const Users = ({ visible, setVisible }) => {
  const [first, setFirst] = useState(0);
  const [end, setEnd] = useState(0);

  const startMov = (e) => {
    setFirst(e.nativeEvent.pageY);
  };

  const endMov = (e) => {
    setEnd(e.nativeEvent.pageY);
  };

  const {
    state: { size2, time, usersPerDate },
    actions: { getAllUsers, average, setTime },
  } = useContext(AdminContext);
  const { width } = useWindowDimensions();

  useEffect(async () => {
    if (!time) {
      await getAllUsers();
    } else {
      await average();
    }
  }, [time]);

  useEffect(() => {
    if (end) {
      if (first + 50 < end) {
        setVisible(false);
      }
    }
  }, [end]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      statusBarTranslucent={true}
      style={{ justifyContent: "center", alignItems: "center", margin: 0 }}
    >
      <View style={styles.container}>
        <MaterialIcons
          onTouchStart={(e) => {
            startMov(e);
          }}
          onTouchEnd={(e) => {
            endMov(e);
          }}
          name="horizontal-rule"
          size={45}
          color="black"
          style={styles.modalToggle}
        />
        <View style={styles.container1}>
          <View style={styles.titleView}>
            <Text style={styles.title}>Registered Users:</Text>
            <Text style={styles.sizeTitle}>
              {size2}
              <Text style={styles.size}> users</Text>
            </Text>
          </View>
          <Text style={styles.filterTxt}>Users per: </Text>
          <View style={styles.filter}>
            <View style={styles.filter}>
              <Text style={styles.filt}>1 day</Text>
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
            <View style={styles.filter}>
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
            <View style={styles.filter}>
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
                  name={
                    time == "month" ? "radio-button-on" : "radio-button-off"
                  }
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.filter}>
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
            <View style={styles.filter}>
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
        <View style={[styles.btm, { width }]} />
      </View>
    </Modal>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%",
    backgroundColor: "#ff2d47",
  },
  container1: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  titleView: {
    marginBottom: "7%",
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
  },
  filterTxt: {
    color: "white",
    fontSize: 17,
  },
  filt: {
    color: "white",
    fontSize: 13,
  },
  container2: {
    flex: 3,
    backgroundColor: "white",
    justifyContent: "flex-end",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  tableContainer: {
    paddingVertical: "2%",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#eee5e5",
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
  modalToggle: {
    zIndex: 1,
    alignSelf: "center",
  },
  btm: {
    height: 30,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#eee5e5",
  },
});
