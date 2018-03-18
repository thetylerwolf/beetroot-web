import * as THREE from 'three'
import TWEEN from 'tween.js'

export default class SparkleBall {
    constructor(id) {
        if(id) this.id = id

        this.onWindowResize = function() {
            let width = window.innerWidth

            this.camera.aspect = width / window.innerHeight
            this.camera.updateProjectionMatrix()
            this.renderer.setSize( width, window.innerHeight )

        }.bind(this)

        this.onMouseMove = function(e) {

            let center = { x: window.innerWidth/2, y: window.innerHeight/2 }
            let xPos = e.clientX
            let yPos = e.clientY

            this.mesh.rotation.y = ((xPos - center.x)/center.x) * 0.07
            this.mesh.rotation.x = ((yPos - center.y)/center.y) * 0.07

        }.bind(this)

    }

    init( canvasId, wrapperClassName ) {
        let width = window.innerWidth

        this.camera = new THREE.PerspectiveCamera( 27, width / window.innerHeight, 1, 3500 );
        this.camera.position.z = 0;
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xffffff );
        this.scene.fog = new THREE.Fog( 0xff4444, 2000, 3500 );

        var light1 = new THREE.DirectionalLight( 0xffffff, 0.5 );
        light1.position.set( 1, 1, 1 );
        this.scene.add( light1 );

        var light2 = new THREE.DirectionalLight( 0xffffff, 1.5 );
        light2.position.set( 0, -1, 0 );
        this.scene.add( light2 );

        var triangles = 160000;
        var xRadius = 25 * 16;

        var geometry = new THREE.BufferGeometry();

        var positions = new Float32Array( triangles * 3 * 3 );
        var normals = new Float32Array( triangles * 3 * 3 );
        var colors = new Float32Array( triangles * 3 * 3 );
        var color = new THREE.Color();

        //var n = 800, n2 = n/2;  // triangles spread in the cube
        var d = 18, d2 = d/2;   // individual triangle size

        var pA = new THREE.Vector3();
        var pB = new THREE.Vector3();
        var pC = new THREE.Vector3();

        var cb = new THREE.Vector3();
        var ab = new THREE.Vector3();

        for ( var i = 0; i < positions.length; i += 9 ) {
            let x, y, z, v

            let t = 0.7 + Math.random() * (Math.PI - 0.7)

            let xMax = xRadius * Math.pow(Math.sin(t), 3)

            y = 50 + 25*(13*Math.cos(t) - 5 * Math.cos(2*t) - 2*Math.cos(3*t) - Math.cos(4*t))

            // y = Math.random() * n - n/2;

            do {
                // positions
                x = Math.random() * 2*xMax - xMax;
                z = Math.random() * 2*xMax - xMax;

                v = new THREE.Vector3( x, y, z )

            } while( v.distanceTo(new THREE.Vector3( 0, y, 0)) > xMax )

            var ax = x + Math.random() * d - d2;
            var ay = y + Math.random() * d - d2;
            var az = z + Math.random() * d - d2;

            var bx = x + Math.random() * d - d2;
            var by = y + Math.random() * d - d2;
            var bz = z + Math.random() * d - d2;

            var cx = x + Math.random() * d - d2;
            var cy = y + Math.random() * d - d2;
            var cz = z + Math.random() * d - d2;

            positions[ i ]     = ax;
            positions[ i + 1 ] = ay;
            positions[ i + 2 ] = az;
            positions[ i + 3 ] = bx;
            positions[ i + 4 ] = by;
            positions[ i + 5 ] = bz;
            positions[ i + 6 ] = cx;
            positions[ i + 7 ] = cy;
            positions[ i + 8 ] = cz;
            // flat face normals
            pA.set( ax, ay, az );
            pB.set( bx, by, bz );
            pC.set( cx, cy, cz );

            cb.subVectors( pC, pB );
            ab.subVectors( pA, pB );

            cb.cross( ab );
            cb.normalize();

            var nx = cb.x;
            var ny = cb.y;
            var nz = cb.z;

            normals[ i ]     = nx;
            normals[ i + 1 ] = ny;
            normals[ i + 2 ] = nz;
            normals[ i + 3 ] = nx;
            normals[ i + 4 ] = ny;
            normals[ i + 5 ] = nz;
            normals[ i + 6 ] = nx;
            normals[ i + 7 ] = ny;
            normals[ i + 8 ] = nz;

            // colors
            // var vx = ( x / n ) + 0.5;
            // var vy = ( y / n ) + 0.5;
            // var vz = ( z / n ) + 0.5;

            // color.setRGB( vx, vy, vz );
            // color.setRGB( 0.3, 1, 3 );
            color.setHex(0x7A1F3D)

            colors[ i ]     = color.r;
            colors[ i + 1 ] = color.g;
            colors[ i + 2 ] = color.b;
            colors[ i + 3 ] = color.r;
            colors[ i + 4 ] = color.g;
            colors[ i + 5 ] = color.b;
            colors[ i + 6 ] = color.r;
            colors[ i + 7 ] = color.g;
            colors[ i + 8 ] = color.b;
        }

        function disposeArray() { this.array = null; }

        geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ).onUpload( disposeArray ) );
        geometry.addAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ).onUpload( disposeArray ) );
        geometry.addAttribute( 'color', new THREE.BufferAttribute( colors, 3 ).onUpload( disposeArray ) );
        geometry.computeBoundingSphere();

        var material = new THREE.MeshPhongMaterial( {
            color: 0xffffff, specular: 0xffffff, shininess: 250,
            side: THREE.DoubleSide, vertexColors: THREE.VertexColors
        } );

        this.mesh = new THREE.Mesh( geometry, material );

        this.scene.add( this.mesh );

        this.renderer = new THREE.WebGLRenderer( { antialias: false } );
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( width, window.innerHeight );
        this.renderer.gammaInput = true;
        this.renderer.gammaOutput = true;
        //
        this.canvas = document.getElementById( canvasId )
        this.canvas.appendChild( this.renderer.domElement );
        //

        let coords = { z: 0 }

        new TWEEN.Tween(coords)
            .delay( 1000 )
            .to({ z: 2000 }, 11000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(() => {
                this.camera.position.z = coords.z
            })
            .start()

        window.addEventListener( 'resize', this.onWindowResize, false );

        // if(wrapperClassName) {
        //     this.wrapper = document.getElementsByClassName( wrapperClassName )[0]
        //     this.wrapper.addEventListener( 'mousemove', this.onMouseMove, false)
        // } else {
        //     this.canvas.addEventListener( 'mousemove', this.onMouseMove, false)
        // }
        window.addEventListener( 'mousemove', this.onMouseMove, false)

        this.startAnimation()
        this.animate()
    }

    startAnimation() {
        this.animating = true
    }

    stopAnimation() {
        this.animating = false
    }

    animate( time ) {
        requestAnimationFrame( () => this.animate() )
        if( !this.animating ) return
        // if(this.id) console.log(this.id)
        this.render()
        TWEEN.update(time)
    }

    render() {
        this.renderer.render( this.scene, this.camera );
    }

    remove() {
        this.animating = false
        // if(this.wrapper) {
        //     this.wrapper.removeEventListener( 'mousemove', this.onMouseMove, false)
        // } else {
        //     this.canvas.removeEventListener( 'mousemove', this.onMouseMove, false)
        // }
        window.removeEventListener( 'mousemove', this.onMouseMove, false)
        window.removeEventListener( 'resize', this.onWindowResize, false );
    }

}
