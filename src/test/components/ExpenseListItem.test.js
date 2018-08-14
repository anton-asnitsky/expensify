import React            from 'react';
import ExpenseListItem  from '../../components/ExpenseListItem';
import { shallow }      from 'enzyme';
import expeneses         from '../fixtures/expenses';

test('should render ExpneseListItem with expnese data', () => {
    const wrapper = shallow(<ExpenseListItem key={expeneses[0].id} {...expeneses[0]} />);

    expect(wrapper).toMatchSnapshot();
});