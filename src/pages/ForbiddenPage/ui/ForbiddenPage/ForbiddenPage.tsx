import { memo } from 'react';
import { t } from 'i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
  const {
    className,
  } = props;

  return (
    <Page className={classNames('', {}, [className])}>
      {t('У вас нет доступа к этой странице')}
    </Page>
  );
});

export default ForbiddenPage;
