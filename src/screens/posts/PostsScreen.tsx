import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux'
import { initPosts } from '../../reducers/postsReducer';
import PostsList from './PostsList';

export const PostsScreen = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initPosts());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <PostsList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
