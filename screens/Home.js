import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useContext } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../components/Button";
import Table from "../components/Table";
import { AdminContext } from "../context/AdminContext";

const Home = () => {
  const {
    state: { users, size, fill, page, max },
    actions: { getAllUsers, filter, setFill, setPage },
  } = useContext(AdminContext);

  useEffect(async () => {
    if (!fill) {
      await getAllUsers();
    }
  }, [fill]);

  useEffect(async () => {
    if (fill >= 20 && page >= 1) {
      await filter();
    }
  }, [fill, page]);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.title}>Registered Users:</Text>
        <Text style={styles.sizeTitle}>
          {size}
          <Text style={styles.size}> users</Text>
        </Text>
        <View style={styles.filter}>
          <Text style={styles.filterTxt}>Users per page: </Text>
          <View style={styles.filterElement}>
            <Text style={styles.filt}>20</Text>
            <TouchableOpacity
              onPress={() => {
                if (fill == 20) {
                  setFill(0);
                } else {
                  setPage(1);
                  setFill(20);
                }
              }}
            >
              <Ionicons
                name={fill == 20 ? "radio-button-on" : "radio-button-off"}
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.filterElement}>
            <Text style={styles.filt}>40</Text>
            <TouchableOpacity
              onPress={() => {
                if (fill == 40) {
                  setFill(0);
                } else {
                  setPage(1);
                  setFill(40);
                }
              }}
            >
              <Ionicons
                name={fill == 40 ? "radio-button-on" : "radio-button-off"}
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.filterElement}>
            <Text style={styles.filt}>60</Text>
            <TouchableOpacity
              onPress={() => {
                if (fill == 60) {
                  setFill(0);
                } else {
                  setPage(1);
                  setFill(60);
                }
              }}
            >
              <Ionicons
                name={fill == 60 ? "radio-button-on" : "radio-button-off"}
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
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Table item={item} />}
        />
      </View>
      <View style={styles.btn}>
        <Button
          enable={!fill || page == 1 ? true : false}
          title="prev"
          size={14}
          padding={10}
          onPress={() => {
            if (page > 1) {
              setPage((prev) => {
                return prev - 1;
              });
            }
          }}
        />
        <Button
          enable={!fill || page == max ? true : false}
          title="next"
          size={14}
          padding={10}
          onPress={() => {
            if (page < max) {
              setPage((prev) => {
                return prev + 1;
              });
            }
          }}
        />
      </View>
    </View>
  );
};

export default Home;

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
    marginTop: "5%",
  },
  filterTxt: {
    color: "white",
    fontSize: 17,
  },
  filt: {
    color: "white",
    fontSize: 14,
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
  btn: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: "2%",
    borderTopWidth: 1,
  },
});
