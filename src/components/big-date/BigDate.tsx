import { useEffect, useState } from 'react'
import * as style from './BigDate.module.scss'
import gsap from 'gsap'
import { dataLeftDate, dataRightDate, TDateKey } from './dates/Dates'

interface Props {
	date: number
}

function BigDate({ date }: Props) {
	const [leftDate, setLeftDate] = useState<number>(null)
	const [rightDate, setRightDate] = useState<number>(null)

	const dateLeft = document.querySelectorAll(`.${style.leftDate}`)
	const dateRight = document.querySelectorAll(`.${style.rightDate}`)

	const left = dataLeftDate[date as TDateKey]
	const right = dataRightDate[date as TDateKey]

	useEffect(() => {
		const tl = gsap.timeline()

		Array.from(dateLeft).forEach(el => {
			tl.to(el, { rotationX: 90, opacity: 0, duration: 0.5 })
			tl.to(el, { rotationX: 0, opacity: 1, duration: 0.5 })
		})

		Array.from(dateRight).forEach(el => {
			tl.to(el, { rotationX: 90, opacity: 0, duration: 0.5 })
			tl.to(el, { rotationX: 0, opacity: 1, duration: 0.5 })
		})

		setLeftDate(left)
		setRightDate(right)

	}, [date])

	return (
		<div className={style.date}>
			<span className={style.leftDate}>{leftDate}</span>
			<span className={style.rightDate}>{rightDate}</span>
		</div>
	)
}

export default BigDate;
