const expansesReduserDefaultState = [];
export default (state = expansesReduserDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id == action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                } 
                return expense;
            });
        case 'REMOVE_EXPENSE':
            console.log(action.id);
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
};