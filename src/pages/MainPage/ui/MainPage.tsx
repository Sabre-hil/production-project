import { ErrorButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { Counter } from '../../../entities/Counter/ui/Counter';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      {t('Главная страница')}
      <Counter />
      <ErrorButton />
    </div>
  );
};

export default MainPage;
