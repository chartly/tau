// Type definitions for Phaser 2.4.0 2015-Jul-16
// Project: https://github.com/photonstorm/phaser

// Corbin Hart (https://github.com/chartly/)
// 29/07/15 - 1200 PST: updated defintion to comply with es6 module export syntax

export module p2 {
    // Type definitions for p2.js v0.6.0
    // Project: https://github.com/schteppe/p2.js/

    // Corbin Hart (https://github.com/chartly/)
    // 29/07/15 - 1514 PST: updated defintion to comply with es6 module export syntax 

    export class AABB {

        constructor(options?: {
            upperBound?: number[];
            lowerBound?: number[];
        });

        setFromPoints(points: number[][], position: number[], angle: number, skinSize: number): void;
        copy(aabb: AABB): void;
        extend(aabb: AABB): void;
        overlaps(aabb: AABB): boolean;

    }

    export class Broadphase {

        static AABB: number;
        static BOUNDING_CIRCLE: number;

        static NAIVE: number;
        static SAP: number;

        static boundingRadiusCheck(bodyA: Body, bodyB: Body): boolean;
        static aabbCheck(bodyA: Body, bodyB: Body): boolean;
        static canCollide(bodyA: Body, bodyB: Body): boolean;

        constructor(type: number);

        type: number;
        result: Body[];
        world: World;
        boundingVolumeType: number;

        setWorld(world: World): void;
        getCollisionPairs(world: World): Body[];
        boundingVolumeCheck(bodyA: Body, bodyB: Body): boolean;

    }

    export class GridBroadphase extends Broadphase {

        constructor(options?: {
            xmin?: number;
            xmax?: number;
            ymin?: number;
            ymax?: number;
            nx?: number;
            ny?: number;
        });

        xmin: number;
        xmax: number;
        ymin: number;
        ymax: number;
        nx: number;
        ny: number;
        binsizeX: number;
        binsizeY: number;

    }

    export class NativeBroadphase extends Broadphase {

    }

    export class Narrowphase {

        contactEquations: ContactEquation[];
        frictionEquations: FrictionEquation[];
        enableFriction: boolean;
        slipForce: number;
        frictionCoefficient: number;
        surfaceVelocity: number;
        reuseObjects: boolean;
        resuableContactEquations: any[];
        reusableFrictionEquations: any[];
        restitution: number;
        stiffness: number;
        relaxation: number;
        frictionStiffness: number;
        frictionRelaxation: number;
        enableFrictionReduction: boolean;
        contactSkinSize: number;

        collidedLastStep(bodyA: Body, bodyB: Body): boolean;
        reset(): void;
        createContactEquation(bodyA: Body, bodyB: Body, shapeA: Shape, shapeB: Shape): ContactEquation;
        createFrictionFromContact(c: ContactEquation): FrictionEquation;

    }

    export class SAPBroadphase extends Broadphase {

        axisList: Body[];
        axisIndex: number;

    }

    export class Constraint {

        static DISTANCE: number;
        static GEAR: number;
        static LOCK: number;
        static PRISMATIC: number;
        static REVOLUTE: number;

        constructor(bodyA: Body, bodyB: Body, type: number, options?: {
            collideConnected?: boolean;
            wakeUpBodies?: boolean;
        });

        type: number;
        equeations: Equation[];
        bodyA: Body;
        bodyB: Body;
        collideConnected: boolean;

        update(): void;
        setStiffness(stiffness: number): void;
        setRelaxation(relaxation: number): void;

    }

    export class DistanceConstraint extends Constraint {

        constructor(bodyA: Body, bodyB: Body, type: number, options?: {
            collideConnected?: boolean;
            wakeUpBodies?: boolean;
            distance?: number;
            localAnchorA?: number[];
            localAnchorB?: number[];
            maxForce?: number;
        });

        localAnchorA: number[];
        localAnchorB: number[];
        distance: number;
        maxForce: number;
        upperLimitEnabled: boolean;
        upperLimit: number;
        lowerLimitEnabled: boolean;
        lowerLimit: number;
        position: number;

        setMaxForce(f: number): void;
        getMaxForce(): number;

    }

    export class GearConstraint extends Constraint {

        constructor(bodyA: Body, bodyB: Body, type: number, options?: {
            collideConnected?: boolean;
            wakeUpBodies?: boolean;
            angle?: number;
            ratio?: number;
            maxTorque?: number;
        });

        ratio: number;
        angle: number;

        setMaxTorque(torque: number): void;
        getMaxTorque(): number;

    }

    export class LockConstraint extends Constraint {

        constructor(bodyA: Body, bodyB: Body, type: number, options?: {
            collideConnected?: boolean;
            wakeUpBodies?: boolean;
            localOffsetB?: number[];
            localAngleB?: number;
            maxForce?: number;
        });

        setMaxForce(force: number): void;
        getMaxForce(): number;

    }

    export class PrismaticConstraint extends Constraint {

        constructor(bodyA: Body, bodyB: Body, type: number, options?: {
            collideConnected?: boolean;
            wakeUpBodies?: boolean;
            maxForce?: number;
            localAnchorA?: number[];
            localAnchorB?: number[];
            localAxisA?: number[];
            disableRotationalLock?: boolean;
            upperLimit?: number;
            lowerLimit?: number;
        });

        localAnchorA: number[];
        localAnchorB: number[];
        localAxisA: number[];
        position: number;
        velocity: number;
        lowerLimitEnabled: boolean;
        upperLimitEnabled: boolean;
        lowerLimit: number;
        upperLimit: number;
        upperLimitEquation: ContactEquation;
        lowerLimitEquation: ContactEquation;
        motorEquation: Equation;
        motorEnabled: boolean;
        motorSpeed: number;

        enableMotor(): void;
        disableMotor(): void;
        setLimits(lower: number, upper: number): void;

    }

    export class RevoluteConstraint extends Constraint {

        constructor(bodyA: Body, bodyB: Body, type: number, options?: {
            collideConnected?: boolean;
            wakeUpBodies?: boolean;
            worldPivot?: number[];
            localPivotA?: number[];
            localPivotB?: number[];
            maxForce?: number;
        });

        pivotA: number[];
        pivotB: number[];
        motorEquation: RotationalVelocityEquation;
        motorEnabled: boolean;
        angle: number;
        lowerLimitEnabled: boolean;
        upperLimitEnabled: boolean;
        lowerLimit: number;
        upperLimit: number;
        upperLimitEquation: ContactEquation;
        lowerLimitEquation: ContactEquation;

        enableMotor(): void;
        disableMotor(): void;
        motorIsEnabled(): boolean;
        setLimits(lower: number, upper: number): void;
        setMotorSpeed(speed: number): void;
        getMotorSpeed(): number;

    }

    export class AngleLockEquation extends Equation {

        constructor(bodyA: Body, bodyB: Body, options?: {
            angle?: number;
            ratio?: number;
        });

        computeGq(): number;
        setRatio(ratio: number): number;
        setMaxTorque(torque: number): number;

    }

    export class ContactEquation extends Equation {

        constructor(bodyA: Body, bodyB: Body);

        contactPointA: number[];
        penetrationVec: number[];
        contactPointB: number[];
        normalA: number[];
        restitution: number;
        firstImpact: boolean;
        shapeA: Shape;
        shapeB: Shape;

        computeB(a: number, b: number, h: number): number;

    }

    export class Equation {

        static DEFAULT_STIFFNESS: number;
        static DEFAULT_RELAXATION: number;

        constructor(bodyA: Body, bodyB: Body, minForce?: number, maxForce?: number);

        minForce: number;
        maxForce: number;
        bodyA: Body;
        bodyB: Body;
        stiffness: number;
        relaxation: number;
        G: number[];
        offset: number;
        a: number;
        b: number;
        epsilon: number;
        timeStep: number;
        needsUpdate: boolean;
        multiplier: number;
        relativeVelocity: number;
        enabled: boolean;

        gmult(G: number[], vi: number[], wi: number[], vj: number[], wj: number[]): number;
        computeB(a: number, b: number, h: number): number;
        computeGq(): number;
        computeGW(): number;
        computeGWlambda(): number;
        computeGiMf(): number;
        computeGiMGt(): number;
        addToWlambda(deltalambda: number): number;
        computeInvC(eps: number): number;

    }

    export class FrictionEquation extends Equation {

        constructor(bodyA: Body, bodyB: Body, slipForce: number);

        contactPointA: number[];
        contactPointB: number[];
        t: number[];
        shapeA: Shape;
        shapeB: Shape;
        frictionCoefficient: number;

        setSlipForce(slipForce: number): number;
        getSlipForce(): number;
        computeB(a: number, b: number, h: number): number;

    }

    export class RotationalLockEquation extends Equation {

        constructor(bodyA: Body, bodyB: Body, options?: {
            angle?: number;
        });

        angle: number;

        computeGq(): number;

    }

    export class RotationalVelocityEquation extends Equation {

        constructor(bodyA: Body, bodyB: Body);

        computeB(a: number, b: number, h: number): number;

    }

    export class EventEmitter {

        on(type: string, listener: Function, context: any): EventEmitter;
        has(type: string, listener: Function): boolean;
        off(type: string, listener: Function): EventEmitter;
        emit(event: any): EventEmitter;

    }

    export class ContactMaterialOptions {

        friction: number;
        restitution: number;
        stiffness: number;
        relaxation: number;
        frictionStiffness: number;
        frictionRelaxation: number;
        surfaceVelocity: number;

    }

    export class ContactMaterial {

        static idCounter: number;

        constructor(materialA: Material, materialB: Material, options?: ContactMaterialOptions);

        id: number;
        materialA: Material;
        materialB: Material;
        friction: number;
        restitution: number;
        stiffness: number;
        relaxation: number;
        frictionStuffness: number;
        frictionRelaxation: number;
        surfaceVelocity: number;
        contactSkinSize: number;

    }

    export class Material {

        static idCounter: number;

        constructor(id: number);

        id: number;

    }

    export class vec2 {

        static crossLength(a: number[], b: number[]): number;
        static crossVZ(out: number[], vec: number[], zcomp: number): number;
        static crossZV(out: number[], zcomp: number, vec: number[]): number;
        static rotate(out: number[], a: number[], angle: number): void;
        static rotate90cw(out: number[], a: number[]): number;
        static centroid(out: number[], a: number[], b: number[], c: number[]): number[];
        static create(): number[];
        static clone(a: number[]): number[];
        static fromValues(x: number, y: number): number[];
        static copy(out: number[], a: number[]): number[];
        static set(out: number[], x: number, y: number): number[];
        static toLocalFrame(out: number[], worldPoint: number[], framePosition: number[], frameAngle: number): void;
        static toGlobalFrame(out: number[], localPoint: number[], framePosition: number[], frameAngle: number): void;
        static add(out: number[], a: number[], b: number[]): number[];
        static subtract(out: number[], a: number[], b: number[]): number[];
        static sub(out: number[], a: number[], b: number[]): number[];
        static multiply(out: number[], a: number[], b: number[]): number[];
        static mul(out: number[], a: number[], b: number[]): number[];
        static divide(out: number[], a: number[], b: number[]): number[];
        static div(out: number[], a: number[], b: number[]): number[];
        static scale(out: number[], a: number[], b: number): number[];
        static distance(a: number[], b: number[]): number;
        static dist(a: number[], b: number[]): number;
        static squaredDistance(a: number[], b: number[]): number;
        static sqrDist(a: number[], b: number[]): number;
        static length(a: number[]): number;
        static len(a: number[]): number;
        static squaredLength(a: number[]): number;
        static sqrLen(a: number[]): number;
        static negate(out: number[], a: number[]): number[];
        static normalize(out: number[], a: number[]): number[];
        static dot(a: number[], b: number[]): number;
        static str(a: number[]): string;

    }

    export class BodyOptions {

        mass: number;
        position: number[];
        velocity: number[];
        angle: number;
        angularVelocity: number;
        force: number[];
        angularForce: number;
        fixedRotation: number;

    }

    export class Body extends EventEmitter {

        sleepyEvent: {
            type: string;
        };

        sleepEvent: {
            type: string;
        };

        wakeUpEvent: {
            type: string;
        };

        static DYNAMIC: number;
        static STATIC: number;
        static KINEMATIC: number;
        static AWAKE: number;
        static SLEEPY: number;
        static SLEEPING: number;

        constructor(options?: BodyOptions);

        id: number;
        world: World;
        shapes: Shape[];
        shapeOffsets: number[][];
        shapeAngles: number[];
        mass: number;
        invMass: number;
        inertia: number;
        invInertia: number;
        invMassSolve: number;
        invInertiaSolve: number;
        fixedRotation: number;
        position: number[];
        interpolatedPosition: number[];
        interpolatedAngle: number;
        previousPosition: number[];
        previousAngle: number;
        velocity: number[];
        vlambda: number[];
        wlambda: number[];
        angle: number;
        angularVelocity: number;
        force: number[];
        angularForce: number;
        damping: number;
        angularDamping: number;
        type: number;
        boundingRadius: number;
        aabb: AABB;
        aabbNeedsUpdate: boolean;
        allowSleep: boolean;
        wantsToSleep: boolean;
        sleepState: number;
        sleepSpeedLimit: number;
        sleepTimeLimit: number;
        gravityScale: number;

        updateSolveMassProperties(): void;
        setDensity(density: number): void;
        getArea(): number;
        getAABB(): AABB;
        updateAABB(): void;
        updateBoundingRadius(): void;
        addShape(shape: Shape, offset?: number[], angle?: number): void;
        removeShape(shape: Shape): boolean;
        updateMassProperties(): void;
        applyForce(force: number[], worldPoint: number[]): void;
        toLocalFrame(out: number[], worldPoint: number[]): void;
        toWorldFrame(out: number[], localPoint: number[]): void;
        fromPolygon(path: number[][], options?: {
            optimalDecomp?: boolean;
            skipSimpleCheck?: boolean;
            removeCollinearPoints?: any; //boolean | number
        }): boolean;
        adjustCenterOfMass(): void;
        setZeroForce(): void;
        resetConstraintVelocity(): void;
        applyDamping(dy: number): void;
        wakeUp(): void;
        sleep(): void;
        sleepTick(time: number, dontSleep: boolean, dt: number): void;
        getVelocityFromPosition(story: number[], dt: number): number[];
        getAngularVelocityFromPosition(timeStep: number): number;
        overlaps(body: Body): boolean;

    }

    export class Spring {

        constructor(bodyA: Body, bodyB: Body, options?: {

            stiffness?: number;
            damping?: number;
            localAnchorA?: number[];
            localAnchorB?: number[];
            worldAnchorA?: number[];
            worldAnchorB?: number[];

        });

        stiffness: number;
        damping: number;
        bodyA: Body;
        bodyB: Body;

        applyForce(): void;

    }

    export class LinearSpring extends Spring {

        localAnchorA: number[];
        localAnchorB: number[];
        restLength: number;

        setWorldAnchorA(worldAnchorA: number[]): void;
        setWorldAnchorB(worldAnchorB: number[]): void;
        getWorldAnchorA(result: number[]): number[];
        getWorldAnchorB(result: number[]): number[];
        applyForce(): void;

    }

    export class RotationalSpring extends Spring {

        constructor(bodyA: Body, bodyB: Body, options?: {
            restAngle?: number;
            stiffness?: number;
            damping?: number;
        });

        restAngle: number;

    }

    export class Capsule extends Shape {

        constructor(length?: number, radius?: number);

        length: number;
        radius: number;

    }

    export class Circle extends Shape {

        constructor(radius: number);

        radius: number;

    }

    export class Convex extends Shape {

        static triangleArea(a: number[], b: number[], c: number[]): number;

        constructor(vertices: number[][], axes: number[]);

        vertices: number[][];
        axes: number[];
        centerOfMass: number[];
        triangles: number[];
        boundingRadius: number;

        projectOntoLocalAxis(localAxis: number[], result: number[]): void;
        projectOntoWorldAxis(localAxis: number[], shapeOffset: number[], shapeAngle: number, result: number[]): void;

        updateCenterOfMass(): void;

    }

    export class Heightfield extends Shape {

        constructor(data: number[], options?: {
            minValue?: number;
            maxValue?: number;
            elementWidth: number;
        });

        data: number[];
        maxValue: number;
        minValue: number;
        elementWidth: number;

    }

    export class Shape {

        static idCounter: number;
        static CIRCLE: number;
        static PARTICLE: number;
        static PLANE: number;
        static CONVEX: number;
        static LINE: number;
        static RECTANGLE: number;
        static CAPSULE: number;
        static HEIGHTFIELD: number;

        constructor(type: number);

        type: number;
        id: number;
        boundingRadius: number;
        collisionGroup: number;
        collisionMask: number;
        material: Material;
        area: number;
        sensor: boolean;

        computeMomentOfInertia(mass: number): number;
        updateBoundingRadius(): number;
        updateArea(): void;
        computeAABB(out: AABB, position: number[], angle: number): void;

    }

    export class Line extends Shape {

        constructor(length?: number);

        length: number;

    }

    export class Particle extends Shape {

    }

    export class Plane extends Shape {

    }

    export class Rectangle extends Shape {

        static sameDimensions(a: Rectangle, b: Rectangle): boolean;

        constructor(width?: number, height?: number);

        width: number;
        height: number;

    }

    export class Solver extends EventEmitter {

        static GS: number;
        static ISLAND: number;

        constructor(options?: {}, type?: number);

        type: number;
        equations: Equation[];
        equationSortFunction: Equation; //Equation | boolean

        solve(dy: number, world: World): void;
        solveIsland(dy: number, island: Island): void;
        sortEquations(): void;
        addEquation(eq: Equation): void;
        addEquations(eqs: Equation[]): void;
        removeEquation(eq: Equation): void;
        removeAllEquations(): void;

    }

    export class GSSolver extends Solver {

        constructor(options?: {
            iterations?: number;
            tolerance?: number;
        });

        iterations: number;
        tolerance: number;
        useZeroRHS: boolean;
        frictionIterations: number;
        usedIterations: number;

        solve(h: number, world: World): void;

    }

    export class OverlapKeeper {

        constructor(bodyA: Body, shapeA: Shape, bodyB: Body, shapeB: Shape);

        shapeA: Shape;
        shapeB: Shape;
        bodyA: Body;
        bodyB: Body;

        tick(): void;
        setOverlapping(bodyA: Body, shapeA: Shape, bodyB: Body, shapeB: Body): void;
        bodiesAreOverlapping(bodyA: Body, bodyB: Body): boolean;
        set(bodyA: Body, shapeA: Shape, bodyB: Body, shapeB: Shape): void;

    }

    export class TupleDictionary {

        data: number[];
        keys: number[];

        getKey(id1: number, id2: number): string;
        getByKey(key: number): number;
        get(i: number, j: number): number;
        set(i: number, j: number, value: number): number;
        reset(): void;
        copy(dict: TupleDictionary): void;

    }

    export class Utils {

        static appendArray<T>(a: Array<T>, b: Array<T>): Array<T>;
        static chanceRoll(chance: number): boolean;
        static defaults(options: any, defaults: any): any;
        static extend(a: any, b: any): void;
        static randomChoice(choice1: any, choice2: any): any;
        static rotateArray(matrix: any[], direction: any): any[];
        static splice<T>(array: Array<T>, index: number, howMany: number): void;
        static shuffle<T>(array: T[]): T[];
        static transposeArray<T>(array: T[]): T[];

    }

    export class Island {

        equations: Equation[];
        bodies: Body[];

        reset(): void;
        getBodies(result: any): Body[];
        wantsToSleep(): boolean;
        sleep(): boolean;

    }

    export class IslandManager extends Solver {

        static getUnvisitedNode(nodes: Node[]): IslandNode; // IslandNode | boolean

        equations: Equation[];
        islands: Island[];
        nodes: IslandNode[];

        visit(node: IslandNode, bds: Body[], eqs: Equation[]): void;
        bfs(root: IslandNode, bds: Body[], eqs: Equation[]): void;
        split(world: World): Island[];

    }

    export class IslandNode {

        constructor(body: Body);

        body: Body;
        neighbors: IslandNode[];
        equations: Equation[];
        visited: boolean;

        reset(): void;

    }

    export class World extends EventEmitter {

        postStepEvent: {
            type: string;
        };

        addBodyEvent: {
            type: string;
        };

        removeBodyEvent: {
            type: string;
        };

        addSpringEvent: {
            type: string;
        };

        impactEvent: {
            type: string;
            bodyA: Body;
            bodyB: Body;
            shapeA: Shape;
            shapeB: Shape;
            contactEquation: ContactEquation;
        };

        postBroadphaseEvent: {
            type: string;
            pairs: Body[];
        };

        beginContactEvent: {
            type: string;
            shapeA: Shape;
            shapeB: Shape;
            bodyA: Body;
            bodyB: Body;
            contactEquations: ContactEquation[];
        };

        endContactEvent: {
            type: string;
            shapeA: Shape;
            shapeB: Shape;
            bodyA: Body;
            bodyB: Body;
        };

        preSolveEvent: {
            type: string;
            contactEquations: ContactEquation[];
            frictionEquations: FrictionEquation[];
        };

        static NO_SLEEPING: number;
        static BODY_SLEEPING: number;
        static ISLAND_SLEEPING: number;

        static integrateBody(body: Body, dy: number): void;

        constructor(options?: {
            solver?: Solver;
            gravity?: number[];
            broadphase?: Broadphase;
            islandSplit?: boolean;
            doProfiling?: boolean;
        });

        springs: Spring[];
        bodies: Body[];
        solver: Solver;
        narrowphase: Narrowphase;
        islandManager: IslandManager;
        gravity: number[];
        frictionGravity: number;
        useWorldGravityAsFrictionGravity: boolean;
        useFrictionGravityOnZeroGravity: boolean;
        doProfiling: boolean;
        lastStepTime: number;
        broadphase: Broadphase;
        constraints: Constraint[];
        defaultMaterial: Material;
        defaultContactMaterial: ContactMaterial;
        lastTimeStep: number;
        applySpringForces: boolean;
        applyDamping: boolean;
        applyGravity: boolean;
        solveConstraints: boolean;
        contactMaterials: ContactMaterial[];
        time: number;
        stepping: boolean;
        islandSplit: boolean;
        emitImpactEvent: boolean;
        sleepMode: number;

        addConstraint(c: Constraint): void;
        addContactMaterial(contactMaterial: ContactMaterial): void;
        removeContactMaterial(cm: ContactMaterial): void;
        getContactMaterial(materialA: Material, materialB: Material): ContactMaterial; // ContactMaterial | boolean
        removeConstraint(c: Constraint): void;
        step(dy: number, timeSinceLastCalled?: number, maxSubSteps?: number): void;
        runNarrowphase(np: Narrowphase, bi: Body, si: Shape, xi: any[], ai: number, bj: Body, sj: Shape, xj: any[], aj: number, cm: number, glen: number): void;
        addSpring(s: Spring): void;
        removeSpring(s: Spring): void;
        addBody(body: Body): void;
        removeBody(body: Body): void;
        getBodyByID(id: number): Body; //Body | boolean
        disableBodyCollision(bodyA: Body, bodyB: Body): void;
        enableBodyCollision(bodyA: Body, bodyB: Body): void;
        clear(): void;
        clone(): World;
        hitTest(worldPoint: number[], bodies: Body[], precision: number): Body[];
        setGlobalEquationParameters(parameters: {
            relaxation?: number;
            stiffness?: number;
        }): void;
        setGlobalStiffness(stiffness: number): void;
        setGlobalRelaxation(relaxation: number): void;
    }

}

export module PIXI {
    // Type definitions for PIXI with Phaser Deviations. 

    // Corbin Hart (https://github.com/chartly/)
    // 29/07/15 - 1638 PST: updated defintion to comply with es6 module export syntax

    export var WEBGL_RENDERER: number;
    export var CANVAS_RENDERER: number;
    export var VERSION: string;

    export enum blendModes {

        NORMAL,
        ADD,
        MULTIPLY,
        SCREEN,
        OVERLAY,
        DARKEN,
        LIGHTEN,
        COLOR_DODGE,
        COLOR_BURN,
        HARD_LIGHT,
        SOFT_LIGHT,
        DIFFERENCE,
        EXCLUSION,
        HUE,
        SATURATION,
        COLOR,
        LUMINOSITY

    }

    export enum scaleModes {

        DEFAULT,
        LINEAR,
        NEAREST

    }

    export var defaultRenderOptions: PixiRendererOptions;

    export var INTERACTION_REQUENCY: number;
    export var AUTO_PREVENT_DEFAULT: boolean;

    export var PI_2: number;
    export var RAD_TO_DEG: number;
    export var DEG_TO_RAD: number;

    export var RETINA_PREFIX: string;
    export var identityMatrix: Matrix;
    export var glContexts: WebGLRenderingContext[];
    export var instances: any[];

    export var BaseTextureCache: { [key: string]: BaseTexture };
    export var TextureCache: { [key: string]: Texture };
    export var TextureSilentFail: boolean;
    export var BitmapText: { fonts: {} };

    export function isPowerOfTwo(width: number, height: number): boolean;

    export function rgb2hex(rgb: number[]): string;
    export function hex2rgb(hex: string): number[];

    export function autoDetectRenderer(width?: number, height?: number, options?: PixiRendererOptions): PixiRenderer;
    export function autoDetectRecommendedRenderer(width?: number, height?: number, options?: PixiRendererOptions): PixiRenderer;

    export function canUseNewCanvasBlendModes(): boolean;
    export function getNextPowerOfTwo(number: number): number;

    export function AjaxRequest(): XMLHttpRequest;

    export function CompileFragmentShader(gl: WebGLRenderingContext, shaderSrc: string[]): any;
    export function CompileProgram(gl: WebGLRenderingContext, vertexSrc: string[], fragmentSrc: string[]): any;


    export interface IEventCallback {
        (e?: IEvent): void
    }

    export interface IEvent {
        type: string;
        content: any;
    }

    export interface HitArea {
        contains(x: number, y: number): boolean;
    }

    export interface IInteractionDataCallback {
        (interactionData: InteractionData): void
    }

    export interface PixiRenderer {

        autoResize: boolean;
        clearBeforeRender: boolean;
        height: number;
        resolution: number;
        transparent: boolean;
        type: number;
        view: HTMLCanvasElement;
        width: number;

        destroy(): void;
        render(stage: Stage): void;
        resize(width: number, height: number): void;

    }

    export interface PixiRendererOptions {

        autoResize?: boolean;
        antialias?: boolean;
        clearBeforeRender?: boolean;
        preserveDrawingBuffer?: boolean;
        resolution?: number;
        transparent?: boolean;
        view?: HTMLCanvasElement;

    }

    export interface BitmapTextStyle {

        font?: string;
        align?: string;
        tint?: string;

    }

    export interface TextStyle {

        align?: string;
        dropShadow?: boolean;
        dropShadowColor?: string;
        dropShadowAngle?: number;
        dropShadowDistance?: number;
        fill?: string;
        font?: string;
        lineJoin?: string;
        stroke?: string;
        strokeThickness?: number;
        wordWrap?: boolean;
        wordWrapWidth?: number;

    }

    export interface Loader {

        load(): void;

    }

    export interface MaskData {

        alpha: number;
        worldTransform: number[];

    }

    export interface RenderSession {

        context: CanvasRenderingContext2D;
        maskManager: CanvasMaskManager;
        scaleMode: scaleModes;
        smoothProperty: string;
        roundPixels: boolean;

    }

    export interface ShaderAttribute {
        // TODO: Find signature of shader attributes
    }

    export interface FilterBlock {

        visible: boolean;
        renderable: boolean;

    }

    export class AbstractFilter {

        constructor(fragmentSrc: string | string[], uniforms: any);

        dirty: boolean;
        padding: number;
        uniforms: any;
        fragmentSrc: string | string[];

        apply(frameBuffer: WebGLFramebuffer): void;
        syncUniforms(): void;

    }

    export class AlphaMaskFilter extends AbstractFilter {

        constructor(texture: Texture);

        map: Texture;

        onTextureLoaded(): void;

    }

    export class AsciiFilter extends AbstractFilter {

        size: number;

    }

    export class AssetLoader implements Mixin {

        assetURLs: string[];
        crossorigin: boolean;
        loadersByType: { [key: string]: Loader };

        constructor(assetURLs: string[], crossorigin: boolean);

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;


    }

    export class AtlasLoader implements Mixin {

        url: string;
        baseUrl: string;
        crossorigin: boolean;
        loaded: boolean;

        constructor(url: string, crossorigin: boolean);

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;

    }

    export class BaseTexture implements Mixin {

        static fromImage(imageUrl: string, crossorigin?: boolean, scaleMode?: scaleModes): BaseTexture;
        static fromCanvas(canvas: HTMLCanvasElement, scaleMode?: scaleModes): BaseTexture;

        constructor(source: HTMLImageElement, scaleMode: scaleModes);
        constructor(source: HTMLCanvasElement, scaleMode: scaleModes);

        height: number;
        hasLoaded: boolean;
        mipmap: boolean;
        premultipliedAlpha: boolean;
        resolution: number;
        scaleMode: scaleModes;
        source: HTMLImageElement;
        width: number;

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;
        forceLoaded(width: number, height: number): void;
        destroy(): void;
        dirty(): void;
        updateSourceImage(newSrc: string): void;
        unloadFromGPU(): void;

    }

    export class BitmapFontLoader implements Mixin {

        constructor(url: string, crossorigin: boolean);

