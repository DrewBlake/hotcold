import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessNumber from './guess-number';

describe('<GuessNumber />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessNumber />);
    });
});