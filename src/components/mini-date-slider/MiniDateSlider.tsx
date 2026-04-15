import Left from '@/assets/left.svg'
import Right from '@/assets/right.svg'
import { TDateKey } from '@/types/types'
import * as style from './MiniDateSlider.module.scss'

interface Props {
	date: TDateKey
	setDate: (date: TDateKey) => void
}

const MIN_DATE = 2
const MAX_DATE = 6

function MiniDateSlider({ date, setDate }: Props) {
	const handleRightClick = () => setDate((date + 1) as TDateKey)
	const handleLeftClick = () => setDate((date - 1) as TDateKey)

	return (
		<div className={style.container}>
			<span className={style.date}>{date.toString().padStart(2, '0')}/06</span>
			<div className={style.slider}>
				<button
					onClick={handleLeftClick}
					className={style.sliderLeft}
					disabled={date === MIN_DATE}
				>
					<Left color={date === MIN_DATE ? '#ccc' : '#42567A'} />
				</button>

				<button
					onClick={handleRightClick}
					className={style.sliderRight}
					disabled={date === MAX_DATE}
				>
					<Right color={date === MAX_DATE ? '#ccc' : '#42567A'} />
				</button>
			</div>
		</div>
	)
}

export default MiniDateSlider
