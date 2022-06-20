import { useNavigationOptions } from 'app/hooks/navigation';
import type { NavigationScreen } from 'app/navigation/types';
import { Screen } from 'app/navigation/types';
import { Column } from 'app/primitives/flexbox';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';

export const Details: NavigationScreen<Screen.Details> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation(Screen.Details);

  useNavigationOptions(navigation, {
    title: t('header'),
  });

  return (
    <Column alignItems="center" flex={1} justifyContent="center">
      <Text>{t('title', { id: route.params.id })}</Text>
    </Column>
  );
};
