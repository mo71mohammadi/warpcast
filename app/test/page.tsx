'use client';
import { useState } from 'react';

export default function TestPage() {
  const [response, setResponse] = useState<any>(null);

  const testFrame = async () => {
    try {
      const res = await fetch('/api/frame', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Frame API Test</h1>
      <button 
        onClick={testFrame}
        style={{
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Test Frame API
      </button>
      
      {response && (
        <div style={{ marginTop: '20px' }}>
          <h2>Response:</h2>
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '10px', 
            borderRadius: '5px' 
          }}>
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
} 