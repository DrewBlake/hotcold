import React from 'react';
import {shallow, mount} from 'enzyme';

import NumberInput from './number-input';

describe('<NumberInput />', () => {
    it('Renders without crashing', () => {
        shallow(<NumberInput />);
    });
});