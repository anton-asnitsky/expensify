import React                from 'react';

const EditExpensedPage = (props) => {
    return (
        <div>
            Editing expense with id {props.match.params.id}
        </div>
    );
};

export default EditExpensedPage;