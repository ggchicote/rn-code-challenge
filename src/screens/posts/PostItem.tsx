

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from '../../components/ui';
import { useNavigation } from '@react-navigation/native';

const PostItem = ({ item }) => {

  const navigation = useNavigation()

  const handleOnPressItem = () => {
    navigation.navigate('PostDetail', { item })
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={handleOnPressItem}
        activeOpacity={0.7}
      >
        <Card item={item} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    backgroundColor: 'white',
  },
});

export default PostItem;
