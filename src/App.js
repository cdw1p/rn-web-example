import React, { memo, PureComponent } from 'react'
import { SafeAreaView, View, Text } from 'react-native'

class App extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hello World</Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default memo(App)