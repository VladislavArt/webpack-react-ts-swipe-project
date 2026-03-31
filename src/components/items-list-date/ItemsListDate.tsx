import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { dataMap, TDateKey } from './data-slider/DataList'
import * as style from './ItemsListDate.module.scss'

interface Props {
	date: number
	swiperRef: React.RefObject<SwiperType | null>
}

function ItemsListDate({ swiperRef, date }: Props) {
	const slides = dataMap[date as TDateKey]
	const sliderRefContainer = useRef<HTMLDivElement>(null)

	useGSAP(
		() => {
			gsap.fromTo(
				`.${style.sliderItem}`,
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }
			)
		},
		{ dependencies: [date], scope: sliderRefContainer }
	)

	return (
		<div
			ref={sliderRefContainer}
			className={style.sliderWrapper}
		>
			<Swiper
				grabCursor
				spaceBetween={15}
				slidesPerView={3}
				speed={800}
				onSwiper={swiper => {
					swiperRef.current = swiper
				}}
			>
				{slides.map((item, index) => (
					<SwiperSlide key={index}>
						<div className={style.sliderItem}>
							<span className={style.date}>{item.date}</span>
							<p className={style.desc}>{item.desc}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default ItemsListDate
