import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';

interface AdminPanelPageProps {
  className?: string;
}

export const AdminPanelPage = memo((props: AdminPanelPageProps) => {
  const {
    className,
  } = props;

  return (
    <Page className={classNames('', {}, [className])}>
      AdminPanelPage
    </Page>
  );
});
