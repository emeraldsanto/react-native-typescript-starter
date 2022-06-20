import { useNavigationOptions } from 'app/hooks/navigation';
import type { NavigationScreen } from 'app/navigation/types';
import { Screen } from 'app/navigation/types';
import { usePosts } from 'app/queries/posts';
import { Column, Row } from 'flexbox-primitives';
import { useTranslation } from 'react-i18next';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export const Home: NavigationScreen<Screen.Home> = ({ navigation }) => {
  const { t } = useTranslation(Screen.Home);
  const { data, error, isLoading } = usePosts();

  useNavigationOptions(navigation, {
    title: t('header'),
  });

  return (
    <FlatList
      {...{ data }}
      ListEmptyComponent={
        <Column alignItems="center" flex={1} justifyContent="center">
          {error ? (
            <Text>Uh oh...</Text>
          ) : isLoading ? (
            <Row>
              <Text>{t('loading')}</Text>
              <ActivityIndicator />
            </Row>
          ) : (
            <Text>{t('empty')}</Text>
          )}
        </Column>
      }
      renderItem={({ item }) => (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate(Screen.Details, { id: item.id })}
        >
          <Column style={styles.card}>
            <Text style={styles.metadata}>
              User #{item.userId} - Post #{item.id}
            </Text>

            <Text style={styles.content}>{item.title}</Text>
          </Column>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    marginTop: 10,
  },
  metadata: {
    color: 'lightgray',
    fontSize: 12,
  },
  content: {
    marginTop: 5,
    fontWeight: 'bold',
  },
});
