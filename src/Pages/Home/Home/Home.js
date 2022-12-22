import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h1>This is home</h1>
            <Services></Services>
        </div>
    );
};

export default Home;