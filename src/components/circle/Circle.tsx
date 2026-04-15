import { TDateKey } from '@/types/types'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import * as style from './Circle.module.scss'
import { titleDate } from '../big-date/dates/dates'

interface Props {
	date: TDateKey
	setDate: (date: TDateKey) => void
}

const POINTS_KEYS: TDateKey[] = [2, 3, 4, 5, 6]
const RADIUS = 265

function Circle({ date, setDate }: Props) {

	const circleRef = useRef<HTMLDivElement>(null)
	const pointsRef = useRef<HTMLDivElement[]>([])

	const getPointCoords = (index: number) => {

		const angle = (index / POINTS_KEYS.length) * Math.PI * 2 - Math.PI / 2
		const x = Math.cos(angle) * RADIUS
		const y = Math.sin(angle) * RADIUS
		return { x, y }
	}

	useGSAP(
		() => {
			const currentIndex = POINTS_KEYS.indexOf(date)

			const rotationAngle = -currentIndex * (360 / POINTS_KEYS.length)

			gsap.to(circleRef.current, {
				rotation: rotationAngle,
				duration: 1,
				ease: 'power2.inOut'
			})

			gsap.to(pointsRef.current, {
				rotation: -rotationAngle,
				duration: 1,
				ease: 'power2.inOut'
			})
		},
		{ dependencies: [date] }
	)

	return (
		<div className={style.wrapper}>

			<div
				ref={circleRef}
				className={style.circle}
			>
				{POINTS_KEYS.map((pointKey, i) => {
					const { x, y } = getPointCoords(i)

					return (
						<div
							key={pointKey}
							ref={el => {
								if (el) pointsRef.current[i] = el
							}}
							className={`${style.point} ${date === pointKey ? style.active : ''}`}
							style={{
								left: `calc(50% + ${x}px)`,
								top: `calc(50% + ${y}px)`
							}}
							onClick={() => setDate(pointKey)}
						>
							<span className={style.pointNumber}>{pointKey}</span>

							<span className={style.pointTitle}>
                {titleDate[pointKey]}
            	</span>
						</div>
					)
				})}
			</div>
			
		</div>
	)
}

export default Circle
