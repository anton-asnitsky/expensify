import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should calculate expenses total correctly', () => {
    const total = selectExpensesTotal(expenses);

    expect(total).toBe(114195);
});

test('should return 0 if no expenses', () => {
    const total = selectExpensesTotal([]);

    expect(total).toBe(0);
});

test('should calculate one expense total correctly', () => {
    const total = selectExpensesTotal([expenses[0]]);

    expect(total).toBe(195);
});
