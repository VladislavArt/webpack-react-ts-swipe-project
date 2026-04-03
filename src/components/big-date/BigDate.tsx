import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'
import * as style from './BigDate.module.scss'
import { leftDate, rightDate, titleDate } from './dates/Dates'
import { TDateKey } from '@/types/types'

interface Props {
	date: number
}

function BigDate({ date }: Props) {
	const key = date as TDateKey

	const [currentDate, setCurrentDate] = useState({
		left: leftDate[key],
		right:rightDate[key]
	})

	const dateRefContainer = useRef<HTMLDivElement>(null)

	useGSAP(
		() => {
			const elements = [`.${style.leftDate}`, `.${style.rightDate}`]
			gsap.timeline()
				.to(elements, {
					rotationX: 90,
					opacity: 0,
					duration: 0.4,
					onComplete: () => {
						setCurrentDate({
							left: leftDate[key],
							right: rightDate[key]
						})
					}
				})
				.to(elements, { rotationX: 0, opacity: 1, duration: 0.4 })
		},
		{ dependencies: [key], scope: dateRefContainer }
	)

	return (
		<div className={style.wrapper}>
			<span className={style.title}>{titleDate[key]}</span>
			<div
				ref={dateRefContainer}
				className={style.date}
			>
				<span className={style.leftDate}>{currentDate.left}</span>
				<span className={style.rightDate}>{currentDate.right}</span>
			</div>
		</div>
	)
}

export default BigDate
