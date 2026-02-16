import Left from '@/assets/left.svg'
import * as style from './SliderFooterBtnLeft.module.scss'
import { Swiper as SwiperType } from 'swiper'

interface Props {
  swiperRef: React.RefObject<SwiperType>
}

function SliderFooterBtnLeft({ swiperRef }: Props) {
	const handlePrevClick = () => {
		if (swiperRef && swiperRef.current) {
			swiperRef.current.slidePrev()
		}
	}
	return (
		<div className={style.wrapper}>
			<button onClick={handlePrevClick} className={style.btn}>
				<Left height={'10px'} color={'#3877EE'} />
			</button>
		</div>
	)
}

export default SliderFooterBtnLeft;