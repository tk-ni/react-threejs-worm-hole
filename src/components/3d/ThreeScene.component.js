import React from 'react';
import * as THREE from 'three';
import { Geometry, BufferGeometry, WebGLCapabilities } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import StarSystem from './StarSystem.component';
class ThreeScene extends React.Component{
    constructor(props){
        super(props)
        this.divRef = React.createRef();
        this.renderer = null;
        this.composer = null;
        this.camera = null;
        this.scene = null;

        this.state = {
            loading: false,
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    componentDidMount(){
        this.initScene();
    }

    initScene = () =>{
        //init Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.autoClear = false;    
        this.renderer.setClearColor(new THREE.Color(0x000000));
        this.renderer.setSize(this.divRef.current.offsetWidth, this.divRef.current.offsetHeight);
        this.divRef.current.appendChild(this.renderer.domElement);

        //init Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000000);
        
        //init Camera
        this.camera = new THREE.PerspectiveCamera(30, this.divRef.current.offsetWidth / this.divRef.current.offsetHeight, 0.1, 1000);
        this.camera.position.z = 30;

        //Star System
        this.scene.add(new StarSystem().createSystem());
        
        //Animation Loop
        const animate = () =>{
            requestAnimationFrame(animate);
            this.renderer.render(this.scene, this.camera);
        }
        animate();
    }

    render(){
        return(<div className="three-container" ref={this.divRef}></div>)
    }
}

export default ThreeScene;