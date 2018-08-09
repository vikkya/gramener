import React from 'react';
import renderer from 'react-test-renderer';
import BoxBuilder from '../BoxBuilder';

test('BoxBuilder will render correctly', () => {
    const component = renderer.create(<BoxBuilder />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot;

})
