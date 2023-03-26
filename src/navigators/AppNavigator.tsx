import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { PostsScreen, PostDetailScreen } from '../screens';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Posts">
      <Stack.Screen name="Posts" component={PostsScreen} options={{ title : 'Reddit Posts' }} />
      <Stack.Screen name="PostDetail" component={PostDetailScreen} options={{ title : 'Reddit Post Details' }} />
    </Stack.Navigator>
  );
};

export function AppNavigator() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
