import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { HStack } from 'shared/ui/Stack';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  getCommentFormError,
  getCommentFormText,
} from '../../model/selectors/addCommentFormSelector';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (value: string) => void;
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useSelector(getCommentFormText);
  const error = useSelector(getCommentFormError);
  const reducer: ReducersList = {
    addCommentForm: addCommentFormReducer,
  };

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text);
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducer}>
      <HStack max className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          placeholder={t('Введите текст комментария')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onSendHandler}
        >
          {t('Отправить')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
