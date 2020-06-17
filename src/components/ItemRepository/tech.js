import React from 'react'
import {
  View, Text, StyleSheet
} from 'react-native'

const Tech = ({ tech }) => {

  return (

    <View style={styles.techsContainer}>
      <Text style={styles.tech}>{tech}</Text>
    </View>
  )


}

const styles = StyleSheet.create({
  techsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  tech: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#04d361",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#fff",
  }
});


export default Tech