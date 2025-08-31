import React, { useEffect, useState } from 'react';
import '../../styles/music-decorations.css';

const MusicDecorations: React.FC = () => {
  const [decorations, setDecorations] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const elements: JSX.Element[] = [];
    
    // Add floating music notes at random positions
    for (let i = 0; i < 8; i++) {
      elements.push(
        <div
          key={`note-${i}`}
          className={`music-note note-${(i % 6) + 1}`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        />
      );
    }

    // Add sound waves
    for (let i = 0; i < 3; i++) {
      elements.push(
        <div
          key={`wave-${i}`}
          className="sound-wave"
          style={{
            top: `${20 + i * 30}%`,
            left: i % 2 === 0 ? '10%' : '85%',
            animationDelay: `${i * 1.5}s`
          }}
        />
      );
    }

    // Add vinyl records
    elements.push(
      <div
        key="vinyl-1"
        className="vinyl-record"
        style={{
          top: '15%',
          right: '5%',
          transform: 'scale(0.7)'
        }}
      />
    );
    
    elements.push(
      <div
        key="vinyl-2"
        className="vinyl-record"
        style={{
          bottom: '20%',
          left: '3%',
          transform: 'scale(0.5)',
          animationDirection: 'reverse'
        }}
      />
    );

    // Add piano keys
    elements.push(
      <div
        key="piano-1"
        className="piano-keys"
        style={{
          bottom: '10%',
          right: '20%'
        }}
      >
        <div className="piano-key" />
        <div className="piano-key black" />
        <div className="piano-key" />
        <div className="piano-key black" />
        <div className="piano-key" />
        <div className="piano-key" />
        <div className="piano-key black" />
        <div className="piano-key" />
      </div>
    );

    // Add guitar strings
    elements.push(
      <div
        key="guitar-1"
        className="guitar-strings"
        style={{
          top: '40%',
          left: '-50px',
          transform: 'rotate(-15deg)'
        }}
      >
        <div className="guitar-string" />
        <div className="guitar-string" />
        <div className="guitar-string" />
        <div className="guitar-string" />
        <div className="guitar-string" />
      </div>
    );

    // Add treble clefs
    elements.push(
      <div
        key="clef-1"
        className="treble-clef"
        style={{
          top: '25%',
          left: '15%'
        }}
      />
    );

    elements.push(
      <div
        key="clef-2"
        className="treble-clef"
        style={{
          bottom: '30%',
          right: '10%',
          transform: 'scale(0.8)',
          animationDelay: '4s'
        }}
      />
    );

    // Add equalizer bars
    elements.push(
      <div
        key="eq-1"
        className="equalizer"
        style={{
          top: '60%',
          right: '8%'
        }}
      >
        <div className="eq-bar" />
        <div className="eq-bar" />
        <div className="eq-bar" />
        <div className="eq-bar" />
        <div className="eq-bar" />
      </div>
    );

    elements.push(
      <div
        key="eq-2"
        className="equalizer"
        style={{
          bottom: '15%',
          left: '12%',
          transform: 'rotate(180deg)'
        }}
      >
        <div className="eq-bar" />
        <div className="eq-bar" />
        <div className="eq-bar" />
        <div className="eq-bar" />
        <div className="eq-bar" />
      </div>
    );

    // Add microphones
    elements.push(
      <div
        key="mic-1"
        className="microphone"
        style={{
          top: '35%',
          right: '25%',
          transform: 'rotate(15deg)'
        }}
      />
    );

    // Add headphones
    elements.push(
      <div
        key="headphones-1"
        className="headphones"
        style={{
          top: '70%',
          left: '25%'
        }}
      >
        <div className="headphones-left" />
        <div className="headphones-right" />
      </div>
    );

    // Add musical staff lines
    elements.push(
      <div
        key="staff-1"
        className="musical-staff"
        style={{
          top: '20%',
          transform: 'rotate(-2deg)'
        }}
      >
        <div className="musical-staff-line" />
        <div className="musical-staff-line" />
        <div className="musical-staff-line" />
        <div className="musical-staff-line" />
        <div className="musical-staff-line" />
      </div>
    );

    elements.push(
      <div
        key="staff-2"
        className="musical-staff"
        style={{
          bottom: '25%',
          transform: 'rotate(1deg)',
          opacity: 0.02
        }}
      >
        <div className="musical-staff-line" />
        <div className="musical-staff-line" />
        <div className="musical-staff-line" />
        <div className="musical-staff-line" />
        <div className="musical-staff-line" />
      </div>
    );

    setDecorations(elements);
  }, []);

  return (
    <div className="music-decorations-container">
      {decorations}
    </div>
  );
};

export default MusicDecorations;