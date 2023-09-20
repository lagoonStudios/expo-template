import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { REACT_APP_BASE_URL } from "@env";
import { useGetUsers } from "@/hooks/example/service-example";
import { Colors } from "@/styles/colors";

export function Home(): React.JSX.Element {
  const { data: users } = useGetUsers();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Template repo for React native with Expo</Text>

      <View style={styles.sectionsContainer}>
        <View>
          <Text style={styles.subHeader}>Using Typescript, Prettier and Eslint</Text>
        </View>
        <View>
          <Text style={styles.subHeader}>Atomic design</Text>
        </View>
        <View>
          <Text style={styles.subHeader}>Env variables</Text>
          <Text>Url from env: {REACT_APP_BASE_URL}</Text>
        </View>
        <View>
          <Text style={styles.subHeader}>Axios and react query</Text>
          <FlatList
            data={users}
            renderItem={(user) => <Text style={styles.listItem}>{user.item.name}</Text>}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    margin: 40,
  },
  title: { fontSize: 32, fontWeight: "bold", margin: 20 },
  sectionsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 26,
  },
  subHeader: { fontSize: 16, margin: 10, fontWeight: "500", textAlign: "center" },
  listItem: { margin: 5 },
});
