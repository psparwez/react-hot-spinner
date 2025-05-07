import React, { useState } from 'react';
import { Spinner } from '../src';

const SpinnerDemo: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [spinnerSize, setSpinnerSize] = useState(70);
    const [spinnerColor, setSpinnerColor] = useState('#3498db');
    const [spinnerCenter, setSpinnerCenter] = useState(false);

    const toggleLoading = () => {
        setIsLoading(!isLoading);
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h1>React Hot Spinner Demo</h1>

            <div style={{ margin: '20px 0' }}>
                <button onClick={toggleLoading}>
                    {isLoading ? 'Hide Spinner' : 'Show Spinner'}
                </button>
            </div>

            <div style={{ margin: '20px 0' }}>
                <h3>Customize Spinner</h3>
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Size: {spinnerSize}px</label>
                    <input
                        type="range"
                        min="30"
                        max="150"
                        value={spinnerSize}
                        onChange={(e) => setSpinnerSize(parseInt(e.target.value))}
                        style={{ width: '300px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Color:</label>
                    <input
                        type="color"
                        value={spinnerColor}
                        onChange={(e) => setSpinnerColor(e.target.value)}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>
                        <input
                            type="checkbox"
                            checked={spinnerCenter}
                            onChange={(e) => setSpinnerCenter(e.target.checked)}
                        />
                        Center spinner
                    </label>
                </div>
            </div>

            <div
                style={{
                    border: '1px dashed #ccc',
                    padding: '20px',
                    height: '300px',
                    position: 'relative',
                    backgroundColor: '#f5f5f5',
                }}
            >
                {isLoading && (
                    <Spinner
                        size={spinnerSize}
                        color={spinnerColor}
                        center={spinnerCenter}
                        className="demo-spinner"
                    />
                )}
                {!spinnerCenter && isLoading && (
                    <div style={{ marginTop: '100px', color: '#666' }}>
                        Spinner is positioned inline. Enable "Center spinner" to center it in this container.
                    </div>
                )}
            </div>

            <div style={{ marginTop: '30px' }}>
                <h3>Usage Code:</h3>
                <pre
                    style={{
                        backgroundColor: '#efefef',
                        padding: '15px',
                        borderRadius: '5px',
                        overflow: 'auto',
                    }}
                >
                    {`import { Spinner } from 'react-hot-spinner';

// In your component:
<Spinner 
  size={${spinnerSize}} 
  color="${spinnerColor}" 
  center={${spinnerCenter}}
  className="demo-spinner"
/>`}
                </pre>
            </div>
        </div>
    );
};

export default SpinnerDemo;