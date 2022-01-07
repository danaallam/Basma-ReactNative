import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState } from "react";
import Url from "../components/Url";

export const AdminContext = createContext();

export default AdminContextProvider = (props) => {
  const [usersPerDate, setUsersPerDate] = useState([]);
  const [users, setUsers] = useState([]);
  const [fill, setFill] = useState(0);
  const [size, setSize] = useState(0);
  const [size2, setSize2] = useState(0);
  const [page, setPage] = useState(1);
  const [max, setMax] = useState(1);
  const [time, setTime] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(" ");
  const [day, setDay] = useState(0);
  const [week, setWeek] = useState(0);
  const [month, setMonth] = useState(0);
  const [month3, setMonth3] = useState(0);
  const [year, setYear] = useState(0);

  const login = async () => {
    const body = new FormData();
    body.append("email", email.toLowerCase());
    body.append("password", password);
    const res = await fetch(Url + "api/admin/login", {
      method: "POST",
      body,
    });
    const data = await res.json();
    if (data.access_token) {
      setEmail("");
      setPassword("");
      await AsyncStorage.setItem("token", data.access_token);
      await AsyncStorage.setItem("user", JSON.stringify(data.user.id));
      return 1;
    } else {
      setError(data.error);
      setTimeout(() => {
        setError(" ");
      }, 1500);
    }
    return 0;
  };

  const checkIfLoggedIn = async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/admin/checkToken", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    if (result.status == 200) {
      return 1;
    }
    return 0;
  };

  const getAllUsers = async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/admin/getUsers", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    setUsers(result.users);
    setUsersPerDate(result.users);
    setSize(result.size);
    setSize2(result.size);
  };

  const logout = async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/admin/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    await AsyncStorage.setItem("token", "");
    await AsyncStorage.setItem("user", "");
  };

  const filter = async () => {
    const body = new FormData();
    body.append("filter", fill);
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + `api/admin/filter?page=${page}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body,
    });
    const data = await res.json();
    setUsers(data.users.data);
    setMax(data.users.last_page);
  };

  const average = async () => {
    const body = new FormData();
    body.append("time", time);
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + `api/admin/registeredUsers`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body,
    });
    const result = await res.json();
    setUsersPerDate(result.users);
    setSize2(result.size);
  };

  const getDay = async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + `api/admin/day`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    setDay(result.size);
  };

  const getWeek = async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + `api/admin/week`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    setWeek(result.size);
  };

  const getMonth = async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + `api/admin/month`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    setMonth(result.size);
  };

  const get3Month = async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + `api/admin/month3`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    setMonth3(result.size);
  };

  const getYear = async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + `api/admin/year`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    setYear(result.size);
  };

  const context = {
    state: {
      email,
      password,
      error,
      users,
      size,
      size2,
      fill,
      page,
      max,
      time,
      usersPerDate,
      day,
      week,
      month,
      month3,
      year,
    },
    actions: {
      login,
      checkIfLoggedIn,
      setEmail,
      setPassword,
      logout,
      getAllUsers,
      filter,
      setFill,
      setPage,
      average,
      setTime,
      setUsersPerDate,
      getDay,
      getWeek,
      getMonth,
      get3Month,
      getYear,
    },
  };

  return (
    <AdminContext.Provider value={context}>
      {props.children}
    </AdminContext.Provider>
  );
};
