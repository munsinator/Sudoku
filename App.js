import { FlatList, Platform, StyleSheet, ScrollView, Text, View } from 'react-native';

//GROBER ENTWURF - BITTE OPTIMIEREN

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.num}>1</Text>
        </View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}><Text style={styles.num}>1</Text></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}></View>
        <View style={styles.cell}><Text style={styles.num}>1</Text></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
      </View>
      <View style={styles.lrow}>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
        <View style={styles.cell}></View>
      </View>
      
      <View styles={styles.numbers}>
        <Text>1 2 3 4 5 7 8 9</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },

  row:{
    flex: 1,
    flexDirection: 'row',
    height: 35,
    borderWidth: 1,
    marginLeft: 35,
    marginRight: 35,
  },

  lrow:{
    flex: 1,
    flexDirection: 'row',
    height: 35,
    borderWidth: 1,
    marginLeft: 35,
    marginRight: 35,
  },

  cell: {
    flex: 1,
    width: 35,
    justifyContent: 'center',
    backgroundColor: '#eee',
    borderLeftColor: 'grey',
    borderWidth: 1,
  },

  num: {
    fontSize: 26,
  },

  numbers: {
    
    
  },
});

export default App;

