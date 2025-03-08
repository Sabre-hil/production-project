import { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';
import CopyIcon from '../../assets/icons/copy-20-20.svg';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button onClick={onCopy} theme={ButtonTheme.CLEAR} className={cls.copyBtn}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
