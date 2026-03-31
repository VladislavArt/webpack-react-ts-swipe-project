import Left from '@/assets/left.svg'
import Right from '@/assets/right.svg'
import * as style from './MiniDateSlider.module.scss'

interface Props {
	date: number
	setDate: React.Dispatch<React.SetStateAction<number>>
}

function MiniDateSlider({ date, setDate }: Props) {
	const MIN_DATE = 2
	const MAX_DATE = 6

	const handleRightClick = () => setDate(prev => prev + 1)
	const handleLeftClick = () => setDate(prev => prev - 1)

	return (
		<>
			<span className={style.date}>{date.toString().padStart(2, '0')}/06</span>
			<div className={style.slider}>
				<button
					onClick={handleLeftClick}
					className={style.sliderLeft}
					disabled={date === MIN_DATE}
				>
					<Left color={MIN_DATE === 2 ? '#ccc' : '#42567A'} />
				</button>

				<button
					onClick={handleRightClick}
					className={style.sliderRight}
					disabled={date === MAX_DATE}
				>
					<Right color={date === MAX_DATE ? '#ccc' : '#42567A'} />
				</button>
			</div>
		</>
	)
}

export default MiniDateSlider
