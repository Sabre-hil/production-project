/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
  MouseEvent,
} from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onCLose?: () => void;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const timeRef = useRef<ReturnType<typeof setTimeout>>();
  const modalRef = useRef<HTMLDivElement>();
  const { theme } = useTheme();
  const {
    className,
    children,
    isOpen,
    onCLose,
  } = props;

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.closed]: isClosing,
  };

  const closeHandler = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onCLose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onCLose]);

  const closeKeyHandler = () => {
    setIsClosing(true);
    timeRef.current = setTimeout(() => {
      onCLose();
      setIsClosing(false);
    }, ANIMATION_DELAY);
  };

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeKeyHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timeRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className, theme])}>
        <div
          ref={modalRef}
          onClick={closeHandler}
          className={cls.overlay}
        >
          <div className={cls.content}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
