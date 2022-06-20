import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { useNavigation, useRoute } from '../hooks/navigation';
import { Screen } from '../navigation/types';

export function Details() {
  const route = useRoute<Screen.Details>();
  const { t } = useTranslation(Screen.Details);

  useNavigation<Screen.Details>({
    title: t('header', { id: route.params.id }),
  });

  return (
    <View>
      <Text>Bonsoir</Text>
    </View>
  );
}
