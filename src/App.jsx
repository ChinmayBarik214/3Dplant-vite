import { Vector3, HemisphericLight, MeshBuilder, ArcRotateCamera, SceneLoader, StandardMaterial, CubeTexture, Texture, Color3 } from '@babylonjs/core';
import SceneComponent from 'babylonjs-hook';
import "@babylonjs/loaders/glTF";
import './App.css'

const onSceneReady = scene => {
  const canvas = scene.getEngine().getRenderingCanvas();
  const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0), scene);
  camera.attachControl(canvas, true);
  camera.position = new Vector3(100, 100, 0);
  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
  var skybox = MeshBuilder.CreateBox("skyBox", { size: 1000 }, scene);
  var skyboxMaterial = new StandardMaterial("skyBox", scene);
  skyboxMaterial.backFaceCulling = false;
  skyboxMaterial.reflectionTexture = new CubeTexture("https://raw.githubusercontent.com/ChinmayBarik214/MeshesLibrary/main/textures/skybox", scene);
  skyboxMaterial.reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE;
  skyboxMaterial.diffuseColor = new Color3(0, 0, 0);
  skyboxMaterial.specularColor = new Color3(0, 0, 0);
  skybox.material = skyboxMaterial;


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