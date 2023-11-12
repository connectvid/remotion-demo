// src/Video.js
import { useCurrentFrame, spring, Composition } from 'remotion';

const HelloText = () => {
  const frame = useCurrentFrame();
  const opacity = spring({
    frame,
    config: {
      damping: 200,
      stiffness: 100,
    },
  });

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 100,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'blue',
        width: 1920,
        height: 1080,
        opacity,
      }}
    >
      Hello, World!
    </div>
  );
};

const Video = () => {
  return (
    <Composition
      id="HelloWorld"
      component={HelloText}
      durationInFrames={100}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

export default Video;
