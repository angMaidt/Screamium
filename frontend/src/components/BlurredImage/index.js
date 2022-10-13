import useProgressiveImg from "../ProgressiveImageLoad";

function BlurredImage() {
    const [src, { blur }] = useProgressiveImg("/images/header-animated-small.gif", "/images/header-animated.gif")
    return (
        <img
            src={src}
            id="header-img"
            style={{
                // width: 200,
                filter: blur ? "blur(20px)" : "none",
                transition: blur ? "none" : "filter 0.3s ease-out"
            }}
        />
    )
};

export default BlurredImage;
