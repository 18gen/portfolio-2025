import { Object3D } from "three";
import { ReactThreeFiber } from "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // This matches <primitive object={someTHREEObject} />
      primitive: ReactThreeFiber.Object3DNode<Object3D, typeof Object3D>;
    }
  }
}

declare module "*.glb";
