import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    let grettings;
    let grettings2;
    let grettings3;

    grettings = familiar ? <p>Welcome to my friend.</p> : <p>Who the hell are you?</p>;
    grettings2 = familiar ? <p>I will buy food for you.</p> : <p>Lets eat his his whose whose</p>;
    grettings3 = familiar ? <p>Lets join each other.</p> : <p>Who are you?</p>;

    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {grettings}
            </div>
            <div>
                <h2>Food</h2>
                {grettings2}
            </div>
            <div>
                <h2>Connection</h2>
                {grettings3}
            </div>
        </div>
    );
};

export default User;