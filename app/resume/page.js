"use client";
import useWindowDimensions from "../components/useWindowDimensions";

export default function Resume() {
    const url = "/Jeffrey_Li.pdf";
    const [innerWidth, innerHeight] = useWindowDimensions();
    return (<embed src={url} width={innerWidth} height={innerHeight} type="application/pdf"></embed>);

}




