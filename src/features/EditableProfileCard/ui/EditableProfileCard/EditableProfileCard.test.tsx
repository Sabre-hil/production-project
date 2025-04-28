import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Profile } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  id: '1',
  first: 'Diana',
  lastname: 'Istamulova',
  age: 23,
  country: Country.Russia,
  currency: Currency.RUB,
  city: 'Moscow',
  username: 'admin123',
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: { id: '1', username: 'admin' },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('features/EditableProfileCard', () => {
  test('Режим рид онли должен переключаться', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
  });

  test('При отмене у нас значение должно обнуляться', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));
    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');
    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));
    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('Diana');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('Istamulova');
  });

  test('Должна появиться ошибка', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
    expect(screen.getByTestId('EditableProfileCardHeader.Error.Paragraph')).toBeInTheDocument();
  });

  test('Если нет ошибок валидации, уходит PUT запрос', async () => {
    const mockRequest = jest.spyOn($api, 'put');
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(mockRequest).toHaveBeenCalled();
  });
});
