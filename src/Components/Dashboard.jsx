import React, { Fragment } from 'react';

const Dashboard = () =>{
    return (
        <Fragment>
            Welcome to Dasboard
        </Fragment>
    )
}

const NewFun = 'hello';

function addCal() {
    let a = 10;
    let b = 20;
    let c = a + b;

    return (
        <Fragment>
            The addition will be {c}; 
        </Fragment>
    )
}

export {NewFun,addCal};
// export {addCal};
export default Dashboard;