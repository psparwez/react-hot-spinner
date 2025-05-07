import React from 'react';
import { SpinnerProps } from './types';

const Spinner: React.FC<SpinnerProps> = ({
    size = '50px',
    color = '#f0f0f0',
    className = '',
    center = false,

}) => {
    const sizeValue = typeof size === 'number' ? `${size}px` : size;
    const resolvedColor =
        color === 'white' ? '#f0f0f0' :
            color === 'black' ? '#222222' :
                color;

    const spinnerStyle: React.CSSProperties = {
        fontSize: sizeValue,
        position: 'relative',
        display: 'inline-block',
        width: '1em',
        height: '1em',
        ...(center && {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto',
        }),
    };
    const blades = Array.from({ length: 12 }, (_, i) => {
        const bladeStyle: React.CSSProperties = {
            position: 'absolute',
            left: '0.4629em',
            bottom: 0,
            width: '0.074em',
            height: '0.2777em',
            borderRadius: '0.0555em',
            backgroundColor: resolvedColor,
            transformOrigin: 'center -0.2222em',
            transform: `rotate(${i * 30}deg)`,
            animation: 'spinner-fade 1s infinite linear',
            animationDelay: `${i * 0.083}s`,
        };

        return <div key={i} className="spinner-blade" style={bladeStyle} />;
    });

    return (
        <>
            <style>
                {`
          @keyframes spinner-fade {
            0% {
              background-color: ${resolvedColor};
            }
            100% {
              background-color: transparent;
            }
          }
        `}
            </style>
            <div
                className={`react-hot-spinner ${center ? 'center' : ''} ${className}`.trim()}
                style={spinnerStyle}
            >
                {blades}
            </div>
        </>
    );
};

export default Spinner;