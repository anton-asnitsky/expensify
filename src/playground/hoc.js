// Higher order component (HOC) - component that renders other components
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
   <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
   </div> 
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!!!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthnticated ? 
                    (<WrappedComponent {...props} />) : 
                    (<p>Please authenticate to view info</p>)
            }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


//ReactDOM.render(<AdminInfo isAdmin={true} info="There are details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthnticated={false} info="There are details" />, document.getElementById('app'));