        baseUrl: string;
        crossorigin: boolean;
        texture: Texture;
        url: string;

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;

    }

    export class BlurFilter extends AbstractFilter {

        blur: number;
        blurX: number;
        blurY: number;

    }

    export class BlurXFilter extends AbstractFilter {

        blur: number;

    }

    export class BlurYFilter extends AbstractFilter {

        blur: number;

    }

    export class CanvasBuffer {

        constructor(width: number, height: number);

        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        height: number;
        width: number;

        clear(): void;
        resize(width: number, height: number): void;

    }

    export class CanvasMaskManager {

        pushMask(maskData: MaskData, renderSession: RenderSession): void;
        popMask(renderSession: RenderSession): void;

    }

    export class CanvasRenderer implements PixiRenderer {

        constructor(width?: number, height?: number, options?: PixiRendererOptions);

        autoResize: boolean;
        clearBeforeRender: boolean;
        context: CanvasRenderingContext2D;
        count: number;
        height: number;
        maskManager: CanvasMaskManager;
        refresh: boolean;
        renderSession: RenderSession;
        resolution: number;
        transparent: boolean;
        type: number;
        view: HTMLCanvasElement;
        width: number;

        destroy(removeView?: boolean): void;
        render(stage: Stage): void;
        resize(width: number, height: number): void;

    }

    export class CanvasTinter {

        static getTintedTexture(sprite: Sprite, color: number): HTMLCanvasElement;
        static tintWithMultiply(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
        static tintWithOverlay(texture: Texture, color: number, canvas: HTMLCanvasElement): void;
        static tintWithPerPixel(texture: Texture, color: number, canvas: HTMLCanvasElement): void;

        static canUseMultiply: boolean;
        static tintMethod: any;

    }

    export class Circle implements HitArea {

        constructor(x: number, y: number, radius: number);

        x: number;
        y: number;
        radius: number;

        clone(): Circle;
        contains(x: number, y: number): boolean;
        getBounds(): Rectangle;

    }

    export class ColorMatrixFilter extends AbstractFilter {

        matrix: Matrix;

    }

    export class ColorStepFilter extends AbstractFilter {

        step: number;

    }

    export class ConvolutionFilter extends AbstractFilter {

        constructor(matrix: number[], width: number, height: number);

        matrix: Matrix;
        width: number;
        height: number;

    }

    export class CrossHatchFilter extends AbstractFilter {

        blur: number;

    }

    export class DisplacementFilter extends AbstractFilter {

        constructor(texture: Texture);

        map: Texture;
        offset: Point;
        scale: Point;

    }

    export class DotScreenFilter extends AbstractFilter {

        angle: number;
        scale: Point;

    }

    export class DisplayObject {

        alpha: number;
        buttonMode: boolean;
        cacheAsBitmap: boolean;
        defaultCursor: string;
        filterArea: Rectangle;
        filters: AbstractFilter[];
        hitArea: HitArea;
        interactive: boolean;
        mask: Graphics;
        parent: DisplayObjectContainer;
        pivot: Point;
        position: Point;
        renderable: boolean;
        rotation: number;
        scale: Point;
        stage: Stage;
        visible: boolean;
        worldAlpha: number;
        worldPosition: Point;
        worldScale: Point;
        worldRotation: number;
        worldVisible: boolean;
        x: number;
        y: number;

        click(e: InteractionData): void;
        displayObjectUpdateTransform(): void;
        getBounds(matrix?: Matrix): Rectangle;
        getLocalBounds(): Rectangle;
        generateTexture(resolution?: number, scaleMode?: number, renderer?: PixiRenderer): Texture;
        mousedown(e: InteractionData): void;
        mouseout(e: InteractionData): void;
        mouseover(e: InteractionData): void;
        mouseup(e: InteractionData): void;
        mousemove(e: InteractionData): void;
        mouseupoutside(e: InteractionData): void;
        rightclick(e: InteractionData): void;
        rightdown(e: InteractionData): void;
        rightup(e: InteractionData): void;
        rightupoutside(e: InteractionData): void;
        setStageReference(stage: Stage): void;
        tap(e: InteractionData): void;
        toGlobal(position: Point): Point;
        toLocal(position: Point, from: DisplayObject): Point;
        touchend(e: InteractionData): void;
        touchendoutside(e: InteractionData): void;
        touchstart(e: InteractionData): void;
        touchmove(e: InteractionData): void;
        updateTransform(parent?: DisplayObjectContainer): void;

    }

    export class DisplayObjectContainer extends DisplayObject {

        constructor();

        children: DisplayObject[];
        height: number;
        width: number;

        addChild(child: DisplayObject): DisplayObject;
        addChildAt(child: DisplayObject, index: number): DisplayObject;
        getBounds(): Rectangle;
        getChildAt(index: number): DisplayObject;
        getChildIndex(child: DisplayObject): number;
        getLocalBounds(): Rectangle;
        removeChild(child: DisplayObject): DisplayObject;
        removeChildAt(index: number): DisplayObject;
        removeChildren(beginIndex?: number, endIndex?: number): DisplayObject[];
        removeStageReference(): void;
        setChildIndex(child: DisplayObject, index: number): void;
        swapChildren(child: DisplayObject, child2: DisplayObject): void;

    }

    export class Ellipse implements HitArea {

        constructor(x: number, y: number, width: number, height: number);

        x: number;
        y: number;
        width: number;
        height: number;

        clone(): Ellipse;
        contains(x: number, y: number): boolean;
        getBounds(): Rectangle;

    }

    export class Event {

        constructor(target: any, name: string, data: any);

        target: any;
        type: string;
        data: any;
        timeStamp: number;

        stopPropagation(): void;
        preventDefault(): void;
        stopImmediatePropagation(): void;

    }

    export class EventTarget {

        static mixin(obj: any): void;

    }

    export class FilterTexture {

        constructor(gl: WebGLRenderingContext, width: number, height: number, scaleMode: scaleModes);

        fragmentSrc: string[];
        frameBuffer: WebGLFramebuffer;
        gl: WebGLRenderingContext;
        program: WebGLProgram;
        scaleMode: number;
        texture: WebGLTexture;

        clear(): void;
        resize(width: number, height: number): void;
        destroy(): void;

    }

    export class GraphicsData {

        constructor(lineWidth?: number, lineColor?: number, lineAlpha?: number, fillColor?: number, fillAlpha?: number, fill?: boolean, shape?: any);

        lineWidth: number;
        lineColor: number;
        lineAlpha: number;
        fillColor: number;
        fillAlpha: number;
        fill: boolean;
        shape: any;
        type: number;

    }

    export class Graphics extends DisplayObjectContainer {

        static POLY: number;
        static RECT: number;
        static CIRC: number;
        static ELIP: number;
        static RREC: number;

        blendMode: number;
        boundsPadding: number;
        fillAlpha: number;
        isMask: boolean;
        lineWidth: number;
        lineColor: number;
        tint: number;
        worldAlpha: number;

        arc(cx: number, cy: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): Graphics;
        arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): Graphics;
        beginFill(color?: number, alpha?: number): Graphics;
        bezierCurveTo(cpX: number, cpY: number, cpX2: number, cpY2: number, toX: number, toY: number): Graphics;
        clear(): Graphics;
        destroyCachedSprite(): void;
        drawCircle(x: number, y: number, diameter: number): Graphics;
        drawEllipse(x: number, y: number, width: number, height: number): Graphics;
        drawPolygon(...path: any[]): Graphics;
        drawRect(x: number, y: number, width: number, height: number): Graphics;
        drawRoundedRect(x: number, y: number, width: number, height: number, radius: number): Graphics;
        drawShape(shape: Circle): GraphicsData;
        drawShape(shape: Rectangle): GraphicsData;
        drawShape(shape: Ellipse): GraphicsData;
        drawShape(shape: Polygon): GraphicsData;
        endFill(): Graphics;
        generateTexture(resolution?: number, scaleMode?: number): Texture;
        lineStyle(lineWidth?: number, color?: number, alpha?: number): Graphics;
        lineTo(x: number, y: number): Graphics;
        moveTo(x: number, y: number): Graphics;
        quadraticCurveTo(cpX: number, cpY: number, toX: number, toY: number): Graphics;

    }

    export class GrayFilter extends AbstractFilter {

        gray: number;

    }

    export class ImageLoader implements Mixin {

        constructor(url: string, crossorigin?: boolean);

        texture: Texture;

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;
        loadFramedSpriteSheet(frameWidth: number, frameHeight: number, textureName: string): void;

    }

    export class InteractionData {

        global: Point;
        target: Sprite;
        originalEvent: Event;

        getLocalPosition(displayObject: DisplayObject, point?: Point, globalPos?: Point): Point;

    }

    export class InteractionManager {

        currentCursorStyle: string;
        last: number;
        mouse: InteractionData;
        mouseOut: boolean;
        mouseoverEnabled: boolean;
        onMouseMove: Function;
        onMouseDown: Function;
        onMouseOut: Function;
        onMouseUp: Function;
        onTouchStart: Function;
        onTouchEnd: Function;
        onTouchMove: Function;
        pool: InteractionData[];
        resolution: number;
        stage: Stage;
        touches: { [id: string]: InteractionData };

        constructor(stage: Stage);
    }

    export class InvertFilter extends AbstractFilter {

        invert: number;

    }

    export class JsonLoader implements Mixin {

        constructor(url: string, crossorigin?: boolean);

        baseUrl: string;
        crossorigin: boolean;
        loaded: boolean;
        url: string;

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;

    }

    export class Matrix {

        a: number;
        b: number;
        c: number;
        d: number;
        tx: number;
        ty: number;

        append(matrix: Matrix): Matrix;
        apply(pos: Point, newPos: Point): Point;
        applyInverse(pos: Point, newPos: Point): Point;
        determineMatrixArrayType(): number[];
        identity(): Matrix;
        rotate(angle: number): Matrix;
        fromArray(array: number[]): void;
        translate(x: number, y: number): Matrix;
        toArray(transpose: boolean): number[];
        scale(x: number, y: number): Matrix;

    }

    export interface Mixin {

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

    }

    export class MovieClip extends Sprite {

        static fromFrames(frames: string[]): MovieClip;
        static fromImages(images: HTMLImageElement[]): HTMLImageElement;

        constructor(textures: Texture[]);

        animationSpeed: number;
        currentFrame: number;
        loop: boolean;
        playing: boolean;
        textures: Texture[];
        totalFrames: number;

        gotoAndPlay(frameNumber: number): void;
        gotoAndStop(frameNumber: number): void;
        onComplete(): void;
        play(): void;
        stop(): void;

    }

    export class NoiseFilter extends AbstractFilter {

        noise: number;

    }

    export class NormalMapFilter extends AbstractFilter {

        map: Texture;
        offset: Point;
        scale: Point;

    }

    export class PixelateFilter extends AbstractFilter {

        size: number;

    }

    export interface IPixiShader {

        fragmentSrc: string[];
        gl: WebGLRenderingContext;
        program: WebGLProgram;
        vertexSrc: string[];

        destroy(): void;
        init(): void;

    }

    export class PixiShader implements IPixiShader {

        constructor(gl: WebGLRenderingContext);

        attributes: ShaderAttribute[];
        defaultVertexSrc: string[];
        dirty: boolean;
        firstRun: boolean;
        textureCount: number;
        fragmentSrc: string[];
        gl: WebGLRenderingContext;
        program: WebGLProgram;
        vertexSrc: string[];

        initSampler2D(): void;
        initUniforms(): void;
        syncUniforms(): void;

        destroy(): void;
        init(): void;

    }

    export class PixiFastShader implements IPixiShader {

        constructor(gl: WebGLRenderingContext);

        textureCount: number;
        fragmentSrc: string[];
        gl: WebGLRenderingContext;
        program: WebGLProgram;
        vertexSrc: string[];

        destroy(): void;
        init(): void;

    }

    export class PrimitiveShader implements IPixiShader {

        constructor(gl: WebGLRenderingContext);
        fragmentSrc: string[];
        gl: WebGLRenderingContext;
        program: WebGLProgram;
        vertexSrc: string[];

        destroy(): void;
        init(): void;

    }

    export class ComplexPrimitiveShader implements IPixiShader {

        constructor(gl: WebGLRenderingContext);
        fragmentSrc: string[];
        gl: WebGLRenderingContext;
        program: WebGLProgram;
        vertexSrc: string[];

        destroy(): void;
        init(): void;

    }

    export class StripShader implements IPixiShader {

        constructor(gl: WebGLRenderingContext);
        fragmentSrc: string[];
        gl: WebGLRenderingContext;
        program: WebGLProgram;
        vertexSrc: string[];

        destroy(): void;
        init(): void;

    }

    export class Point {

        constructor(x?: number, y?: number);

        x: number;
        y: number;

        clone(): Point;
        set(x: number, y: number): void;

    }

    export class Polygon implements HitArea {

        constructor(points: Point[]);
        constructor(points: number[]);
        constructor(...points: Point[]);
        constructor(...points: number[]);

        points: any[]; //number[] Point[]

        clone(): Polygon;
        contains(x: number, y: number): boolean;

    }

    export class Rectangle implements HitArea {

        constructor(x?: number, y?: number, width?: number, height?: number);

        x: number;
        y: number;
        width: number;
        height: number;

        clone(): Rectangle;
        contains(x: number, y: number): boolean;

    }

    export class RGBSplitFilter extends AbstractFilter {

        red: Point;
        green: Point;
        blue: Point;

    }

    export class Rope extends Strip {

        points: Point[];
        vertices: number[];

        constructor(texture: Texture, points: Point[]);

        refresh(): void;
        setTexture(texture: Texture): void;

    }

    export class RoundedRectangle implements HitArea {

        constructor(x?: number, y?: number, width?: number, height?: number, radius?: number);

        x: number;
        y: number;
        width: number;
        height: number;
        radius: number;

        clone(): RoundedRectangle;
        contains(x: number, y: number): boolean;

    }

    export class SepiaFilter extends AbstractFilter {

        sepia: number;

    }

    export class SmartBlurFilter extends AbstractFilter {

        blur: number;

    }

    export class SpineLoader implements Mixin {

        url: string;
        crossorigin: boolean;
        loaded: boolean;

        constructor(url: string, crossOrigin: boolean);

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;

    }

    export class SpineTextureLoader {

        constructor(basePath: string, crossorigin: boolean);

        load(page: AtlasPage, file: string): void;
        unload(texture: BaseTexture): void;

    }

    export class Sprite extends DisplayObjectContainer {

        static fromFrame(frameId: string): Sprite;
        static fromImage(url: string, crossorigin?: boolean, scaleMode?: scaleModes): Sprite;

        constructor(texture: Texture);

        anchor: Point;
        blendMode: blendModes;
        shader: IPixiShader;
        texture: Texture;
        tint: number;

        setTexture(texture: Texture): void;

    }

    export class SpriteBatch extends DisplayObjectContainer {

        constructor(texture?: Texture);

        ready: boolean;
        textureThing: Texture;

        initWebGL(gl: WebGLRenderingContext): void;

    }

    export class SpriteSheetLoader implements Mixin {

        constructor(url: string, crossorigin?: boolean);

        baseUrl: string;
        crossorigin: boolean;
        frames: any;
        texture: Texture;
        url: string;

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        load(): void;

    }

    export class Stage extends DisplayObjectContainer {

        constructor(backgroundColor: number);

        interactionManager: InteractionManager;

        getMousePosition(): Point;
        setBackgroundColor(backgroundColor: number): void;
        setInteractionDelegate(domElement: HTMLElement): void;

    }

    export class Strip extends DisplayObjectContainer {

        static DrawModes: {

            TRIANGLE_STRIP: number;
            TRIANGLES: number;

        }

        constructor(texture: Texture);

        blendMode: number;
        colors: number[];
        dirty: boolean;
        indices: number[];
        canvasPadding: number;
        texture: Texture;
        uvs: number[];
        vertices: number[];

        getBounds(matrix?: Matrix): Rectangle;

    }

    export class Texture implements Mixin {

        static emptyTexture: Texture;

        static fromCanvas(canvas: HTMLCanvasElement, scaleMode?: scaleModes): Texture;
        static fromFrame(frameId: string): Texture;
        static fromImage(imageUrl: string, crossorigin?: boolean, scaleMode?: scaleModes): Texture;
        static addTextureToCache(texture: Texture, id: string): void;
        static removeTextureFromCache(id: string): Texture;

        constructor(baseTexture: BaseTexture, frame?: Rectangle, crop?: Rectangle, trim?: Rectangle);

        baseTexture: BaseTexture;
        crop: Rectangle;
        frame: Rectangle;
        height: number;
        noFrame: boolean;
        requiresUpdate: boolean;
        trim: Point;
        width: number;
        scope: any;
        valid: boolean;

        listeners(eventName: string): Function[];
        emit(eventName: string, data?: any): boolean;
        dispatchEvent(eventName: string, data?: any): boolean;
        on(eventName: string, fn: Function): Function;
        addEventListener(eventName: string, fn: Function): Function;
        once(eventName: string, fn: Function): Function;
        off(eventName: string, fn: Function): Function;
        removeAllEventListeners(eventName: string): void;

        destroy(destroyBase: boolean): void;
        setFrame(frame: Rectangle): void;

    }

    export class TilingSprite extends Sprite {

        constructor(texture: Texture, width: number, height: number);

        canvasBuffer: CanvasBuffer;
        blendMode: number;
        refreshTexture: boolean;
        texture: Texture;
        textureDebug: boolean;
        tint: number;
        tilePosition: Point;
        tilePattern: Texture;
        tileScale: Point;
        tileScaleOffset: Point;

        destroy(): void;
        generateTilingTexture(forcePowerOfTwo?: boolean): void;
        setTexture(texture: Texture): void;

    }

    export class TiltShiftFilter extends AbstractFilter {

        blur: number;
        gradientBlur: number;
        start: number;
        end: number;

    }

    export class TiltShiftXFilter extends AbstractFilter {

        blur: number;
        gradientBlur: number;
        start: number;
        end: number;

        updateDelta(): void;

    }

    export class TiltShiftYFilter extends AbstractFilter {

        blur: number;
        gradientBlur: number;
        start: number;
        end: number;

        updateDelta(): void;

    }

    export class TwistFilter extends AbstractFilter {

        angle: number;
        offset: Point;
        radius: number;

    }

    export class VideoTexture extends BaseTexture {

        static baseTextureFromVideo(video: HTMLVideoElement, scaleMode: number): BaseTexture;
        static textureFromVideo(video: HTMLVideoElement, scaleMode: number): Texture;
        static fromUrl(videoSrc: string, scaleMode?: number, autoPlay?: boolean, type?: string, loop?: boolean): Texture;

        controls: boolean;
        autoUpdate: boolean;
        type: string;

        changeSource(src: string, type: string, loop: boolean): void;
        play(): void;
        stop(): void;

        destroy(): void;
        updateBound(): void;
        onPlayStart: () => void;
        onPlayStop: () => void;
        onCanPlay: (event: any) => void;

    }

    export class WebGLBlendModeManager {

        currentBlendMode: number;

        destroy(): void;
        setBlendMode(blendMode: number): boolean;
        setContext(gl: WebGLRenderingContext): void;

    }

    export class WebGLFastSpriteBatch {

        constructor(gl: CanvasRenderingContext2D);

        currentBatchSize: number;
        currentBaseTexture: BaseTexture;
        currentBlendMode: number;
        renderSession: RenderSession;
        drawing: boolean;
        indexBuffer: any;
        indices: number[];
        lastIndexCount: number;
        matrix: Matrix;
        maxSize: number;
        shader: IPixiShader;
        size: number;
        vertexBuffer: any;
        vertices: number[];
        vertSize: number;

        end(): void;
        begin(spriteBatch: SpriteBatch, renderSession: RenderSession): void;
        destroy(removeView?: boolean): void;
        flush(): void;
        render(spriteBatch: SpriteBatch): void;
        renderSprite(sprite: Sprite): void;
        setContext(gl: WebGLRenderingContext): void;
        start(): void;
        stop(): void;

    }

    export class WebGLFilterManager {

        filterStack: AbstractFilter[];
        transparent: boolean;
        offsetX: number;
        offsetY: number;

        applyFilterPass(filter: AbstractFilter, filterArea: Texture, width: number, height: number): void;
        begin(renderSession: RenderSession, buffer: ArrayBuffer): void;
        destroy(): void;
        initShaderBuffers(): void;
        popFilter(): void;
        pushFilter(filterBlock: FilterBlock): void;
        setContext(gl: WebGLRenderingContext): void;

    }

    export class WebGLGraphics {

        static graphicsDataPool: any[];

        static renderGraphics(graphics: Graphics, renderRession: RenderSession): void;
        static updateGraphics(graphics: Graphics, gl: WebGLRenderingContext): void;
        static switchMode(webGL: WebGLRenderingContext, type: number): any; //WebGLData
        static buildRectangle(graphicsData: GraphicsData, webGLData: any): void;
        static buildRoundedRectangle(graphicsData: GraphicsData, webGLData: any): void;
        static quadraticBezierCurve(fromX: number, fromY: number, cpX: number, cpY: number, toX: number, toY: number): number[];
        static buildCircle(graphicsData: GraphicsData, webGLData: any): void;
        static buildLine(graphicsData: GraphicsData, webGLData: any): void;
        static buildComplexPoly(graphicsData: GraphicsData, webGLData: any): void;
        static buildPoly(graphicsData: GraphicsData, webGLData: any): boolean;

        reset(): void;
        upload(): void;

    }

    export class WebGLGraphicsData {

        constructor(gl: WebGLRenderingContext);

        gl: WebGLRenderingContext;
        glPoints: any[];
        color: number[];
        points: any[];
        indices: any[];
        buffer: WebGLBuffer;
        indexBuffer: WebGLBuffer;
        mode: number;
        alpha: number;
        dirty: boolean;

        reset(): void;
        upload(): void;

    }

    export class WebGLMaskManager {

        destroy(): void;
        popMask(renderSession: RenderSession): void;
        pushMask(maskData: any[], renderSession: RenderSession): void;
        setContext(gl: WebGLRenderingContext): void;

    }

    export class WebGLRenderer implements PixiRenderer {

        static createWebGLTexture(texture: Texture, gl: WebGLRenderingContext): void;

        constructor(width?: number, height?: number, options?: PixiRendererOptions);

        autoResize: boolean;
        clearBeforeRender: boolean;
        contextLost: boolean;
        contextLostBound: Function;
        contextRestoreLost: boolean;
        contextRestoredBound: Function;
        height: number;
        gl: WebGLRenderingContext;
        offset: Point;
        preserveDrawingBuffer: boolean;
        projection: Point;
        resolution: number;
        renderSession: RenderSession;
        shaderManager: WebGLShaderManager;
        spriteBatch: WebGLSpriteBatch;
        maskManager: WebGLMaskManager;
        filterManager: WebGLFilterManager;
        stencilManager: WebGLStencilManager;
        blendModeManager: WebGLBlendModeManager;
        transparent: boolean;
        type: number;
        view: HTMLCanvasElement;
        width: number;

        destroy(): void;
        initContext(): void;
        mapBlendModes(): void;
        render(stage: Stage): void;
        renderDisplayObject(displayObject: DisplayObject, projection: Point, buffer: WebGLBuffer): void;
        resize(width: number, height: number): void;
        updateTexture(texture: Texture): void;

    }

    export class WebGLShaderManager {

        maxAttibs: number;
        attribState: any[];
        stack: any[];
        tempAttribState: any[];

        destroy(): void;
        setAttribs(attribs: ShaderAttribute[]): void;
        setContext(gl: WebGLRenderingContext): void;
        setShader(shader: IPixiShader): boolean;

    }

    export class WebGLStencilManager {

        stencilStack: any[];
        reverse: boolean;
        count: number;

        bindGraphics(graphics: Graphics, webGLData: any[], renderSession: RenderSession): void;
        destroy(): void;
        popStencil(graphics: Graphics, webGLData: any[], renderSession: RenderSession): void;
        pushStencil(graphics: Graphics, webGLData: any[], renderSession: RenderSession): void;
        setContext(gl: WebGLRenderingContext): void;

    }

    export class WebGLSpriteBatch {

        blendModes: number[];
        colors: number[];
        currentBatchSize: number;
        currentBaseTexture: Texture;
        defaultShader: AbstractFilter;
        dirty: boolean;
        drawing: boolean;
        indices: number[];
        lastIndexCount: number;
        positions: number[];
        textures: Texture[];
        shaders: IPixiShader[];
        size: number;
        sprites: any[]; //todo Sprite[]?
        vertices: number[];
        vertSize: number;

        begin(renderSession: RenderSession): void;
        destroy(): void;
        end(): void;
        flush(shader?: IPixiShader): void;
        render(sprite: Sprite): void;
        renderBatch(texture: Texture, size: number, startIndex: number): void;
        renderTilingSprite(sprite: TilingSprite): void;
        setBlendMode(blendMode: blendModes): void;
        setContext(gl: WebGLRenderingContext): void;
        start(): void;
        stop(): void;

    }

    export class RenderTexture extends Texture {

        constructor(width?: number, height?: number, renderer?: PixiRenderer, scaleMode?: scaleModes, resolution?: number);

        frame: Rectangle;
        baseTexture: BaseTexture;
        renderer: PixiRenderer;
        resolution: number;
        valid: boolean;

        clear(): void;
        getBase64(): string;
        getCanvas(): HTMLCanvasElement;
        getImage(): HTMLImageElement;
        resize(width: number, height: number, updateBase: boolean): void;
        render(displayObject: DisplayObject, matrix?: Matrix, clear?: boolean): void;

    }

    //SPINE

    export class BoneData {

        constructor(name: string, parent?: any);

        name: string;
        parent: any;
        length: number;
        x: number;
        y: number;
        rotation: number;
        scaleX: number;
        scaleY: number;

    }

    export class SlotData {

        constructor(name: string, boneData: BoneData);

        name: string;
        boneData: BoneData;
        r: number;
        g: number;
        b: number;
        a: number;
        attachmentName: string;

    }

    export class Bone {

        constructor(boneData: BoneData, parent?: any);

        data: BoneData;
        parent: any;
        yDown: boolean;
        x: number;
        y: number;
        rotation: number;
        scaleX: number;
        scaleY: number;
        worldRotation: number;
        worldScaleX: number;
        worldScaleY: number;

        updateWorldTransform(flipX: boolean, flip: boolean): void;
        setToSetupPose(): void;

    }

    export class Slot {

        constructor(slotData: SlotData, skeleton: Skeleton, bone: Bone);

        data: SlotData;
        skeleton: Skeleton;
        bone: Bone;
        r: number;
        g: number;
        b: number;
        a: number;
        attachment: RegionAttachment;
        setAttachment(attachment: RegionAttachment): void;
        setAttachmentTime(time: number): void;
        getAttachmentTime(): number;
        setToSetupPose(): void;

    }

    export class Skin {

        constructor(name: string);

        name: string;
        attachments: any;

        addAttachment(slotIndex: number, name: string, attachment: RegionAttachment): void;
        getAttachment(slotIndex: number, name: string): void;

    }

    export class Animation {

        constructor(name: string, timelines: ISpineTimeline[], duration: number);

        name: string;
        timelines: ISpineTimeline[];
        duration: number;
        apply(skeleton: Skeleton, time: number, loop: boolean): void;
        min(skeleton: Skeleton, time: number, loop: boolean, alpha: number): void;

    }

    export class Curves {

        constructor(frameCount: number);

        curves: number[];

        setLinear(frameIndex: number): void;
        setStepped(frameIndex: number): void;
        setCurve(frameIndex: number, cx1: number, cy1: number, cx2: number, cy2: number): void;
        getCurvePercent(frameIndex: number, percent: number): number;

    }

    export interface ISpineTimeline {

        curves: Curves;
        frames: number[];

        getFrameCount(): number;
        apply(skeleton: Skeleton, time: number, alpha: number): void;

    }

    export class RotateTimeline implements ISpineTimeline {

        constructor(frameCount: number);

        curves: Curves;
        frames: number[];
        boneIndex: number;

        getFrameCount(): number;
        setFrame(frameIndex: number, time: number, angle: number): void;
        apply(skeleton: Skeleton, time: number, alpha: number): void;

    }

    export class TranslateTimeline implements ISpineTimeline {

        constructor(frameCount: number);

        curves: Curves;
        frames: number[];
        boneIndex: number;

        getFrameCount(): number;
        setFrame(frameIndex: number, time: number, x: number, y: number): void;
        apply(skeleton: Skeleton, time: number, alpha: number): void;

    }

    export class ScaleTimeline implements ISpineTimeline {

        constructor(frameCount: number);

        curves: Curves;
        frames: number[];
        boneIndex: number;

        getFrameCount(): number;
        setFrame(frameIndex: number, time: number, x: number, y: number): void;
        apply(skeleton: Skeleton, time: number, alpha: number): void;

    }

    export class ColorTimeline implements ISpineTimeline {

        constructor(frameCount: number);

        curves: Curves;
        frames: number[];
        boneIndex: number;

        getFrameCount(): number;
        setFrame(frameIndex: number, time: number, r: number, g: number, b: number, a: number): void;
        apply(skeleton: Skeleton, time: number, alpha: number): void;

    }

    export class AttachmentTimeline implements ISpineTimeline {

        constructor(frameCount: number);

        curves: Curves;
        frames: number[];
        attachmentNames: string[];
        slotIndex: number;

