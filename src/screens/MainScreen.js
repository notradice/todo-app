import React from "react";
import { useContext } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  Dimensions,
} from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";
import { ScreenContext } from "../context/screen/screenContext";
import { TodoContext } from "../context/todo/todoContext";
import { THEME } from "../theme";

export const MainScreen = () => {
  const width = Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2;

  const { todos, addTodo, removeTodo } = useContext(TodoContext);
  const { changeScreen } = useContext(ScreenContext);

  let content = (
    <View style={{ width, ...styles.viewFlat }}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <Todo todo={item} onRemove={removeTodo} onOpen={changeScreen} />
          );
        }}
      />
    </View>
  );

  if (todos.length === 0) {
    content = (
      <View style={styles.imgWrap}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../../assets/no-elements.png")}
          // source={{uri: 'https'}}
        />
        <Text>Добавьте своё первое дело...</Text>
      </View>
    );
  }

  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 100,
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  viewFlat: {
    width: "100%",
  },
});

{
  /* старый варик */
}
{
  /* {todos.map((todo) => {
    return <Todo todo={todo} key={todo.id} />;
  })} */
}
