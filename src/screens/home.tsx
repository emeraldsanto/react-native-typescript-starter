import { useNavigationOptions } from 'app/hooks/navigation';
import type { NavigationScreen } from 'app/navigation/types';
import { Screen } from 'app/navigation/types';
import { Column } from 'app/primitives/flexbox';
import { useTranslation } from 'react-i18next';
import { Button, Text } from 'react-native';

export const Home: NavigationScreen<Screen.Home> = ({ navigation }) => {
  const { t } = useTranslation(Screen.Home);

  useNavigationOptions(navigation, {
    title: t('header'),
  });

  return (
    <Column alignItems="center" flex={1} justifyContent="center">
      <Text>{t('title')}</Text>
      <Button
        onPress={() =>
          navigation.navigate(Screen.Details, {
            id: Math.ceil(Math.random() * 100).toString(),
          })
        }
        title="Open modal"
      />
    </Column>
  );
};
