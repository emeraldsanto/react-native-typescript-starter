import { useNavigation } from 'app/hooks/navigation';
import { Screen } from 'app/navigation/types';
import { useTranslation } from 'react-i18next';
import { Button, Text, View } from 'react-native';

export function Home() {
  const { t } = useTranslation(Screen.Home);
  const navigation = useNavigation<Screen.Home>({
    title: t('header'),
  });

  return (
    <View>
      <Text>Salut</Text>
      <Button
        onPress={() =>
          navigation.navigate(Screen.Details, {
            id: Math.ceil(Math.random() * 100).toString(),
          })
        }
        title="Open modal"
      />
    </View>
  );
}
