import { dataMap } from '@/sliderInfo/sliderInfo'
import { TDateKey } from '@/types/types'
import { useEffect, useRef, useState } from 'react'
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

function App() {
	const [date, setDate] = useState<number>(2)

	const swiperRef = useRef<SwiperType | null>(null)
	const currentSlides = dataMap[date as TDateKey]

	useEffect(() => {
		if (swiperRef.current) {
			swiperRef.current.slideTo(0, 500)
		}
	}, [date])

	return (
		<div className="container">
			<Line />
			<div className={style.wrapperTop}>
				<Title />
				<BigDate date={date} />
				<Circle />
				<MiniDateSlider
					date={date}
					setDate={setDate}
				/>
			</div>
			<div className={style.wrapperDown}>
				<SliderFooterBtnLeft swiperRef={swiperRef} />
				<ItemsListDate
					swiperRef={swiperRef}
					items={currentSlides}
				/>
				<SliderFooterBtnRight swiperRef={swiperRef} />
			</div>
		</div>
	)
}

export default App
