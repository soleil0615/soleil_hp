"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TrialSession {
    date: string; // ISO format: YYYY-MM-DD
    time: string;
    description: string;
}

const sessions: TrialSession[] = [
    // February 2026
    { date: "2026-02-07", time: "11:00 - 12:30", description: "プログラミング体験会" },
    { date: "2026-02-08", time: "14:00 - 15:30", description: "プログラミング体験会" },
    { date: "2026-02-14", time: "11:00 - 12:30", description: "プログラミング体験会" },
    { date: "2026-02-15", time: "14:00 - 15:30", description: "プログラミング体験会" },
    { date: "2026-02-21", time: "11:00 - 12:30", description: "プログラミング体験会" },
    { date: "2026-02-28", time: "11:00 - 12:30", description: "プログラミング体験会" },
];

interface TrialCalendarProps {
    onSelectSession?: (session: TrialSession) => void;
    selectedDate?: string;
}

export default function TrialCalendar({ onSelectSession, selectedDate }: TrialCalendarProps) {
    const [currentDate, setCurrentDate] = useState(new Date(2026, 1)); // Feb 2026

    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const prevMonth = () => setCurrentDate(new Date(year, month - 1));
    const nextMonth = () => setCurrentDate(new Date(year, month + 1));

    const totalDays = daysInMonth(year, month);
    const startOffset = firstDayOfMonth(year, month);

    const days = Array.from({ length: 42 }, (_, i) => {
        const day = i - startOffset + 1;
        if (day <= 0 || day > totalDays) return null;
        return day;
    });

    const isSessionDay = (day: number) => {
        const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        return sessions.some((s) => s.date === dateStr);
    };

    const getSessionsForDay = (day: number) => {
        const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        return sessions.filter((s) => s.date === dateStr);
    };

    return (
        <div className="bg-white rounded-3xl sm:rounded-[2rem] shadow-xl overflow-hidden border border-blue-50">
            {/* Calendar Header */}
            <div className="bg-blue-600 p-4 sm:p-6 text-white flex items-center justify-between">
                <button onClick={prevMonth} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                </button>
                <h2 className="text-xl sm:text-2xl font-bold">
                    {year}年 {month + 1}月
                </h2>
                <button onClick={nextMonth} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                </button>
            </div>

            {/* Calendar Grid */}
            <div className="p-4 sm:p-6">
                <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-4">
                    {["日", "月", "火", "水", "木", "金", "土"].map((day, i) => (
                        <div key={day} className={clsx("text-center text-[10px] sm:text-sm font-bold", i === 0 ? "text-red-500" : i === 6 ? "text-blue-500" : "text-blue-900/40")}>
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-1 sm:gap-2">
                    {days.map((day, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                if (day && isSessionDay(day) && onSelectSession) {
                                    const session = getSessionsForDay(day)[0];
                                    onSelectSession(session);
                                }
                            }}
                            className={clsx(
                                "aspect-square rounded-lg sm:rounded-2xl flex flex-col items-center justify-center relative border sm:border-2 transition-all",
                                day ? "border-transparent text-blue-900 font-bold text-sm sm:text-base" : "invisible",
                                day && isSessionDay(day) ? "bg-orange-50 border-orange-200 cursor-pointer hover:border-orange-400 active:scale-95" : "",
                                day && selectedDate === `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}` ? "border-orange-500 bg-orange-100" : ""
                            )}
                        >
                            {day}
                            {day && isSessionDay(day) && (
                                <div className="absolute bottom-1 sm:bottom-2 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Session List */}
            <div className="bg-blue-50 p-6 space-y-4">
                <h3 className="text-blue-900 font-bold flex items-center gap-2">
                    <span className="w-2 h-6 bg-orange-500 rounded-full"></span>
                    開催予定の体験会
                </h3>
                <div className="space-y-3">
                    {sessions
                        .filter((s) => {
                            const d = new Date(s.date);
                            return d.getFullYear() === year && d.getMonth() === month;
                        })
                        .map((s, i) => (
                            <button
                                key={i}
                                onClick={() => onSelectSession?.(s)}
                                className={clsx(
                                    "w-full text-left bg-white p-4 rounded-2xl shadow-sm border border-blue-100 flex items-center justify-between group transition-all",
                                    "hover:border-blue-400 hover:shadow-md active:scale-[0.98]",
                                    s.date === selectedDate ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500" : ""
                                )}
                            >
                                <div>
                                    <p className="text-xs sm:text-sm font-bold text-blue-600">
                                        {s.date.split("-")[1]}/{s.date.split("-")[2]} ({["日", "月", "火", "水", "木", "金", "土"][new Date(s.date).getDay()]}) {s.time}
                                    </p>
                                    <p className="text-sm sm:text-base text-blue-900 font-medium">{s.description}</p>
                                </div>
                                <div className="text-blue-200 group-hover:text-blue-500 transition-colors">
                                    <ChevronRight size={20} />
                                </div>
                            </button>
                        ))}
                </div>
                <p className="text-xs text-blue-900/40 text-center">
                    ※お申し込みは各日程の3日前まで受け付けております。
                </p>
            </div>
        </div>
    );
}
