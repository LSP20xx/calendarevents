import React from "react";
import { FlatList } from "react-native";
import EventItem from "./item";
import { styles } from "./styles";

const Events = ({ events, onSelectItem }) => {
  const renderItem = ({ item }) => (
    <EventItem item={item} onSelectItem={onSelectItem} />
  );

  const keyExtractor = (item) => item.id;

  return (
    <FlatList
      style={styles.container}
      renderItem={renderItem}
      data={events}
      keyExtractor={keyExtractor}
      alwaysBounceVertical={false}
    />
  );
};

export default Events;
