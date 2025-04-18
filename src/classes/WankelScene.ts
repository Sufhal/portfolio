import {
	AmbientLight,
	AxesHelper,
	Clock,
	DirectionalLight,
	MeshBasicMaterial,
	PCFSoftShadowMap,
	PerspectiveCamera,
	Scene,
	WebGLRenderer,
	Vector3
} from 'three';
import WankelModel from "#/classes/WankelModel";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import WankelController from "#/classes/WankelController";
import Animations from "#/classes/Animations";
import WankelControllerBis from './WankelControllerBis';

export default class WankelScene {

	public static elapsedTime = 0;
	private static _initialized = false;
	private static _scene: Scene;
	private static _renderer: WebGLRenderer;
	private static _camera: PerspectiveCamera;
	private static _orbit: OrbitControls;
	private static _clock: Clock;
	private static _directionalLight: DirectionalLight;

	public static get isInitialized() {
		return this._initialized;
	}

	public static get camera() {
		return this._camera;
	}

	public static get orbit() {
		return this._orbit;
	}

	public static get directionalLight() {
		return this._directionalLight;
	}

	public static get domElement() {
		return this._renderer.domElement;
	}

	public static init(): HTMLCanvasElement {
		this._initialized = true;
		this._scene = new Scene();
		this._renderer = new WebGLRenderer({
			antialias: true,
			alpha: true,
			powerPreference: 'high-performance'
		});
		this._renderer.setSize(
			window.innerWidth,
			window.innerHeight
		);
		this._renderer.setPixelRatio(window.devicePixelRatio);
		this._renderer.shadowMap.enabled = true;
		this._renderer.shadowMap.type = PCFSoftShadowMap;
		const camera = new PerspectiveCamera(28, window.innerWidth / window.innerHeight, 0.1, 10000);
		// camera.position.set(0, -26.412461089816528, 217.541258941833523);
		camera.position.set(7.4668225797872125, -79.88206756431306, 77.77178624219724);
		camera.lookAt(0, 0, 0);
		camera.receiveShadow = true;
		camera.updateProjectionMatrix();
		this._camera = camera;
		this._orbit = new OrbitControls(this._camera, this._renderer.domElement);
		this._orbit.target.set(-21.056906066605706, 3.248772140866152, 5.549262327113785)
		// this._camera.position.set(10, 0, 0);
		this._clock = new Clock();
		this._setLights();
		// const axesHelper = new AxesHelper(500);
		// axesHelper.position.x = 0;
		// axesHelper.position.z = 0;
		// axesHelper.position.y = 0;
		// this._scene.add(axesHelper);
		WankelModel.init(this._scene);
		this.update();
		this._exposeFunctions();
		window.addEventListener('resize', this._onWindowResize.bind(this));
		return this._renderer.domElement;
	}

	public static async load() {
		const model = await WankelModel.load();
		this._camera.lookAt(model.position);
		Animations.onModelLoaded();
		// this._scene.overrideMaterial = new MeshBasicMaterial({ color: 0xFF0000, wireframe: true })
	}

	public static update() {
		const delta = this._clock.getDelta();
		this.elapsedTime += delta;
		WankelModel.update(delta);
		WankelControllerBis.update(Date.now());
		Animations.update(delta);
		this._orbit.update();
		this._renderer.render(this._scene, this._camera);
		requestAnimationFrame(() => {
			this.update();
		});
	}



	/* PRIVATE METHODS */

	private static _setLights() {
		this._scene.add(new AmbientLight(0xFFFFFF, 1));
		const directionalLight = new DirectionalLight(0xFFFFFF, 1);
		directionalLight.position.setY(1);
		directionalLight.position.setZ(1);
		this._scene.add(directionalLight);
		this._directionalLight = directionalLight;
	}

	private static _exposeFunctions() {
		// @ts-ignore
		window.cmd = {
			getController: () => this,
			getOrbitTarget: () => this._orbit.target,
			getCameraPosition: () => this._camera.position
		}
	}

	private static _onWindowResize() {
		this._camera.aspect = window.innerWidth / window.innerHeight;
		this._camera.updateProjectionMatrix();
		this._renderer.setSize(window.innerWidth, window.innerHeight);
	}
}