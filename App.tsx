import {ScrollView, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {PitchDetector} from 'pitchy';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  console.log('PITCHDETECTOR', PitchDetector.forFloat32Array(100));
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
