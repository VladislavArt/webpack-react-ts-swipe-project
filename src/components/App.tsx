import { Swiper as SwiperType } from 'swiper'
import * as style from './App.module.scss'
import BigDate from './big-date/BigDate'
import Circle from './circle/Circle'
import ItemsListDate from './items-list-date/ItemsListDate'
import Line from './line/Line'
import MiniDateSlider from './mini-date-slider/MiniDateSlider'
import SliderFooterBtnLeft from './slider-footer-btn/slider-left/SliderFooterBtnLeft'
import SliderFooterBtnRight from './slider-footer-btn/slider-right/SliderFooterBtnRight'
import Title from './title/Title'
import { useRef, useState } from 'react'

function App() {
	const [date, setDate] = useState<number>(2)
	const swiperRef = useRef<SwiperType>(null)

	return (
		<div className="container">
			<Line />
			<div className={style.wrapperTop}>
				<Title />
				<BigDate date={date} />
				<Circle />
				<MiniDateSlider date={date} setDate={setDate} />
			</div>
			<div className={style.wrapperDown}>
				<SliderFooterBtnLeft swiperRef={swiperRef} />
				<ItemsListDate swiperRef={swiperRef} date={date} />
				<SliderFooterBtnRight swiperRef={swiperRef} />
			</div>
		</div>
	)
}

export default App
