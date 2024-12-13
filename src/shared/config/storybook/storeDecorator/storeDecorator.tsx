import { Story } from '@storybook/react';
import { StateSheme, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: StateSheme) => (StoryComponent: Story) => (
    <StoreProvider inititalState={state}>
        <StoryComponent />
    </StoreProvider>
);