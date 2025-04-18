import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader";
import {GLTF, GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";
import {
	AnimationAction,
	AnimationMixer, Group,
	Mesh,
	MeshPhongMaterial,
	Scene, Vector3
} from "three";

export default class WankelModel {

	private static _scene: Scene;
	private static _mixer: AnimationMixer;
	private static _actions: AnimationAction[] = [];
	private static _asset: Group;
	private static _basePosition: Vector3;
	private static _shakeStrength: number;

	private static _splitConfig: SplitConfig[] = [{
		nameRegex: /^Cylinder001$/,
		additionnalPosition: new Vector3(0,0, 240)
	},{
		nameRegex: /^Cylinder(002|003|004|005|006|007|008|009|010|011|012|013|014|015|016|017|018|019|020|021|022)$/,
		additionnalPosition: new Vector3(0,0, 160)
	},{
		nameRegex: /^图形007$/,
		additionnalPosition: new Vector3(0,0, 80)
	}, {
		nameRegex: /^图形005$/,
		additionnalPosition: new Vector3(0,0, -160)
	}, {
		nameRegex: /^图形015$/,
		additionnalPosition: new Vector3(0,0, -240)
	}, {
		nameRegex: /^图形014$/,
		additionnalPosition: new Vector3(0,0, -320)
	},{
		nameRegex: /^Cylinder(023|024|025|026|027|028|029|030|031|032|033|034|035|036|037|038|039|040)$/,
		additionnalPosition: new Vector3(0,0, -400)
	}, {
		nameRegex: /^Cylinder041$/,
		additionnalPosition: new Vector3(0,0, -480)
	},];

	public static init(scene: Scene) {
		this._scene = scene;
	}

	public static async load() {
		const loader = new GLTFLoader();
		const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath('/draco/');
		loader.setDRACOLoader(dracoLoader);
		const gltf = await loader.loadAsync('/models/13b_draco_full_keyframes.glb');
		const asset = gltf.scene;		
		const material = this._getMaterial();
		asset.traverse(mesh => {
			if (mesh instanceof Mesh) {
				mesh.material = material;
				mesh.castShadow = true;
				mesh.receiveShadow = true;
			}
		});
		this._applyUserData(asset);
		this._animate(gltf);
		asset.scale.set(50, 50, 50);
		this._scene.add(asset);
		this._asset = asset;
		this._basePosition = new Vector3(-77, 0, 0);
		this._resetPosition();
		return asset;
	}

	public static update(delta: number) {
		if (this._mixer) {
			this._mixer.update(delta);
			if (this._actions[0].time < 0.03333333507180214) {
				this._actions.forEach(action => action.time = 0.03333333507180214);
			}
		}
		if (this._shakeStrength > 0)
			this._applyShake(this._shakeStrength);
	}

	public static setEngineSpeed(speed: number) {
		this._actions.forEach(action => action.timeScale = speed);
	}

	public static setSplitFactor(factor: number) {
		this._asset.traverse(mesh => {
			if (mesh instanceof Mesh) {
				const { splitDetails } = mesh.userData;
				if (splitDetails && splitDetails.src && splitDetails.dest) {
					mesh.position.lerpVectors(splitDetails.src, splitDetails.dest, factor);
				}
			}
		});
	}

	public static setShake(strength: number) {
		this._shakeStrength = strength;
	}


	/* PRIVATE METHODS */

	private static _animate(gltf: GLTF) {
		this._mixer = new AnimationMixer(gltf.scene);
		for (const animation of gltf.animations) {
			const action = this._mixer.clipAction(animation);
			action.play();
			this._actions.push(action);
		}	
	}

	private static _applyShake(strength: number) {
		this._resetPosition();
		this._asset.position.add(new Vector3(
			Math.random() * strength,
			Math.random() * strength,
			Math.random() * strength,
		));
	}

	private static _getMaterial() {
		return new MeshPhongMaterial({
			color: 0x161616,
			shininess: 1
		});
	}

	private static _applyUserData(asset: Group) {
		asset.traverse(mesh => {
			if (mesh instanceof Mesh) {
				for (const split of this._splitConfig) {
					if (split.nameRegex.test(mesh.name)) {
						const position = mesh.position.clone();
						mesh.userData.splitDetails = {
							src: position,
							dest: position.clone().add(split.additionnalPosition.clone().multiplyScalar(.005))
						};
					}
				}
			}
		});
	}

	private static _resetPosition() {
		this._asset.position.copy(this._basePosition);
	}

}

export interface SplitConfig {
	nameRegex: RegExp;
	additionnalPosition: Vector3;
}