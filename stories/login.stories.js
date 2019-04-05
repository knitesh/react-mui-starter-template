import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs';
import Login from '../src/components/Login';

storiesOf('Login', module)
    .addDecorator(withKnobs)
    .add('default', () => <Login></Login>)
    .add('with error', () => <Login />)
    .add('with register link', () => <Login />)

