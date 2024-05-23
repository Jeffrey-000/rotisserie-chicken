import { useState, useEffect } from "react";

function getDimensions() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}


export default function useWindowDimensions(){
    const [windowDimensions, setWindowDimensions] = useState(getDimensions());
    

    useEffect(() => { 
        function handleResize() {
            setWindowDimensions(getDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); 

    }, []);
    return windowDimensions;
}

// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs