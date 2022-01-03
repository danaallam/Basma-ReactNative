import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import StackNav from "./routes/StackNav";
import AdminContextProvider from "./context/AdminContext";

export default function App() {
  return (
    <AdminContextProvider>
      <StackNav />
    </AdminContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
