import * as style from './MiniDateSlider.module.scss'
import Right from '@/assets/right.svg'
import Left from '@/assets/left.svg'

interface Props  {
	date: number
	setDate: React.Dispatch<React.SetStateAction<number>>
}

function MiniDateSlider({ date, setDate }: Props) {

	function handleLeftSlideClick () {
		setDate((prev) => {
			if (prev == 2) {
				return prev
			} else {
				return prev - 1
			}
		})
	}

	function handleRightSlideClick () {
		setDate((prev) => {
			if (prev == 6) {
				return prev
			} else {
				return prev + 1
			}
		})
	}

	return (
		<>
			<span className={style.date}>0{date}/06</span>
			<div className={style.slider}>

				<button onClick={handleLeftSlideClick} className={style.sliderLeft}>
					<Left color={'#42567A'} />
				</button>

				<button onClick={handleRightSlideClick} className={style.sliderRight}>
					<Right color={'#42567A'} />
				</button>

			</div>
		</>
	)
}

export default MiniDateSlider;