import React from 'react';
import { Typography } from '@mui/material';

const SemiCircleProgress = ({
    strokeWidth,
    percentage,
    strokeColor,
    size,
    strokeLinecap,
    percentageSeperator,
    fontStyle,
    hasBackground = false,
    bgStrokeColor,
}) => {
    const radius = 50 - strokeWidth / 2;
    const circumference = 1.1 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    const bgStrokeDashoffset = circumference - 1 * circumference;
    const pathDescription = "M5,64 a1,1 0 0,1 90,0";

    return (
        <svg
            width={size.width}
            height={size.height}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="_half-circular-progress"
        >
            {hasBackground && (
                <path
                    cx="45"
                    cy="45"
                    r="32"
                    d={pathDescription}
                    style={{
                        transition: "stroke-dashoffset 0.35s",
                        stroke: bgStrokeColor || "#d3d3d3",
                        strokeLinecap: strokeLinecap || "round",
                        strokeDasharray: `${circumference}`,
                        strokeDashoffset: `${bgStrokeDashoffset}`,
                        strokeWidth: `${strokeWidth}`,
                    }}
                    fill="none"
                />
            )}
            <path
                cx="45"
                cy="45"
                r="32"
                d={pathDescription}
                style={{
                    transition: "stroke-dashoffset 0.35s",
                    stroke: strokeColor || "#04001b",
                    strokeLinecap: strokeLinecap || "round",
                    strokeDasharray: `${circumference}`,
                    strokeDashoffset: `${strokeDashoffset}`,
                    strokeWidth: `${strokeWidth}`,
                }}
                fill="none"
            />
            <text
                x="51.5%"
                y="44.9%" 
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="10"
                fontFamily="Arial"
                fill="#04001b"
                style={{
                    ...fontStyle,
                }}
            >
                {percentage}
                {percentageSeperator || "%"}
            </text>
        </svg>
    );
};

const CustomSemiCircleProgressWrapper = ({ score }) => {
    return (
        <div style={{ position: 'relative' }}>
            <SemiCircleProgress
                percentage={score}
                size={{ width: 325, height: 300 }}
                fontStyle={{ fontSize: '12px', fill: '#047857', fontWeight: 'semi bold' }}
                hasBackground={true}
                strokeWidth={8}
                strokeColor='#2EA140'
                bgStrokeColor='#E5E7EB'
            />
            <Typography
                sx={{
                    position: 'absolute',
                    top: 150,  
                    left: '35.8%',
                    fontSize: '34px',
                    fontWeight: 'bold',
                    color: '#000000',
                }}
            >
                Score
            </Typography>
        </div>
    );
}

export default CustomSemiCircleProgressWrapper;
