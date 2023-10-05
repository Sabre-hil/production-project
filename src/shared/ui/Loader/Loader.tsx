/* eslint-disable react/jsx-indent */
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

const Loader = () => (
        <span className={classNames(cls.Loader, {}, [])} />
);

export default Loader;
