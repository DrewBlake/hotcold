import React from 'react';
import {shallow, mount} from 'enzyme';

import HotColdDisplay from './hotcold-display';

describe('<HotColdDisplay />', () => {
    it('Renders without crashing', () => {
        shallow(<HotColdDisplay guessArray={[]}/>);
    });
});