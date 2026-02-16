import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from 'swiper'
import * as style from './ItemsListDate.module.scss'
import 'swiper/css'
import DataList, { TData } from './data-slider/DataList'
import { useEffect } from 'react'
import gsap from 'gsap'

interface Props {
	date: number
  swiperRef: React.RefObject<SwiperType>
}

type TDateKey = 2 | 3 | 4 | 5 | 6

function ItemsListDate({ swiperRef, date }: Props) {
	const dataMap: Record<TDateKey, TData[]> = {
		2: DataList.Sport,
		3: DataList.Literature,
		4: DataList.Movie,
		5: DataList.Science,
		6: DataList.Building
	}

	const slides = dataMap[date as TDateKey]
	const sliderItem = Array.from(document.querySelectorAll(`.${style.sliderItem}`))

	useEffect(() => {
		const tl = gsap.timeline()

		tl.to(sliderItem, { opacity: 0, duration: 1 })
		tl.to(sliderItem, { opacity: 1 })
		
	}, [date])

	return (
		<Swiper
			grabCursor
			spaceBetween={50}
			slidesPerView={3}
			speed={800}
			onSwiper={(swiper) => {
				swiperRef.current = swiper
			}}
		>
			<div className={style.slider}>
				{slides.map(item => {
					return (
						<SwiperSlide>
							<div className={style.sliderItem}>
								<span className={style.date}>{item.date}</span>
								<p className={style.desc}>{item.desc}</p>
							</div>
						</SwiperSlide>
					)
				})}
			</div>
		</Swiper>
	)
}

export default ItemsListDate
