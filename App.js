import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

export default function App() {
  const [color, setColor] = useState('white');
  let [history, setHistory] = useState(['white']);
  let [pos, setPos] = useState(0);

  function handlePress(pos, history, color) {
    if(pos<history.length-1) history.splice(pos+1);
    history.push(color);
    setHistory(history);
    setPos(pos+=1)
    setColor(color);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerSquare}>
        <View style={[styles.square, {backgroundColor: color}]}>
        </View>
      </View>
      <View style={styles.containerButton}>
        <Button
          buttonStyle={[styles.buttonColor, {backgroundColor: 'red'}]}
          onPress={() => handlePress(pos, history, 'red')}
        />
        <Button
          buttonStyle={[styles.buttonColor, {backgroundColor: 'green'}]}
          onPress={() => handlePress(pos, history, 'green')}
        />
        <Button
          buttonStyle={[styles.buttonColor, {backgroundColor: 'blue'}]}
          onPress={() => handlePress(pos, history, 'blue')}
        />
        <Button
          buttonStyle={[styles.buttonColor, styles.buttonAction]}
          titleStyle={styles.buttonTitle}
          title= 'Undo'
          onPress={() => {
            pos > 0 ? pos -= 1: pos;
            setPos(pos)
            setColor(history[pos]);
          }}
        />
        <Button
          buttonStyle={[styles.buttonColor, styles.buttonAction]}
          titleStyle={styles.buttonTitle}
          title='Redo'
          onPress={() => {
            pos < history.length-1 ? pos += 1: pos;
            setPos(pos)
            setColor(history[pos]);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerButton: {
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 40,
    marginLeft: 10,
  },
  buttonColor: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  buttonAction: {
    padding: 0,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
  },
  buttonTitle: {
    fontSize: 13,
    color: 'black',
  },
  containerSquare: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  square: {
    width: 120,
    height: 120,
    borderWidth: 2,
  }
});
