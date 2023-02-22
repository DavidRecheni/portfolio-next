import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
const PostProcessing = () => {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
    </EffectComposer>
  );
};

export default PostProcessing;
