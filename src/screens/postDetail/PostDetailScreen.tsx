import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '../../components/ui';

export const PostDetailScreen = ({route}) => { 

  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Card item={item} showDetails />
    </SafeAreaView>
  )
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});