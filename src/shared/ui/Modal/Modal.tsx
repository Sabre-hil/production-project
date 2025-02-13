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
  MutableRefObject,
} from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames, Mods } from '../../lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void | undefined;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  const modalRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useTheme();
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props;

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.closed]: isClosing,
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      setIsClosing(true);
      timeRef.current = setTimeout(() => {
        onClose?.();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const closeKeyHandler = () => {
    setIsClosing(true);
    timeRef.current = setTimeout(() => {
      onClose?.();
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

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
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
