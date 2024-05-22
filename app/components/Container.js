import { Parallax } from "react-parallax";
import image from "@/public/rotisserie.jpg"

export default function Container(props) {
    const { children } = props;

    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('@/public/rotisserie.jpg')}
            bgImageAlt="the dog"
            strength={-200}
        >
            Blur transition from min to max
            <div style={{ height: '200px' }} />
        </Parallax>
    );

}