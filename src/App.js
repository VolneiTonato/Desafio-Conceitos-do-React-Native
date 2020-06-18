import React, { useEffect, useState } from "react";

import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
} from "react-native";

//import { ApiRepository } from './services/repositories'
import ApiRepository from './services/api'
import ItemRepository from './components/ItemRepository'
import EmptyMessage from './components/EmptyComponent'

export default function App() {
  const [repositories, setRepositories] = useState([])
  const [buttonDisabledLike, setButtonDisabledLike] = useState(false)

  const handleLikeRepository = async (id) => {

    setButtonDisabledLike(true)

    ApiRepository.post(`/repositories/${id}/like`)
      .then(({data}) => {

        const newRepositories = repositories.map(repo => repo.id === id ? { ...repo, likes: data.likes } : repo)

        setRepositories(newRepositories)

      }).catch(err => alert(err))
      .finally(onfinally => setButtonDisabledLike(false))


  }

  const listRepositories = async () => {

    ApiRepository.get('/repositories')
      .then(({data}) => setRepositories(data))
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
