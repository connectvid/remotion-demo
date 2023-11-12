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
  backgroundColor: 'white',
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
          <h1>Good morning</h1>
        </TextFade>
      </Sequence>
    </AbsoluteFill>
  );
};
