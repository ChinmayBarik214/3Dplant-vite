import { Vector3, HemisphericLight, MeshBuilder, ArcRotateCamera, SceneLoader } from '@babylonjs/core';
import SceneComponent from 'babylonjs-hook';
import "@babylonjs/loaders/glTF";
import './App.css'

const onSceneReady = scene => {
  const canvas = scene.getEngine().getRenderingCanvas();
  const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0), scene);
  camera.attachControl(canvas, true);
  camera.position = new Vector3(100, 100, 0);
  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // const box = MeshBuilder.CreateBox("box", {}, scene);
  SceneLoader.ImportMesh("", "https://raw.githubusercontent.com/ChinmayBarik214/MeshesLibrary/main/", "plant.glb", scene, function (newMeshes) {
    camera.target = newMeshes[0];
    newMeshes[0].scaling = new Vector3(0.5, 0.5, 0.5);
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