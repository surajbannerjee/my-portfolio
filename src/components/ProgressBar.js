import React from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "CSS", level: 75 },
];

const CIRCLE_SIZE = 120;
const STROKE_WIDTH = 10;
const RADIUS = (CIRCLE_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const CircularProgress = ({ name, level }) => {
    // Counter animation for the number
    const progress = useMotionValue(0);
    const [displayValue, setDisplayValue] = React.useState(0);

    useAnimationFrame((t) => {
        // Animate from 0 to level over 1.2s
        const duration = 1200;
        const pct = Math.min(level, Math.round((level * t) / duration));
        setDisplayValue(pct);
        progress.set(pct);
    });

    React.useEffect(() => {
        setTimeout(() => {
            progress.set(level);
        }, 1200);
    }, [level, progress]);

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: 24 }}>
            <div className="rounded-full overflow-hidden relative" style={{ position: "relative", width: CIRCLE_SIZE, height: CIRCLE_SIZE }}>
                <svg width={CIRCLE_SIZE} height={CIRCLE_SIZE}>
                    <circle
                        cx={CIRCLE_SIZE / 2}
                        cy={CIRCLE_SIZE / 2}
                        r={RADIUS}
                        stroke="#eee"
                        strokeWidth={STROKE_WIDTH}
                        fill="none"
                    />
                    <motion.circle
                        cx={CIRCLE_SIZE / 2}
                        cy={CIRCLE_SIZE / 2}
                        r={RADIUS}
                        stroke="#0070f3"
                        strokeWidth={STROKE_WIDTH}
                        fill="none"
                        strokeDasharray={CIRCUMFERENCE}
                        strokeDashoffset={CIRCUMFERENCE}
                        animate={{ strokeDashoffset: CIRCUMFERENCE * (1 - level / 100) }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        style={{
                            filter: "drop-shadow(0 0 8px #0070f3)",
                            transform: "rotate(-90deg)",
                            transformOrigin: "50% 50%"
                        }}
                    />
                </svg>
                <motion.span
                    initial={{ opacity: 0, scale: 0.7, x: -10, y: -10 }}
                    animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontWeight: 700,
                        fontSize: 28,
                        color: "#0070f3"
                    }}
                >
                    {displayValue}%
                </motion.span>
            </div>
            <span style={{ marginTop: 12, fontWeight: 600, fontSize: 18 }}>{name}</span>
        </div>
    );
};

const ProgressBar = () => (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {skills.map((skill) => (
            <CircularProgress key={skill.name} name={skill.name} level={skill.level} />
        ))}
    </div>
);

export default ProgressBar;