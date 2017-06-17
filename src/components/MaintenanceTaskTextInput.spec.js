import React from 'react';
import {shallow} from 'enzyme';
import MaintenanceTaskTextInput from './MaintenanceTaskTextInput';

describe('<MaintenanceTaskTextInput />', () => {
  it('should be an input element', () => {
    const props = {
      name: 'testName',
      onChange: jest.fn(),
      placeholder: 'Type Here',
      value: 100
    };

    const wrapper = shallow(<MaintenanceTaskTextInput {...props} />);

    const actual = wrapper.type();
    const expected = 'input';

    expect(actual).toEqual(expected);
  });

  it('should handle change', () => {
    const props = {
      name: 'name',
      onChange: jest.fn(),
      placeholder: 'Type Here',
      value: 100
    };

    const wrapper = shallow(<MaintenanceTaskTextInput {...props} />);

    const actual = wrapper.type();
    const expected = 'input';

    expect(actual).toEqual(expected);
    expect(props.onChange).not.toBeCalled();
    wrapper.simulate('change', {target: {value: 101}});
    expect(props.onChange).toBeCalledWith('name', 101);
  });
});
