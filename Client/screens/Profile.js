import { StyleSheet, Text, View, Button } from 'react-native';

export default function Profile({navigation, route}) {
    const {name} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen: {name}</Text>
      <Button title="Back"
        onPress={()=> navigation.goBack()} 
        />
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
