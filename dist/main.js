import { Engine, Scene, Vector3, HemisphericLight, MeshBuilder, FreeCamera } from "@babylonjs/core";
class App {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.engine = new Engine(this.canvas, true);
        this.scene = this.createScene();
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
        window.addEventListener("resize", () => {
            this.engine.resize();
        });
    }
    createScene() {
        const scene = new Scene(this.engine);
        const camera = new FreeCamera("camera", new Vector3(0, 5, -10), scene);
        camera.setTarget(Vector3.Zero());
        camera.attachControl(this.canvas, true);
        const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
        light.intensity = 0.7;
        const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
        sphere.position.y = 1;
        const ground = MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
        return scene;
    }
}
new App();
//# sourceMappingURL=main.js.map