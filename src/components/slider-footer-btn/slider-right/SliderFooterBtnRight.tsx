import Right from '@/assets/right.svg'
import { Swiper as SwiperType } from 'swiper'
import * as style from './SliderFooterBtnRight.module.scss'

interface Props {
	swiperRef: React.RefObject<SwiperType | null>
}

function SliderFooterBtnRight({ swiperRef }: Props) {
	
	const handlePrevClick = () => {
		swiperRef.current?.slideNext()
	}

	return (
		<div className={style.wrapper}>
			<button
				onClick={handlePrevClick}
				className={style.btn}
			>
				<Right
					height={'10px'}
					color={'#3877EE'}
				/>
			</button>
		</div>
	)
}

export default SliderFooterBtnRight
