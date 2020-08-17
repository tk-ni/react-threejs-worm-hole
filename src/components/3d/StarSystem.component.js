import * as THREE from 'three';
import particle from './../../assets/starsystem/star_particle.png';
import alphaMap from './../../assets/starsystem/star_particle_alpha_map.png';
class StarSystem{
    createSystem = () =>{
        const particleGeometry = new THREE.Geometry();
        const particleMap = new THREE.TextureLoader().load(particle);
        const alphaMapTexture = new THREE.TextureLoader().load(alphaMap);

        const particleMaterial = new THREE.PointsMaterial({
            color: 'rgba(255,255,255,1)',
            size: .5,
            map: particleMap,
            transparent: true,
            blending: THREE.AdditiveBlending,
            alphaMap:alphaMapTexture
        });
        let particleCount = window.innerWidth <= 2500 ? 1000 : 3000;
        let particleDistance = 75;
        for(let i = 0; i < particleCount; i++){
            let posX = (Math.random() - 0.5) * particleDistance;
            let posY = (Math.random() - 0.5) * particleDistance;
            let posZ = (Math.random() - 0.5) * particleDistance;
            let particleVertex = new THREE.Vector3(posX, posY, posZ);
            particleGeometry.vertices.push(particleVertex)
        }

        
        let particleSystem = new THREE.Points(particleGeometry, particleMaterial);
        particleSystem.name = 'particleSystem';

        return particleSystem;
    }
}

export default StarSystem;