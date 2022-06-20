import { useNavigationOptions } from 'app/hooks/navigation';
import type { NavigationScreen } from 'app/navigation/types';
import { Screen } from 'app/navigation/types';
import { usePost } from 'app/queries/posts';
import { Column, Row } from 'flexbox-primitives';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';

export const Details: NavigationScreen<Screen.Details> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation(Screen.Details);
  const { data, error, isLoading } = usePost(route.params.id);

  useNavigationOptions(navigation, {
    title: t('header'),
  });

  if (isLoading) {
    return (
      <Row alignItems="center" flex={1} justifyContent="center">
        <Text>{t('loading')}</Text>
        <ActivityIndicator />
      </Row>
    );
  }

  if (error || !data) {
    return (
      <Column alignItems="center" flex={1} justifyContent="center">
        <Text>Uh oh...</Text>
      </Column>
    );
  }

  return (
    <Column style={styles.container}>
      <Text style={styles.metadata}>
        User #{data.userId} - Post #{data.id}
      </Text>

      <Text style={styles.content}>{data.title}</Text>
      <Text>{data.body}</Text>
    </Column>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
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