        getFrameCount(): number;
        setFrame(frameIndex: number, time: number, attachmentName: string): void;
        apply(skeleton: Skeleton, time: number, alpha: number): void;

    }

    export class SkeletonData {

        bones: Bone[];
        slots: Slot[];
        skins: Skin[];
        animations: Animation[];
        defaultSkin: Skin;

        findBone(boneName: string): Bone;
        findBoneIndex(boneName: string): number;
        findSlot(slotName: string): Slot;
        findSlotIndex(slotName: string): number;
        findSkin(skinName: string): Skin;
        findAnimation(animationName: string): Animation;

    }

    export class Skeleton {

        constructor(skeletonData: SkeletonData);

        data: SkeletonData;
        bones: Bone[];
        slots: Slot[];
        drawOrder: any[];
        x: number;
        y: number;
        skin: Skin;
        r: number;
        g: number;
        b: number;
        a: number;
        time: number;
        flipX: boolean;
        flipY: boolean;

        updateWorldTransform(): void;
        setToSetupPose(): void;
        setBonesToSetupPose(): void;
        setSlotsToSetupPose(): void;
        getRootBone(): Bone;
        findBone(boneName: string): Bone;
        fineBoneIndex(boneName: string): number;
        findSlot(slotName: string): Slot;
        findSlotIndex(slotName: string): number;
        setSkinByName(skinName: string): void;
        setSkin(newSkin: Skin): void;
        getAttachmentBySlotName(slotName: string, attachmentName: string): RegionAttachment;
        getAttachmentBySlotIndex(slotIndex: number, attachmentName: string): RegionAttachment;
        setAttachment(slotName: string, attachmentName: string): void;
        update(data: number): void;

    }

    export class RegionAttachment {

        offset: number[];
        uvs: number[];
        x: number;
        y: number;
        rotation: number;
        scaleX: number;
        scaleY: number;
        width: number;
        height: number;
        rendererObject: any;
        regionOffsetX: number;
        regionOffsetY: number;
        regionWidth: number;
        regionHeight: number;
        regionOriginalWidth: number;
        regionOriginalHeight: number;

        setUVs(u: number, v: number, u2: number, v2: number, rotate: number): void;
        updateOffset(): void;
        computeVertices(x: number, y: number, bone: Bone, vertices: number[]): void;

    }

    export class AnimationStateData {

        constructor(skeletonData: SkeletonData);

        skeletonData: SkeletonData;
        animationToMixTime: any;
        defaultMix: number;

        setMixByName(fromName: string, toName: string, duration: number): void;
        setMix(from: string, to: string): number;

    }

    export class AnimationState {

        constructor(stateData: any);

        animationSpeed: number;
        current: any;
        previous: any;
        currentTime: number;
        previousTime: number;
        currentLoop: boolean;
        previousLoop: boolean;
        mixTime: number;
        mixDuration: number;
        queue: Animation[];

        update(delta: number): void;
        apply(skeleton: any): void;
        clearAnimation(): void;
        setAnimation(animation: any, loop: boolean): void;
        setAnimationByName(animationName: string, loop: boolean): void;
        addAnimationByName(animationName: string, loop: boolean, delay: number): void;
        addAnimation(animation: any, loop: boolean, delay: number): void;
        isComplete(): number;

    }

    export class SkeletonJson {

        constructor(attachmentLoader: AtlasAttachmentLoader);

        attachmentLoader: AtlasAttachmentLoader;
        scale: number;

        readSkeletonData(root: any): SkeletonData;
        readAttachment(skin: Skin, name: string, map: any): RegionAttachment;
        readAnimation(name: string, map: any, skeletonData: SkeletonData): void;
        readCurve(timeline: ISpineTimeline, frameIndex: number, valueMap: any): void;
        toColor(hexString: string, colorIndex: number): number;

    }

    export class Atlas {

        static FORMAT: {

            alpha: number;
            intensity: number;
            luminanceAlpha: number;
            rgb565: number;
            rgba4444: number;
            rgb888: number;
            rgba8888: number;

        }

        static TextureFilter: {

            nearest: number;
            linear: number;
            mipMap: number;
            mipMapNearestNearest: number;
            mipMapLinearNearest: number;
            mipMapNearestLinear: number;
            mipMapLinearLinear: number;

        }

        static textureWrap: {

            mirroredRepeat: number;
            clampToEdge: number;
            repeat: number;

        }

        constructor(atlasText: string, textureLoader: AtlasLoader);

        textureLoader: AtlasLoader;
        pages: AtlasPage[];
        regions: AtlasRegion[];

        findRegion(name: string): AtlasRegion;
        dispose(): void;
        updateUVs(page: AtlasPage): void;

    }

    export class AtlasPage {

        name: string;
        format: number;
        minFilter: number;
        magFilter: number;
        uWrap: number;
        vWrap: number;
        rendererObject: any;
        width: number;
        height: number;

    }

    export class AtlasRegion {

        page: AtlasPage;
        name: string;
        x: number;
        y: number;
        width: number;
        height: number;
        u: number;
        v: number;
        u2: number;
        v2: number;
        offsetX: number;
        offsetY: number;
        originalWidth: number;
        originalHeight: number;
        index: number;
        rotate: boolean;
        splits: any[];
        pads: any[];

    }

    export class AtlasReader {

        constructor(text: string);

        lines: string[];
        index: number;

        trim(value: string): string;
        readLine(): string;
        readValue(): string;
        readTuple(tuple: number): number;

    }

    export class AtlasAttachmentLoader {

        constructor(atlas: Atlas);

        atlas: Atlas;

        newAttachment(skin: Skin, type: number, name: string): RegionAttachment;

    }

    export class Spine extends DisplayObjectContainer {

        constructor(url: string);

        autoUpdate: boolean;
        spineData: any;
        skeleton: Skeleton;
        stateData: AnimationStateData;
        state: AnimationState;
        slotContainers: DisplayObjectContainer[];

        createSprite(slot: Slot, descriptor: { name: string }): Sprite[];
        update(dt: number): void;

    }

    export function requestAnimFrame(callback: Function): void;

    export namespace PolyK {
        export function Triangulate(p: number[]): number[];
    }

}

export module Phaser {
    
    // global variables
    export var VERSION: string;
    export var DEV_VERSION: string;
    export var GAMES: Game[];

    export var AUTO: number;
    export var CANVAS: number;
    export var WEBGL: number;
    export var HEADLESS: number;

    export var BITMAPDATA: number;
    export var BITMAPTEXT: number;
    export var BUTTON: number;
    export var CANVAS_FILTER: number;
    export var CIRCLE: number;
    export var ELLIPSE: number;
    export var EMITTER: number;
    export var GRAPHICS: number;
    export var GROUP: number;
    export var IMAGE: number;
    export var LINE: number;
    export var MATRIX: number;
    export var POINT: number;
    export var POINTER: number;
    export var POLYGON: number;
    export var RECTANGLE: number;
    export var ROUNDEDRECTANGLE: number;
    export var RENDERTEXTURE: number;
    export var RETROFONT: number;
    export var SPRITE: number;
    export var SPRITEBATCH: number;
    export var TEXT: number;
    export var TILEMAP: number;
    export var TILEMAPLAYER: number;
    export var TILESPRITE: number;
    export var WEBGL_FILTER: number;
    export var ROPE: number;
    export var CREATURE: number;
    export var VIDEO: number;

    export var NONE: number;
    export var LEFT: number;
    export var RIGHT: number;
    export var UP: number;
    export var DOWN: number;

    export class Animation {
        constructor(game: Game, parent: Sprite, name: string, frameData: FrameData, frames: number[]|string[], frameRate?: number, loop?: boolean);

        currentFrame: Frame;
        delay: number;
        enableUpdate: boolean;
        frame: number;
        frameTotal: number;
        game: Game;
        isFinished: boolean;
        isPaused: boolean;
        isPlaying: boolean;
        killOnComplete: boolean;
        loop: boolean;
        loopCount: number;
        name: string;
        onComplete: Signal;
        onLoop: Signal;
        onStart: Signal;
        onUpdate: Signal;
        paused: boolean;
        speed: number;

        complete(): void;
        destroy(): void;

        next(quantity?: number): void;
        onPause(): void;
        onResume(): void;
        play(frameRate?: number, loop?: boolean, killOnComplete?: boolean): Animation;
        previous(quantity?: number): void;
        restart(): void;
        setFrame(frameId?: string|number, useLocalFrameIndex?: boolean): void;
        stop(resetFrame?: boolean, dispatchComplete?: boolean): void;
        update(): boolean;
        updateCurrentFrame(signalUpdate: boolean, fromPlay?: boolean): boolean;
        updateFrameData(frameData: FrameData): void;

        static generateFrameNames(prefix: string, start: number, stop: number, suffix?: string, zeroPad?: number): string[];
    }

    export class AnimationManager {
        constructor(sprite: Sprite);

        currentAnim: Animation;
        currentFrame: Frame;
        frame: number;
        frameData: FrameData;
        frameName: string;
        frameTotal: number;
        game: Game;
        isLoaded: boolean;
        name: string;
        paused: boolean;
        sprite: Sprite;
        updateIfVisible: boolean;

        add(name: string, frames?: number[]|string[], frameRate?: number, loop?: boolean, useNumericIndex?: boolean): Animation;
        copyFrameData(frameData: FrameData, frame: string|number): boolean;
        destroy(): void;
        getAnimation(name: string): Animation;
        next(quantity?: number): void;
        play(name: string, frameRate?: number, loop?: boolean, killOnComplete?: boolean): Animation;
        previous(quantity?: number): void;
        refreshFrame(): void;
        stop(name?: string, resetFrame?: boolean): void;
        update(): boolean;
        validateFrames(frames: Frame[], useNumericIndex?: boolean): boolean;
    }

    export class AnimationParser {
        static JSONData(game: Game, json: any): FrameData;
        static JSONDataHash(game: Game, json: any): FrameData;
        static spriteSheet(game: Game, key: string, frameWidth: number, frameHeight: number, frameMax?: number, margin?: number, spacing?: number): FrameData;
        static XMLData(game: Game, xml: any): FrameData;
    }

    export class AudioSprite {
        constructor(game: Game, key: string);

        game: Game;
        key: string;
        config: any;
        autoplayKey: string;
        autoplay: boolean;
        sounds: any;

        get(marker: string): Sound;
        play(marker: string, volume?: number): Sound;
        stop(marker: string): Sound;
    }

    export class ArraySet {
        constructor(list: any[]);

        position: number;
        list: any[];
        total: number;
        first: any;
        next: any;

        add(item: any): any;
        getByKey(property: string, value: any): any;
        getIndex(item: any): number;
        exists(item: any): boolean;
        reset(): void;
        remove(item: any): any;
        removeAll(destoy?: boolean): void;
        setAll(key: any, value: any): void;
        callAll(key: string, ...parameter: any[]): void;
    }

    export module ArrayUtils {
        export function getRandomItem<T>(objects: T[], startIndex?: number, length?: number): T;
        export function removeRandomItem<T>(objects: T[], startIndex?: number, length?: number): T;
        export function shuffle<T>(array: T[]): T[];
        export function transposeMatrix<T>(array: T[]): T;
        export function rotateMatrix(matrix: any, direction: number): any;
        export function findClosest(value: number, arr: number[]): number;
        export function rotate(array: any[]): any;
        export function numberArray(start: number, end: number): number[];
        export function numberArrayStep(start: number, end: number, step?: number): number[];
    }

    export class BitmapData {
        constructor(game: Game, key: string, width?: number, height?: number);

        baseTexture: PIXI.BaseTexture;
        buffer: ArrayBuffer;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        ctx: CanvasRenderingContext2D;
        data: Uint8Array;
        dirty: boolean;
        disableTextureUpload: boolean;
        game: Game;
        height: number;
        imageData: ImageData;
        key: string;
        pixels: Uint32Array;
        smoothed: boolean;
        texture: PIXI.Texture;
        textureFrame: Frame;
        type: number;
        width: number;

        static getTransform(translateX: number, translateY: number, scaleX: number, scaleY: number, skewX: number, skewY: number): any;

        add(object: any): BitmapData;
        addToWorld(x?: number, y?: number, anchorX?: number, anchorY?: number, scaleX?: number, scaleY?: number): Image;
        alphaMask(source: any, mask?: any, sourceRect?: Rectangle, maskRect?: Rectangle): BitmapData;
        blendAdd(): BitmapData;
        blendColor(): BitmapData;
        blendColorBurn(): BitmapData;
        blendColorDodge(): BitmapData;
        blendDarken(): BitmapData;
        blendDestinationAtop(): BitmapData;
        blendDestinationIn(): BitmapData;
        blendDestinationOut(): BitmapData;
        blendDestinationOver(): BitmapData;
        blendDifference(): BitmapData;
        blendExclusion(): BitmapData;
        blendHardLight(): BitmapData;
        blendHue(): BitmapData;
        blendLighten(): BitmapData;
        blendLuminosity(): BitmapData;
        blendMultiply(): BitmapData;
        blendOverlay(): BitmapData;
        blendReset(): BitmapData;
        blendSaturation(): BitmapData;
        blendScreen(): BitmapData;
        blendSoftLight(): BitmapData;
        blendSourceAtop(): BitmapData;
        blendSourceIn(): BitmapData;
        blendSourceOut(): BitmapData;
        blendSourceOver(): BitmapData;
        blendXor(): BitmapData;
        circle(x: number, y: number, radius: number, fillStyle?: string): BitmapData;
        clear(x?: number, y?: number, width?: number, height?: number): BitmapData;
        cls(): BitmapData;
        copy(source?: any, x?: number, y?: number, width?: number, height?: number, tx?: number, ty?: number, newWidth?: number, newHeight?: number, rotate?: number, anchorX?: number, anchorY?: number, scaleX?: number, scaleY?: number, alpha?: number, blendMode?: number, roundPx?: boolean): BitmapData;
        copyPixels(source: any, area: Rectangle, x: number, y: number, alpha?: number): void;
        copyRect(source: any, area: Rectangle, x?: number, y?: number, alpha?: number, blendMode?: number, roundPx?: boolean): BitmapData;
        draw(source: any, x?: number, y?: number, width?: number, height?: number, blendMode?: number, roundPx?: boolean): BitmapData;
        drawGroup(group: Group, blendMode?: number, roundPx?: boolean): BitmapData;
        extract(destination: BitmapData, r: number, g: number, b: number, a?: number, resize?: boolean, r2?: number, g2?: number, b2?: number): BitmapData;
        fill(r: number, g: number, b: number, a?: number): BitmapData;
        generateTexture(key: string): PIXI.Texture;
        getBounds(rect?: Rectangle): Rectangle;
        getFirstPixel(direction: number): { r: number; g: number; b: number; x: number; y: number; };
        getPixel(x: number, y: number, out?: any): number;
        getPixelRGB(x: number, y: number, out?: any, hsl?: boolean, hsv?: boolean): any;
        getPixel32(x: number, y: number): number;
        getPixels(rect: Rectangle): ImageData;
        getTransform(translateX: number, translateY: number, scaleX: number, scaleY: number, skewX: number, skewY: number): any;
        load(source: any): BitmapData;
        move(x: number, y: number): BitmapData;
        moveH(distance: number): BitmapData;
        moveV(distance: number): BitmapData;
        processPixel(callback: Function, callbackContext: any, x?: number, y?: Number, width?: number, height?: number): BitmapData;
        processPixelRGB(callback: Function, callbackContext: any, x?: number, y?: Number, width?: number, height?: number): BitmapData;
        rect(x: number, y: number, width: number, height: number, fillStyle?: string): BitmapData;
        render(): BitmapData;
        replaceRGB(r1: number, g1: number, b1: number, a1: number, r2: number, g2: number, b2: number, a2: number, region: Rectangle): BitmapData;
        resize(width: number, height: number): BitmapData;
        resizeFrame(parent: any, width: number, height: number): void;
        setHSL(h?: number, s?: number, l?: number, region?: Rectangle): BitmapData;
        setPixel(x: number, y: number, red: number, green: number, blue: number, immediate?: boolean): BitmapData;
        setPixel32(x: number, y: number, red: number, green: number, blue: number, alpha: number, immediate?: boolean): BitmapData;
        shadow(color: string, blur?: number, x?: number, y?: number): BitmapData;
        shiftHSL(h?: number, s?: number, l?: number, region?: Rectangle): BitmapData;
        text(text: string, x?: number, y?: number, font?: string, color?: string, shadow?: boolean): BitmapData;
        textureLine(line: Line, key: string, repeat?: string): BitmapData;
        update(x?: number, y?: number, width?: number, height?: number): BitmapData;
    }

    export class BitmapText extends PIXI.DisplayObjectContainer {
        constructor(game: Game, x: number, y: number, font: string, text?: string, size?: number, align?: string);

        align: string;
        alive: boolean;
        anchor: Point;
        animations: AnimationManager;
        angle: number;
        autoCull: boolean;
        body: Physics.Arcade.Body | Physics.P2.Body | Physics.Ninja.Body | any;
        bottom: number;
        cameraOffset: Point;
        checkWorldBounds: boolean;
        destroyPhase: boolean;
        debug: boolean;
        dirty: boolean;
        events: Events;
        exists: boolean;
        fixedToCamera: boolean;
        font: string;
        fontSize: number;
        fresh: boolean;
        game: Game;
        input: InputHandler;
        inputEnabled: boolean;
        inCamera: boolean;
        inWorld: boolean;
        key: string | RenderTexture | BitmapData | Video | PIXI.Texture;
        left: number;
        name: string;
        components: any;
        lifespan: number;
        maxWidth: number;
        offsetX: number;
        offsetY: number;
        outOfBoundsKill: boolean;
        pendingDestroy: boolean;
        physicsType: number;
        previousPosition: Point;
        previousRotation: number;
        position: Point;
        renderOrderID: number;
        right: number;
        text: string;
        textWidth: number;
        textHeight: number;
        tint: number;
        top: number;
        type: number;
        world: Point;
        x: number;
        y: number;
        z: number;

        destroy(destroyChildren?: boolean): void;
        kill(): void;
        postUpdate(): void;
        preUpdate(): void;
        purgeGlyphs(): number;
        reset(x: number, y: number, health?: number): BitmapText;
        revive(health?: number): BitmapText;
        scanLine(data: any, scale: number, text: string): { width: number; text: string; end: boolean; chars: string[] };
        setText(text: string): void;
        update(): void;
        updateText(): void;
        updateTransform(): void;
    }

    export class Button extends Image {
        constructor(game: Game, x?: number, y?: number, key?: string, callback?: Function, callbackContext?: any, overFrame?: string|number, outFrame?: string|number, downFrame?: string|number, upFrame?: string|number);

        forceOut: boolean;
        freezeFrames: boolean;
        onDownSound: Sound|AudioSprite;
        onDownSoundMarker: string;
        onInputDown: Signal;
        onInputOut: Signal;
        onInputOver: Signal;
        onInputUp: Signal;
        onOutSound: Sound|AudioSprite;
        onOutSoundMarker: string;
        onOverSound: Sound|AudioSprite;
        onOverSoundMarker: string;
        onOverMouseOnly: boolean;
        onUpSound: Sound|AudioSprite;
        onUpSoundMaker: string;
        physicsType: number;
        type: number;

        clearFrames(): void;
        setDownSound(sound: Sound|AudioSprite, marker?: string): void;
        setFrames(overFrame?: string|number, outFrame?: string|number, downFrame?: string|number, upFrame?: string|number): void;
        onInputDownHandler(sprite: Button, pointer: Pointer): void;
        onInputUpHandler(sprite: Button, pointer: Pointer, isOver: boolean): void;
        removedFromWorld(): void;
        setOutSound(sound: Sound|AudioSprite, marker?: string): void;
        setOverSound(sound: Sound|AudioSprite, marker?: string): void;
        setSounds(overSound?: Sound|AudioSprite, overMarker?: string, downSound?: Sound|AudioSprite, downMarker?: string, outSound?: Sound|AudioSprite, outMarker?: string, upSound?: Sound|AudioSprite, upMarker?: string): void;
        setState(newState: number): void;
        setUpSound(sound: Sound|AudioSprite, marker?: string): void;
    }

    export class Cache {
        constructor(game: Game);

        static BINARY: number;
        static BITMAPDATA: number;
        static BITMAPFONT: number;
        static CANVAS: number;
        static IMAGE: number;
        static JSON: number;
        static PHYSICS: number;
        static RENDER_TEXTURE: number;
        static SHADER: number;
        static SOUND: number;
        static SPRITE_SHEET: number;
        static TEXT: number;
        static TEXTURE: number;
        static TEXTURE_ATLAS: number;
        static TILEMAP: number;
        static XML: number;
        static VIDEO: number;

        autoResolveURL: boolean;
        game: Game;
        onSoundUnlock: Signal;

        addBinary(key: string, binaryData: any): void;
        addBitmapData(key: string, bitmapData: BitmapData, frameData?: FrameData): BitmapData;
        addBitmapFont(key: string, texture: RetroFont): void;
        addBitmapFont(key: string, url: string, data: any, atlasData: any, atlasType: string, xSpacing?: number, ySpacing?: number): void;
        addCanvas(key: string, canvas: HTMLCanvasElement, context?: CanvasRenderingContext2D): void;
        addDefaultImage(): void;
        addImage(key: string, url: string, data: any): void;
        addJSON(key: string, urL: string, data: any): void;
        addMissingImage(): void;
        addPhysicsData(key: string, url: string, JSONData: any, format: number): void;
        addRenderTexture(key: string, texture: RenderTexture): void;
        addShader(key: string, url: string, data: any): void;
        addSound(key: string, url: string, data: any, webAudio: boolean, audioTag: boolean): void;
        addSpriteSheet(key: string, url: string, data: any, frameWidth: number, frameHeight: number, frameMax?: number, margin?: number, spacing?: number): void;
        addText(key: string, url: string, data: any): void;
        addTextureAtlas(key: string, url: string, data: any, atlasData: any, format: number): void;
        addTilemap(key: string, url: string, mapData: any, format: number): void;
        addVideo(key: string, url: string, data: any, isBlob?: boolean): void;
        addXML(key: string, url: string, data: any): void;
        checkBinaryKey(key: string): boolean;
        checkBitmapDataKey(key: string): boolean;
        checkBitmapFontKey(key: string): boolean;
        checkCanvasKey(key: string): boolean;
        checkImageKey(key: string): boolean;
        checkJSONKey(key: string): boolean;
        checkKey(cache: number, key: string): boolean;
        checkPhysicsKey(key: string): boolean;
        checkRenderTextureKey(key: string): boolean;
        checkShaderKey(key: string): boolean;
        checkSoundKey(key: string): boolean;
        checkTextKey(key: string): boolean;
        checkTextureKey(key: string): boolean;
        checkTilemapKey(key: string): boolean;
        checkURL(url: string): any;
        checkUrl(url: string): any;
        checkXMLKey(key: string): boolean;
        checkVideoKey(key: string): boolean;
        clearGLTextures(): void;
        decodedSound(key: string, data: any): void;
        destroy(): void;
        getBaseTexture(key: string, cache?: number): PIXI.BaseTexture;
        getBinary(key: string): any;
        getBitmapData(key: string): BitmapData;
        getBitmapFont(key: string): RetroFont;
        getCanvas(key: string): HTMLCanvasElement;
        getFrame(key: string): Frame;
        getFrameByIndex(key: string, index: number): Frame;
        getFrameByName(key: string, name: string): Frame;
        getFrameCount(key: string): number;
        getFrameData(key: string): FrameData;
        getImage(key: string, full?: boolean): Image;
        getItem(key: string, cache: number, method?: string, property?: string): any;
        getJSON(key: string, clone?: boolean): any;
        getKeys(cache: number): string[];
        getPixiTexture(key: string): PIXI.Texture;
        getPixiBaseTexture(key: string): PIXI.BaseTexture;
        getPhysicsData(key: string, object?: string, fixtureKey?: string): any[];
        getRenderTexture(key: string): RenderTexture;
        getShader(key: string): string;
        getSound(key: string): Sound;
        getSoundData(key: string): any;
        getSpriteSheetKey(key: string): boolean;
        getText(key: string): string;
        getTextKeys(): string[];
        getTexture(key: string): RenderTexture;
        getTextureAtlasKey(key: string): boolean;
        getTextureFrame(key: string): Frame;
        getTilemap(key: string): any;
        getTilemapData(key: string): any;
        getURL(url: string): any;
        getXML(key: string): any;
        getVideo(key: string): Video;
        hasFrameData(key: string): boolean;
        isSoundDecoded(key: string): boolean;
        isSoundReady(key: string): boolean;
        isSpriteSheet(key: string): boolean;
        reloadSound(key: string): void;
        reloadSoundComplete(key: string): void;
        removeBinary(key: string): void;
        removeBitmapData(key: string): void;
        removeBitmapFont(key: string): void;
        removeCanvas(key: string): void;
        removeImage(key: string, removeFromPixi?: boolean): void;
        removeJSON(key: string): void;
        removePhysics(key: string): void;
        removeRenderTexture(key: string): void;
        removeShader(key: string): void;
        removeSound(key: string): void;
        removeSpriteSheet(key: string): void;
        removeText(key: string): void;
        removeTextureAtlas(key: string): void;
        removeTilemap(key: string): void;
        removeXML(key: string): void;
        removeVideo(key: string): void;
        updateFrameData(key: string, frameData: any, cache?: number): void;
        updateSound(key: string, property: string, value: Sound): void;
    }

    export class Camera {

        constructor(game: Game, id: number, x: number, y: number, width: number, height: number);

        static FOLLOW_LOCKON: number;
        static FOLLOW_PLATFORMER: number;
        static FOLLOW_TOPDOWN: number;
        static FOLLOW_TOPDOWN_TIGHT: number;

        atLimit: { x: boolean; y: boolean; };
        bounds: Rectangle;
        deadzone: Rectangle;
        displayObject: PIXI.DisplayObject;
        id: number;
        game: Game;
        height: number;
        position: Point;
        roundPx: boolean;
        scale: Point;
        target: Sprite;
        totalInView: number;
        view: Rectangle;
        visible: boolean;
        width: number;
        world: World;
        x: number;
        y: number;

        checkBounds(): void;
        focusOn(displayObject: PIXI.DisplayObject): void;
        focusOnXY(x: number, y: number): void;
        follow(target: Sprite, style?: number): void;
        reset(): void;
        setBoundsToWorld(): void;
        setPosition(x: number, y: number): void;
        setSize(width: number, height: number): void;
        unfollow(): void;
        update(): void;

    }

    export class Canvas {
        static addToDOM(canvas: HTMLCanvasElement, parent: HTMLElement, overflowHidden?: boolean): HTMLCanvasElement;
        static create(width?: number, height?: number, id?: string): HTMLCanvasElement;
        static getSmoothngEnabled(context: CanvasRenderingContext2D): boolean;
        static removeFromDOM(canvas: HTMLCanvasElement): void;
        static setBackgroundColor(canvas: HTMLCanvasElement, color: string): HTMLCanvasElement;
        static setImageRenderingBicubic(canvas: HTMLCanvasElement): HTMLCanvasElement;
        static setImageRenderingCrisp(canvas: HTMLCanvasElement): HTMLCanvasElement;
        static setSmoothingEnabled(context: CanvasRenderingContext2D, value: boolean): CanvasRenderingContext2D;
        static setTouchAction(canvas: HTMLCanvasElement, value: string): HTMLCanvasElement;
        static setTransform(context: CanvasRenderingContext2D, translateX: number, translateY: number, scaleX: number, scaleY: number, skewX: number, skewY: number): CanvasRenderingContext2D;
        static setUserSelect(canvas: HTMLCanvasElement, value?: string): HTMLCanvasElement;
    }

    export class Circle {
        constructor(x?: number, y?: number, diameter?: number);

        area: number;
        bottom: number;
        diameter: number;
        empty: boolean;
        left: number;
        radius: number;
        right: number;
        top: number;
        x: number;
        y: number;

        static circumferencePoint(a: Circle, angle: number, asDegrees: boolean, out?: Point): Point;
        static contains(a: Circle, x: number, y: number): boolean;
        static equals(a: Circle, b: Circle): boolean;
        static intersects(a: Circle, b: Circle): boolean;
        static intersectsRectangle(c: Circle, r: Rectangle): boolean;

        circumference(): number;
        circumferencePoint(angle: number, asDegrees?: boolean, out?: Point): Point;
        clone(output: Circle): Circle;
        contains(x: number, y: number): boolean;
        copyFrom(source: any): Circle;
        copyTo(dest: any): any;
        distance(dest: any, round?: boolean): number;
        getBounds(): Rectangle;
        offset(dx: number, dy: number): Circle;
        offsetPoint(point: Point): Circle;
        random(out?: Point): Point;
        scale(x: number, y?: number): Rectangle;
        setTo(x: number, y: number, diameter: number): Circle;
        toString(): string;
    }

    export class Color {

