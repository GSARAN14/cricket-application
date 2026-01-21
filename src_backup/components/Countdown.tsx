import { useState, useEffect } from 'react';

interface CountdownProps {
    targetDate: string; // ISO string
}

export function Countdown({ targetDate }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: any = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents: any[] = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval as keyof typeof timeLeft]) {
            return;
        }

        timerComponents.push(
            <div key={interval} className="flex flex-col items-center rounded-md bg-white/20 px-2 py-1 backdrop-blur-sm">
                <span className="text-lg font-bold">
                    {timeLeft[interval as keyof typeof timeLeft]}
                </span>
                <span className="text-[10px] uppercase opacity-80">{interval}</span>
            </div>
        );
    });

    return (
        <div className="flex gap-2 text-white">
            {timerComponents.length ? timerComponents : <span>Tournament Started!</span>}
        </div>
    );
}
