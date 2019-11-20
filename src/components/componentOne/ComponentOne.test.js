import React from 'react';
import { create } from "react-test-renderer";
import ComponentOne from './ComponentOne';

describe('ComponentOne', () => {
    test('Snapshot testing', () => {
        const component = create(<ComponentOne />);
        expect(component.toJSON()).toMatchSnapshot();
    })
})