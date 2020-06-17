import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
}from 'react-native'
import Tech from './tech'
const ItemRepository = ({handleLikeRepository, repository, buttonDisabledLike}) => {

    const techs = repository.techs || []

    
    return (
        <View key={repository.id} style={styles.repositoryContainer}>

              <Text style={styles.repository}>{repository.title}</Text>

              {techs.map( (tech, idx) => 
                    <Tech tech={tech} key={`${repository.id}-${tech}`} />
              )}



              <View style={styles.likesContainer}>
                <Text
                  style={styles.likeText}
                  testID={`repository-likes-${repository.id}`}
                >
                  {repository.likes} {repository.likes === 1 ? `curtida` : 'curtidas'}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => handleLikeRepository(repository.id)}
                testID={`like-button-${repository.id}`}
                disabled={buttonDisabledLike}
              >
                <Text style={styles.buttonText}>Curtir</Text>
              </TouchableOpacity>
            </View>
    )
}


const styles = StyleSheet.create({
  
    repositoryContainer: {
      marginBottom: 15,
      marginHorizontal: 15,
      backgroundColor: "#fff",
      padding: 20,
    },
    repository: {
      fontSize: 32,
      fontWeight: "bold",
    },
    likesContainer: {
      marginTop: 15,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    likeText: {
      fontSize: 14,
      fontWeight: "bold",
      marginRight: 10,
    },
    button: {
      marginTop: 10,
    },
    buttonText: {
      fontSize: 14,
      fontWeight: "bold",
      marginRight: 10,
      color: "#fff",
      backgroundColor: "#7159c1",
      padding: 15,
    },
  });

export default ItemRepository