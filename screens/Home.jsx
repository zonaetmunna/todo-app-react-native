import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newTodoName, setNewTodoName] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState("");
  const [todos, setTodos] = useState([]);

  const handleCreateTodo = () => {
    setModalVisible(true);
  };

  const handleViewTodos = () => {
    navigation.navigate("Todo");
  };
  const handleViewProfile = () => {
    navigation.navigate("Profile");
  };

  const handleSaveTodo = () => {
    if (newTodoName && newTodoDescription) {
      const newTodo = {
        name: newTodoName,
        description: newTodoDescription,
      };

      setTodos([...todos, newTodo]);
      setModalVisible(false);
      setNewTodoName("");
      setNewTodoDescription("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <TouchableOpacity
        style={styles.viewTodosButton}
        onPress={handleViewTodos}
      >
        <Text style={styles.buttonText}>View Todos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewTodosButton}
        onPress={handleViewProfile}
      >
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.createTodoButton}
        onPress={handleCreateTodo}
      >
        <Text style={styles.buttonText}>Create Todo</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Create Todo</Text>
          <TextInput
            style={styles.input}
            placeholder="Todo Name"
            value={newTodoName}
            onChangeText={setNewTodoName}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={newTodoDescription}
            onChangeText={setNewTodoDescription}
            multiline
          />
          <Button
            title="Save"
            onPress={handleSaveTodo}
            disabled={!newTodoName || !newTodoDescription}
          />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoName}>{item.name}</Text>
            <Text style={styles.todoDescription}>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  viewTodosButton: {
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 10,
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  createTodoButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  todoItem: {
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
  },
  todoName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  todoDescription: {
    fontSize: 16,
  },
});