        static componentToHex(color: number): string;
        static createColor(r?: number, g?: number, b?: number, a?: number, h?: number, s?: number, l?: number, v?: number): any;
        static fromRGBA(rgba: number, out?: any): any;
        static getAlpha(color: number): number;
        static getAlphaFloat(color: number): number;
        static getBlue(color: number): number;
        static getColor(red: number, green: number, blue: number): number;
        static getColor32(alpha: number, red: number, green: number, blue: number): number;
        static getGreen(color: number): number;
        static getRandomColor(min?: number, max?: number, alpha?: number): number;
        static getRed(color: number): number;
        static getRGB(color: number): any;
        static getWebRGB(color: any): string;
        static hexToRGB(h: string): number;
        static hexToColor(hex: string, out?: any): any;
        static HSLtoRGB(h: number, s: number, l: number, out?: any): any;
        static HSLColorWheel(s?: number, l?: number): any[];
        static HSVtoRGB(h: number, s: number, v: number, out?: any): any;
        static HSVColorWheel(s?: number, v?: number): any[];
        static hueToColor(p: number, q: number, t: number): number;
        static interpolateColor(color1: number, color2: number, steps: number, currentStep: number, alpha: number): number;
        static interpolateColorWithRGB(color: number, r: number, g: number, b: number, steps: number, currentStep: number): number;
        static interpolateRGB(r1: number, g1: number, b1: number, r2: number, g2: number, b2: number, steps: number, currentStep: number): number;
        static packPixel(r: number, g: number, b: number, a: number): number;
        static RGBtoHSL(r: number, g: number, b: number, out?: any): any;
        static RGBtoHSV(r: number, g: number, b: number, out?: any): any;
        static RGBtoString(r: number, g: number, b: number, a?: number, prefix?: string): string;
        static toRGBA(r: number, g: number, b: number, a: number): number;
        static unpackPixel(rgba: number, out?: any, hsl?: boolean, hsv?: boolean): any;
        static updateColor(out: any): number;
        static valueToColor(value: string, out?: any): { r: number; g: number; b: number; a: number; };
        static webToColor(web: string, out?: any): { r: number; g: number; b: number; a: number; };
        static blendNormal(a: number): number;
        static blendLighten(a: number, b: number): number;
        static blendDarken(a: number, b: number): number;
        static blendMultiply(a: number, b: number): number;
        static blendAverage(a: number, b: number): number;
        static blendAdd(a: number, b: number): number;
        static blendSubtract(a: number, b: number): number;
        static blendDifference(a: number, b: number): number;
        static blendNegation(a: number, b: number): number;
        static blendScreen(a: number, b: number): number;
        static blendExclusion(a: number, b: number): number;
        static blendOverlay(a: number, b: number): number;
        static blendSoftLight(a: number, b: number): number;
        static blendHardLight(a: number, b: number): number;
        static blendColorDodge(a: number, b: number): number;
        static blendColorBurn(a: number, b: number): number;
        static blendLinearDodge(a: number, b: number): number;
        static blendLinearBurn(a: number, b: number): number;
        static blendLinearLight(a: number, b: number): number;
        static blendVividLight(a: number, b: number): number;
        static blendPinLight(a: number, b: number): number;
        static blendHardMix(a: number, b: number): number;
        static blendReflect(a: number, b: number): number;
        static blendGlow(a: number, b: number): number;
        static blendPhoenix(a: number, b: number): number;

    }

    export class Create {
        constructor(game: Game);

        static PALETTE_ARNE: number;
        static PALETTE_JMP: number;
        static PALETTE_CGA: number;
        static PALETTE_C64: number;
        static PALETTE_JAPANESE_MACHINE: number;

        bmd: BitmapData;
        canvas: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
        game: Game;
        palettes: any;

        grid(key: string, width: number, height: number, cellWidth: number, cellHeight: number, color: string): PIXI.Texture;
        texture(key: string, data: any, pixelWidth?: number, pixelHeight?: number, palette?: number): PIXI.Texture;
    }

    interface ICursorKeys {
        up: Key;
        down: Key;
        left: Key;
        right: Key;
    }

    export class Device {

        static LITTLE_ENDIAN: boolean;
        static onInitialized: Signal;

        static checkFullScreenSupport(): void;
        static canPlayAudio(type: string): boolean;
        static canPlayVideo(type: string): boolean;
        static isConsoleOpen(): boolean;
        static isAndroidStockBrowser(): string;
        static whenReady: (callback: Function, context?: any) => void;

        android: boolean;
        arora: boolean;
        audioData: boolean;
        cancelFullScreen: string;
        canvas: boolean;
        chrome: boolean;
        chromeOS: boolean;
        chromeVersion: number;
        cocoonJS: boolean;
        cocoonJSApp: boolean;
        cordova: boolean;
        crosswalk: boolean;
        css3D: boolean;
        desktop: boolean;
        deviceReadyAt: number;
        electron: boolean;
        ejecta: boolean;
        epiphany: boolean;
        file: boolean;
        fileSystem: boolean;
        firefox: boolean;
        firefoxVersion: number;
        fullScreen: boolean;
        fullScreenKeyboard: boolean;
        getUserMedia: boolean;
        game: Game;
        h264Video: boolean;
        hlsVideo: boolean;
        ie: boolean;
        ieVersion: number;
        iOS: boolean;
        initialized: boolean;
        iPad: boolean;
        iPhone: boolean;
        iPhone4: boolean;
        kindle: boolean;
        linux: boolean;
        littleEndian: boolean;
        localStorage: boolean;
        m4a: boolean;
        macOS: boolean;
        midori: boolean;
        mobileSafari: boolean;
        mp3: boolean;
        mp4Video: boolean;
        mspointer: boolean;
        node: boolean;
        nodeWebkit: boolean;
        ogg: boolean;
        oggVideo: number;
        opera: boolean;
        opus: boolean;
        pixelRatio: number;
        pointerLock: boolean;
        quirksMode: boolean;
        requestFullScreen: string;
        safari: boolean;
        silk: boolean;
        support32bit: boolean;
        touch: boolean;
        trident: boolean;
        tridentVersion: number;
        typedArray: boolean;
        vibration: boolean;
        vita: boolean;
        wav: boolean;
        webApp: boolean;
        webAudio: boolean;
        webGL: boolean;
        webm: boolean;
        webmVideo: boolean;
        windows: boolean;
        windowsPhone: boolean;
        wheelEvent: string;
        worker: boolean;
        wp9Video: boolean;
    }

    export module Easing {
        export var Default: Function;
        export var Power0: Function;
        export var Power1: Function;
        export var power2: Function;
        export var power3: Function;
        export var power4: Function;

        export class Back {
            static In(k: number): number;
            static Out(k: number): number;
            static InOut(k: number): number;
        }

        export class Bounce {
            static In(k: number): number;
            static Out(k: number): number;
            static InOut(k: number): number;
        }

        export class Circular {
            static In(k: number): number;
            static Out(k: number): number;
            static InOut(k: number): number;
        }

        export class Cubic {
            static In(k: number): number;
            static Out(k: number): number;
            static InOut(k: number): number;
        }

        export class Elastic {
            static In(k: number): number;
            static Out(k: number): number;
            static InOut(k: number): number;
        }

        export class Exponential {
            static In(k: number): number;
            static Out(k: number): number;
            static InOut(k: number): number;
        }

        export class Linear {
            static None(k: number): number;
        }

        export class Quadratic {
            static In(k: number): number;
            static Out(k: number): number;
            static InOut(k: number): number;
        }

        export class Quartic {
            static In(k: number): number;
            static Out(k: number): number;
            static InOut(k: number): number;
        }

        export class Quintic {
            static In(k: number): number;
            static Out(k: number): number;
            static InOut(k: number): number;
        }

        export class Sinusoidal {
            static In(k: number): number;
            static Out(k: number): number;
            static InOut(k: number): number;
        }
    }

    export class Ellipse {
        constructor(x?: number, y?: number, width?: number, height?: number);

        bottom: number;
        empty: boolean;
        height: number;
        left: number;
        right: number;
        top: number;
        type: number;
        width: number;
        x: number;
        y: number;

        static constains(a: Ellipse, x: number, y: number): boolean;

        clone(output: Ellipse): Ellipse;
        contains(x: number, y: number): boolean;
        copyFrom(source: any): Ellipse;
        copyTo(dest: any): any;
        getBounds(): Rectangle;
        random(out?: Point): Point;
        setTo(x: number, y: number, width: number, height: number): Ellipse;
        toString(): string;
    }

    export class Events {
        constructor(sprite: Sprite);

        parent: Sprite;
        onAddedToGroup: Signal;
        onRemovedFromGroup: Signal;
        onRemovedFromWorld: Signal;
        onKilled: Signal;
        onRevived: Signal;
        onOutOfBounds: Signal;
        onEnterBounds: Signal;
        onInputOver: Signal;
        onInputOut: Signal;
        onInputDown: Signal;
        onInputUp: Signal;
        onDestroy: Signal;
        onDragStart: Signal;
        onDragStop: Signal;
        onDragUpdate: Signal;
        onAnimationStart: Signal;
        onAnimationComplete: Signal;
        onAnimationLoop: Signal;

        destroy(): void;
    }

    export class Filter extends PIXI.AbstractFilter {
        constructor(game: Game, uniforms: any, fragmentSrc: string | string[]);

        dirty: boolean;
        game: Game;
        height: number;
        fragmentSrc: string | string[];
        padding: number;
        prevPoint: Point;
        type: number;
        uniforms: any;
        width: number;

        apply(frameBuffer: WebGLFramebuffer): void;
        destroy(): void;
        init(...args: any[]): void;
        setResolution(width: number, height: number): void;
        syncUniforms(): void;
        update(pointer?: Pointer): void;
    }

    export module Filter {

        export class BinarySerpents extends Filter {

            constructor(game: Game, width: number, height: number, march?: number, maxDistance?: number);

            fog: number;

        }

        export class BlurX extends Filter {

            blur: number;

        }

        export class BlurY extends Filter {

            blur: number;

        }

        export class CausticLight extends Filter {

            constructor(game: Game, width: number, height: number, divisor?: number);

            init(width: number, height: number, divisor?: number): void;

        }

        export class CheckerWave extends Filter {

            constructor(game: Game, width: number, height: number);

            alpha: number;
            cameraX: number;
            cameraY: number;
            cameraZ: number;

            init(width: number, height: number): void;
            setColor1(red: number, green: number, blue: number): void;
            setColor2(red: number, green: number, blue: number): void;

        }

        export class ColorBars extends Filter {

            constructor(game: Game, width: number, height: number);

            alpha: number;

            init(width: number, height: number): void;

        }

        export class Fire extends Filter {

            constructor(width: number, height: number, alpha?: number, shift?: number);

            alpha: number;
            shift: number;
            speed: number;

            init(width: number, height: number, alpha?: number, shift?: number): void;

        }

        export class Gray extends Filter {

            gray: number;

        }

        export class HueRotate extends Filter {

            constructor(game: Game, width: number, height: number, texture: any);

            alpha: number;

            init(width: number, height: number, texture: any): void;

        }

        export class LazerBeam extends Filter {

            init(width: number, height: number, divisor?: number): void;

        }

        export class LightBeam extends Filter {

            constructor(game: Game, width: number, height: number);

            alpha: number;
            blue: number;
            green: number;
            red: number;
            thickness: number;
            speed: number;

            init(width: number, height: number): void;

        }

        export class Marble extends Filter {

            constructor(game: Game, width: number, height: number, speed?: number, intensity?: number);

            alpha: number;
            intensity: number;
            speed: number;

            init(width: number, height: number, speed?: number, intensity?: number): void;

        }

        export class Pixelate extends Filter {

            size: number;
            sizeX: number;
            sizeY: number;

        }

        export class Plasma extends Filter {

            constructor(game: Game, width: number, height: number, alpha?: number, size?: number);

            alpha: number;
            blueShift: number;
            greenShift: number;
            redShift: number;
            size: number;

            init(width: number, height: number, alpha?: number, size?: number): void;

        }

        export class SampleFilter extends Filter {

            constructor(game: Game, width: number, height: number, divisor?: number);

            init(width: number, height: number, divisor?: number): void;

        }

        export class Tunnel extends Filter {

            constructor(game: Game, width: number, height: number, texture: any);

            alpha: number;
            origin: number;

            init(width: number, height: number, texture: any): void;

        }
    }

    export class FlexGrid {
        constructor(manager: ScaleManager, width: number, height: number);

        game: Game;
        manager: ScaleManager;
        width: number;
        height: number;
        boundsCustom: Rectangle;
        boundsFluid: Rectangle;
        boundsFull: Rectangle;
        boundsNone: Rectangle;
        customWidth: number;
        customHeight: number;
        customOffsetX: number;
        customOffsetY: number;
        positionCustom: Point;
        positionFluid: Point;
        positionFull: Point;
        positionNone: Point;
        scaleCustom: Point;
        scaleFluid: Point;
        scaleFluidInversed: Point;
        scaleFull: Point;
        scaleNone: Point;
        ratioH: number;
        ratioV: number;
        multiplier: number;

        createCustomLayer(width: number, height: number, children?: PIXI.DisplayObject[], addToWorld?: boolean): FlexLayer;
        createFluidLayer(children: PIXI.DisplayObject[]): FlexLayer;
        createFullLayer(children: PIXI.DisplayObject[]): FlexLayer;
        createFixedLayer(children: PIXI.DisplayObject[]): FlexLayer;
        debug(): void;
        fitSprite(sprite: Sprite): void;
        onResize(width: number, height: number): void;
        refresh(): void;
        reset(): void;
        setSize(width: number, height: number): void;
    }

    export class FlexLayer extends Group {

        constructor(manager: ScaleManager, position: Point, bounds: Rectangle, scale: Point);

        grid: FlexGrid;
        manager: ScaleManager;

        bottomLeft: Point;
        bottomMiddle: Point;
        bottomRight: Point;
        bounds: Rectangle;
        persist: boolean;
        position: Point;
        scale: Point;
        topLeft: Point;
        topMiddle: Point;
        topRight: Point;

        debug(): void;
        resize(): void;

    }

    export class Frame {
        constructor(index: number, x: number, y: number, width: number, height: number, name: string);

        bottom: number;
        centerX: number;
        centerY: number;
        distance: number;
        height: number;
        index: number;
        name: string;
        right: number;
        rotated: boolean;
        rotationDirection: string;
        sourceSizeH: number;
        sourceSizeW: number;
        spriteSourceSizeH: number;
        spriteSourceSizeW: number;
        spriteSourceSizeX: number;
        spriteSourceSizeY: number;
        trimmed: boolean;
        uuid: string;
        width: number;
        x: number;
        y: number;

        clone(): Frame;
        getRect(out?: Rectangle): Rectangle;
        setTrim(trimmed: boolean, actualWidth: number, actualHeight: number, destX: number, destY: number, destWidth: number, destHeight: number): void;
        resize(width: number, height: number): void;
    }

    export class FrameData {
        total: number;

        addFrame(frame: Frame): Frame;
        checkFrameName(name: string): boolean;
        clone(): FrameData;
        getFrame(index: number): Frame;
        getFrameByName(name: string): Frame;
        getFrameIndexes(frames?: number[], useNumericIndex?: boolean, output?: number[]): number[];
        getFrameRange(start: number, end: number, output: Frame[]): Frame[];
        getFrames(frames?: number[], useNumericIndex?: boolean, output?: Frame[]): Frame[];
    }

    export interface IGameConfig {

        enableDebug?: boolean;
        width?: number;
        height?: number;
        renderer?: number;
        parent?: any;
        transparent?: boolean;
        antialias?: boolean;
        preserveDrawingBuffer?: boolean;
        physicsConfig?: any;
        seed?: string;
        state?: State;

    }

    export class Game {
        constructor(width?: number|string, height?: number|string, renderer?: number, parent?: any, state?: any, transparent?: boolean, antialias?: boolean, physicsConfig?: any);
        constructor(config: IGameConfig);

        add: GameObjectFactory;
        antialias: boolean;
        cache: Cache;
        camera: Camera;
        canvas: HTMLCanvasElement;
        config: IGameConfig;
        context: CanvasRenderingContext2D;
        count: number;
        debug: Utils.Debug;
        device: Device;
        forceSingleUpdate: boolean;
        fpsProblemNotifier: Signal;
        height: number;
        id: number;
        input: Input;
        isBooted: boolean;
        isRunning: boolean;
        load: Loader;
        lockRender: boolean;
        make: GameObjectCreator;
        math: Math;
        net: Net;
        onBlur: Signal;
        onFocus: Signal;
        onPause: Signal;
        onResume: Signal;
        parent: HTMLElement;
        particles: Particles;
        paused: boolean;
        pendingStep: boolean;
        physics: Physics;
        physicsConfig: any;
        plugins: PluginManager;
        preserveDrawingBuffer: Boolean;
        raf: RequestAnimationFrame;
        renderer: PIXI.CanvasRenderer | PIXI.WebGLRenderer;
        renderType: number;
        resolution: number;
        rnd: RandomDataGenerator;
        scale: ScaleManager;
        scratch: BitmapData;
        sound: SoundManager;
        stage: Stage;
        state: StateManager;
        stepCount: number;
        stepping: boolean;
        time: Time;
        transparent: boolean;
        tweens: TweenManager;
        currentUpdateID: number;
        updatesThisFrame: number;
        width: number;
        world: World;

        boot(): void;
        destroy(): void;
        disableStep(): void;
        enableStep(): void;
        focusGain(event: any): void;
        focusLoss(event: any): void;
        gamePaused(event: any): void;
        gameResumed(event: any): void;
        parseConfig(config: any): void;
        removeFromDOM(canvas: HTMLCanvasElement): void;
        setUpRenderer(): void;
        showDebugHeader(): void;
        step(): void;
        update(time: number): void;
        updateLogic(timeStep: number): void;
        updateRender(timeStep: number): void;

    }

    export class GameObjectCreator {

        constructor(game: Game);

        game: Game;
        world: World;

        audio(key: string, volume?: number, loop?: boolean, connect?: boolean): Sound;
        audioSprite(key: string): AudioSprite;
        bitmapData(width?: number, height?: number, key?: string, addToCache?: boolean): BitmapData;
        bitmapText(x: number, y: number, font: string, text?: string, size?: number, align?: string): BitmapText;
        button(x?: number, y?: number, key?: string, callback?: Function, callbackContext?: any, overFrame?: any, outFrame?: any, downFrame?: any, upFrame?: any): Button;
        emitter(x?: number, y?: number, maxParticles?: number): Particles.Arcade.Emitter;
        filter(filter: any, ...args: any[]): Filter;
        graphics(x?: number, y?: number): Graphics;
        group(parent?: any, name?: string, addToStage?: boolean, enableBody?: boolean, physicsBodyType?: number): Group;
        image(x: number, y: number, key?: any, frame?: any): Image;
        renderTexture(width?: number, height?: number, key?: any, addToCache?: boolean): RenderTexture;
        retroFont(font: string, characterWidth: number, characterHeight: number, chars: string, charsPerRow: number, xSpacing?: number, ySpacing?: number, xOffset?: number, yOffset?: number): RetroFont;
        rope(x: number, y: number, key: any, frame?: any, points?: Point[]): Rope;
        sound(key: string, volume?: number, loop?: boolean, connect?: boolean): Sound;
        sprite(x: number, y: number, key?: any, frame?: any): Sprite;
        spriteBatch(parent: any, name?: String, addToStage?: boolean): SpriteBatch;
        text(x: number, y: number, text?: string, style?: any): Text;
        tilemap(key: string, tileWidth?: number, tileHeight?: number, width?: number, height?: number): Tilemap;
        tileSprite(x: number, y: number, width: number, height: number, key: any, frame: any): TileSprite;
        tween(obj: any): Tween;

    }

    export class GameObjectFactory {

        constructor(game: Game);

        game: Game;
        world: World;

        audio(key: string, volume?: number, loop?: boolean, connect?: boolean): Sound;
        audioSprite(key: string): AudioSprite;
        bitmapData(width?: number, height?: number, key?: string, addToCache?: boolean): BitmapData;
        bitmapText(x: number, y: number, font: string, text?: string, size?: number, align?: string, group?: Group): BitmapText;
        button(x?: number, y?: number, key?: string, callback?: Function, callbackContext?: any, overFrame?: any, outFrame?: any, downFrame?: any, upFrame?: any, group?: Group): Button;
        emitter(x?: number, y?: number, maxParticles?: number): Particles.Arcade.Emitter;
        existing(object: any): any;
        filter(filter: string, ...args: any[]): Filter;
        graphics(x: number, y: number, group?: Group): Graphics;
        group(parent?: any, name?: string, addToStage?: boolean, enableBody?: boolean, physicsBodyType?: number): Group;
        image(x: number, y: number, key?: any, frame?: any, group?: Group): Image;
        physicsGroup(physicsBodyType: number, parent?: any, name?: string, addToStage?: boolean): Group;
        plugin(plugin: Plugin, ...parameter: any[]): Plugin;
        renderTexture(width?: number, height?: number, key?: string, addToCache?: boolean): RenderTexture;
        retroFont(font: string, characterWidth: number, characterHeight: number, chars: string, charsPerRow: number, xSpacing?: number, ySpacing?: number, xOffset?: number, yOffset?: number): RetroFont;
        rope(x: number, y: number, key: any, frame?: any, points?: Point[]): Rope;
        sound(key: string, volume?: number, loop?: number, connect?: boolean): Sound;
        sprite(x: number, y: number, key?: any, frame?: any, group?: Group): Sprite;
        spriteBatch(parent: any, name?: string, addToStage?: boolean): Group;
        text(x: number, y: number, text: string, style: any, group?: Group): Text;
        tilemap(key?: string, tileWidth?: number, tileHeight?: number, width?: number, height?: number): Tilemap;
        tileSprite(x: number, y: number, width: number, height: number, key?: any, frame?: any, group?: Group): TileSprite;
        tween(obj: any): Tween;
        video(key?: string, url?: string): Video;
        videoSprite(): void; //todo not sure?

    }

    export class Gamepad {

        constructor(game: Game);

        static BUTTON_0: number;
        static BUTTON_1: number;
        static BUTTON_2: number;
        static BUTTON_3: number;
        static BUTTON_4: number;
        static BUTTON_5: number;
        static BUTTON_6: number;
        static BUTTON_7: number;
        static BUTTON_8: number;
        static BUTTON_9: number;
        static BUTTON_10: number;
        static BUTTON_11: number;
        static BUTTON_12: number;
        static BUTTON_13: number;
        static BUTTON_14: number;
        static BUTTON_15: number;

        static AXIS_0: number;
        static AXIS_1: number;
        static AXIS_2: number;
        static AXIS_3: number;
        static AXIS_4: number;
        static AXIS_5: number;
        static AXIS_6: number;
        static AXIS_7: number;
        static AXIS_8: number;
        static AXIS_9: number;

        static XBOX360_A: number;
        static XBOX360_B: number;
        static XBOX360_X: number;
        static XBOX360_Y: number;
        static XBOX360_LEFT_BUMPER: number;
        static XBOX360_RIGHT_BUMPER: number;
        static XBOX360_LEFT_TRIGGER: number;
        static XBOX360_RIGHT_TRIGGER: number;
        static XBOX360_BACK: number;
        static XBOX360_START: number;
        static XBOX360_STICK_LEFT_BUTTON: number;
        static XBOX360_STICK_RIGHT_BUTTON: number;
        static XBOX360_DPAD_LEFT: number;
        static XBOX360_DPAD_RIGHT: number;
        static XBOX360_DPAD_UP: number;
        static XBOX360_DPAD_DOWN: number;
        static XBOX360_STICK_LEFT_X: number;
        static XBOX360_STICK_LEFT_Y: number;
        static XBOX360_STICK_RIGHT_X: number;
        static XBOX360_STICK_RIGHT_Y: number;

        static PS3XC_X: number;
        static PS3XC_CIRCLE: number;
        static PS3XC_SQUARE: number;
        static PS3XC_TRIANGLE: number;
        static PS3XC_L1: number;
        static PS3XC_R1: number;
        static PS3XC_L2: number;
        static PS3XC_R2: number;
        static PS3XC_SELECT: number;
        static PS3XC_START: number;
        static PS3XC_STICK_LEFT_BUTTON: number;
        static PS3XC_STICK_RIGHT_BUTTON: number;
        static PS3XC_DPAD_UP: number;
        static PS3XC_DPAD_DOWN: number;
        static PS3XC_DPAD_LEFT: number;
        static PS3XC_DPAD_RIGHT: number;
        static PS3XC_STICK_LEFT_X: number;
        static PS3XC_STICK_LEFT_Y: number;
        static PS3XC_STICK_RIGHT_X: number;
        static PS3XC_STICK_RIGHT_Y: number;

        active: boolean;
        callbackContext: any;
        enabled: boolean;
        game: Game;
        onAxisCallBack: Function;
        onConnectCallback: Function;
        onDisconnectCallback: Function;
        onDownCallback: Function;
        onFloatCallback: Function;
        onUpCallback: Function;
        pad1: SinglePad;
        pad2: SinglePad;
        pad3: SinglePad;
        pad4: SinglePad;
        padsConnected: number;
        supported: boolean;

        addCallbacks(context: any, callbacks: any): void;
        isDown(buttonCode: number): boolean;
        justPressed(buttonCode: number, duration?: number): boolean;
        justReleased(buttonCode: number, duration?: number): boolean;
        reset(): void;
        setDeadZones(value: any): void;
        start(): void;
        stop(): void;
        update(): void;

    }

    export class GamepadButton {

        constructor(pad: SinglePad, buttonCode: number);

        buttonCode: number;
        duration: number;
        game: Game;
        isDown: boolean;
        isUp: boolean;
        onDown: Signal;
        onFloat: Signal;
        onUp: Signal;
        pad: Gamepad;
        repeats: number;
        timeDown: number;
        timeUp: number;
        value: number;

        destroy(): void;
        justPressed(duration?: number): boolean;
        justReleased(duration?: number): boolean;
        processButtonDown(value: number): void;
        processButtonFloat(value: number): void;
        processButtonUp(value: number): void;
        reset(): void;
    }

    export class Graphics extends PIXI.Graphics {

        constructor(game: Game, x?: number, y?: number);

        angle: number;
        alive: boolean;
        animations: AnimationManager;
        autoCull: boolean;
        body: Physics.Arcade.Body | Physics.P2.Body | Physics.Ninja.Body | any;
        bottom: number;
        cameraOffset: Point;
        checkWorldBounds: boolean;
        components: any;
        debug: boolean;
        destroyPhase: boolean;
        exists: boolean;
        events: Events;
        fixedToCamera: boolean;
        key: string | RenderTexture | BitmapData | Video | PIXI.Texture;
        fresh: boolean;
        game: Game;
        height: number;
        input: InputHandler;
        inputEnabled: boolean;
        inCamera: boolean;
        inWorld: boolean;
        left: number;
        name: string;
        lifespan: number;
        offsetX: number;
        offsetY: number;
        outOfBoundsKill: boolean;
        pendingDestroy: boolean;
        physicsType: number;
        position: Point;
        previousPosition: Point;
        previousRotation: number;
        renderOrderID: number;
        right: number;
        top: number;
        type: number;
        world: Point;
        width: number;
        z: number;

        destroy(destroyChildren?: boolean): void;
        drawTriangle(points: Point[], cull?: boolean): void;
        drawTriangles(vertices: Point[]| number[], indices?: number[], cull?: boolean): void;
        kill(): Graphics;
        postUpdate(): void;
        preUpdate(): void;
        reset(x: number, y: number, health?: number): Graphics;
        revive(health?: number): Graphics;
        update(): void;

    }

    export class Group extends PIXI.DisplayObjectContainer {

        constructor(game: Game, parent?: PIXI.DisplayObjectContainer, name?: string, addToStage?: boolean, enableBody?: boolean, physicsBodyType?: number);

        static RETURN_CHILD: number;
        static RETURN_NONE: number;
        static RETURN_TOTAL: number;
        static SORT_ASCENDING: number;
        static SORT_DESCENDING: number;

        alpha: number;
        angle: number;
        alive: boolean;
        cameraOffset: Point;
        classType: any;
        cursor: any;
        cursorIndex: number;
        enableBody: boolean;
        enableBodyDebug: boolean;
        exists: boolean;
        fixedToCamera: boolean;
        game: Game;
        hash: PIXI.DisplayObject[];
        ignoreDestroy: boolean;
        length: number;
        name: string;
        onDestroy: Signal;
        pendingDestroy: boolean;
        physicsBodyType: number;
        physicsType: number;
        physicsSortDirection: number;
        position: Point;
        rotation: number;
        scale: Point;
        total: number;
        type: number;
        visible: boolean;
        z: number;

