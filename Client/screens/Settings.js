import { StyleSheet, Text, View, Button } from 'react-native';
import { useDrawerStatus } from '@react-navigation/drawer';

export default function Settings({navigation}) {
  
const isDrawerOpen = useDrawerStatus() === 'open';

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button title="Second"
        onPress={()=> navigation.navigate('second')} 
        />
        <Button title="Open Menu" onPress={() => navigation.openDrawer()} />
        <Button title="Close Menu" onPress={() => navigation.closeDrawer()} />
        <Button title="Toggle Menu" onPress={() => navigation.toggleDrawer()} />
        <Text>
          {isDrawerOpen == 'open' ? 'Menu Opened': 'Menu Closed'}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
