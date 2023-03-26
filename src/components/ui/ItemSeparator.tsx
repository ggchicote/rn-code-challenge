import { View, StyleSheet } from 'react-native'

export const ItemSeparator = ({ width = 10, height = 15 }) => {

  const styles = StyleSheet.create({
    separator: {
      width,
      height
    },
  })

  return (<View style={styles.separator} />);

};