        add(child: any, silent?: boolean): any;
        addAll(property: string, amount: number, checkAlive: boolean, checkVisible: boolean): void;
        addAt(child: any, index: number, silent?: boolean): any;
        addMultiple(children: any[], silent?: boolean): any[];
        addToHash(child: PIXI.DisplayObject): boolean;
        bringToTop(child: any): any;
        callAll(method: string, context: any, ...parameters: any[]): void;
        callAllExists(callback: Function, existsValue: boolean, ...parameters: any[]): void;
        callbackFromArray(child: any, callback: Function, length: number): void;
        checkAll(key: string[], value: any, checkAlive?: boolean, checkVisible?: boolean, force?: boolean): boolean;
        checkProperty(child: any, key: string[], value: any, force?: boolean): boolean;
        countDead(): number;
        countLiving(): number;
        create(x: number, y: number, key: string, frame?: any, exists?: boolean): any;
        createMultiple(quantity: number, key: string, frame?: any, exists?: boolean): void;
        customSort(sortHandler: Function, context?: any): void;
        destroy(destroyChildren?: boolean, soft?: boolean): void;
        divideAll(property: string, amount: number, checkAlive?: boolean, checkVisible?: boolean): void;
        forEach(callback: Function, callbackContext: any, checkExists?: boolean, ...args: any[]): void;
        forEachAlive(callback: Function, callbackContext: any, ...args: any[]): void;
        forEachDead(callback: Function, callbackContext: any, ...args: any[]): void;
        forEachExists(callback: Function, callbackContext: any): void;
        filter(predicate: Function, checkExists?: boolean): ArraySet;
        getAt(index: number): PIXI.DisplayObject | number;
        getBottom(): any;
        getFirstAlive(): any;
        getFirstDead(): any;
        getFirstExists(exists: boolean): any;
        getIndex(child: any): number;
        getRandom(startIndex?: number, length?: number): any;
        getTop(): any;
        hasProperty(child: any, key: string[]): boolean;
        iterate(key: string, value: any, returnType: number, callback?: Function, callbackContext?: any, ...args: any[]): any;
        moveAll(group: Group, silent?: boolean): Group;
        moveDown(child: any): any;
        moveUp(child: any): any;
        multiplyAll(property: string, amount: number, checkAlive: boolean, checkVisible: boolean): void;
        next(): void;
        postUpdate(): void;
        preUpdate(): void;
        previous(): void;
        remove(child: any, destroy?: boolean, silent?: boolean): boolean;
        removeAll(destroy?: boolean, silent?: boolean): void;
        removeBetween(startIndex: number, endIndex?: number, destroy?: boolean, silent?: boolean): void;
        removeFromHash(child: PIXI.DisplayObject): boolean;
        replace(oldChild: any, newChild: any): any;
        resetCursor(index?: number): any;
        reverse(): void;
        sendToBack(child: any): any;
        set(child: any, key: string[], value: any, operation?: number, force?: boolean): boolean;
        setAll(key: string, value: any, checkAlive?: boolean, checkVisible?: boolean, operation?: number, force?: boolean): void;
        setAllChildren(key: string, value: any, checkAlive?: boolean, checkVisible?: boolean, operation?: number, force?: boolean): void;
        setProperty(child: any, key: string[], value: any, operation?: number, force?: boolean): boolean;
        sort(key?: string, order?: number): void;
        subAll(property: string, amount: number, checkAlive: boolean, checkVisible: boolean): void;
        swap(child1: any, child2: any): boolean;
        update(): void;
        updateZ(): void;
        xy(index: number, x: number, y: number): void;

    }

    export class Image extends PIXI.Sprite {

        constructor(game: Game, x: number, y: number, key: string|RenderTexture|BitmapData|PIXI.Texture, frame: string|number);

        alive: boolean;
        angle: number;
        anchor: Point;
        animations: AnimationManager;
        autoCull: boolean;
        bottom: number;
        cameraOffset: Point;
        components: any;
        cropRect: Rectangle;
        customRender: boolean;
        debug: boolean;
        deltaX: number;
        deltaY: number;
        deltaZ: number;
        destroyPhase: boolean;
        events: Events;
        exists: boolean;
        fixedToCamera: boolean;
        frame: string|number;
        frameName: string;
        fresh: boolean;
        game: Game;
        inCamera: boolean;
        input: InputHandler;
        inputEnabled: boolean;
        inWorld: boolean;
        key: string | RenderTexture | BitmapData | Video | PIXI.Texture;
        lifespan: number;
        left: number;
        name: string;
        offsetX: number;
        offsetY: number;
        pendingDestroy: boolean;
        position: Point;
        previousPosition: Point;
        previousRotation: number;
        renderOrderID: number;
        right: number;
        scale: Point;
        smoothed: boolean;
        top: number;
        type: number;
        world: Point;
        z: number;

        bringToTop(): Image;
        crop(rect: Rectangle, copy?: boolean): void;
        destroy(destroyChildren?: boolean): void;
        kill(): Image;
        loadTexture(key: string | RenderTexture | BitmapData | Video | PIXI.Texture, frame?: string | number, stopAnimation?: boolean): void;
        resizeFrame(parent: any, width: number, height: number): void;
        moveDown(): Image;
        moveUp(): Image;
        overlap(displayObject: Sprite | Image | TileSprite | Button | PIXI.DisplayObject): boolean;
        play(name: string, frameRate?: number, loop?: boolean, killOnComplete?: boolean): Animation;
        postUpdate(): void;
        preUpdate(): void;
        reset(x: number, y: number, health?: number): Image;
        resetFrame(): void;
        revive(health?: number): Image;
        sendToBack(): Image;
        setFrame(frame: Frame): void;
        update(): void;
        updateCrop(): void;

    }

    export class ImageCollection {

        constructor(name: string, firstgid: number, width?: number, height?: number, margin?: number, spacing?: number, properties?: any);

        name: string;
        firstgid: number;
        imageWidth: number;
        imageHeight: number;
        imageMargin: number;
        imageSpacing: number;
        properties: any;
        images: any[];
        total: number;

        addImage(gid: number, image: string): void;
        containsImageIndex(imageIndex: number): boolean;

    }

    export class Input {

        constructor(game: Game);

        static MAX_POINTERS: number;
        static MOUSE_OVERRIDES_TOUCH: number;
        static MOUSE_TOUCH_COMBINE: number;
        static TOUCH_OVERRIDES_MOUSE: number;

        activePointer: Pointer;
        circle: Circle;
        enabled: boolean;
        doubleTapRate: number;
        game: Game;
        gamepad: Gamepad;
        hitCanvas: HTMLCanvasElement;
        hitContext: CanvasRenderingContext2D;
        holdRate: number;
        interactiveItems: ArraySet;
        justPressedRate: number;
        justReleasedRate: number;
        keyboard: Keyboard;
        maxPointers: number;
        minPriorityID: number;
        mouse: Mouse;
        mousePointer: Pointer;
        moveCallbacks: (pointer: Pointer, x: number, y: number) => void[];
        mspointer: MSPointer;
        multiInputOverride: number;
        onDown: Signal;
        onHold: Signal;
        onTap: Signal;
        onUp: Signal;
        pointer1: Pointer;
        pointer2: Pointer;
        pointer3: Pointer;
        pointer4: Pointer;
        pointer5: Pointer;
        pointer6: Pointer;
        pointer7: Pointer;
        pointer8: Pointer;
        pointer9: Pointer;
        pointer10: Pointer;
        pollLocked: boolean;
        pollRate: number;
        position: Point;
        pointer: Pointer[];
        recordLimit: number;
        recordPointerHistory: boolean;
        recordRate: number;
        resetLocked: boolean;
        scale: Point;
        speed: Point;
        tapRate: number;
        totalActivePointers: number;
        totalInactivePointers: number;
        touch: Touch;
        worldX: number;
        worldY: number;
        x: number;
        y: number;

        addPointer(): Pointer;
        addMoveCallback(callback: Function, context: any): number;
        boot(): void;
        countActivePointers(limit?: number): number;
        deleteMoveCallback(callback: Function, context?: any): void;
        destroy(): void;
        getLocalPosition(displayObject: any, pointer: Pointer): Point;
        getPointer(isActive?: boolean): Pointer;
        getPointerFromId(pointerID: number): Pointer;
        getPointerFromIdentifier(identifier: number): Pointer;
        hitTest(displayObject: PIXI.DisplayObject, pointer: Pointer, localPoint: Point): void;
        reset(hard?: boolean): void;
        resetSpeed(x: number, y: number): void;
        startPointer(event: any): Pointer;
        stopPointer(event: any): Pointer;
        update(): void;
        updatePointer(event: any): Pointer;

    }

    export class InputHandler {

        constructor(sprite: Sprite);

        allowHorizontalDrag: boolean;
        allowVerticalDrag: boolean;
        boundsRect: Rectangle;
        boundsSprite: Sprite;
        bringToTop: boolean;
        consumePointerEvent: boolean;
        dragOffset: Point;
        dragFromCenter: boolean;
        draggable: boolean;
        dragStartPoint: Point;
        enabled: boolean;
        game: Game;
        globalToLocalX(x: number): number;
        globalToLocalY(y: number): number;
        isDragged: boolean;
        pixelPerfectAlpha: number;
        pixelPerfectClick: boolean;
        pixelPerfectOver: boolean;
        priorityID: number;
        scaleLayer: boolean;
        snapOffset: Point;
        snapOffsetX: number;
        snapOffsetY: number;
        snapOnDrag: boolean;
        snapOnRelease: boolean;
        snapPoint: Point;
        snapX: number;
        snapY: number;
        sprite: Sprite;
        useHandCursor: boolean;

        checkBoundsRect(): void;
        checkBoundsSprite(): void;
        checkPixel(x: number, y: number, pointer?: Pointer): boolean;
        checkPointerDown(pointer: Pointer, fastTest?: boolean): boolean;
        checkPointerOver(pointer: Pointer, fastTest?: boolean): boolean;
        destroy(): void;
        disableDrag(): void;
        disableSnap(): void;
        downDuration(pointer: Pointer): number;
        enableDrag(lockCenter?: boolean, bringToTop?: boolean, pixelPerfect?: boolean, alphaThreshold?: number, boundsRect?: Rectangle, boundsSprite?: Sprite): void;
        enableSnap(snapX: number, snapY: number, onDrag?: boolean, onRelease?: boolean, snapOffsetX?: number, snapOffsetY?: number): void;
        isPixelPerfect(): boolean;
        justOut(pointer: number, delay: number): boolean;
        justOver(pointer: number, delay: number): boolean;
        justPressed(pointer: number, delay: number): boolean;
        justReleased(pointer: number, delay: number): boolean;
        overDuration(pointer: Pointer): number;
        pointerDown(pointer: number): boolean;
        pointerDragged(pointer: Pointer): boolean;
        pointerOut(index: number): boolean;
        pointerOver(index: number): boolean;
        pointerTimeDown(pointer: Pointer): number;
        pointerTimeOut(pointer: Pointer): number;
        pointerTimeOver(pointer: number): number;
        pointerTimeUp(pointer: number): number;
        pointerUp(pointer: number): boolean;
        pointerX(pointer: number): number;
        pointerY(pointer: number): number;
        reset(): void;
        setDragLock(allowHorizontal?: boolean, allowVertical?: boolean): void;
        start(priority: number, useHandCursor: boolean): Sprite;
        startDrag(pointer: Pointer): void;
        stop(): void;
        stopDrag(pointer: Pointer): void;
        update(pointer: Pointer): void;
        updateDrag(pointer: Pointer): boolean;
        validForInput(highestID: number, highestRenderID: number, includePixelPerfect?: boolean): boolean;

    }

    export class Key {

        constructor(game: Game, keycode: number);

        altKey: boolean;
        ctrlKey: boolean;
        duration: number;
        enabled: boolean;
        event: any;
        game: Game;
        isDown: boolean;
        isUp: boolean;
        _justDown: boolean;
        justDown: boolean;
        _justUp: boolean;
        justUp: boolean;
        keyCode: number;
        onDown: Signal;
        onHoldCallback: Function;
        onHoldContext: any;
        onUp: Signal;
        repeats: number;
        shiftKey: boolean;
        timeDown: number;
        timeUp: number;

        downDuration(duration?: number): boolean;
        processKeyDown(event: KeyboardEvent): void;
        processKeyUp(event: KeyboardEvent): void;
        reset(hard?: boolean): void;
        update(): void;
        upDuration(duration?: number): boolean;

    }

    export class Keyboard {

        constructor(game: Game);

        static A: number;
        static B: number;
        static C: number;
        static D: number;
        static E: number;
        static F: number;
        static G: number;
        static H: number;
        static I: number;
        static J: number;
        static K: number;
        static L: number;
        static M: number;
        static N: number;
        static O: number;
        static P: number;
        static Q: number;
        static R: number;
        static S: number;
        static T: number;
        static U: number;
        static V: number;
        static W: number;
        static X: number;
        static Y: number;
        static Z: number;
        static ZERO: number;
        static ONE: number;
        static TWO: number;
        static THREE: number;
        static FOUR: number;
        static FIVE: number;
        static SIX: number;
        static SEVEN: number;
        static EIGHT: number;
        static NINE: number;
        static NUMPAD_0: number;
        static NUMPAD_1: number;
        static NUMPAD_2: number;
        static NUMPAD_3: number;
        static NUMPAD_4: number;
        static NUMPAD_5: number;
        static NUMPAD_6: number;
        static NUMPAD_7: number;
        static NUMPAD_8: number;
        static NUMPAD_9: number;
        static NUMPAD_MULTIPLY: number;
        static NUMPAD_ADD: number;
        static NUMPAD_ENTER: number;
        static NUMPAD_SUBTRACT: number;
        static NUMPAD_DECIMAL: number;
        static NUMPAD_DIVIDE: number;
        static F1: number;
        static F2: number;
        static F3: number;
        static F4: number;
        static F5: number;
        static F6: number;
        static F7: number;
        static F8: number;
        static F9: number;
        static F10: number;
        static F11: number;
        static F12: number;
        static F13: number;
        static F14: number;
        static F15: number;
        static COLON: number;
        static EQUALS: number;
        static COMMA: number;
        static UNDERSCORE: number;
        static PERIOD: number;
        static QUESTION_MARK: number;
        static TILDE: number;
        static OPEN_BRACKET: number;
        static BACKWARD_SLASH: number;
        static CLOSED_BRACKET: number;
        static QUOTES: number;
        static BACKSPACE: number;
        static TAB: number;
        static CLEAR: number;
        static ENTER: number;
        static SHIFT: number;
        static CONTROL: number;
        static ALT: number;
        static CAPS_LOCK: number;
        static ESC: number;
        static SPACEBAR: number;
        static PAGE_UP: number;
        static PAGE_DOWN: number;
        static END: number;
        static HOME: number;
        static LEFT: number;
        static UP: number;
        static RIGHT: number;
        static DOWN: number;
        static INSERT: number;
        static DELETE: number;
        static HELP: number;
        static NUM_LOCK: number;
        static PLUS: number;
        static MINUS: number;

        callbackContext: any;
        enabled: boolean;
        event: any;
        game: Game;
        lastChar: string;
        lastKey: Key;
        onDownCallback: Function;
        onPressCallback: Function;
        onUpCallback: Function;
        pressEvent: any;

        addCallbacks(context: any, onDown?: Function, onUp?: Function, onPress?: Function): void;
        addKey(keycode: number): Key;
        addKeys(keys: any[]): any;
        addKeyCapture(keycode: any): void;
        createCursorKeys(): ICursorKeys;
        clearCaptures(): void;
        destroy(): void;
        downDuration(keycode: number, duration?: number): boolean;
        isDown(keycode: number): boolean;
        processKeyDown(event: KeyboardEvent): void;
        processKeyPress(event: KeyboardEvent): void;
        processKeyUp(event: KeyboardEvent): void;
        removeKey(keycode: number): void;
        removeKeyCapture(keycode: number): void;
        reset(hard?: boolean): void;
        start(): void;
        stop(): void;
        update(): void;
        upDuration(keycode: number, duration?: number): boolean;

    }

    export class Line {

        constructor(x1?: number, y1?: number, x2?: number, y2?: number);

        angle: number;
        end: Point;
        height: number;
        left: number;
        length: number;
        normalAngle: number;
        normalX: number;
        normalY: number;
        perpSlope: number;
        right: number;
        slope: number;
        start: Point;
        top: number;
        type: number;
        width: number;
        x: number;
        y: number;

        static intersectsPoints(a: Point, b: Point, e: Point, f: Point, asSegment?: boolean, result?: Point): Point;
        static intersects(a: Line, b: Line, asSegment?: boolean, result?: Point): Point;
        static reflect(a: Line, b: Line): number;

        clone(output: Line): Line;
        coordinatesOnLine(stepRate: number, results: any[]): any[];
        fromAngle(x: number, y: number, angle: number, length: number): Line;
        fromSprite(startSprite: Sprite, endSprite: Sprite, useCenter?: boolean): Line;
        intersects(line: Line, asSegment?: boolean, result?: Point): Point;
        pointOnLine(x: number, y: number): boolean;
        pointOnSegment(x: number, y: number): boolean;
        random(out?: Point): Point;
        reflect(line: Line): number;
        rotate(angle: number, asDegrees?: boolean): Line;
        setTo(x1?: number, y1?: number, x2?: number, y2?: number): Line;

    }

    export class LinkedList {

        first: any;
        last: any;
        next: any;
        prev: any;
        total: number;

        add(item: any): any;
        callAll(callback: Function): void;
        remove(item: any): void;
        reset(): void;

    }

    export class Loader {

        constructor(game: Game);

        static PHYSICS_LIME_CORONA_JSON: number;
        static PHYSICS_PHASER_JSON: number;
        static TEXTURE_ATLAS_JSON_ARRAY: number;
        static TEXTURE_ATLAS_JSON_HASH: number;
        static TEXTURE_ATLAS_XML_STARLING: number;

        baseURL: string;
        cache: Cache;
        crossOrigin: boolean|string;
        enableParallel: boolean;
        game: Game;
        hasLoaded: boolean;
        isLoading: boolean;
        maxParallelDownloads: number;
        onFileStart: Signal;
        onFileComplete: Signal;
        onFileError: Signal;
        onLoadComplete: Signal;
        onLoadStart: Signal;
        onPackComplete: Signal;
        path: string;
        preloadSprite: any;
        progress: number;
        progressFloat: number;
        resetLocked: boolean;
        useXDomainRequest: boolean;

        asyncComplete(file: any, errorMessage?: string): void;
        addSyncPoint(type: string, key: string): Loader;
        addToFileList(type: string, key: string, url?: string, properties?: any, overwrite?: boolean, extension?: string): Loader;
        atlas(key: string, textureURL?: string, atlasURL?: string, atlasData?: any, format?: number): Loader;
        atlasJSONArray(key: string, textureURL?: string, atlasURL?: string, atlasData?: any): Loader;
        atlasJSONHash(key: string, textureURL?: string, atlasURL?: string, atlasData?: any): Loader;
        atlasXML(key: string, textureURL?: string, atlasURL?: string, atlasData?: any): Loader;
        audio(key: string, urls: string|string[]|any, autoDecode?: boolean): Loader;
        audiosprite(key: string, urls: string[], jsonURL?: string, jsonData?: string|any, autoDecode?: boolean): Loader;
        binary(key: string, url?: string, callback?: Function, callbackContext?: any): Loader;
        bitmapFont(key: string, textureURL?: string, atlasURL?: string, atlasData?: any, xSpacing?: number, ySpacing?: number): Loader;
        checkKeyExists(type: string, key: string): boolean;
        csvLoadComplete(file: any, xhr: XMLHttpRequest): void;
        fileComplete(file: any, xhr: XMLHttpRequest): void;
        fileError(file: any, xhr: XMLHttpRequest, reason: string): void;
        finishedLoading(abnormal?: boolean): void;
        getAsset(type: string, key: string): any;
        getAssetIndex(type: string, key: string): number;
        getAudioURL(urls: any[]): void;
        image(key: string, url?: string, overwrite?: boolean): Loader;
        json(key: string, url?: string, overwrite?: boolean): Loader;
        jsonLoadComplete(file: any, xhr: XMLHttpRequest): void;
        loadAudioTag(file: any): void;
        loadFile(file: any): void;
        loadImageTag(file: any): void;
        pack(key: string, url?: string, data?: any, callbackContext?: any): Loader;
        parseXml(data: string): XMLDocument;
        physics(key: string, url?: string, data?: any, format?: string): Loader;
        processLoadQueue(): void;
        processPack(pack: any): void;
        removeAll(): void;
        removeFile(type: string, key: string): void;
        replaceInFileList(type: string, key: string, url: string, properties: any): void;
        reset(hard?: boolean, clearEvents?: boolean): void;
        resize(): void;
        script(key: string, url?: String, callback?: Function, callbackContext?: any): Loader;
        shader(key: string, url?: String, overwrite?: boolean): Loader;
        setPreloadSprite(sprite: Sprite|Image, direction?: number): void;
        spritesheet(key: string, url: string, frameWidth: number, frameHeight: number, frameMax?: number, margin?: number, spacing?: number): Loader;
        start(): void;
        text(key: string, url?: string, overwrite?: boolean): Loader;
        tilemap(key: string, url?: string, data?: any, format?: number): Loader;
        totalLoadedFiles(): number;
        totalLoadedPacks(): number;
        totalQueuedFiles(): number;
        totalQueuedPacks(): number;
        transformUrl(url: string, file?: any): string;
        updateProgress(): void;
        video(key: string, urls: string | string[]| any, loadEvent?: string, asBlob?: boolean): Loader;
        withSyncPoint(callback: Function, callbackContext?: any): Loader;
        xml(key: string, url?: string, overwrite?: boolean): Loader;
        xhrLoad(file: any, url: string, type: string, onload: Function, onerror?: Function): void;
        xhrLoadWithXDR(file: any, url: string, type: string, onload: Function, onerror?: Function): void;
        xmlLoadComplete(file: any, xhr: XMLHttpRequest): void;

    }

    export class LoaderParser {

        static bitmapFont(xml: any, baseTexture: PIXI.BaseTexture, xSpacing?: number, ySpacing?: number): any;
        static xmlBitmapFont(xml: any, baseTexture: PIXI.BaseTexture, xSpacing?: number, ySpacing?: number): any;
        static jsonBitmapFont(json: any, baseTexture: PIXI.BaseTexture, xSpacing?: number, ySpacing?: number): any;

    }

    export class Matrix extends PIXI.Matrix {

        a: number;
        b: number;
        c: number;
        d: number;
        tx: number;
        ty: number;
        type: number;

        constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);

        apply(pos: Point, newPos?: Point): Point;
        applyInverse(pos: Point, newPos?: Point): Point;
        clone(output?: Matrix): Matrix;
        copyFrom(matrix: Matrix): Matrix;
        copyTo(matrix: Matrix): Matrix;
        fromArray(array: number[]): Matrix;
        setTo(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix;
        toArray(transpose?: boolean, array?: number[]): number[];
        translate(x: number, y: number): Matrix;
        scale(x: number, y: number): Matrix;
        rotate(angle: number): Matrix;
        append(matrix: Matrix): Matrix;
        identity(): Matrix;

    }

    export class Math {

        static angleBetween(x1: number, y1: number, x2: number, y2: number): number;
        static angleBetweenPoints(point1: Point, point2: Point): number;
        static angleBetweenY(x1: number, y1: number, x2: number, y2: number): number;
        static angleBetweenPointsY(point1: Point, point2: Point): number;
        static average(...numbers: number[]): number;
        static bernstein(n: number, i: number): number;
        static bezierInterpolation(v: number[], k: number): number;
        static catmullRom(p0: number, p1: number, p2: number, p3: number, t: number): number;
        static catmullRomInterpolation(v: number[], k: number): number;
        static ceilTo(value: number, place?: number, base?: number): number;
        static clamp(x: number, a: number, b: number): number;
        static clampBottom(x: number, a: number): number;
        static degToRad(degrees: number): number;
        static difference(a: number, b: number): number;
        static distance(x1: number, y1: number, x2: number, y2: number): number;
        static distanceSq(x1: number, y1: number, x2: number, y2: number): number;
        static distancePow(xy: number, y1: number, x2: number, y2: number, pow?: number): number;
        static factorial(value: number): number;
        static floorTo(value: number, place: number, base: number): number;
        static fuzzyCeil(val: number, epsilon?: number): boolean;
        static fuzzyEqual(a: number, b: number, epsilon?: number): boolean;
        static fuzzyLessThan(a: Number, b: number, epsilon?: number): boolean;
        static fuzzyFloor(val: number, epsilon?: number): boolean;
        static fuzzyGreaterThan(a: number, b: number, epsilon?: number): boolean;
        static fuzzyLessThan(a: number, b: number, epsilon?: number): boolean;
        static isEven(n: number): boolean;
        static isOdd(n: number): boolean;
        static linear(p0: number, p1: number, t: number): number;
        static linearInterpolation(v: number[], k: number): number;
        static mapLinear(x: number, a1: number, a2: number, b1: number, b2: number): number;
        static max(...numbers: number[]): number;
        static maxAdd(value: number, amount: number, max: number): number;
        static maxProperty(...numbers: number[]): number;
        static min(...numbers: number[]): number;
        static minProperty(...numbers: number[]): number;
        static minSub(value: number, amount: number, min: number): number;
        static normalizeAngle(angle: number, radians?: boolean): number;
        static percent(a: number, b: number, base?: number): number;
        static p2px(v: number): number;
        static PI2: number;
        static radToDeg(radians: number): number;
        static reverseAngle(angleRed: number): number;
        static roundAwayFromZero(value: number): number;
        static roundTo(value: number, place?: number, base?: number): number;
        static shear(n: number): number;
        static sign(x: number): number;
        static sinCosGenerator(length: number, sinAmplitude?: number, cosAmplitude?: number, frequency?: number): { sin: number[]; cos: number[]; };
        static smootherstep(x: number, min: number, max: number): number;
        static smoothstep(x: number, min: number, max: number): number;
        static snapTo(input: number, gap: number, start?: number): number;
        static snapToCeil(input: number, gap: number, start?: number): number;
        static snapToFloor(input: number, gap: number, start?: number): number;
        static within(a: number, b: number, tolerance: number): boolean;
        static wrap(value: number, min: number, max: number): number;
        static wrapAngle(angle: number, radians?: boolean): number;
        static wrapValue(value: number, amount: number, max: number): number;

    }

    interface WheelEventProxy {

        bindEvent(event: any): WheelEventProxy;

        type: string;
        deltaMode: number;
        deltaX: number;
        deltaY: number;
        deltaZ: number;

    }

    export class Mouse {

        constructor(game: Game);

        static NO_BUTTON: number;
        static LEFT_BUTTON: number;
        static MIDDLE_BUTTON: number;
        static RIGHT_BUTTON: number;
        static BACK_BUTTON: number;
        static FORWARD_BUTTON: number;
        static WHEEL_DOWN: number;
        static WHEEL_UP: number;

        button: number;
        callbackContext: any;
        capture: boolean;
        enabled: boolean;
        event: MouseEvent;
        game: Game;
        input: Input;
        locked: boolean;
        mouseDownCallback: (event: MouseEvent) => void;
        mouseOutCallback: (event: MouseEvent) => void;
        mouseOverCallback: (event: MouseEvent) => void;
        mouseUpCallback: (event: MouseEvent) => void;
        mouseWheelCallback: (event: MouseEvent) => void;
        _onMouseDown: (event: MouseEvent) => void;
        _onMouseMove: (event: MouseEvent) => void;
        _onMouseUp: (event: MouseEvent) => void;
        _onMouseOut: (event: MouseEvent) => void;
        _onMouseOver: (event: MouseEvent) => void;
        _onMouseWheel: (event: MouseEvent) => void;
        _wheelEvent: WheelEventProxy;
        pointerLock: Signal;
        stopOnGameOut: boolean;
        wheelDelta: number;

        onMouseDown(event: MouseEvent): void;
        onMouseMove(event: MouseEvent): void;
        onMouseOut(event: MouseEvent): void;
        onMouseOver(event: MouseEvent): void;
        onMouseUp(event: MouseEvent): void;
        onMouseUpGlobal(event: MouseEvent): void;
        onMouseWheel(event: MouseEvent): void;
        pointerLockChange(event: MouseEvent): void;
        releasePointerLock(): void;
        requestPointerLock(): void;
        start(): void;
        stop(): void;

    }

    export class MSPointer {

        constructor(game: Game);

        button: number;
        capture: boolean;
        callbackContext: any;
        event: MSPointerEvent;
        game: Game;
        input: Input;

        onPointerDown: (event: MSPointerEvent) => void;
        onPointerMove: (event: MSPointerEvent) => void;
        onPointerUp: (event: MSPointerEvent) => void;
        mouseDownCallback: (event: MSPointerEvent) => void;
        mouseMoveCallback: (event: MSPointerEvent) => void;
        mouseUpCallback: (event: MSPointerEvent) => void;
        pointerDownCallback: (event: MSPointerEvent) => void;
        pointerMoveCallback: (event: MSPointerEvent) => void;
        pointerUpCallback: (event: MSPointerEvent) => void;

        start(): void;
        stop(): void;

    }

    export class Net {

        constructor(game: Game);

        game: Game;

        checkDomainName(domain: string): boolean;
        decodeURI(value: string): string;
        getHostName(): string;
        getQueryString(parameter?: string): string;
        updateQueryString(key: string, value: any, redirect?: boolean, url?: string): string;

    }

    export class Particle extends Sprite {

        constructor(game: Game, x: number, y: number, key?: any, frame?: any);

        fresh: boolean;

        onEmit(): void;
        reset(x: number, y: number, health?: number): Particle;
        setAlphaData(data: any[]): void;
        setScaleData(data: any[]): void;
        update(): void;

    }

    export class Particles {

        constructor(game: Game);

        emitters: any;
        game: Game;
        ID: number;

        add(emitter: Particles.Arcade.Emitter): Particles.Arcade.Emitter;
        remove(emitter: Particles.Arcade.Emitter): void;
        update(): void;

    }

    export module Particles {

        export module Arcade {

            export class Emitter extends Group {

                constructor(game: Game, x?: number, y?: number, maxParticles?: number);

                alphaData: any[];
                autoAlpha: boolean;
                autoScale: boolean;
                angle: number;
                angularDrag: number;
                bottom: number;
                bounce: Point;
                emitX: number;
                emitY: number;
                exists: boolean;
                frequency: number;
                gravity: number;
                group: Group;
                height: number;
                left: number;
                lifespan: number;
                maxParticles: number;
                maxParticleScale: number;
                maxParticleSpeed: Point;
                maxRotation: number;
                minParticleScale: number;
                minParticleSpeed: Point;
                minRotation: number;
                name: string;
                on: boolean;
                particleBringToTop: boolean;
                particleSendToBack: boolean;
                particleClass: Sprite;
                particleDrag: Point;
                physicsType: number;
                position: Point;
                right: number;
                scaleData: any[];
                top: number;
                type: number;
                width: number;
                x: number;
                y: number;

