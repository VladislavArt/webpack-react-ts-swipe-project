import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'
import * as style from './BigDate.module.scss'
import { TDateKey } from '@/types/types'
import { leftDate, rightDate } from './dates/dates'

interface Props {
	date: TDateKey
}

function BigDate({ date }: Props) {
	const [currentDate, setCurrentDate] = useState({
		left: leftDate[date],
		right: rightDate[date]
	})

	const dateRefContainer = useRef<HTMLDivElement>(null)

	useGSAP(
		() => {
			if (currentDate.left === leftDate[date] && currentDate.right === rightDate[date]) {
				return
			}

			const elements = [`.${style.leftDate}`, `.${style.rightDate}`]

			gsap.timeline()
				.to(elements, {
					rotationX: 90,
					opacity: 0,
					duration: 0.4,
					onComplete: () => {
						setCurrentDate({
							left: leftDate[date],
							right: rightDate[date]
						})
					}
				})
				.to(elements, { rotationX: 0, opacity: 1, duration: 0.4 })
		},
		{ dependencies: [date], scope: dateRefContainer }
	)

	return (
		<div className={style.wrapper}>
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
