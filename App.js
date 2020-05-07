import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function App() {
  const [color, setColor] = useState('white');
  let [history, setHistory] = useState(['white']);
  let [pos, setPos] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <Button
          buttonStyle={[styles.buttonColor, {backgroundColor: 'red'}]}
          onPress={() => {
            if(pos<history.length-1) history.splice(pos+1);
            history.push('red');
            setHistory(history);
            setPos(pos+=1)
            setColor('red');
          }}
        />
        <Button
          buttonStyle={[styles.buttonColor, {backgroundColor: 'green'}]}
          onPress={() => {
            if(pos<history.length-1) history.splice(pos+1);
            history.push('green');
            setHistory(history);
            setPos(pos+=1);
            setColor('green');
          }}
        />
        <Button
          buttonStyle={[styles.buttonColor, {backgroundColor: 'blue'}]}
          onPress={() => {
            if(pos<history.length-1) history.splice(pos+1);
            history.push('blue')
            setHistory(history);
            setPos(pos+=1)
            setColor('blue');
          }}
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
      <View style={styles.containerSquare}>
        <View style={[styles.square, {backgroundColor: color}]}>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerButton: {
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
    flexDirection: 'column',
  },
  square: {
    width: 120,
    height: 120,
    borderWidth: 2,
  }
});
