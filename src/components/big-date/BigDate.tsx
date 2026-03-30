import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'
import * as style from './BigDate.module.scss'
import { dataLeftDate, dataRightDate, TDateKey } from './dates/Dates'

interface Props {
	date: number
}

function BigDate({ date }: Props) {
	const [leftDate, setLeftDate] = useState<number>(
		dataLeftDate[date as TDateKey]
	)
	const [rightDate, setRightDate] = useState<number>(
		dataRightDate[date as TDateKey]
	)

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
					setLeftDate(dataLeftDate[date as TDateKey])
					setRightDate(dataRightDate[date as TDateKey])
				}
			})
			tl.to(elements, { rotationX: 0, opacity: 1, duration: 0.4 })
		},
		{ dependencies: [date], scope: dateRefContainer }
	)

	return (
		<div
			ref={dateRefContainer}
			className={style.date}
		>
			<span className={style.leftDate}>{leftDate}</span>
			<span className={style.rightDate}>{rightDate}</span>
		</div>
	)
}

export default BigDate
