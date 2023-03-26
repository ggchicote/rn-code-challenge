import { useSelector } from 'react-redux';
import { View, FlatList, StyleSheet } from 'react-native';
import { Loading, ItemSeparator } from '../../components/ui';
import PostItem from './PostItem';
const PostsList = () => {

  const posts = useSelector(state => state.posts);

  const renderItem = ({ item }) => (
    <PostItem item={item.data} />
  );

  return (
    <View>
        {!posts
          ? <Loading />
          : <View>
            <FlatList
              data={posts}
              keyExtractor={(item) => item.data.id}
              ItemSeparatorComponent={ItemSeparator}
              //contentContainerStyle={{ paddingBottom: 20 }}
              renderItem={renderItem}
              //contentContainerStyle={styles.flatList}
/*               getItemLayout={(_, index) => ({
                length: CONTENT_CAT_IMG.height + CAT_SEPARATOR * 2, //  WIDTH + (MARGIN_HORIZONTAL * 2)
                offset: (CONTENT_CAT_IMG.height, + CAT_SEPARATOR * 2) * (index),  //  ( WIDTH + (MARGIN_HORIZONTAL*2) ) * (index)
                index,
              })} */
              showsVerticalScrollIndicator={false}
            />
          </View>
        }
    </View>
  )

}

export default PostsList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})