                at(object: any): void;
                emitParticle(): void;
                explode(lifespan?: number, quantity?: number): void;
                flow(lifespan?: number, frequency?: number, quantity?: number, total?: number, immediate?: boolean): void;
                kill(): void;
                makeParticles(keys: any, frames?: any, quantity?: number, collide?: boolean, collideWorldBounds?: boolean): Particles.Arcade.Emitter;
                reset(x: number, y: number, health?: number): Particles;
                setAlpha(min?: number, max?: number, rate?: number, ease?: (k: number) => number, yoyo?: boolean): void;
                setRotation(min?: number, max?: number): void;
                setScale(minX?: number, maxX?: number, minY?: number, maxY?: number, rate?: number, ease?: (k: number) => number, yoyo?: boolean): void;
                setSize(width: number, height: number): void;
                setXSpeed(min: number, max: number): void;
                setYSpeed(min: number, max: number): void;
                start(explode?: boolean, lifespan?: number, frequency?: number, quantity?: number, forceQuantity?: boolean): void;
                update(): void;
                revive(): void;

            }
        }
    }

    export class Physics {

        constructor(game: Game, config?: any);

        static ARCADE: number;
        static P2JS: number;
        static NINJA: number;
        static BOX2D: number;
        static CHIPMUNK: number;
        static MATTERJS: number;

        arcade: Physics.Arcade;
        config: any;
        game: Game;
        ninja: Physics.Ninja;
        p2: Physics.P2;
        //todo box2d
        box2d: any;
        //todo chipmunk
        //chipmunk: any;
        //todo matter
        //matter: any;

        clear(): void;
        destroy(): void;
        enable(object: any, system?: number, debug?: boolean): void;
        parseConfig(): void;
        preUpdate(): void;
        reset(): void;
        setBoundsToWorld(): void;
        startSystem(system: number): void;
        update(): void;

    }

    export class Video {

        game: Game;
        key: string;
        video: HTMLVideoElement;
        baseTexture: PIXI.BaseTexture;
        texture: PIXI.Texture;
        textureFrame: Frame;
        type: number;
        disableTextureUpload: boolean;
        dirty: boolean;

        currentTime: number;
        duration: number;
        progress: number;
        mute: boolean;
        paused: boolean;
        volume: boolean;
        playbackRate: boolean;
        playing: boolean;
        loop: boolean;
        width: number;
        height: number;
        videoStream: any;
        isStreaming: boolean;
        snapshot: BitmapData;
        timeout: number;
        retryLimit: number;
        retry: number;
        retryInterval: number;

        onAccess: Signal;
        onError: Signal;
        onPlay: Signal;
        onComplete: Signal;
        onUpdate: Signal;
        onTimeout: Signal;

        touchLocked: boolean;
        complete: () => void;

        constructor(game: Game, key?: string, url?: string);

        add(object: Sprite | Sprite[]| Image | Image[]): Video;
        addToWorld(x?: number, y?: number, anchorX?: number, anchorY?: Number, scaleX?: number, scaleY?: number): Image;
        createVideoFromBlob(blob: Blob): Video;
        startMediaStream(captureAudio?: boolean, width?: number, height?: number): Video;
        createVideoFromURL(url: string, autoplay?: boolean): Video;
        changeSource(src: string, autoplay?: boolean): Video;
        connectToMediaStram(video: any, stream: any): Video;
        destroy(): void;
        play(loop?: boolean, playbackRate?: number): Video;
        playHandler(): void;
        render(): void;
        removeVideoElement(): void;
        resizeFrame(parent: any, width: number, height: number): void;
        setTouchLock(): void;
        grab(clear?: boolean, alpha?: number, blendMode?: string): BitmapData;
        stop(): void;
        unlock(): boolean;
        updateTexture(event?: any, width?: number, height?: number): void;

    }

    export module Physics {

        export class Arcade {

            static SORT_NONE: number;
            static LEFT_RIGHT: number;
            static RIGHT_LEFT: number;
            static TOP_BOTTOM: number;
            static BOTTOM_TOP: number;
            static OVERLAP_BIAS: number;
            static TILE_BIAS: number;

            constructor(game: Game);

            bounds: Rectangle;
            checkCollision: { up?: boolean; down?: boolean; left?: boolean; right?: boolean; };
            forceX: boolean;
            game: Game;
            gravity: Point;
            quadTree: QuadTree;
            maxObjects: number;
            maxLevels: number;
            skipQuadTree: boolean;
            sortDirection: number;

            accelerationFromRotation(rotation: number, speed?: number, point?: Point): Point;
            accelerateToObject(displayObject: any, destination: any, speed?: number, xSpeedMax?: number, ySpeedMax?: number): number;
            accelerateToPointer(displayObject: any, pointer?: Pointer, speed?: number, xSpeedMax?: number, ySpeedMax?: number): number;
            accelerateToXY(displayObject: any, x: number, y: number, speed?: number, xSpeedMax?: number, ySpeedMax?: number): number;
            angleBetween(source: any, target: any): number;
            angleToPointer(displayObject: any, pointer?: Pointer): number;
            angleToXY(displayObject: any, x: number, y: number): number;
            collide(object1: any, object2: any, collideCallback?: Function, processCallback?: Function, callbackContext?: any): boolean;
            computeVelocity(axis: number, body: Physics.Arcade.Body, velocity: number, acceleration: number, drag: number, max?: number): number;
            distanceBetween(source: any, target: any): number;
            distanceToPointer(displayObject: any, pointer?: Pointer): number;
            distanceToXY(displayObject: any, x: number, y: number): number;
            enable(object: any, children?: Boolean): void;
            enableBody(object: any): void;
            getObjectsAtLocation(x: number, y: number, group: Group, callback?: (callbackArg: any, object: any) => void, callbackContext?: any, callbackArg?: any): Sprite[];
            intersects(body1: Physics.Arcade.Body, body2: Physics.Arcade.Body): boolean;
            moveToObject(displayObject: any, destination: any, speed?: number, maxTime?: number): number;
            moveToPointer(displayObject: any, speed?: number, pointer?: Pointer, maxTime?: number): number;
            moveToXY(displayObject: any, x: number, y: number, speed?: number, maxTime?: number): number;
            overlap(object1: any, object2: any, overlapCallback?: Function, processCallback?: Function, callbackContext?: any): boolean;
            processTileSeparationX(body: Physics.Arcade.Body, x: number): boolean;
            processTileSeparationY(body: Physics.Arcade.Body, y: number): void;
            setBounds(x: number, y: number, width: number, height: number): void;
            setBoundsToWorld(): void;
            separate(body1: Physics.Arcade.Body, body2: Physics.Arcade.Body, processCallback?: Function, callbackContext?: any, overlapOnly?: boolean): boolean;
            separateX(body1: Physics.Arcade.Body, body2: Physics.Arcade.Body, overlapOnly: boolean): boolean;
            separateY(body1: Physics.Arcade.Body, body2: Physics.Arcade.Body, overlapOnly: boolean): boolean;
            separateTile(i: number, body: Physics.Arcade.Body, tile: Tile): boolean;
            sort(group: Group): void;
            tileCheckX(body: Physics.Arcade.Body, tile: Tile): number;
            tileCheckY(body: Physics.Arcade.Body, tile: Tile): number;
            updateMotion(body: Physics.Arcade.Body): void;
            velocityFromAngle(angle: number, speed?: number, point?: Point): Point;
            velocityFromRotation(rotation: number, speed?: number, point?: Point): Point;

        }

        export module Arcade {

            export class Body {

                constructor(sprite: Sprite);

                acceleration: Point;
                allowGravity: boolean;
                allowRotation: boolean;
                angle: number;
                angularAcceleration: number;
                angularDrag: number;
                angularVelocity: number;
                blocked: FaceChoices;
                bottom: number;
                bounce: Point;
                center: Point;
                checkCollision: FaceChoices;
                collideWorldBounds: boolean;
                customSeparateX: boolean;
                customSeparateY: boolean;
                deltaMax: Point;
                dirty: boolean;
                drag: Point;
                embedded: boolean;
                enable: boolean;
                facing: number;
                friction: Point;
                game: Game;
                gravity: Point;
                halfWidth: number;
                halfHeight: number;
                immovable: boolean;
                mass: number;
                maxAngular: number;
                maxVelocity: Point;
                moves: boolean;
                newVelocity: Point;
                offset: Point;
                overlapX: number;
                overlapY: number;
                phase: number;
                position: Point;
                preRotation: number;
                prev: Point;
                right: number;
                rotation: number;
                skipQuadTree: boolean;
                sourceWidth: number;
                sourceHeight: number;
                speed: number;
                sprite: Sprite;
                syncBounds: boolean;
                tilePadding: Point;
                touching: FaceChoices;
                type: number;
                wasTouching: FaceChoices;
                width: number;
                velocity: Point;
                x: number;
                y: number;

                checkWorldBounds(): void;
                deltaX(): number;
                deltaY(): number;
                deltaZ(): number;
                deltaAbsX(): void;
                deltaAbsY(): void;
                destroy(): void;
                hitTest(x: number, y: number): boolean;
                onFloor(): void;
                onWall(): void;
                preUpdate(): void;
                postUpdate(): void;
                render(context: any, body: Physics.Arcade.Body, color?: string, filled?: boolean): void;
                renderBodyInfo(debug: Utils.Debug, body: Physics.Arcade.Body): void;
                reset(x: number, y: number): void;
                setSize(width: number, height: number, offsetX?: number, offsetY?: number): void;
                updateBounds(): boolean;

            }

            export class FaceChoices {

                none: boolean;
                any: boolean;
                up: boolean;
                down: boolean;
                left: boolean;
                right: boolean;

            }
        }

        export class Ninja {

            constructor(game: Game);

            game: Game
            gravity: number;
            bounds: Rectangle;
            maxObjects: number;
            maxLevels: number;
            quadTree: QuadTree;
            time: Time;

            clearTilemapLayerBodies(map: Tilemap, layer: any): void;
            collide(object1: any, object2: any, collideCallback?: Function, processCallback?: Function, callbackContext?: any): boolean;
            convertTilemap(map: Tilemap, layer: any, slopeMap: any): Physics.Ninja.Tile[];
            enableAABB(object: any, children?: boolean): void;
            enableCircle(object: any, radius: number, children?: boolean): void;
            enableTile(object: any, id: number, children?: boolean): void;
            enable(object: any, type?: number, id?: number, radius?: number, children?: boolean): void;
            enableBody(object: any, type?: number, id?: number, radius?: number): void;
            overlap(object1: any, object2: any, overlapCallback?: Function, processCallback?: Function, callbackContext?: any): boolean;
            separate(body1: Physics.Ninja.Body, body2: Physics.Ninja.Body, processCallback?: Function, callbackContext?: any, overlapOnly?: boolean): boolean;
            setBounds(x: number, y: number, width: number, height: number): void;
            setBoundsToWorld(): void;
        }

        export module Ninja {

            export class Body {

                constructor(system: Physics.Ninja, sprite: Sprite, type?: number, id?: number, radius?: number, x?: number, y?: number, width?: number, height?: number);

                aabb: Physics.Ninja.AABB;
                angle: number;
                bottom: number;
                bounce: number;
                checkCollision: Physics.Arcade.FaceChoices;
                circle: Physics.Ninja.Circle;
                collideWorldBounds: boolean;
                drag: number;
                facing: number;
                friction: number;
                game: Game;
                gravityScale: number;
                height: number;
                immovable: boolean;
                maxSpeed: number;
                right: number;
                sprite: Sprite;
                system: Physics.Ninja;
                tile: Physics.Ninja.Tile;
                touching: Physics.Arcade.FaceChoices;
                type: number;
                shape: any;
                speed: number;
                velocity: Point;
                wasTouching: Physics.Arcade.FaceChoices;
                width: number;
                x: number;
                y: number;

                deltaAbsX(): number;
                deltaAbsY(): number;
                deltaX(): number;
                deltaY(): number;
                destroy(): void;
                setZeroVelocity(): void;
                moveTo(speed: number, angle: number): void;
                moveFrom(speed: number, angle: number): void;
                moveLeft(speed: number): void;
                moveRight(speed: number): void;
                moveUp(speed: number): void;
                moveDown(speed: number): void;
                poseUpdate(): void;
                preUpdate(): void;
                render(context: any, body: Physics.Ninja.Body, color?: string, filled?: boolean): void;
                reset(): void;

            }

            export class AABB {

                constructor(body: Physics.Ninja.Body, x: number, y: number, width: number, height: number);

                static COL_NONE: number;
                static COL_AXIS: number;
                static COL_OTHER: number;

                aabbTileProjections: any;
                body: Physics.Ninja.Body;
                height: number;
                oldPos: Point;
                pos: Point;
                system: Physics.Ninja;
                width: number;
                velocity: Point;
                xw: number;
                yw: number;

                collideWorldBounds(): void;
                collideAABBVsAABB(aabb: Physics.Ninja.AABB): boolean;
                collideAABBVsTile(tile: Physics.Ninja.Tile): boolean;
                destroy(): void;
                integrate(): void;
                render(context: any, xOffset: number, yOffset: number, color: string, filled: boolean): void;
                reportCollision(px: number, py: number, dx: number, dy: number): void;
                reportCollisionVsWorld(px: number, py: number, dx: number, dy: number, obj: any): void;
                reportCollisionVsBody(px: number, py: number, dx: number, dy: number, obj: any): void;
                resolveTile(x: number, y: number, body: Physics.Ninja.AABB, tile: Physics.Ninja.Tile): boolean;
                reverse(): void;

            }

            export class Circle {

                constructor(body: Physics.Ninja.Body, x: number, y: number, radius: number);

                COL_NONE: number;
                COL_AXIS: number;
                COL_OTHER: number;

                body: Physics.Ninja.Body;
                circleTileProjections: { [index: number]: ((x: number, y: number, oH: number, oV: number, obj: Physics.Ninja.Circle, t: Physics.Ninja.Tile) => number); };
                oldPos: Point;
                height: number;
                pos: Point;
                radius: number;
                system: Physics.Ninja;
                type: number;
                velocity: Point;
                width: number;
                xw: number;
                yw: number;

                collideCircleVsTile(tile: Physics.Ninja.Tile): boolean;
                collideWorldBounds(): void;
                destroy(): void;
                distance(dest: number, round?: boolean): number;
                integrate(): void;
                render(context: any, xOffset: number, yOffset: number, color: string, filled: boolean): void;
                reportCollisionVsWorld(px: number, py: number, dx: number, dy: number, obj: any): void;
                reportCollisionVsBody(px: number, py: number, dx: number, dy: number, obj: any): void;
                resolveCircleTile(x: number, y: number, oH: number, oV: number, obj: Physics.Ninja.Circle, t: Physics.Ninja.Tile): boolean;

            }

            export const enum TileType {
                TYPE_EMPTY,
                TYPE_FULL,
                TYPE_45DEG,
                TYPE_CONCAVE,
                TYPE_CONVEX,
                TYPE_22DEGs,
                TYPE_22DEGb,
                TYPE_67DEGs,
                TYPE_67DEGb,
                TYPE_HALF
            }

            export class Tile {

                constructor(body: Physics.Ninja.Body, x: number, y: number, width: number, height: number, type?: number);

                body: Physics.Ninja.Body;
                bottom: number;
                flipped: boolean;
                height: number;
                id: number;
                oldpos: Point;
                pos: Point;
                right: number;
                rotation: number;
                system: Physics.Ninja;
                type: Physics.Ninja.TileType;
                velocity: Point;
                width: number;
                xw: number;
                yw: number;
                x: number;
                y: number;

                clear(): void;
                collideWorldBounds(): void;
                destroy(): void;
                integrate(): void;
                reportCollisionVsWorld(px: number, py: number, dx: number, dy: number, obj: any): void;
                setType(id: number): number;

            }

        }

        export class P2 {

            constructor(game: Game, config?: any);

            applyDamping: boolean;
            applyGravity: boolean;
            applySpringForces: boolean;
            boundsCollidesWith: Physics.P2.Body[];
            boundsCollisionGroup: Physics.P2.CollisionGroup;
            config: any;
            callbackContext: any;
            collisionGroups: Physics.P2.CollisionGroup[];
            contactMaterial: Physics.P2.ContactMaterial;
            emitImpactEvent: boolean;
            everythingCollisionGroup: Physics.P2.CollisionGroup;
            frameRate: number;
            friction: number;
            game: Game;
            gravity: Physics.P2.InversePointProxy;
            materials: Physics.P2.Material[];
            nothingCollisionGroup: Physics.P2.CollisionGroup;
            onBodyAdded: Signal;
            onBodyRemoved: Signal;
            onBeginContact: Signal;
            onConstraintAdded: Signal;
            onConstraintRemoved: Signal;
            onContactMaterialAdded: Signal;
            onContactMaterialRemoved: Signal;
            onEndContact: Signal;
            onSpringAdded: Signal;
            onSpringRemoved: Signal;
            paused: boolean;
            postBroaddphaseCallback: Function;
            restitution: number;
            solveConstraints: boolean;
            time: any;
            total: number;
            useElapsedTime: boolean;
            walls: {
                left?: Physics.P2.Body;
                right?: Physics.P2.Body;
                top?: Physics.P2.Body;
                bottom?: Physics.P2.Body;
            };
            world: p2.World;

            addBody(body: Physics.P2.Body): boolean;
            addContactMaterial(material: Physics.P2.ContactMaterial): Physics.P2.ContactMaterial;
            addConstraint<T>(constraint: T): T;
            addSpring(spring: Physics.P2.Spring): Physics.P2.Spring;
            beginContactHandler(event: any): void;
            clear(): void;
            clearTilemapLayerBodies(map: Tilemap, layer?: any): void;
            convertCollisionObjects(map: Tilemap, layer?: any, addToWorld?: boolean): Physics.P2.Body[];
            convertTilemap(map: Tilemap, layer?: any, addToWorld?: Boolean, optimize?: boolean): Physics.P2.Body[];
            createBody(x: number, y: number, mass: number, addToWorld?: boolean, options?: p2.BodyOptions, data?: number[][]): Physics.P2.Body;
            createBody(x: number, y: number, mass: number, addToWorld?: boolean, options?: p2.BodyOptions, data?: number[]): Physics.P2.Body;
            createCollisionGroup(group?: Group): Physics.P2.CollisionGroup;
            createCollisionGroup(group?: Sprite): Physics.P2.CollisionGroup;
            createContactMaterial(materialA: Physics.P2.Material, materialB: Physics.P2.Material, options?: p2.ContactMaterialOptions): Physics.P2.ContactMaterial;
            createDistanceConstraint(bodyA: any, bodyB: any, distance: number, localAnchorA?: number[], localAnchorB?: number[], maxForce?: number): Physics.P2.DistanceConstraint;
            createGearConstraint(bodyA: any, bodyB: any, angle?: number, ratio?: number): Physics.P2.GearConstraint;
            createLockConstraint(bodyA: any, bodyB: any, offset?: number[], angle?: number, maxForce?: number): Physics.P2.LockConstraint;
            createMaterial(name?: string, body?: Physics.P2.Body): Physics.P2.Material;
            createParticle(x: number, y: number, mass: number, addToWorld?: boolean, options?: p2.BodyOptions, data?: number[][]): Physics.P2.Body;
            createParticle(x: number, y: number, mass: number, addToWorld?: boolean, options?: p2.BodyOptions, data?: number[]): Physics.P2.Body;
            createPrismaticConstraint(body: any, bodyB: any, lockRotation?: boolean, anchorA?: number[], anchorB?: number[], axis?: Float32Array, maxForce?: number): Physics.P2.PrismaticConstraint;
            createRevoluteConstraint(bodyA: any, pivotA: number[], bodyB: any, pivotB: number[], maxForce?: number, worldPivot?: number[]): Physics.P2.RevoluteConstraint;
            createRotationalSpring(bodyA: any, bodyB: any, restAngle?: number, stiffness?: number, damping?: number): p2.RotationalSpring;
            createSpring(bodyA: any, bodyB: any, restLength?: number, stiffness?: number, damping?: number, worldA?: number[], worldB?: number[], localA?: number[], localB?: number[]): Physics.P2.Spring;
            destroy(): void;
            enable(object: any, debug?: boolean, children?: boolean): void;
            enableBody(object: any, debug: boolean): void;
            endContactHandler(event: any): void;
            getBodies(): Physics.P2.Body[];
            getBody(object: any): Physics.P2.Body;
            getConstraints(): p2.Constraint[];
            getSprings(): Physics.P2.Spring[];
            getContactMaterial(materialA: Physics.P2.Material, materialB: Physics.P2.Material): Physics.P2.ContactMaterial;
            hitTest(worldPoint: Point, bodies?: any[], precision?: number, filterStatic?: boolean): Physics.P2.Body[];
            mpx(v: number): number;
            mpxi(v: number): number;
            pause(): void;
            preUpdate(): void;
            pxm(v: number): number;
            pxmi(v: number): number;
            removeBody(body: Physics.P2.Body): Physics.P2.Body;
            removeBodyNextStep(body: Physics.P2.Body): void;
            removeConstraint<T>(constraint: T): T;
            removeContactMaterial(material: Physics.P2.ContactMaterial): Physics.P2.ContactMaterial;
            removeSpring(spring: Physics.P2.Spring): Physics.P2.Spring;
            reset(): void;
            resume(): void;
            setBounds(x: number, y: number, width: number, height: number, left?: Boolean, right?: boolean, top?: boolean, bottom?: boolean, setCollisionGroup?: boolean): void;
            setBoundsToWorld(left?: boolean, right?: boolean, top?: boolean, bottom?: boolean, setCollisionGroup?: boolean): void;
            setCollisionGroup(object: any, group: Physics.P2.CollisionGroup): void;
            setImpactEvents(state: boolean): void;
            setMaterial(material: Physics.P2.Material, bodies?: Physics.P2.Body[]): void;
            setPostBroadphaseCallback(callback: Function, context: any): void;
            setWorldMaterial(material: Physics.P2.Material, left?: boolean, right?: boolean, top?: boolean, bottom?: boolean): void;
            toJSON(): any;
            update(): void;
            updateBoundsCollisionGroup(setCollisionGroup?: boolean): void;

        }

        export module P2 {

            export class Body {

                static DYNAMIC: number;
                static STATIC: number;
                static KINEMATIC: number;

                constructor(game: Game, sprite?: Sprite, x?: number, y?: number, mass?: number);

                allowSleep: boolean;
                angle: number;
                angularDamping: number;
                angularForce: number;
                angularVelocity: number;
                collidesWith: Physics.P2.CollisionGroup[];
                collideWorldBounds: boolean;
                damping: number;
                data: p2.Body;
                debug: boolean;
                debugBody: Physics.P2.BodyDebug;
                dynamic: boolean;
                fixedRotation: boolean;
                force: Physics.P2.InversePointProxy;
                kinematic: boolean;
                game: Game;
                gravity: Point;
                id: number;
                inertia: number;
                mass: number;
                motionState: number;
                offset: Point;
                onBeginContact: Signal;
                onEndContact: Signal;
                rotation: number;
                removeNextStep: boolean;
                sprite: Sprite;
                sleepSpeedLimit: number;
                static: boolean;
                type: number;
                velocity: Physics.P2.InversePointProxy;
                world: Physics.P2;
                x: number;
                y: number;

                addToWorld(): void;
                addCapsule(length: number, radius: number, offsetX?: number, offsetY?: number, rotation?: number): p2.Capsule;
                addCircle(radius: number, offsetX?: number, offsetY?: number, rotation?: number): p2.Circle;
                addFixture(fixtureData: string): p2.Shape[];
                addLine(length: number, offsetX?: number, offsetY?: number, rotation?: number): p2.Line;
                addParticle(offsetX?: number, offsetY?: number, rotation?: number): p2.Particle;
                addPolygon(options: { optimalDecomp?: boolean; skipSimpleCheck?: boolean; removeCollinearPoints?: boolean; }, points: number[][]): boolean;
                addPhaserPolygon(key: string, object: string): Physics.P2.FixtureList;
                addPlane(offsetX?: number, offsetY?: number, rotation?: number): p2.Plane;
                addRectangle(width: number, height: number, offsetX?: number, offsetY?: number, rotation?: number): p2.Rectangle;
                addShape(shape: p2.Shape, offsetX?: number, offsetY?: number, rotation?: number): p2.Shape;
                adjustCenterOfMass(): void;
                applyDamping(dt: number): void;
                applyForce(force: number[], worldX: number, worldY: number): void;
                applyImpulse(impulse: number[], worldX: number, worldY: number): void;
                applyImpulseLocal(force: number[], localX: number, localY: number): void;
                clearCollision(clearGroup?: boolean, cleanMask?: boolean, shape?: p2.Shape): void;
                clearShapes(): void;
                collides(group: any, callback?: Function, callbackContext?: any, shape?: p2.Shape): void;
                createBodyCallback(object: any, callback: Function, callbackContext: any): void;
                createGroupCallback(group: Physics.P2.CollisionGroup, callback: Function, callbackContext: any): void;
                destroy(): void;
                getCollisionMask(): number;
                getVelocityAtPoint(result: number[], relativePoint: number[]): number[];
                loadPolygon(key: string, object: string): boolean;
                moveBackward(speed: number): void;
                moveDown(speed: number): void;
                moveForward(speed: number): void;
                moveLeft(speed: number): void;
                moveRight(speed: number): void;
                moveUp(speed: number): void;
                preUpdate(): void;
                postUpdate(): void;
                removeFromWorld(): void;
                removeShape(shape: p2.Shape): boolean;
                reverse(speed: number): void;
                rotateLeft(speed: number): void;
                rotateRight(speed: number): void;
                reset(x: number, y: number, resetDamping?: boolean, resetMass?: boolean): void;
                shapeChanged(): void;
                setCircle(radius: number, offsetX?: number, offsetY?: number, rotation?: number): p2.Circle;
                setCollisionGroup(group: Physics.P2.CollisionGroup, shape?: p2.Shape): void;
                setRectangle(width?: number, height?: number, offsetX?: number, offsetY?: number, rotation?: number): p2.Rectangle;
                setRectangleFromSprite(sprite: any): p2.Rectangle;
                setMaterial(material: Physics.P2.Material, shape?: p2.Shape): void;
                setZeroDamping(): void;
                setZeroForce(): void;
                setZeroRotation(): void;
                setZeroVelocity(): void;
                toLocalFrame(out: number[], worldPoint: number[]): void;
                thrust(speed: number): void;
                toWorldFrame(out: number[], localPoint: number[]): void;
                updateCollisionMask(shape?: p2.Shape): void;

            }

            export class BodyDebug extends Group {

                constructor(game: Game, body: Physics.P2.Body, settings: { pixelsPerLengthUnit?: number; debugPolygons?: boolean; lineWidth?: number; alpha?: number; });

                body: Physics.P2.Body;
                canvas: Graphics;
                ppu: number;

                updateSpriteTransform(): void;
                draw(): void;

            }

            export class CollisionGroup {

                constructor(bitmask: number);

                mask: number;

            }

            export class ContactMaterial extends p2.ContactMaterial {

            }

            export class DistanceConstraint extends p2.DistanceConstraint {

                constructor(world: Physics.P2, bodyA: Physics.P2.Body, bodyB: Physics.P2.Body, distance: number, maxForce: number);

                game: Game;
                world: Physics.P2;

            }

            export class FixtureList {

                constructor(list: any[]);

                flatten(array: any[]): any[];
                getFixtures(keys: string): any[];
                getFixtureByKey(key: string): any[];
                getGroup(groupID: number): any[];
                init(): void;
                parse(): void;
                setCategory(bit: number, fictureKey: string): void;
                setMask(bit: number, fixtureKey: string): void;
                setMaterial(material: any, fixtureKey: string): void;
                setSensor(value: boolean, fixtureKey: string): void;

            }

            export class GearConstraint extends p2.GearConstraint {

                constructor(world: Physics.P2, bodyA: Physics.P2.Body, bodyB: Physics.P2.Body, angle?: number, ratio?: number);

                game: Game;
                world: Physics.P2;

            }

            export class InversePointProxy {

                constructor(world: Physics.P2, destination: any);

                x: number;
                y: number;
                mx: number;
                my: number;

            }

            export class LockConstraint extends p2.LockConstraint {

                constructor(world: Physics.P2, bodyA: Physics.P2.Body, bodyB: Physics.P2.Body, offset?: number[], angle?: number, maxForce?: number);

                game: Game;
                world: Physics.P2;
            }

            export class Material extends p2.Material {

                constructor(name: string);

                name: string;

            }

            export class PointProxy {

                constructor(world: Physics.P2, destination: any);

                x: number;
                y: number;
                mx: number;
                my: number;

            }

            export class PrismaticConstraint extends p2.PrismaticConstraint {

                constructor(world: Physics.P2, bodyA?: Physics.P2.Body, bodyB?: Physics.P2.Body, lockRotation?: boolean, anchorA?: number[], anchorB?: number[], axis?: number[], maxForce?: number);

                game: Game;
                world: Physics.P2;

            }

            export class RevoluteConstraint extends p2.RevoluteConstraint {

