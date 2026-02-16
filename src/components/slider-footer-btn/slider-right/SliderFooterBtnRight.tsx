import Right from '@/assets/right.svg'
import * as style from './SliderFooterBtnRight.module.scss'
import { Swiper as SwiperType } from 'swiper'

interface Props {
  swiperRef: React.RefObject<SwiperType>
}

function SliderFooterBtnRight({ swiperRef }: Props) {
	const handlePrevClick = () => {
		if (swiperRef && swiperRef.current) {
			swiperRef.current.slideNext()
		}
	}

	return (
		<div className={style.wrapper}>
			<button onClick={handlePrevClick} className={style.btn}>
				<Right height={'10px'} color={'#3877EE'} />
			</button>
		</div>
	)
}

export default SliderFooterBtnRight;