'use client';
import React from 'react';

const CountdownWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='flex flex-col items-center text-2xl font-serif'>
			{children}
		</div>
	);
};
type CountdownTypes = {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
};
const Countdown = () => {
	let interval = React.useRef<ReturnType<typeof setInterval> | null>(null);
	const [countdownDate, setCountdownDate] = React.useState<CountdownTypes>({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});
	function startTime() {
		const newCountdownDate = new Date('May 02, 2024 00:13:00').getTime();
		interval.current = setInterval(() => {
			const now = new Date().getTime();
			const distance = newCountdownDate - now;
			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor(
				(distance % (1000 * 60 * 60)) / (1000 * 60)
			);
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);
			if (distance < 0) {
				clearInterval(interval.current as NodeJS.Timeout);
			} else {
				setCountdownDate((prev) => ({
					...prev,
					days: days,
					hours: hours,
					seconds: seconds,
					minutes: minutes,
				}));
			}
		}, 1000);
	}
	React.useEffect(() => {
		startTime();
		return () => {
			clearInterval(interval.current as NodeJS.Timeout);
		};
	}, []);
	return (
		<div className='flex flex-row gap-5'>
			<CountdownWrapper>
				<div>{countdownDate.days}</div>
				<div>hari</div>
			</CountdownWrapper>
			<CountdownWrapper>
				<div>{countdownDate.hours}</div>
				<div>jam</div>
			</CountdownWrapper>
			<CountdownWrapper>
				<div>{countdownDate.minutes}</div>
				<div>menit</div>
			</CountdownWrapper>
			<CountdownWrapper>
				<div>{countdownDate.seconds}</div>
				<div>detik</div>
			</CountdownWrapper>
		</div>
	);
};

export default Countdown;
