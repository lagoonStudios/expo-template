import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { REACT_APP_BASE_URL } from "@env";
import { useGetUsers } from "@/hooks/example/service-example";

export function Home(): React.JSX.Element {
  const { data } = useGetUsers();
  useEffect(() => {
    console.log('DAta: ', data);
  }, [data]);

  return (
    <View>
      <Text>Home works!</Text>
      <Text>Url: {REACT_APP_BASE_URL}</Text>
    </View>
  );
}
