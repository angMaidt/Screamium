import useProgressiveImg from "../ProgressiveImageLoad";

function BlurredImage() {
    const [src, { blur }] = useProgressiveImg("header-animated-small.gif", "header-animated.gif")
    return (
        <img
            src={src}
            style={{
                width: 200,
                filter: blur ? "blur(20px)" : "none",
                transition: blur ? "none" : "filter 0.3s ease-out"
            }}
        />
    )
};

export default BlurredImage;
