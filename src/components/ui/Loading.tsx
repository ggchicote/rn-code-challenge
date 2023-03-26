import { View, ActivityIndicator, StyleSheet } from 'react-native';

export const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});