import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

const PageLoader = () => (
  <div className={classNames(cls.PageLoader, {}, [])}>
    <Loader />
  </div>
);

export default PageLoader;
