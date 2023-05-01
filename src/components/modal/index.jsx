import React from "react";
import { Modal, View, Text, Button } from "react-native";
import { styles } from "./styles";

const OptionsModal = ({
  isVisible,
  animationType,
  selectedEvent,
  onCancel,
  onDelete,
}) => {
  return (
    <Modal visible={isVisible} animationType={animationType}>
      <View style={styles.container}>
        <Text style={styles.title}>Detalle del evento</Text>
        <View style={styles.detailContainer}>
          <Text style={styles.detailMessage}>
            ¿Estás seguro de eliminar el evento?
          </Text>
          <Text style={styles.selectedEvent}>{selectedEvent?.value}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Cancelar" color="#111111" onPress={onCancel} />
          <Button
            title="Borrar"
            color="#ff0000"
            onPress={() => onDelete(selectedEvent.id)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default OptionsModal;
