import { Vector3, HemisphericLight, MeshBuilder, ArcRotateCamera, SceneLoader } from '@babylonjs/core';
import SceneComponent from 'babylonjs-hook';
import './App.css'

const onSceneReady = scene => {
  const canvas = scene.getEngine().getRenderingCanvas();
  const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0), scene);
  camera.attachControl(canvas, true);

  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  const box = MeshBuilder.CreateBox("box", {}, scene);
  SceneLoader.ImportMeshAsync(["ground", "semi_house"], "https://assets.babylonjs.com/meshes/", "both_houses_scene.babylon")
    .then((result) => {
      result.meshes[0].position.y = -0.5;
      const house = scene.getMeshByName("semi_house");
      house.position.y = -0.5;
      house.position.x = 2;
      house.rotation.y = Math.PI / 2;
    });
}

// Will run on every frame render.
const onRender = scene => {
  return scene
}

function App() {
  return (
    <SceneComponent antialias onSceneReady={onSceneReady} onRender={onRender} id='my-canvas' />
  )
}

export default App;