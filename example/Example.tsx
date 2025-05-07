import React, { useState } from 'react';
import { Spinner } from '../src';

const SpinnerExample: React.FC = () => {
    const [size, setSize] = useState<number>(70);
    const [color, setColor] = useState<string>('#69717d');
    const [center, setCenter] = useState<boolean>(false);

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>React Hot Spinner Examples</h1>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                maxWidth: '600px'
            }}>
                <div>
                    <h3>Size</h3>
                    <input
                        type="range"
                        min="20"
                        max="150"
                        value={size}
                        onChange={(e) => setSize(Number(e.target.value))}
                    />
                    <span style={{ marginLeft: '10px' }}>{size}px</span>
                </div>

                <div>
                    <h3>Color</h3>
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                    <span style={{ marginLeft: '10px' }}>{color}</span>
                </div>

                <div>
                    <h3>Center</h3>
                    <label>
                        <input
                            type="checkbox"
                            checked={center}
                            onChange={(e) => setCenter(e.target.checked)}
                        />
                        Center in container
                    </label>
                </div>
            </div>

            <div style={{
                marginTop: '30px',
                border: '1px dashed #ccc',
                padding: '20px',
                height: '200px',
                position: 'relative'
            }}>
                <Spinner
                    size={size}
                    color={color}
                    center={center}
                    className="example-spinner"
                />
            </div>

            <div style={{ marginTop: '30px' }}>
                <h3>Code Example:</h3>
                <pre style={{
                    backgroundColor: '#f5f5f5',
                    padding: '15px',
                    borderRadius: '5px',
                    overflow: 'auto'
                }}>
                    {`<Spinner 
  size={${size}} 
  color="${color}" 
  center={${center}} 
  className="example-spinner"
/>`}
                </pre>
            </div>
        </div>
    );
};

export default SpinnerExample;