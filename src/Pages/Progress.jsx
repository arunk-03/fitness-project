import { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import LeftNavBar from '../Components/LeftNavBar';

import Bottom from '../Components/Bottom';


export default function Progress() {
    return (
        <div>
            <NavBar />
            <LeftNavBar />
            <div>Hello</div>
            <Bottom />
        </div>
    );
}