                constructor(world: Physics.P2, bodyA: Physics.P2.Body, pivotA: number[], bodyB: Physics.P2.Body, pivotB: number[], maxForce?: number);

                game: Game;
                world: Physics.P2;

            }

            export class Spring {

                constructor(world: Physics.P2, bodyA: Physics.P2.Body, bodyB: Physics.P2.Body, restLength?: number, stiffness?: number, damping?: number, worldA?: number[], worldB?: number[], localA?: number[], localB?: number[]);

                data: p2.LinearSpring;
                game: Game;
                world: Physics.P2;

            }
        }
    }

    export class Plugin implements IStateCycle {

        constructor(game: Game, parent: PIXI.DisplayObject);

        active: boolean;
        game: Game;
        hasPostRender: boolean;
        hasPostUpdate: boolean;
        hasPreUpdate: boolean;
        hasRender: boolean;
        hasUpdate: boolean;
        parent: PIXI.DisplayObject;
        visible: boolean;

        destroy(): void;
        postRender(): void;
        preUpdate(): void;
        render(): void;
        update(): void;

    }

    export module Plugin {

        export class AStar extends Plugin {

            static VERSION: string;
            static COST_ORTHAGONAL: number;
            static COST_DIAGAONAL: number;
            static DISTANCE_MANHATTEN: string;
            static DISTANCE_EUCLIDIAN: string;

            constructor(parent: PIXI.DisplayObject);

            parent: PIXI.DisplayObject;
            version: string;

            findPath(startPoint: Point, goalPoint: Point): Plugin.AStar.AStarPath;
            isWalkable(x: number, y: number): boolean;
            setAStarMap(map: Tilemap, layerName: string, tilesetName: string): Plugin.AStar;

        }

        export module AStar {

            export class AStarNode {

                constructor(x: number, y: number, isWalkable: boolean);

                x: number;
                y: number;
                g: number;
                h: number;
                f: number;
                parent: Plugin.AStar.AStarNode;
                travelCost: number;
                walkable: boolean;

            }

            export class AStarPath {

                constructor(nodes: Plugin.AStar.AStarNode[], start: Plugin.AStar.AStarNode, goal: Plugin.AStar.AStarNode);

                nodes: Plugin.AStar.AStarNode[];
                start: Plugin.AStar.AStarNode;
                goal: Plugin.AStar.AStarNode;
                visited: Plugin.AStar.AStarNode[];

            }

        }

        export class ColorHarmony extends Plugin {

            getAnalogousHarmony(color: number, threshold?: number): any;
            getComplementHarmony(color: number): number;
            getSplitComplementHarmony(color: number, threshold: number): any;
            getTriadicHarmony(color: number): any;

        }

        export class CSS3Filters extends Plugin {

            constructor(parent: PIXI.DisplayObject);

            blur: number;
            brightness: number;
            contrast: number;
            grayscale: number;
            hueRotate: number;
            invert: number;
            opacity: number;
            saturate: number;
            sepia: number;

        }

        export class TilemapWalker extends Plugin {

            constructor(game: Game, map: Tilemap, layer?: any, x?: number, y?: number);

            collides: boolean;
            game: Game;
            history: boolean;
            facing: number;
            map: Tilemap;
            location: Point;
            locationLayer: number;

            checkTile(x: number, y: number): boolean;
            getTileFromLocation(x: number, y: number): Tile;
            getTiles(width: number, height: number, center?: boolean): any[];
            getTileBehind(distance?: number): Tile;
            getTileBehindLeft(distance?: number): Tile;
            getTileBehindRight(distance?: number): Tile;
            getTileAhead(distance?: number): Tile;
            getTileAheadLeft(distance?: number): Tile;
            getTileAheadRight(distance?: number): Tile;
            getTileLeft(distance: number): Tile;
            getTileRight(distance: number): Tile;
            moveForward(): boolean;
            moveBackward(): boolean;
            moveLeft(): boolean;
            moveRight(): boolean;
            putTile(index: number): void;
            setLocation(x: number, y: number, layer?: any): boolean;
            turnLeft(): void;
            turnRight(): void;
            updateLocation(x: number, y: number): boolean;

        }

        export class SamplePlugin extends Plugin {

            constructor(game: Game, parent: PIXI.DisplayObject);

            addSprite(sprite: Sprite): void;
            update(): void;

        }

        export class VirtualJoystick extends Plugin {

            constructor(game: Game, parent: any);

            angle: number;
            base: Sprite;
            baseBMD: BitmapData;
            baseCircle: Circle;
            deltaX: number;
            deltaY: number;
            distance: number;
            force: number;
            isDragging: boolean;
            limit: number;
            limitPoint: Point;
            location: Point;
            nub: Sprite;
            nubBMD: BitmapData;
            speed: number;
            x: number;
            y: number;

            init(x: number, y: number, diameter?: number, limit?: number): void;
            move(pointer: Pointer, x: number, y: number): void;
            render(): void;
            setVelocity(sprite: Sprite, minSpeed?: number, maxSpeed?: number): Sprite;
            startDrag(): void;
            stopDrag(nub: Sprite, pointer: Pointer): void;
            update(): void;

        }



        export class Webcam extends Plugin {

            constructor(game: Game, parent: PIXI.DisplayObject);

            active: boolean;
            context: any;
            stream: any;
            video: HTMLVideoElement;

            connectCallback: (stream: any) => void;
            errorCallback: (e: any) => void;
            grab: (context: any, x: number, y: number) => void;
            start(width: number, height: number, context: any): void;
            stop(): void;
            update(): void;
        }

        export class Juicy extends Plugin {

            constructor(game: Game);

            createScreenFlash(color?: string): Plugin.Juicy.ScreenFlash;
            createTrail(length?: number, color?: number): Plugin.Juicy.Trail;
            overScale(object: Sprite, scale?: number, initialScale?: Point): void;
            jelly(object: Sprite, strength?: number, delay?: number, initialScale?: Point): void;
            mouseStretch(object: Sprite, strength?: number, initialScale?: Point): void;
            update(): void;
            shake(duration?: number, strength?: number): void;
        }

        export module Juicy {

            export class Trail {

                constructor(game: Game, trailLength?: number, color?: number);

                target: Sprite;
                trailLength: number;
                trailWidth: number;
                trailScaling: boolean;
                trailColor: number;

                update(): void;
                addSegment(x: number, y: number): void;
                redrawSegments(offsetX: number, offsetY: number): void;

            }

            export class ScreenFlash {

                constructor(game: Game, color?: string);

                flash(maxAlpha?: number, duration?: number): void;

            }
        }
    }

    export class PluginManager implements IStateCycle {

        constructor(game: Game);

        game: Game;
        plugins: Plugin[];

        add(plugin: Plugin | typeof Plugin, ...parameter: any[]): Plugin;
        destroy(): void;
        postRender(): void;
        postUpdate(): void;
        preUpdate(): void;
        remove(plugin: Plugin): void;
        removeAll(): void;
        render(): void;
        update(): void;

    }

    export class Point extends PIXI.Point {

        constructor(x?: number, y?: number);

        x: number;
        y: number;
        type: number;

        static add(a: Point, b: Point, out?: Point): Point;
        static subtract(a: Point, b: Point, out?: Point): Point;
        static multiply(a: Point, b: Point, out?: Point): Point;
        static divide(a: Point, b: Point, out?: Point): Point;
        static equals(a: Point, b: Point): boolean;
        static angle(a: Point, b: Point): number;
        static angleSq(a: Point, b: Point): number;
        static negative(a: Point, out?: Point): Point;
        static multiplyAdd(a: Point, b: Point, scale: number, out?: Point): Point;
        static interpolate(a: Point, b: Point, alpha: number, out?: Point): Point;
        static parse(obj: any, xProp?: string, yProp?: string): Point;
        static perp(a: Point, out?: Point): Point;
        static rperp(a: Point, out?: Point): Point;
        static distance(a: any, b: any, round?: boolean): number;
        static project(a: Point, b: Point, out?: Point): Point;
        static projectUnit(a: Point, b: Point, out?: Point): Point;
        static normalRightHand(a: Point, out?: Point): Point;
        static normalize(a: Point, out?: Point): Point;
        static rotate(a: Point, x: number, y: number, angle: number, asDegrees?: boolean, distance?: number): Point;
        static centroid(points: Point[], out?: Point): Point;

        add(x: number, y: number): Point;
        angle(a: Point, asDegrees?: boolean): number;
        angleSq(a: Point): number;
        clamp(min: number, max: number): Point;
        clampX(min: number, max: number): Point;
        clampY(min: number, max: number): Point;
        clone(output?: Point): Point;
        copyFrom(source: Point): Point;
        copyTo<T>(dest: T): T;
        ceil(): Point;
        cross(a: Point): number;
        divide(x: number, y: number): Point;
        distance(dest: Point, round?: boolean): number;
        dot(a: Point): number;
        equals(a: Point): boolean;
        floor(): Point;
        getMagnitude(): number;
        getMagnitudeSq(): number;
        invert(): Point;
        isZero(): boolean;
        multiply(x: number, y: number): Point;
        normalize(): Point;
        normalRightHand(): Point;
        perp(): Point;
        rperp(): Point;
        rotate(a: Point, x: number, y: number, angle: number, asDegrees?: boolean, distance?: number): Point;
        set(x: number, y?: number): Point;
        setMagnitude(magnitude: number): Point;
        setTo(x: number, y?: number): Point;
        subtract(x: number, y: number): Point;
        toString(): string;

    }

    export class Pointer {

        constructor(game: Game, id: number);

        static NO_BUTTON: number;
        static LEFT_BUTTON: number;
        static RIGHT_BUTTON: number;
        static MIDDLE_BUTTON: number;
        static BACK_BUTTON: number;
        static FORWARD_BUTTON: number;
        static ERASER_BUTTON: number;

        active: boolean;
        backButton: boolean;
        button: any;
        circle: Circle;
        clientX: number;
        clientY: number;
        dirty: boolean;
        duration: number;
        eraserButton: boolean;
        exists: boolean;
        forwardButton: boolean;
        game: Game;
        id: number;
        identifier: number;
        isDown: boolean;
        isMouse: boolean;
        isUp: boolean;
        leftButton: boolean;
        middleButton: boolean;
        movementX: number;
        movementY: number;
        msSinceLastClick: number;
        pageX: number;
        pageY: number;
        pointerId: number;
        position: Point;
        positionDown: Point;
        positionUp: Point;
        previousTapTime: number;
        rawMovementX: number;
        rawMovementY: number;
        rightButton: boolean;
        screenX: number;
        screenY: number;
        target: any;
        targetObject: any;
        timeDown: number;
        timeUp: number;
        totalTouches: number;
        type: number;
        withinGame: boolean;
        worldX: number;
        worldY: number;
        x: number;
        y: number;

        addClickTrampoline(name: string, callback: Function, callbackContext: any, ...callbackArgs: any[]): void;
        justPressed(duration?: number): boolean;
        justReleased(duration?: number): boolean;
        leave(event: any): void;
        move(event: any, fromClick?: boolean): void;
        reset(): void;
        resetButtons(): void;
        resetMovement(): void;
        start(event: any): void;
        stop(event: any): void;
        update(): void;
        updateButtons(event: MouseEvent): void;

    }

    export class Polygon {

        constructor(points: Point[]|number[]);
        constructor(...points: Point[]);
        constructor(...points: number[]);

        area: number;
        points: number[]|Point[];
        type: number;

        clone(output: Polygon): Polygon;
        contains(x: number, y: number): boolean;
        flatten(): Polygon;
        setTo(points: Point[]|number[]): void;
        setTo(...points: Point[]): void;
        setTo(...points: number[]): void;
        toNumberArray(output?: number[]): number[];

    }

    export class QuadTree {

        constructor(x: number, y: number, width: number, height: number, maxObject?: number, maxLevels?: number, level?: number);

        bounds: {
            x: number;
            y: number;
            width: number;
            height: number;
            subWidth: number;
            subHeight: number;
            right: number;
            bottom: number;
        };
        level: number;
        maxObjects: number;
        maxLevels: number;
        objects: any[];
        nodes: any[];

        clear(): void;
        getIndex(rect: any): number;
        insert(body: any): void;
        populate(group: Group): void;
        populateHandler(sprite: Sprite): void;
        reset(x: number, y: number, width: number, height: number, maxObject?: number, maxLevels?: number, level?: number): void;
        retrieve(source: any): any[];
        split(): void;

    }

    export class RandomDataGenerator {

        constructor(seeds: number[]);

        angle(): number;
        between(min: number, max: number): number;
        frac(): number;
        integer(): number;
        integerInRange(min: number, max: number): number;
        normal(): number;
        pick<T>(ary: T[]): T;
        real(): number;
        realInRange(min: number, max: number): number;
        sow(seeds: number[]): void;
        timestamp(min: number, max: number): number;
        uuid(): number;
        weightedPick<T>(ary: T[]): T;

    }

    export class Rectangle {

        constructor(x: number, y: number, width: number, height: number);

        bottom: number;
        bottomRight: Point;
        bottomLeft: Point;
        centerX: number;
        centerY: number;
        empty: boolean;
        halfHeight: number;
        halfWidth: number;
        height: number;
        left: number;
        perimeter: number;
        randomX: number;
        randomY: number;
        right: number;
        top: number;
        topLeft: Point;
        topRight: Point;
        type: number;
        volume: number;
        width: number;
        x: number;
        y: number;

        static aabb(points: Point[], out?: Rectangle): Rectangle;
        static clone(a: Rectangle, output?: Rectangle): Rectangle;
        static contains(a: Rectangle, x: number, y: number): boolean;
        static containsPoint(a: Rectangle, point: Point): boolean;
        static containsRaw(rx: number, ry: number, rw: number, rh: number, x: number, y: number): boolean;
        static containsRect(a: Rectangle, b: Rectangle): boolean;
        static equals(a: Rectangle, b: Rectangle): boolean;
        static inflate(a: Rectangle, dx: number, dy: number): Rectangle;
        static inflatePoint(a: Rectangle, point: Point): Rectangle;
        static intersection(a: Rectangle, b: Rectangle, out?: Rectangle): Rectangle;
        static intersects(a: Rectangle, b: Rectangle): boolean;
        static intersectsRaw(left: number, right: number, top: number, bottom: number, tolerance: number): boolean;
        static size(a: Rectangle, output?: Point): Point;
        static union(a: Rectangle, b: Rectangle, out?: Rectangle): Rectangle;

        ceil(): void;
        ceilAll(): void;
        centerOn(x: number, y: number): Rectangle;
        clone(output: Rectangle): Rectangle;
        contains(x: number, y: number): boolean;
        containsRect(b: Rectangle): boolean;
        copyFrom(source: any): Rectangle;
        copyTo(dest: any): any;
        equals(b: Rectangle): boolean;
        floor(): void;
        floorAll(): void;
        inflate(dx: number, dy: number): Rectangle;
        intersection(b: Rectangle, out: Rectangle): Rectangle;
        intersects(b: Rectangle, tolerance: number): boolean;
        intersectsRaw(left: number, right: number, top: number, bottom: number, tolerance: number): boolean;
        offset(dx: number, dy: number): Rectangle;
        offsetPoint(point: Point): Rectangle;
        random(out?: Point): Point;
        resize(width: number, height: number): Rectangle;
        setTo(x: number, y: number, width: number, height: number): Rectangle;
        scale(x: number, y?: number): Rectangle;
        size(output?: Point): Point;
        toString(): string;
        union(b: Rectangle, out?: Rectangle): Rectangle;

    }

    export class RenderTexture extends PIXI.RenderTexture {

        constructor(game: Game, width?: number, height?: number, key?: string, scaleMode?: number, resolution?: number);

        crop: PIXI.Rectangle;
        game: Game;
        key: string;
        type: number;

        render(displayObject: PIXI.DisplayObject, matrix?: Matrix, clear?: boolean): void;
        renderXY(displayObject: PIXI.DisplayObject, x: number, y: number, clear?: boolean): void;
        renderRawXY(displayObject: PIXI.DisplayObject, x: number, y: number, clear?: boolean): void;

    }

    export class RequestAnimationFrame {

        constructor(game: Game, forceSetTimeOut?: boolean);

        forceSetTimeOut: boolean;
        game: Game;
        isRunning: boolean;

        isRAF(): boolean;
        isSetTimeOut(): boolean;
        start(): boolean;
        stop(): void;
        updateRAF(rafTime: number): void;
        updateSetTimeout(): void;

    }

    export class RetroFont extends RenderTexture {

        constructor(game: Game, key: string, characterWidth: number, characterHeight: number, chars: string, charsPerRow?: number, xSpacing?: number, ySpacing?: number, xOffset?: number, yOffset?: number);

        static ALIGN_CENTER: string;
        static ALIGN_LEFT: string;
        static ALIGN_RIGHT: string;
        static TEXT_SET1: string;
        static TEXT_SET2: string;
        static TEXT_SET3: string;
        static TEXT_SET4: string;
        static TEXT_SET5: string;
        static TEXT_SET6: string;
        static TEXT_SET7: string;
        static TEXT_SET8: string;
        static TEXT_SET9: string;
        static TEXT_SET10: string;
        static TEXT_SET11: string;

        align: string;
        autoUpperCase: boolean;
        characterHeight: number;
        characterPerRow: number;
        characterSpacingX: number;
        characterSpacingY: number;
        characterWidth: number;
        customSpacingX: number;
        customSpacingY: number;
        fixedWidth: number;
        fontSet: Image;
        frameData: FrameData;
        multiLine: boolean;
        offsetX: number;
        offsetY: number;
        smoothed: string;
        stamp: Image;
        text: string;

        buildRetroFontText(): void;
        getLongestLine(): number;
        pasteLine(line: string, x: number, y: number, customSpacingX: number): void;
        removeUnsupportedCharacters(stripCR?: boolean): string;
        setFixedWidth(width: number, lineAlignment?: string): void;
        setText(content: string, multiLine?: boolean, characterSpacing?: number, lineSpacing?: number, lineAlignment?: string, allowLowerCase?: boolean): void;
        updateOffset(x?: number, y?: number): void;

    }

    export class Rope extends PIXI.Rope {

        constructor(game: Game, x: number, y: number, key: string|RenderTexture|BitmapData|PIXI.Texture | Video, frame?: string|number, points?: Point[]);

        angle: number;
        animations: AnimationManager;
        alive: boolean;
        autoCull: boolean;
        body: Physics.Arcade.Body | Physics.P2.Body | Physics.Ninja.Body | any;
        bottom: number;
        cameraOffset: Point;
        checkWorldBounds: boolean;
        cropRect: Rectangle;
        components: any;
        customRender: boolean;
        debug: boolean;
        deltaX: number;
        deltaY: number;
        deltaZ: number;
        destroyPhase: boolean;
        exists: boolean;
        events: Events;
        fixedToCamera: boolean;
        frame: string|number;
        frameName: string;
        fresh: boolean;
        game: Game;
        inCamera: boolean;
        input: InputHandler;
        inputEnabled: boolean;
        inWorld: boolean;
        left: number;
        lifespan: number;
        key: string|RenderTexture|BitmapData|PIXI.Texture|Video;
        name: string;
        offsetX: number;
        offsetY: number;
        outOfBoundsKill: boolean;
        overlap(displayObject: Sprite | Image | TileSprite | Button | PIXI.DisplayObject): boolean;
        pendingDestroy: boolean;
        points: Point[];
        position: Point;
        previousPosition: Point;
        previousRotation: number;
        right: number;
        renderOrderID: number;
        segments: Rectangle[];
        smoothed: boolean;
        top: number;
        type: number;
        transformCallback: Function;
        transformCallbackContent: any;
        scaleMin: Point;
        scaleMax: Point;
        updateAnimation: Function;
        world: Point;
        x: number;
        y: number;
        z: number;

        bringToTop(): Rope;
        checkTransform(wt: PIXI.Matrix): void;
        crop(rect: Rectangle, copy?: boolean): void;
        destroy(destroyChildren?: boolean): void;
        kill(): Rope;
        loadTexture(key: string | RenderTexture | BitmapData | Video | PIXI.Texture, frame?: string | number, stopAnimation?: boolean): void;
        moveUp(): Rope;
        moveDown(): Rope;
        play(name: string, frameRate?: number, loop?: boolean, killOnComplete?: boolean): Animation;
        preUpdate(): void;
        postUpdate(): void;
        reset(x: number, y: number, health?: number): Rope;
        resizeFrame(parent: any, width: number, height: number): void;
        resetFrame(): void;
        revive(health?: number): Rope;
        sendToBack(): Rope;
        setFrame(frame: Frame): void;
        setScaleMinMax(minX?: number, minY?: number, maxX?: number, maxY?: number): void;
        updateCrop(): void;
        update(): void;

    }

    export class RoundedRectangle extends PIXI.RoundedRectangle {

        x: number;
        y: number;
        width: number;
        height: number;
        radius: number;
        type: number;

        clone(): RoundedRectangle;
        contains(x: number, y: number): boolean;

    }

    export class Signal {

        active: boolean;
        boundDispatch: Function;
        memorize: boolean;

        add(listener: Function, listenerContext?: any, priority?: number, ...args: any[]): SignalBinding;
        addOnce(listener: Function, listenerContext?: any, priority?: number, ...args: any[]): SignalBinding;
        dispatch(...params: any[]): void;
        dispose(): void;
        forget(): void;
        getNumListeners(): number;
        halt(): void;
        has(listener: Function, context?: any): boolean;
        remove(listener: Function, context?: any): Function;
        removeAll(context?: any): void;
        toString(): string;
        validateListener(listener: Function, fnName: string): void;

    }

    export class SignalBinding {

        constructor(signal: Signal, listener: Function, isOnce: boolean, listenerContext?: any, priority?: number, ...args: any[]);

        active: boolean;
        callCount: number;
        context: any;
        params: any[];

        execute(paramsArr?: any[]): void;
        detach(): Function;
        isBound(): boolean;
        isOnce(): boolean;
        getListener(): Function;
        getSignal(): Signal;
        toString(): string;

    }

    export class SinglePad {

        constructor(game: Game, padParent: any);

        callbackContext: any;
        connected: boolean;
        deadZone: number;
        game: Game;
        index: number;
        onAxisCallback: Function;
        onConnectCallback: Function;
        onDisconnectCallback: Function;
        onDownCallback: Function;
        onFloatCallback: Function;
        onUpCallback: Function;

        axis(axisCode: number): number;
        addCallbacks(context: any, callbacks: any): void;
        buttonValue(buttonCode: number): number;
        connect(rawPad: any): void;
        destroy(): void;
        disconnect(): void;
        getButton(buttonCode: number): GamepadButton;
        isDown(buttonCode: number): boolean;
        isUp(buttonCode: number): boolean;
        justPressed(buttonCode: number, duration?: number): boolean;
        justReleased(buttonCode: number, duration?: number): boolean;
        pollStatus(): void;
        processAxisChange(axisState: any): void;
        processButtonDown(buttonCode: number, value: any): void;
        processButtonFloat(buttonCode: number, value: any): void;
        processButtonUp(buttonCode: number, value: any): void;
        reset(): void;

    }

    export class Sound {

        constructor(game: Game, key: string, volume?: number, loop?: boolean, connect?: boolean);

        autoplay: boolean;
        allowMultiple: boolean;
        context: any;
        currentMarker: string;
        currentTime: number;
        destroy(remove?: boolean): void;
        duration: number;
        durationMS: number;
        externalNode: any;
        fadeTween: Tween;
        game: Game;
        gainNode: any;
        isDecoded: boolean;
        isDecoding: boolean;
        isPlaying: boolean;
        key: string;
        loop: boolean;
        markers: any;
        masterGainNode: any;
        mute: boolean;
        name: string;
        onDecoded: Signal;
        onEndedHandler: () => void;
        onFadeComplete: Signal;
        onLoop: Signal;
        onMarkerComplete: Signal;
        onMute: Signal;
        onPause: Signal;
        onPlay: Signal;
        onResume: Signal;
        onStop: Signal;
        override: boolean;
        paused: boolean;
        pausedPosition: number;
        pausedTime: number;
        pendingPlayback: boolean;
        position: number;
        startTime: number;
        stopTime: number;
        totalDuration: number;
        usingAudioTag: boolean;
        usingWebAudio: boolean;
        volume: number;

        addMarker(name: string, start: number, duration: number, volume?: number, loop?: boolean): void;
        destroy(): void;
        fadeIn(duration?: number, loop?: boolean, marker?: string): void;
        fadeOut(duration?: number): void;
        fadeTo(duration?: number, volume?: number): void;
        loopFull(volume?: number): Sound;
        pause(): void;
        play(marker?: string, position?: number, volume?: number, loop?: boolean, forceRestart?: boolean): Sound;
        removeMarker(name: string): void;
        restart(marker: string, position: number, volume?: number, loop?: boolean): void;
        resume(): void;
        soundHasUnlocked(key: string): void;
        stop(): void;
        update(): void;

    }

    export class SoundManager {

        constructor(game: Game);

        channels: number;
        connectToMaster: boolean;
        context: any;
        game: Game;
        mute: boolean;
        noAudio: boolean;
        onSoundDecode: Signal;
        onVolumeChange: Signal;
        onMute: Signal;
        onUnMute: Signal;
        touchLocked: boolean;
        usingAudioTag: boolean;
        usingWebAudio: boolean;
        volume: number;

        add(key: string, volume?: number, loop?: boolean, connect?: boolean): Sound;
        addSprite(key: string): AudioSprite;
        boot(): void;
        decode(key: string, sound?: Sound): void;
        destroy(): void;
        pauseAll(): void;
        play(key: string, volume?: number, loop?: boolean): Sound;
        remove(sound: Sound): boolean;
        removeByKey(key: string): number;
        resumeAll(): void;
        setDecodedCallback(files: string[]|Sound[], callback: Function, callbackContext: any): void;
        setTouchLock(): void;
        stopAll(): void;
        unlock(): boolean;
        update(): void;

    }

    export class Sprite extends PIXI.Sprite {

        constructor(game: Game, x: number, y: number, key?: string|RenderTexture|BitmapData|PIXI.Texture, frame?: string|number);

        alive: boolean;
        anchor: Point;
        angle: number;
        animations: AnimationManager;
        autoCull: boolean;
        body: Physics.Arcade.Body | Physics.P2.Body | Physics.Ninja.Body | any;
        bottom: number;
        cameraOffset: Point;
        checkWorldBounds: boolean;
        components: any;
        cropRect: Rectangle;
        customRender: boolean;
        debug: boolean;
        deltaX: number;
        deltaY: number;
        deltaZ: number;
        destroyPhase: boolean;
        events: Events;
        exists: boolean;
        fixedToCamera: boolean;
        frame: string|number;
        frameName: string;
        fresh: boolean;
        game: Game;
        health: number;
        inCamera: boolean;
        input: InputHandler;
        inputEnabled: boolean;
        inWorld: boolean;
        key: string | RenderTexture | BitmapData | Video | PIXI.Texture;
        left: number;
        lifespan: number;
        maxHealth: number;
        name: string;
        offsetX: number;
        offsetY: number;
        outOfBoundsKill: boolean;
        pendingDestroy: boolean;
        previousPosition: Point;
        previousRotation: number;
        position: Point;
        physicsEnabled: boolean;
        physicsType: number;
        renderOrderID: number;
        right: number;
        scale: Point;
        scaleMin: Point;
        scaleMax: Point;
        smoothed: boolean;
        top: number;
        type: number;
        tintedTexture: HTMLCanvasElement;
        transformCallback: Function;
        transformCallbackContent: any;
        world: Point;
        x: number;
        y: number;
        z: number;

        bringToTop(): Sprite;
        crop(rect: Rectangle, copy: boolean): void;
        checkTransform(wt: PIXI.Matrix): void;
        damage(amount: number): Sprite;
        destroy(destroyChildren?: boolean): void;
        drawPolygon(): void;
        heal(amount: number): Sprite;
        kill(): Sprite;
        loadTexture(key: string | RenderTexture | BitmapData | Video | PIXI.Texture, frame?: string|number, stopAnimation?: boolean): void;
        moveUp(): Sprite;
        moveDown(): Sprite;
        overlap(displayObject: Sprite | Image | TileSprite | Button | PIXI.DisplayObject): boolean;
        play(name: string, frameRate?: number, loop?: boolean, killOnComplete?: boolean): Animation;
        postUpdate(): void;
        preUpdate(): void;
        reset(x: number, y: number, health?: number): Sprite;
        resetFrame(): void;
        resizeFrame(parent: any, width: number, height: number): void;
        revive(health?: number): Sprite;
        sendToBack(): Sprite;
        setFrame(frame: Frame): void;
        setScaleMinMax(minX?: number, minY?: number, maxX?: number, maxY?: number): void;
        update(): void;
        updateCrop(): void;

    }

    export class SpriteBatch extends Group {

        constructor(game: Game, parent: PIXI.DisplayObjectContainer, name?: string, addedToStage?: boolean);

        type: number;

    }

    export class Stage extends PIXI.Stage {

        constructor(game: Game);

        backgroundColor: any;
        currentRenderOrderID: number;
        disableVisibilityChange: boolean;
        exists: boolean;
        game: Game;
        name: string;
        smoothed: boolean;

        boot(): void;
        checkVisibility(): void;
        destroy(): void;
        parseConfig(config: any): void;
        postUpdate(): void;
        preUpdate(): void;
        setBackgroundColor(backgroundColor: number|string): void;
        update(): void;
        updateTransform(): void;
        visibilityChange(event: Event): void;

    }

