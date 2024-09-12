import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Input.module.scss';


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string,
    value: string,
    onChange: (value: string) => void
}


export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        type = 'text',
        autoFocus,
        ...otherProps
    } = props;
    const [isFocused, setFocused] = useState(false);
    const [caretPostion, setCaretPosition] = useState(0);
    const focusRef = useRef<HTMLInputElement>(null);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
        setCaretPosition(event.target.value.length)
    };

    const onBlur = () => {
        setFocused(false);
    }

    const onFocus = () => {
        setFocused(true);
    }

    const onSelect = (event: any) => {
        setCaretPosition(event?.target?.selectionStart || 0);
    }

    useEffect(() => {
        if (autoFocus) {
            setFocused(true)
            focusRef?.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={focusRef}
                    onChange={onChangeHandler}
                    onSelect={onSelect}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className={cls.input}
                    type={type}
                    value={value}
                    {...otherProps} />
                {isFocused && (
                    <span style={{ left: `${caretPostion * 9}px` }} className={cls.caret}></span>
                )}
            </div>
        </div>
    )
});
