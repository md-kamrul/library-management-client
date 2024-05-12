import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./carouselStyles.css"

const Carousel = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <>
            <div ref={sliderRef} className="keen-slider carousel">
                <div className="keen-slider__slide number-slide1">
                    <img src="https://i.ibb.co/q1wRmtV/banner-1.jpg" alt="" />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <img src="https://i.ibb.co/PF8GLFc/banner-2.jpg" alt="" />
                </div>
                <div className="keen-slider__slide number-slide3">
                    <img src="https://i.ibb.co/FH7rmhh/banner-3.jpg" alt="" />
                </div>
                <div className="keen-slider__slide number-slide4">
                    <img src="https://i.ibb.co/FxqNjbT/banner.jpg" alt="" />
                </div>
            </div>
        </>
    )
};

export default Carousel;