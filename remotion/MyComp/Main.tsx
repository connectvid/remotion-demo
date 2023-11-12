/* eslint-disable @next/next/no-img-element */
/* eslint-disable @remotion/warn-native-media-tag */
/* eslint-disable @remotion/no-string-assets */
import { z } from 'zod';
import { AbsoluteFill, Sequence, useVideoConfig } from 'remotion';
import { CompositionProps } from '../../types/constants';
import { loadFont, fontFamily } from '@remotion/google-fonts/Inter';
import React, { useMemo } from 'react';
import { TextFade } from './TextFade';
import { staticFile } from 'remotion';

loadFont();

const container: React.CSSProperties = {
  backgroundColor: 'blue',
};

export const Main = ({ title }: z.infer<typeof CompositionProps>) => {
  const { fps } = useVideoConfig();

  const transitionStart = 2 * fps;
  const transitionDuration = 1 * fps;

  const titleStyle: React.CSSProperties = useMemo(() => {
    return { fontFamily, fontSize: 70 };
  }, []);

  return (
    <AbsoluteFill style={container}>
      <Sequence from={transitionStart + transitionDuration / 2}>
        <TextFade>
          <h1 style={titleStyle}>{title}</h1>
        </TextFade>
      </Sequence>
      <AbsoluteFill style={{ top: 50, left: 50, width: 100, height: 100 }}>
        <img
          src={staticFile('cover.jpg')}
          alt="Cover Image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </AbsoluteFill>

      <Sequence
        style={{
          top: 50,
          left: 450,
          width: 600,
          height: 100,
          fontSize: '40px',
          color: 'blue',
          background: 'red',
        }}
      >
        <TextFade>
          <h1>Good People</h1>
        </TextFade>
      </Sequence>
      {/* 
      <svg height="300" width="500">
        <path
          d="M100 100 C150 50, 250 50, 300 100
           S400 150, 400 200
           S350 300, 300 300
           S100 350, 100 300
           S50 250, 100 200
           S150 150, 200 150
           S300 100, 350 150
           S450 250, 400 300
           S300 350, 200 300
           S50 150, 100 100"
          fill="none"
          stroke="black"
          stroke-width="5"
        />
      </svg> */}
    </AbsoluteFill>
  );
};
