import { useNavigation, useRoute } from 'app/hooks/navigation';
import { Screen } from 'app/navigation/types';
import { Column } from 'app/primitives/flexbox';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';

export function Details() {
  const route = useRoute<Screen.Details>();
  const { t } = useTranslation(Screen.Details);

  useNavigation<Screen.Details>({
    title: t('header'),
  });

  return (
    <Column alignItems="center" flex={1} justifyContent="center">
      <Text>{t('title', { id: route.params.id })}</Text>
    </Column>
  );
}
