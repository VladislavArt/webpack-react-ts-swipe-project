import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'
import * as style from './BigDate.module.scss'
import { dataLeftDate, dataRightDate, titleDate } from './dates/Dates'
import { TDateKey } from '../items-list-date/data-slider/DataList'

interface Props {
	date: number
}

function BigDate({ date }: Props) {
	const key = date as TDateKey

	const [currentDates, setCurrentDates] = useState({
		left: dataLeftDate[key],
		right: dataRightDate[key]
	})

	const dateRefContainer = useRef<HTMLDivElement>(null)

	useGSAP(
		() => {
			const tl = gsap.timeline()
			const elements = [`.${style.leftDate}`, `.${style.rightDate}`]

			tl.to(elements, {
				rotationX: 90,
				opacity: 0,
				duration: 0.4,
				onComplete: () => {
					setCurrentDates({
						left: dataLeftDate[key],
						right: dataRightDate[key]
					})
				}
			})
			tl.to(elements, { rotationX: 0, opacity: 1, duration: 0.4 })
		},
		{ dependencies: [date], scope: dateRefContainer }
	)

	return (
		<div className={style.wrapper}>
			<span className={style.title}>{titleDate[key]}</span>
			<div
				ref={dateRefContainer}
				className={style.date}
			>
				<span className={style.leftDate}>{currentDates.left}</span>
				<span className={style.rightDate}>{currentDates.right}</span>
			</div>
		</div>
	)
}

export default BigDate
