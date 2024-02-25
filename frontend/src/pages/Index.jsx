import {useState, useEffect, useRef} from 'react';
import Slider from '../components/Slider';
import News from '../components/News';
import Store from '../components/Store';

export function Index() {
    return (
        <div>
            <Slider></Slider>
            <News></News>
            <Store></Store>
    </div>
    )
}