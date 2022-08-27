import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { View as MotiView } from 'moti'
import { PreventSSRProvider } from '../providers/PreventSSRProvider'

export default function App() {
  return (
    <PreventSSRProvider>
      <View style={styles.container}>
        <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
        </MotiView>
      </View>
    </PreventSSRProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
})
