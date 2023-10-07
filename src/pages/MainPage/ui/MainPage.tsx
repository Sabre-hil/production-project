import { ErrorButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      {t('Главная страница')}
      <ErrorButton />
    </div>
  );
};

export default MainPage;
