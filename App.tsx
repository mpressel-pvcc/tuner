import {ScrollView, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <View style={backgroundStyle}>
      <ScrollView style={backgroundStyle}>
        <View style={{paddingTop: '100%'}}>
          <Text>TESTING</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
