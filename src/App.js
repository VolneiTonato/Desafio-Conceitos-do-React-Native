import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
} from "react-native";

import { ApiRepository } from './services/repositories'
import ItemRepository from './components/ItemRepository'
import EmptyMessage from './components/EmptyComponent'

export default function App() {
  const [repositories, setRepositories] = useState([])
  const [buttonDisabledLike, setButtonDisabledLike] = useState(false)

  const handleLikeRepository = async (id) => {

    setButtonDisabledLike(true)

    ApiRepository.like(id)
      .then(repository => {

        const newRepositories = repositories.map(repo => repo.id === id ? { ...repo, likes: repository.likes } : repo)

        setRepositories(newRepositories)

      }).catch(err => alert(err))
      .finally(onfinally => setButtonDisabledLike(false))


  }

  const listRepositories = async () => {

    ApiRepository.get()
      .then(repositories => setRepositories(repositories))
      .catch(err => alert(err))

  }


  useEffect(() => {

    listRepositories()

  }, [])


  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>

        <FlatList
          style={styles.container}
          contentContainerStyle={{flexGrow:1}}
          data={repositories}
          keyExtractor={repository => repository.id}
          renderItem={({item: repository}) => (
              <ItemRepository 
                repository={repository} 
                buttonDisabledLike={buttonDisabledLike}
                handleLikeRepository={handleLikeRepository}
              />
            
          )}
          ListEmptyComponent={<EmptyMessage message="There are no registered repositories." />}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  }
});