    export interface IResizeCallback {
        (scale: ScaleManager, parentBounds: Rectangle): any;
    }

    export class ScaleManager {

        constructor(game: Game, width: number|string, height: number|string);

        static EXACT_FIT: number;
        static NO_SCALE: number;
        static SHOW_ALL: number;
        static RESIZE: number;
        static USER_SCALE: number;

        aspectRatio: number;
        bounds: Rectangle;
        boundingParent: HTMLElement;
        compatibility: {
            canExpandParent: boolean;
            clickTrampoline: string;
            forceMinimumDocumentHeight: boolean;
            noMargins: boolean;
            scrollTo: Point;
            supportsFullScreen: boolean;
        };
        currentScaleMode: number;
        dom: DOM;
        enterIncorrectOrientation: Signal;
        event: any;
        forceLandscape: boolean;
        forcePortrait: boolean;
        fullScreenScaleMode: number;
        fullScreenTarget: HTMLElement;
        game: Game;
        grid: FlexGrid;
        height: number;
        incorrectOrientation: boolean;
        isFullScreen: boolean;
        isGameLandscape: boolean; //readonly
        isGamePortrait: boolean; //readonly
        isPortrait: boolean;
        isLandscape: boolean;
        leaveIncorrectOrientation: Signal;
        margin: { left: number; top: number; right: number; bottom: number; x: number; y: number; };
        maxHeight: number;
        maxWidth: number;
        minHeight: number;
        minWidth: number;
        offset: Point;
        onFullScreenInit: Signal;
        onFullScreenChange: Signal;
        onFullScreenError: Signal;
        onOrientationChange: Signal;
        onSizeChange: Signal;
        pageAlignHorizontally: boolean;
        pageAlignVertically: boolean;
        parentNode: HTMLElement;
        parentIsWindow: boolean;
        parentScaleFactor: Point;
        scaleFactor: Point;
        scaleFactorInversed: Point;
        scaleMode: number;
        screenOrientation: string;
        sourceAspectRatio: number;
        trackParentInterval: number;
        width: number;
        windowConstraints: {
            bottom: boolean;
            right: boolean;
        };

        boot(): void;
        createFullScreenTarget(): HTMLDivElement;
        destroy(): void;
        forceOrientation(forceLandscape: boolean, forcePortrait?: boolean): void;
        getParentBounds(target?: Rectangle): Rectangle;
        parseConfig(config: any): void;
        preUpdate(): void;
        pauseUpdate(): void;
        refresh(): void;
        setGameSize(width: number, height: number): void;
        setResizeCallback(callback: IResizeCallback, context: any): void;
        setUserScale(hScale: number, vScale: number, hTrim?: number, vTrim?: number): void;
        setMinMax(minWidth: number, minHeight: number, maxWidth?: number, maxHeight?: number): void;
        setupScale(width: number, height: number): void;
        setupScale(width: string, height: string): void;
        scaleSprite(sprite: Sprite, width?: number, height?: number, letterBox?: boolean): Sprite;
        scaleSprite(sprite: Image, width?: number, height?: number, letterBox?: boolean): Sprite;
        startFullScreen(antialias?: boolean, allowTrampoline?: boolean): boolean;
        stopFullScreen(): boolean;

    }

    export class DOM {

        static visualBounds: Rectangle;
        static layoutBounds: Rectangle;
        static documentBounds: Rectangle;

        static calibrate(coords: any, cushion?: number): any;
        static getAspectRatio(object: any): number;
        static getScreenOrientation(primaryFallback?: string): string;
        static getBounds(element: any, cushion?: number): any;
        static getOffset(element: any, point?: Point): Point;
        static inLayoutViewport(element: any, cushion?: number): boolean;
    }

    export class State {

        add: GameObjectFactory;
        cache: Cache;
        camera: Camera;
        game: Game;
        input: Input;
        key: string;
        load: Loader;
        make: GameObjectCreator;
        particles: Particles;
        physics: Physics;
        rnd: RandomDataGenerator;
        scale: ScaleManager;
        sound: SoundManager;
        stage: Stage;
        time: Time;
        tweens: TweenManager;
        world: World;

        create(): void;
        init(...args: any[]): void;
        loadRender(): void;
        loadUpdate(): void;
        paused(): void;
        pauseUpdate(): void;
        preload(): void;
        preRender(): void;
        render(): void;
        resize(): void;
        resumed(): void;
        shutdown(): void;
        update(): void;

    }

    export interface IStateCycle {

        preUpdate(): void;
        update(): void;
        render(): void;
        postRender(): void;
        destroy(): void;
    }

    export class StateManager {

        constructor(game: Game, pendingState?: State);

        created: boolean;
        current: string;
        game: Game;
        onCreateCallback: Function;
        onInitCallback: Function;
        onLoadRenderCallback: Function;
        onLoadUpdateCallback: Function;
        onPausedCallback: Function;
        onPauseUpdateCallback: Function;
        onPreloadCallback: Function;
        onPreRenderCallback: Function;
        onRenderCallback: Function;
        onResumedCallback: Function;
        onResizeCallback: Function;
        onShutDownCallback: Function;
        onUpdateCallback: Function;
        states: any;

        onStateChange: Signal;
        add(key: string, state: any, autoStart?: boolean): void;
        checkState(key: string): boolean;
        clearCurrentState(): void;
        destroy(): void;
        getCurrentState(): State;
        link(key: string): void;
        loadComplete(): void;
        preRender(elapsedTime: number): void;
        preUpdate(): void;
        render(): void;
        remove(key: string): void;
        resume(): void;
        restart(clearWorld?: boolean, clearCache?: boolean): void;
        resize(width: number, height: number): void;
        start(key: string, clearWorld?: boolean, clearCache?: boolean, ...args: any[]): void;
        update(): void;
        unlink(key: string): void;

    }

    export interface IPhaserTextStyle {

        font?: string;
        fill?: any;
        align?: string;
        stroke?: string;
        strokeThickness?: number;
        wordWrap?: boolean;
        wordWrapWidth?: number;
        shadowOffsetX?: number;
        shadowOffsetY?: number;
        shadowColor?: string;
        shadowBlur?: number;
        valign?: string;
        tab?: number;
        tabs?: number;

        fontStyle?: string;
        fontVariant?: string;
        fontWeight?: string;
        backgroundColor?: string;
        boundsAlignH?: string;
        boundsAlignV?: string;

    }

    export class Text extends Sprite {

        constructor(game: Game, x: number, y: number, text: string, style?: IPhaserTextStyle);

        static fontPropertiesCanvas: any;
        static fontPropertiesContext: any;
        static fontPropertiesCache: any;

        align: string;
        angle: number;
        autoRound: boolean;
        boundsAlignH: string;
        boundsAlignV: string;
        cameraOffset: Point;
        canvas: HTMLCanvasElement;
        colors: string[];
        context: CanvasRenderingContext2D;
        cssFont: string;
        destroyPhase: boolean;
        events: Events;
        exists: boolean;
        fill: any;
        fixedToCamera: boolean;
        font: string;
        fontSize: number|string;
        fontWeight: string;
        fontStyle: string;
        fontVariant: string;
        game: Game;
        input: InputHandler;
        inputEnabled: boolean;
        lineSpacing: number;
        name: string;
        padding: Point;
        pendingDestroy: boolean;
        physicsType: number;
        position: Point;
        previousPosition: Point;
        previousRotation: number;
        renderOrderID: number;
        resolution: number;
        shadowBlur: number;
        shadowColor: string;
        shadowFill: boolean;
        shadowOffsetX: number;
        shadowOffsetY: number;
        shadowStroke: boolean;
        stroke: string;
        strokeColors: string[];
        strokeThickness: number;
        scale: Point;
        tab: number;
        tabs: number|number[];
        text: string;
        textBounds: Rectangle;
        type: number;
        world: Point;
        wordWrap: boolean;
        wordWrapWidth: number;
        z: number;

        addColor(color: string, position: number): Text;
        addStrokeColor(color: string, position: number): Text;
        clearColors(): Text;
        componentsToFont(components: any): string;
        destroy(destroyChildren?: boolean): void;
        fontToComponents(font: string): any;
        postUpdate(): void;
        parseList(list: any[]): Text;
        preUpdate(): void;
        renderTabLine(line: string, x: number, y: number, fill?: boolean);
        setShadow(x?: number, y?: number, color?: any, blur?: number, shadowStroke?: boolean, shadowFill?: boolean): Text;
        setStyle(style?: IPhaserTextStyle): Text;
        setText(text: string): Text;
        setTextBounds(x?: number, y?: number, width?: number, height?: number): Text;
        update(): void;
        updateFont(components: any): void;
        updateLine(text: string, x?: number, y?: number): void;
        updateShadow(state?: boolean): void;
        updateTexture(): void;

    }

    export class Tile {

        constructor(layer: any, index: number, x: number, y: Number, width: number, height: number);//

        alpha: number;
        bottom: number;
        callback: Function;
        callbackContext: any;
        centerX: number;
        centerY: number;
        canCollide: boolean;
        collideDown: boolean;
        collideLeft: boolean;
        collideNone: boolean;
        collideRight: boolean;
        collisionCallback: Function;
        collisionCallbackContext: any;
        collides: boolean;
        collideUp: boolean;
        faceBottom: boolean;
        faceLeft: boolean;
        faceRight: boolean;
        faceTop: boolean;
        game: Game;
        height: number;
        index: number;
        layer: any;
        left: number;
        properties: any;
        right: number;
        scanned: boolean;
        top: number;
        width: number;
        worldX: number;
        worldY: number;
        x: number;
        y: number;

        copy(tile: Tile): Tile;
        containsPoint(x: number, y: number): boolean;
        destroy(): void;
        intersects(x: number, y: number, right: number, bottom: number): boolean;
        isInterested(collides: boolean, faces: boolean): boolean;
        resetCollision(): void;
        setCollision(left: boolean, right: boolean, up: boolean, down: boolean): void;
        setCollisionCallback(callback: Function, context: any): void;

    }

    export class Tilemap {

        constructor(game: Game, key?: string, tileWidth?: number, tileHeight?: number, width?: number, height?: number);

        static CSV: number;
        static TILED_JSON: number;
        static NORTH: number;
        static EAST: number;
        static SOUTH: number;
        static WEST: number;

        collision: any[];
        collideIndexes: any[];
        currentLayer: number;
        debugMap: any[];
        format: number;
        game: Game;
        height: number;
        heightInPixels: number;
        images: any[];
        imagecollections: ImageCollection[];
        key: string;
        layer: TilemapLayer[];
        layers: any[];
        objects: any[];
        orientation: string;
        properties: any;
        tileHeight: number;
        tiles: Tile[];
        tilesets: Tileset[];
        tileWidth: number;
        version: number;
        width: number;
        widthInPixels: number;

        addTilesetImage(tileset: string, key?: string | BitmapData, tileWidth?: number, tileHeight?: number, tileMargin?: number, tileSpacing?: number, gid?: number): Tileset;
        calculateFaces(layer: number): void;
        copy(x: number, y: number, width: number, height: number, layer?: any): Tile[];
        create(name: string, width: number, height: number, tileWidth: number, tileHeight: number, group?: Group): TilemapLayer;
        createBlankLayer(name: string, width: number, height: number, tileWidth: number, tileHeight: number, group?: Group): TilemapLayer;
        createFromObjects(name: string, gid: number, key: string, frame?: any, exists?: boolean, autoCull?: boolean, group?: Group, CustomClass?: any, adjustY?: boolean): void;
        createFromTiles(tiles: any, replacements: any, key: string, layer?: any, group?: Group, properties?: any): number;
        createLayer(layer: any, width?: number, height?: number, group?: Group): TilemapLayer;
        destroy(): void;
        dump(): void;
        fill(index: number, x: number, y: number, width: number, height: number, layer?: any): void;
        forEach(callback: Function, context: any, x: number, y: Number, width: number, height: number, layer?: any): void;
        getImageIndex(name: string): number;
        getIndex(location: any[], name: string): number;
        getLayer(layer: any): number;
        getLayerIndex(name: string): number;
        getObjectIndex(name: string): number;
        getTile(x: number, y: number, layer?: any, nonNull?: boolean): Tile;
        getTileAbove(layer: number, x: number, y: number): Tile;
        getTileBelow(layer: number, x: number, y: number): Tile;
        getTileLeft(layer: number, x: number, y: number): Tile;
        getTileRight(layer: number, x: number, y: number): Tile;
        getTilesetIndex(name: string): number;
        getTileWorldXY(x: number, y: number, tileWidth?: number, tileHeight?: number, layer?: number|string|TilemapLayer, nonNull?: boolean): Tile;
        hasTile(x: number, y: number, layer: TilemapLayer): boolean;
        paste(x: number, y: number, tileblock: Tile[], layer?: any): void;
        putTile(tile: any, x: number, y: number, layer?: any): Tile;
        putTileWorldXY(tile: any, x: number, y: number, tileWidth: number, tileHeight: number, layer?: any): void;
        random(x: number, y: number, width: number, height: number, layer?: any): void;
        removeAllLayers(): void;
        removeTile(x: number, y: number, layer?: any): Tile;
        removeTileWorldXY(x: number, y: number, tileWidth: number, tileHeight: number, layer?: any): Tile;
        replace(source: number, dest: number, x: number, y: number, width: number, height: number, layer?: any): void;
        searchTileIndex(index: number, skip?: number, reverse?: boolean, layer?: any): Tile;
        setCollision(indexes: any, collides?: boolean, layer?: any, recalculate?: boolean): void;
        setCollisionBetween(start: number, stop: number, collides?: boolean, layer?: any, recalculate?: boolean): void;
        setCollisionByExclusion(indexes: any[], collides?: boolean, layer?: any, recalculate?: boolean): void;
        setCollisionByIndex(index: number, collides?: boolean, layer?: number, recalculate?: boolean): void;
        setLayer(layer: any): void;
        setPreventRecalculate(value: boolean): void;
        setTileIndexCallback(indexes: any, callback: Function, callbackContext: any, layer?: any): void;
        setTileLocationCallback(x: number, y: number, width: number, height: number, callback: Function, callbackContext: any, layer?: any): void;
        setTileSize(tileWidth: number, tileHeight: number): void;
        shuffle(x: number, y: number, width: number, height: number, layer: any): void;
        swap(tileA: number, tileB: number, x: number, y: number, width: number, height: number, layer?: any): void;

    }

    export class TilemapLayer extends Sprite {

        constructor(game: Game, tilemap: Tilemap, index: number, width?: number, height?: number);

        cameraOffset: Point;
        canvas: HTMLCanvasElement;
        collisionHeight: number;
        collisionWidth: number;
        context: CanvasRenderingContext2D;
        debug: boolean;
        debugAlpha: number;
        debugCallbackColor: string;
        debugColor: string;
        debugSettings: { missingImageFill: string; debuggedTileOverfill: string; forceFullRedraw: boolean; debugAlpha: number; facingEdgeStroke: string; collidingTileOverfill: string; };
        dirty: boolean;
        exists: boolean;
        fixedToCamera: boolean;
        game: Game;
        index: number;
        layer: TilemapLayer;
        map: Tilemap;
        name: string;
        physicsType: number;
        rayStepRate: number;
        renderSettings: { enableScrollDelta: boolean; overdrawRatio: number; copyCanvas: any; };
        scrollFactorX: number;
        scrollFactorY: number;
        scrollX: number;
        scrollY: number;
        type: number;
        wrap: boolean;

        getRayCastTiles(line: Line, stepRate?: number, collides?: boolean, interestingFace?: boolean): Tile[];
        getTiles(x: number, y: number, width: number, height: number, collides?: boolean, interestingFace?: boolean): Tile[];
        getTileX(x: number): number;
        getTileXY(x: number, y: number, point: Point): Point;
        getTileY(y: number): number;
        postUpdate(): void;
        render(): void;
        resize(width: number, height: number): void;
        resizeWorld(): void;
        resetTilesetCache(): void;
        setScale(xScale?: number, yScale?: number): void;
        updateMax(): void;

    }

    export class TilemapParser {

        static getEmptyData(tileWidth?: number, tileHeight?: number, width?: number, height?: number): any;
        static parse(game: Game, key: string, tileWidth?: number, tileHeight?: number, width?: number, height?: number): any;
        static parseCSV(key: string, data: string, tileWidth?: number, tileHeight?: number): any;
        static parseJSON(json: any): any;

    }

    export class Tileset {

        constructor(name: string, firstgid: number, width?: number, height?: number, margin?: number, spacing?: number, properties?: any);

        columns: number;
        firstgid: number;
        image: any;
        name: string;
        properties: any;
        rows: number;
        tileHeight: number;
        tileMargin: number;
        tileSpacing: number;
        tileWidth: number;
        total: number;

        containsTileIndex(tileIndex: number): boolean;
        draw(context: CanvasRenderingContext2D, x: number, y: number, index: number): void;
        setImage(image: any): void;
        setSpacing(margin?: number, spacing?: number): void;

    }

    export class TileSprite extends PIXI.TilingSprite {

        constructor(game: Game, x: number, y: number, width: number, height: number, key?: string|RenderTexture|BitmapData|PIXI.Texture, frame?: string|number);

        alive: boolean;
        angle: number;
        animations: AnimationManager;
        autoCull: boolean;
        body: Physics.Arcade.Body | Physics.P2.Body | Physics.Ninja.Body | any;
        bottom: number;
        cameraOffset: Point;
        checkWorldBounds: boolean;
        components: any;
        customRender: boolean;
        debug: boolean;
        destroyPhase: boolean;
        events: Events;
        exists: boolean;
        fixedToCamera: boolean;
        frame: string|number;
        frameName: string;
        fresh: boolean;
        game: Game;
        inCamera: boolean;
        input: InputHandler;
        inputEnabled: boolean;
        inWorld: boolean;
        key: string | RenderTexture | BitmapData | Video | PIXI.Texture;
        left: number;
        name: string;
        offsetX: number;
        offsetY: number;
        outOfBoundsKill: boolean;
        pendingDestroy: boolean;
        physicsType: number;
        position: Point;
        smoothed: boolean;
        previousPosition: Point;
        previousRoation: number;
        right: number;
        top: number;
        renderOrderID: number;
        type: number;
        world: Point;
        z: number;

        autoScroll(x: number, y: number): void;
        destroy(destroyChildren?: boolean): void;
        loadTexture(key: string | RenderTexture | BitmapData | Video | PIXI.Texture, frame?: string | number, stopAnimation?: boolean): void;
        play(name: string, frameRate?: number, loop?: boolean, killOnComplete?: boolean): Animation;
        postUpdate(): void;
        preUpdate(): void;
        overlap(displayObject: Sprite | Image | TileSprite | Button | PIXI.DisplayObject): boolean;
        reset(x: number, y: number, health?: number): TileSprite;
        resizeFrame(parent: any, width: number, height: number): void;
        resetFrame(): void;
        setFrame(frame: Frame): void;
        stopScroll(): void;
        update(): void;

    }

    export class Time {

        constructor(game: Game);

        advancedTiming: boolean;
        desiredFps: number;
        elapsed: number;
        events: Timer;
        elapsedMS: number;
        fps: number;
        fpsMax: number;
        fpsMin: number;
        frames: number;
        game: Game;
        lastTime: number;
        msMax: number;
        msMin: number;
        now: number;
        pausedTime: number;
        pauseDuration: number;
        physicsElapsed: number;
        physicsElapsedMS: number;
        prevTime: number;
        slowMotion: number;
        suggestedFps: number;
        time: number;
        timeExpected: number;
        timeToCall: number;

        add(timer: Timer): Timer;
        boot(): void;
        create(autoDestroy?: boolean): Timer;
        elapsedSecondsSince(since: number): number;
        elapsedSince(since: number): number;
        removeAll(): void;
        reset(): void;
        totalElapsedSeconds(): number;
        update(time: number): void;

    }

    export class Timer {

        constructor(game: Game, autoDestroy?: boolean);

        static HALF: number;
        static MINUTE: number;
        static QUARTER: number;
        static SECOND: number;

        autoDestroy: boolean;
        duration: number;
        events: TimerEvent[];
        expired: boolean;
        game: Game;
        length: number;
        ms: number;
        next: number;
        nextTick: number;
        onComplete: Signal;
        running: boolean;
        paused: boolean;
        seconds: number;

        add(delay: number, callback: Function, callbackContext?: any, ...args: any[]): TimerEvent;
        clearPendingEvents(): void;
        destroy(): void;
        loop(delay: number, callback: Function, callbackContext?: any, ...args: any[]): TimerEvent;
        order(): void;
        pause(): void;
        remove(event: TimerEvent): boolean;
        removeAll(): void;
        repeat(delay: number, repeatCount: number, callback: Function, callbackContext?: any, ...args: any[]): TimerEvent;
        resume(): void;
        sortHandler(a: any, b: any): number;
        start(startDelay?: number): void;
        stop(clearEvents?: boolean): void;
        update(time: number): boolean;

    }

    export class TimerEvent {

        constructor(timer: Timer, delay: number, tick: number, repeatCount: number, loop: boolean, callback: Function, callbackContext: any, ...args: any[]);

        args: any[];
        callback: Function;
        callbackContext: any;
        delay: number;
        loop: boolean;
        pendingDelete: boolean;
        repeatCount: number;
        tick: number;
        timer: Timer;

    }

    export class Touch {

        constructor(game: Game);

        callbackContext: any;
        enabled: boolean;
        event: any;
        game: Game;
        preventDefault: boolean;
        touchCancelCallback: Function;
        touchEndCallback: Function;
        touchEnterCallback: Function;
        touchLeaveCallback: Function;
        touchMoveCallback: Function;
        touchStartCallback: Function;
        touchLockCallbacks: Function[];

        addTouchLockCallback(callback: Function, context?: any): void;
        removeTouchLockCallback(callback: Function, context?: any): boolean;
        consumeTouchMove(): void;
        onTouchCancel(event: any): void;
        onTouchEnd(event: any): void;
        onTouchEnter(event: any): void;
        onTouchLeave(event: any): void;
        onTouchMove(event: any): void;
        onTouchStart(event: any): void;
        start(): void;
        stop(): void;

    }

    export class Tween {

        constructor(target: any, game: Game, manager: TweenManager);

        chainedTween: Tween;
        current: number;
        game: Game;
        isRunning: boolean;
        isPaused: boolean;
        manager: TweenManager;
        onChildComplete: Signal;
        onComplete: Signal;
        onLoop: Signal;
        onRepeat: Signal;
        onStart: Signal;
        pendingDelete: boolean;
        properties: any;
        repeatCounter: number;
        //repeatDelay: number;
        reverse: boolean;
        target: any;
        timeline: TweenData[];
        timeScale: number;
        totalDuration: number;

        chain(...args: any[]): Tween;
        delay(duration: number, index?: number): Tween;
        easing(ease: Function, index?: number): Tween;
        easing(ease: string, index?: number): Tween;
        from(properties: any, duration?: number, ease?: Function, autoStart?: boolean, delay?: number, repeat?: number, yoyo?: boolean): Tween;
        from(properties: any, duration?: number, ease?: string, autoStart?: boolean, delay?: number, repeat?: number, yoyo?: boolean): Tween;
        generateData(frameRate?: number, data?: any): any[];
        interpolation(interpolation: Function, context?: any, index?: number): Tween;
        loop(value?: boolean): Tween;
        onUpdateCallback(callback: Function, callbackContext?: any): Tween;
        pause(): void;
        repeat(total: number, repeatDelay?: number, index?: number): Tween;
        repeatDelay(duration: number, index?: number): Tween;
        repeatAll(total?: number): Tween;
        resume(): void;
        start(index?: number): Tween;
        stop(complete?: boolean): Tween;
        to(properties: any, duration?: number, ease?: Function, autoStart?: boolean, delay?: number, repeat?: number, yoyo?: boolean): Tween;
        to(properties: any, duration?: number, ease?: string, autoStart?: boolean, delay?: number, repeat?: number, yoyo?: boolean): Tween;
        update(time: number): boolean;
        updateTweenData(property: string, value: number | Function, index?: number): Tween;
        yoyo(enable: boolean, yoyoDelay?: number, index?: number): Tween;
        yoyoDelay(duration: number, index?: number): Tween;

    }

    export class TweenData {

        constructor(parent: Tween);

        static COMPLETE: number;
        static LOOPED: number;
        static PENDING: number;
        static RUNNING: number;

        delay: number;
        dt: number;
        duration: number;
        easingFunction: Function;
        game: Game;
        inReverse: boolean;
        interpolate: boolean;
        interpolateFunctionContext: Math;
        interpolationContext: Math;
        interpolationFunction: Function;
        isRunning: boolean;
        isFrom: boolean;
        parent: Tween;
        percent: number;
        repeatCounter: number;
        startTime: number;
        value: number;
        yoyo: boolean;
        yoyoDelay: number;

        from(properties: any, duration?: number, ease?: Function, delay?: number, repeat?: number, yoyo?: boolean): TweenData;
        generateData(frameRate?: number): any[];
        repeat(): number;
        start(): TweenData;
        to(properties: any, duration?: number, ease?: Function, delay?: number, repeat?: number, yoyo?: boolean): TweenData;
        update(): number;

    }

    export class TweenManager {

        constructor(game: Game);

        game: Game;

        add(tween: Tween): Tween;
        create(object: any): Tween;
        getAll(): Tween[];
        isTweening(object: any): boolean;
        remove(tween: Tween): Tween;
        removeAll(): void;
        removeFrom(obj: any, children?: boolean): void;
        resumeAll(): void;
        update(): boolean;
        pauseAll(): void;

    }

    export class Utils {

        static getProperty(obj: any, prop: string): any;
        static setProperty(obj: any, prop: string, value: any): any;
        static chanceRoll(chance: number): boolean;
        static randomChoice(choice1: string | number, choice2: any): any;
        static parseDimension(size: any, dimension: number): number;
        static pad(str: string, len?: number, pad?: string, dir?: number): string;
        static isPlainObject(object: any): boolean;
        static extend(deep: boolean, target: any): any;
        static mixinPrototype(target: any, mixin: any, replace?: boolean): void;
        static mixin<T>(from: T, to: any): T;

    }

    export module Utils {

        export class Debug {

            constructor(game: Game);

            bmd: BitmapData;
            canvas: HTMLCanvasElement;
            columnWidth: number;
            context: CanvasRenderingContext2D;
            currentAlpha: number;
            currentX: number;
            currentY: number;
            dirty: boolean;
            font: string;
            game: Game;
            lineHeight: number;
            renderShadow: boolean;
            sprite: Image;

            AStar(astar: Plugin.AStar, x: number, y: number, showVisited: boolean): void;
            boot(): void;
            body(sprite: Sprite, color?: string, filled?: boolean): void;
            bodyInfo(sprite: Sprite, x: number, y: Number, color?: string): void;
            box2dBody(body: Sprite, color?: string): void;
            box2dWorld(): void;
            cameraInfo(camera: Camera, x: number, y: number, color?: string): void;
            geom(object: any, color?: string, fiiled?: boolean, forceType?: number): void;
            inputInfo(x: number, y: number, color?: string): void;
            lineInfo(line: Line, x: number, y: number, color?: string): void;
            key(key: Key, x?: number, y?: number, color?: string): void;
            line(): void;
            preUpdate(): void;
            pixel(x: number, y: number, color?: string, size?: number): void;
            pointer(pointer: Pointer, hideIfUp?: boolean, downColor?: string, upColor?: string, color?: string): void;
            quadTree(quadtree: QuadTree, color?: string): void;
            rectangle(object: Rectangle, color?: string, filled?: boolean): void;
            reset(): void;
            ropeSegments(rope: Rope, color?: number, filled?: boolean): void;
            soundInfo(sound: Sound, x: number, y: number, color?: string): void;
            spriteBounds(sprite: any, color?: string, filled?: boolean): void;
            spriteCoords(sprite: any, x: number, y: number, color?: string): void;
            spriteInfo(sprite: Sprite, x: number, y: number, color?: string): void;
            spriteInputInfo(sprite: Sprite, x: number, y: number, color?: string): void;
            start(x?: number, y?: number, color?: string, columnWidth?: number): void;
            stop(): void;
            text(text: string, x: number, y: number, color?: string, font?: string): void;
            timer(timer: Timer, x: number, y: number, color?: string): void;

        }

    }

    export class World extends Group {

        constructor(game: Game);

        bounds: Rectangle;
        camera: Camera;
        centerX: number;
        centerY: number;
        game: Game;
        height: number;
        isPaused: boolean;
        randomX: number;
        randomY: number;
        stats: {
            skipped: number;
            ignored: number;
            checked: number;
        };
        width: number;

        boot(): void;
        getObjectsUnderPointer(pointer: Pointer, group: Group, callback?: Function, callbackContext?: any): Sprite;
        resize(width: number, height: number): void;
        setBounds(x: number, y: number, width: number, height: number): void;
        sortLeftRight(a: Sprite, b: Sprite): number;
        sortRightLeft(a: Sprite, b: Sprite): number;
        sortTopBottom(a: Sprite, b: Sprite): number;
        sortBottomTop(a: Sprite, b: Sprite): number;
        sort(group: Group, sortDirection?: number): void;
        sort(key?: string, order?: number): void; //ugly? Group already has a sort method remove this line and you get error.
        shutdown(): void;
        wrap(sprite: any, padding?: number, useBounds?: boolean, horizontal?: boolean, vertical?: boolean): void;

    }

}
