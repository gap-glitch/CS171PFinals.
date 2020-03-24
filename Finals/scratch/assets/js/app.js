//let them
let scene, camera, renderer, controls; //camera
        let ambientLight, directionalLight, pointLight; //lighting
              // Scene and Camera
                scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera .position.x = 100
        camera.position.z = -170; //NEAR-FAR
     camera.position.y = -10;
     //loading 3d model
       //  function loadmodels(){
        //        //loading main model
          //         let ufoLoader = new THREE.GLTFLoader(); 
              //        ufoLoader.load('assets/models/knight/scene.gltf', function ( gltf ) {
               //          gltfModel = gltf.scene;
                  //          gltfModel.position.x = 0;
                    //          gltfModel.position.y = 80;
                      //          gltfModel.position.z = 159;
                        //          gltfModel.rotation.y = 3.5;
                         //          gltfModel.rotation.x = 0.1;
                           //          gltfModel.scale.set(45,45,45);
                            //          gltfModel.receiveShadow = true;
                              //          gltfModel.castShadow = true;
                               //          scene.add(gltfModel);
                                //        }, undefined, function (error) {
                                     //        console.error( error );});

                                    //soundszzz
                                     let listener = new THREE.AudioListener();
                                let sound = new THREE.Audio(listener);
                            let audioLoader = new THREE.AudioLoader();
                       audioLoader.load('assets/sound/Frenchies.mp3', function (buffer){
                  sound.setBuffer(buffer);
            sound.setLoop(true);
        sound.setVolume(1);
    sound.play();
  });
  //texture Loader
   let texture = new THREE.TextureLoader().load("assets/textures/stonepavment.jpg");
       let texture1 = new THREE.TextureLoader().load("assets/textures/brick.jpg");
           let texture2 = new THREE.TextureLoader().load("assets/textures/marblebrick1.jpg");
               let texture3 = new THREE.TextureLoader().load("assets/textures/pillar.jpg");
                  let texture4 = new THREE.TextureLoader().load("assets/textures/marble2.jpg");
                     let texture5 = new THREE.TextureLoader().load("assets/textures/marble1.jpg");
                        let texture6 = new THREE.TextureLoader().load("assets/textures/glass.jpg");
                          let texture7 = new THREE.TextureLoader().load("assets/textures/charcoal.jpg")
                           //test
                             let texture8 = new THREE.TextureLoader().load("assets/textures/lourve.jpg")
                             let texture9 = new THREE.TextureLoader().load("assets/textures/Moon.png")
                             //for test 
                              // let texturetest = new THREE.TextureLoader().load("assets/textures/sundown.jpg")
                               //backround
                                scene.background = (new THREE.TextureLoader().load("assets/textures/multi.jpg"));
                            
                                    //backround test 
                                        // let backround = new THREE.BoxBufferGeometry(50,200,100);
                                        //   let backroundmaterial = new THREE.MeshPhongMaterial({ map:texuture8 });
                                        //     let bckgrnd = new THREE.Mesh (backround,backroundmaterial)
                                              
                                           //let backroundmaterial = new THREE.MeshLambertMaterial
                                               // Geometries //Ground
                                              let bigFloor = new THREE.Mesh(new THREE.BoxBufferGeometry(350, 2, 350), new THREE.MeshLambertMaterial({map:texture}));
                                         bigFloor.receiveShadow = true;
                                     bigFloor.castShadow = true;
                                 scene.add(bigFloor);
                              bigFloor.position.y = -39
                            //lourve pyramid test 
                        let lourvepyramid = new THREE.ConeBufferGeometry(60,60,4);
                    let lourvepyramidmaterial = new THREE.MeshLambertMaterial( { map:texture8,transparent: true } );
                 lourvepyramidmaterial.opacity = 0.8;
             let cone = new THREE.Mesh( lourvepyramid , lourvepyramidmaterial );
         scene.add(cone);
      cone.position.y = -5.5
  cone.position.x = 0
cone.position.z = -100
cone.position.x = Math.PI /2;
cone.rotation.y = 1.1
//main library building construction (GROUNDFLOOR and design REMAAKKKEEEEE!!!)
let groundfloor = new THREE.BoxBufferGeometry (4,30,50);
   let groundfloormaterial = new THREE.MeshPhongMaterial ( {map:texture1} );
      let ground1 = new THREE.Mesh( groundfloor,groundfloormaterial );
         scene.add(ground1);
            ground1.position.z = 35
               ground1.position.x = 0
                  ground1.position.y = 55
                     ground1.rotation.y = Math.PI /2 ; 
                        //main center construction 3rd floor
                         let mainbuilding = new THREE.BoxBufferGeometry (45,20.3,5);
                           let mainbuildingmaterial = new THREE.MeshLambertMaterial ({map:texture1});
                             let main1 = new THREE.Mesh(mainbuilding,mainbuildingmaterial);
                               scene.add(main1);
                             main1.position.x = 0;
                            main1.position.y = 29;
                          main1.position.z  = 34.5;
                          // 2nd floor
                          let mainbuilding2 = new THREE.BoxBufferGeometry (45,25.3,5);
                          let mainbuilding2material = new THREE.MeshLambertMaterial ({map:texture1});
                            let main2 = new THREE.Mesh(mainbuilding2,mainbuilding2material);
                              scene.add(main2);
                            main2.position.x = 0;
                           main2.position.y = 5;
                         main2.position.z  = 34.5;
                         //groundflooooorr
                         let mainbuilding3 = new THREE.BoxBufferGeometry (45,25.3,5);
                          let mainbuilding3material = new THREE.MeshLambertMaterial ({map:texture1});
                            let main3 = new THREE.Mesh(mainbuilding3,mainbuilding3material);
                              scene.add(main3);
                            main3.position.x = 0;
                           main3.position.y = -25;
                         main3.position.z  = 34.5;
                         let mainbuilding4 = new THREE.BoxBufferGeometry (3,16.0,3);
                          let mainbuilding4material = new THREE.MeshLambertMaterial ({ map: texture3 });
                            let main4 = new THREE.Mesh (mainbuilding4,mainbuilding4material);
                             scene.add(main4);
                            main4.position.x = 6.0;
                          main4.position.y = -29.5;
                        main4.position.z = 10;
                        let mainbuilding5 = new THREE.BoxBufferGeometry (3,16.0,3);
                         let mainbuilding5material = new THREE.MeshLambertMaterial ({ map: texture3 });
                          let main5 = new THREE.Mesh (mainbuilding5,mainbuilding5material);
                           scene.add(main5);
                          main5.position.x = -6.0;
                        main5.position.y = -29.5;
                      main5.position.z = 10;
                      // let mainbuilding6 = new THREE.BoxBufferGeometry (3,16.0,3);
                      //    let mainbuilding6material = new THREE.MeshLambertMaterial ({ map: texture3 });
                      //     let main6 = new THREE.Mesh (mainbuilding6,mainbuilding6material);
                      //      scene.add(main6);
                      //     main6.position.x = 0;
                      //   main6.position.y = -29.5;
                      // main6.position.z = 10;

                      //stairs 
                      let stair = new THREE.BoxBufferGeometry (9,6,20);
                      let stairmaterial = new THREE.MeshLambertMaterial ({ map: texture4});
                      let stair1 = new THREE.Mesh (stair , stairmaterial);
                      scene.add(stair1);
                      stair1.position.x = 0;
                      stair1.position.y = -36;
                      stair1.position.z = 25;
                      let stair2 = new THREE.BoxBufferGeometry (9,5,21);
                      let stair2material = new THREE.MeshLambertMaterial ({ map: texture4});
                      let staiR2 = new THREE.Mesh (stair2 , stair2material);
                      scene.add(staiR2);
                      staiR2.position.x = 0;
                      staiR2.position.y = -37;
                      staiR2.position.z = 24;
                      let stAir3 = new THREE.BoxBufferGeometry (9,5,21);
                      let stAir3material = new THREE.MeshLambertMaterial ({ map: texture4});
                      let sTair3 = new THREE.Mesh (stAir3 , stAir3material);
                      scene.add(sTair3);
                      sTair3.position.x = 0;
                      sTair3.position.y = -38;
                      sTair3.position.z = 22.5;
                      let staIr = new THREE.BoxBufferGeometry (9,5,21);
                      let staIrmaterial = new THREE.MeshLambertMaterial ({ map: texture4 });
                      let Stair4 = new THREE.Mesh ( staIr, staIrmaterial );
                      scene.add(Stair4);
                      Stair4.position.x = 0;
                      Stair4.position.y = -39;
                      Stair4.position.z = 21;   
                      let marblestairs = new THREE.BoxBufferGeometry (9,5,21);
                      let marblestairsmaterial = new THREE.MeshLambertMaterial ({ map: texture4 });
                      let marbleStair = new THREE.Mesh ( marblestairs, marblestairsmaterial );
                      scene.add(marbleStair);
                      marbleStair.position.x = 0;
                      marbleStair.position.y = -40;
                      marbleStair.position.z = 19;   
                      //pillarsnearentrance
                      const box = new THREE.BoxBufferGeometry (4,20,4);
                      const boxmaterial = new THREE.MeshLambertMaterial ({ map: texture4 });
                      const boxpillar = new THREE.Mesh (box, boxmaterial);
                      scene.add(boxpillar);
                      boxpillar.position.x = 9.5;
                      boxpillar.position.y = -27;
                      boxpillar.position.z = 5;
                      const box2 = new THREE.BoxBufferGeometry (4,20,4);
                      const boxmaterial2 = new THREE.MeshLambertMaterial ({ map: texture4 });
                      const boxpillar1 = new THREE.Mesh (box2, boxmaterial2);
                      scene.add(boxpillar1);
                      boxpillar1.position.x = -9.5;
                      boxpillar1.position.y = -27;
                      boxpillar1.position.z = 5;
                      const box3 = new THREE.BoxBufferGeometry (6,20,4);
                      const boxmaterial3 = new THREE.MeshLambertMaterial ({ map: texture4 });
                      const boxpillar2 = new THREE.Mesh (box3, boxmaterial3);
                      scene.add(boxpillar2);
                      boxpillar2.position.x = 65;
                      boxpillar2.position.y = -27;
                      boxpillar2.position.z = 10;
                      const box4 = new THREE.BoxBufferGeometry (6,20,4);
                      const boxmaterial4 = new THREE.MeshLambertMaterial ({ map: texture4 });
                      const boxpillar3 = new THREE.Mesh (box4, boxmaterial4);
                      scene.add(boxpillar3);
                      boxpillar3.position.x = 95;
                      boxpillar3.position.y = -27;
                      boxpillar3.position.z = 10;
                      const box5 = new THREE.BoxBufferGeometry (6,20,4);
                      const boxmaterial5 = new THREE.MeshLambertMaterial ({ map: texture4 });
                      const boxpillar4 = new THREE.Mesh (box5, boxmaterial5);
                      scene.add(boxpillar4);
                      boxpillar4.position.x = -65;
                      boxpillar4.position.y = -27;
                      boxpillar4.position.z = 10;
                      const box6 = new THREE.BoxBufferGeometry (6,20,4);
                      const boxmaterial6 = new THREE.MeshLambertMaterial ({ map: texture4 });
                      const boxpillar5 = new THREE.Mesh (box6, boxmaterial6);
                      scene.add(boxpillar5);
                      boxpillar5.position.x = -95;
                      boxpillar5.position.y = -27;
                      boxpillar5.position.z = 10;
                      
                      
                      
                      

                      //boxdesign

                      const boxdesign = new THREE.CylinderBufferGeometry (4,2.1,4,4);
                      const boxdesignmaterial = new THREE.MeshLambertMaterial ({ map: texture3 });
                      const Boxdesign = new THREE.Mesh ( boxdesign, boxdesignmaterial );
                      scene.add(Boxdesign);
                      Boxdesign.position.x = 9.5;
                      Boxdesign.position.y = -15.5;
                      Boxdesign.position.z = 5;
                      Boxdesign.rotation.y = 0.8

                      const boxdesign2 = new THREE.CylinderBufferGeometry (4,2.1,4,4);
                      const boxdesign2material = new THREE.MeshLambertMaterial ({ map: texture3 });
                      const Boxdesign2 = new THREE.Mesh ( boxdesign2, boxdesign2material );
                      scene.add(Boxdesign2);
                      Boxdesign2.position.x = -9.5;
                      Boxdesign2.position.y = -15.5;
                      Boxdesign2.position.z = 5;
                      Boxdesign2.rotation.y = 0.8



                         
                          //centerfloor-groundfloor
                          let centerfloor = new THREE.BoxBufferGeometry (55,5,33);
                           let centerfloormaterial = new THREE.MeshLambertMaterial ({map:texture1});
                             let center1 = new THREE.Mesh(centerfloor ,centerfloormaterial);
                               scene.add(center1);
                               center1.position.x = 0;
                           center1.position.y = 20;
                       center1.position.z  =  23;
                       let center1floor = new THREE.BoxBufferGeometry (55,5,33);
                       let centerfloor1material = new THREE.MeshLambertMaterial ({map:texture1});
                         let cenTer2 = new THREE.Mesh(center1floor ,centerfloor1material);
                           scene.add(cenTer2);
                           cenTer2.position.x = 0;
                       cenTer2.position.y = -10;
                   cenTer2.position.z  =  23;
  
                        //extension (middle)
                        let centerfloor2 = new THREE.BoxBufferGeometry (53.5,5,5);
                         let centerfloor2material = new THREE.MeshLambertMaterial ({map:texture4});
                          let center2 = new THREE.Mesh (centerfloor2 , centerfloor2material );
                          scene.add(center2);
                        center2.position.x = 0;
                      center2.position.y = 45
                     center2.position.z = 11 ; 
                     let centerfloor3 = new THREE.BoxBufferGeometry (50,5,5,5);
                         let centerfloor3material = new THREE.MeshLambertMaterial ({map:texture4});
                          let center3 = new THREE.Mesh (centerfloor3 , centerfloor3material );
                          scene.add(center3);
                        center3.position.x = 0;
                      center3.position.y = 25;
                    center3.position.z = 12 ; 
                    
                        //for ground floor
                  //  let center2floor = new THREE.BoxBufferGeometry (55,5,33);
                  //  let centerFloor2material = new THREE.MeshLambertMaterial ({map:texture1});
                  //    let cEnter3 = new THREE.Mesh(center2floor ,centerFloor2material);
                  //      scene.add(cEnter3);
                  //      cEnter3.position.x = 0;
                  //      cEnter3.position.y = -40;
                  //      cEnter3.position.z  =  23;

                       //window columns back portion
                        let mainwindow = new THREE.CylinderBufferGeometry (2.5,3.5,17,8);
                          let mainwindowmaterial = new THREE.MeshPhongMaterial ({map: texture1})
                           let mainAplha = new THREE.Mesh ( mainwindow,mainwindowmaterial );
                             scene.add(mainAplha);
                               mainAplha.position.x = 24.3
                                 mainAplha.position.y = 54.3
                                  mainAplha.position.z = 35
                        let main1window = new THREE.CylinderBufferGeometry (2.5,3.5,22,8);
                          let mainwindowmaterial1 = new THREE.MeshPhongMaterial ({map: texture1})
                           let mainAplha2 = new THREE.Mesh ( main1window,mainwindowmaterial1 );
                             scene.add(mainAplha2);
                             mainAplha2.position.x = 24.3;
                               mainAplha2.position.y = 2;
                                  mainAplha2.position.z = 35;        
                                
                         let mainwindow1 = new THREE.CylinderBufferGeometry (2.5,3.5,17,8);
                   let mainwindow1material = new THREE.MeshPhongMaterial ({map: texture1})
              let mainBravo = new THREE.Mesh (mainwindow1 , mainwindow1material);        
         scene.add(mainBravo);
         mainBravo.position.x = -24.3
         mainBravo.position.y = 54.3
         mainBravo.position.z = 35

                          let main2window = new THREE.CylinderBufferGeometry (2.5,3.5,22,8);
                   let main2windowmaterial = new THREE.MeshPhongMaterial ({map: texture1})
              let mainBravo2 = new THREE.Mesh (main2window , main2windowmaterial);        
         scene.add(mainBravo2);
         mainBravo2.position.x = -24.3
         mainBravo2.position.y = 2
         mainBravo2.position.z = 35
                               
               
                  //window (lower panel) pt 2
                  let mainwinDow2 = new THREE.BoxBufferGeometry (5,5,29);
                   let mainwinDow2material = new THREE.MeshPhongMaterial ({map: texture1})
              let mainXray = new THREE.Mesh (mainwinDow2 , mainwinDow2material);        
         scene.add(mainXray);
       mainXray.position.z = 22.5
          mainXray.position.x = -24
             mainXray.position.y = 45

             let mainwinDow3 = new THREE.BoxBufferGeometry (5,5,20);
             let mainwinDow3material = new THREE.MeshPhongMaterial ({map: texture1})
        let mainXray1 = new THREE.Mesh (mainwinDow3 , mainwinDow3material);        
   scene.add(mainXray1);
 mainXray1.position.z = 23
    mainXray1.position.x = 24
       mainXray1.position.y = 25

             let mainwindOw2 = new THREE.BoxBufferGeometry (5,5,29);
             let mainwindOw2material = new THREE.MeshPhongMaterial ({map: texture1});
        let mainLima = new THREE.Mesh (mainwindOw2 , mainwindOw2material);        
   scene.add(mainLima);
 mainLima.position.z = 22.5
    mainLima.position.x = 24
       mainLima.position.y = 45

       let mainwindOw3 = new THREE.BoxBufferGeometry (5,5,20);
       let mainwindOw3material = new THREE.MeshPhongMaterial ({map: texture1});
  let mainLima1 = new THREE.Mesh (mainwindOw3 , mainwindOw3material);        
scene.add(mainLima1);
mainLima1.position.z = 23
mainLima1.position.x = -24
 mainLima1.position.y = 25
       
                 
                   //window columns (Roof main)
                  let mainwindow2 = new THREE.CylinderBufferGeometry (2.5,3.5,15,8);
                  let mainwindow2material = new THREE.MeshPhongMaterial ({map: texture1})
                  let mainCharlie = new THREE.Mesh (mainwindow2 , mainwindow2material);        
       scene.add(mainCharlie);
           mainCharlie.position.z = 12
                mainCharlie.position.x = 24.3
                   mainCharlie.position.y = 55
                     mainCharlie.rotation.y = 11

                  let mainwindow3 = new THREE.CylinderBufferGeometry (2.5,3.5,15,8);
                  let mainwindow3material = new THREE.MeshPhongMaterial ({map: texture1})
                  let mainWhiskey = new THREE.Mesh (mainwindow3 , mainwindow3material);        
       scene.add(mainWhiskey);
           mainWhiskey.position.z = 12;
                mainWhiskey.position.x = -24.3;
                   mainWhiskey.position.y = 55;
                     mainWhiskey.rotation.y = 11;

                  let mainwindow4 = new THREE.CylinderBufferGeometry (2.5,3.5,15,8);
                  let mainwindow4material = new THREE.MeshPhongMaterial ({map: texture1})
                  let mainTango = new THREE.Mesh (mainwindow4 , mainwindow4material);        
       scene.add(mainTango);
           mainTango.position.z = 11;
                mainTango.position.x = -10;
                   mainTango.position.y = 55;
                      mainTango.rotation.y = 11;
                  
                  let mainwindow5 = new THREE.CylinderBufferGeometry (2.5,3.5,15,8);
                  let mainwindow5material = new THREE.MeshPhongMaterial ({map: texture1})
                  let mainIndia = new THREE.Mesh (mainwindow5 , mainwindow5material);        
       scene.add(mainIndia);
           mainIndia.position.z = 11;
               mainIndia.position.x = 10;
                  mainIndia.position.y = 55;
                     mainIndia.rotation.y = 11;
                  //2nd floor column
                  let mainwindow6 = new THREE.CylinderBufferGeometry (2.5,3.5,15,8);
                  let mainwindow6material = new THREE.MeshPhongMaterial ({map: texture1})
                  let mainGold1 = new THREE.Mesh (mainwindow6 , mainwindow6material);        
       scene.add(mainGold1);
           mainGold1.position.z = 12;
              mainGold1.position.x = 24.3;
                mainGold1.position.y = 30;
                    mainGold1.rotation.y = 11;
        
                  let mainwindow7= new THREE.CylinderBufferGeometry (2.5,3.5,15,8);
                  let mainwindow7material = new THREE.MeshPhongMaterial ({map: texture1})
                  let mainHotel1 = new THREE.Mesh (mainwindow7 , mainwindow7material);        
       scene.add(mainHotel1);
          mainHotel1.position.x = 24.3 
             mainHotel1.position.y = 29
                 mainHotel1.position.z = 35

                  let mainwindow8= new THREE.CylinderBufferGeometry (2.5,3.5,15,8);
                  let mainwindow8material = new THREE.MeshPhongMaterial ({map: texture1})
                  let mainUniform1 = new THREE.Mesh (mainwindow8 , mainwindow8material);        
       scene.add(mainUniform1);
         mainUniform1.position.x = -24.3 
             mainUniform1.position.y = 29
               mainUniform1.position.z = 35

                  let mainwindow9= new THREE.CylinderBufferGeometry (2.5,3.5,15,8);
                  let mainwindow9material = new THREE.MeshPhongMaterial ({map: texture1})
                  let mainDelta1 = new THREE.Mesh (mainwindow9 , mainwindow9material);        
       scene.add(mainDelta1);
         mainDelta1.position.z = 12
            mainDelta1.position.x = -24.3
              mainDelta1.position.y = 30

              //groundfloor finally column pt 2  - 
              let mainwindow10= new THREE.CylinderBufferGeometry (2.5,3.5,20,8);
              let mainwindow10material = new THREE.MeshPhongMaterial ({map: texture1})
              let mainKilo1 = new THREE.Mesh (mainwindow10 , mainwindow10material);        
   scene.add(mainKilo1);
     mainKilo1.position.z = 12;
       mainKilo1.position.x = -24.3;
         mainKilo1.position.y = -27;
         
              let mainwindow11= new THREE.CylinderBufferGeometry (2.5,3.5,20,8);
              let mainwindow11material = new THREE.MeshPhongMaterial ({map: texture1})
              let Golf1 = new THREE.Mesh (mainwindow11 , mainwindow11material);        
   scene.add(Golf1);
     Golf1.position.z = 12;
       Golf1.position.x = 24.3;
         Golf1.position.y = -27;

              let mainwindow12= new THREE.CylinderBufferGeometry (2.5,3.5,20,8);
              let mainwindow12material = new THREE.MeshPhongMaterial ({map: texture1})
              let Romeo1 = new THREE.Mesh (mainwindow12 , mainwindow12material);        
   scene.add(Romeo1);
     Romeo1.position.z = 35;
       Romeo1.position.x = -24.3;
         Romeo1.position.y = -27;

              let mainwindow13= new THREE.CylinderBufferGeometry (2.5,3.5,20,8);
              let mainwindow13material = new THREE.MeshPhongMaterial ({map: texture1})
              let Juliet1 = new THREE.Mesh (mainwindow13 , mainwindow13material);        
   scene.add(Juliet1);
    Juliet1.position.z = 35;
      Juliet1.position.x = 24.3;
        Juliet1.position.y = -27;       
        
              //frontwall 3rdfloor
              let frwall= new THREE.BoxBufferGeometry (25,15,6);
              let frwallmaterial = new THREE.MeshPhongMaterial ({map: texture1})
              let mainMike1 = new THREE.Mesh (frwall , frwallmaterial);        
   scene.add(mainMike1);
     mainMike1.position.z = 12
        mainMike1.position.x = 0
          mainMike1.position.y = 35

              //continuation for wall and columns
              let mainfrontwall = new THREE.BoxBufferGeometry (9,30,2);
              let mainfrontwallmaterial = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front = new THREE.Mesh ( mainfrontwall,mainfrontwallmaterial );
    scene.add(front);
      front.position.x = 10;
       front.position.y = 2.5;
        front.position.z = 11;
              let mainfrontwall2 = new THREE.BoxBufferGeometry (9,30,2);
              let mainfrontwall2material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front2 = new THREE.Mesh ( mainfrontwall2,mainfrontwall2material );
    scene.add(front2);
      front2.position.x = -10;
       front2.position.y = 2.5;
        front2.position.z = 11;
              let mainfrontwall3 = new THREE.BoxBufferGeometry (11,5,2);
              let mainfrontwall3material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front3 = new THREE.Mesh ( mainfrontwall3,mainfrontwall3material );
    scene.add(front3);
      front3.position.x = 0;
       front3.position.y = -5.;
        front3.position.z = 11;
        let mainfrontwall4 = new THREE.BoxBufferGeometry (8,25,2);
              let mainfrontwall4material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front4 = new THREE.Mesh ( mainfrontwall4,mainfrontwall4material );
    scene.add(front4);
      front4.position.x = 10.3;
       front4.position.y = 55.;
        front4.position.z = 12;
          let mainfrontwall5 = new THREE.BoxBufferGeometry (8,25,2);
              let mainfrontwall5material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front5 = new THREE.Mesh ( mainfrontwall5,mainfrontwall5material );
    scene.add(front5);
      front5.position.x = -10.3;
       front5.position.y = 55.;
        front5.position.z = 12;
        let mainfrontwall6 = new THREE.BoxBufferGeometry (2,30,2);
              let mainfrontwall6material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front6 = new THREE.Mesh ( mainfrontwall6,mainfrontwall6material );
    scene.add(front6);
      front6.position.x = -23.3;
       front6.position.y = 2.5;
        front6.position.z = 11;
              let mainfrontwall7 = new THREE.BoxBufferGeometry (2,30,4);
              let mainfrontwall7material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front7 = new THREE.Mesh ( mainfrontwall7,mainfrontwall7material );
    scene.add(front7);
      front7.position.x = -25.3;
       front7.position.y = 2.5;
        front7.position.z = 12;

        let mainfrontwall8 = new THREE.BoxBufferGeometry (2,30,2);
              let mainfrontwall8material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front8 = new THREE.Mesh ( mainfrontwall8,mainfrontwall8material );
    scene.add(front8);
      front8.position.x = 23.3;
       front8.position.y = 2.5;
        front8.position.z = 11;

        let mainfrontwall9 = new THREE.BoxBufferGeometry (2,30,4);
              let mainfrontwall9material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front9 = new THREE.Mesh ( mainfrontwall9,mainfrontwall9material );
    scene.add(front9);
      front9.position.x = 25.3;
       front9.position.y = 2.5;
        front9.position.z = 12;

              let mainfrontwall10 = new THREE.BoxBufferGeometry (15,5,2);
              let mainfrontwall10material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front10 = new THREE.Mesh ( mainfrontwall10,mainfrontwall10material );
    scene.add(front10);
      front10.position.x = 18.3;
       front10.position.y = 15.;
        front10.position.z = 11;
        
              let mainfrontwall11 = new THREE.BoxBufferGeometry (15,5,2);
              let mainfrontwall11material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front11 = new THREE.Mesh ( mainfrontwall11,mainfrontwall11material );
    scene.add(front11);
      front11.position.x = -18.3;
       front11.position.y = 15.;
        front11.position.z = 11;

              let mainfrontwall12 = new THREE.BoxBufferGeometry (10,1,2);
              let mainfrontwall12material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front12 = new THREE.Mesh ( mainfrontwall12,mainfrontwall12material );
    scene.add(front12);
      front12.position.x = -18.4;
       front12.position.y = 12;
        front12.position.z = 10;

              let mainfrontwall13 = new THREE.BoxBufferGeometry (2,1,10);
              let mainfrontwall13material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front13 = new THREE.Mesh ( mainfrontwall12,mainfrontwall12material );
    scene.add(front13);
      front13.position.x = -18.4;
       front13.position.y = 12;
        front13.position.z = 10;

              let mainfrontwall14 = new THREE.BoxBufferGeometry (1,20,1);
              let mainfrontwall14material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front14 = new THREE.Mesh ( mainfrontwall14,mainfrontwall14material );
    scene.add(front14);
      front14.position.x = -22.7;
       front14.position.y = 2;
        front14.position.z = 9.5;

              let mainfrontwall15 = new THREE.BoxBufferGeometry (1,20,1);
              let mainfrontwall15material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front15 = new THREE.Mesh ( mainfrontwall15,mainfrontwall15material );
    scene.add(front15);
      front15.position.x = 22.7;
       front15.position.y = 2;
        front15.position.z = 9.5;

              let mainfrontwall16 = new THREE.BoxBufferGeometry (10,1,2);
              let mainfrontwall16material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front16 = new THREE.Mesh ( mainfrontwall16,mainfrontwall16material );
    scene.add(front16);
      front16.position.x = 18.4;
       front16.position.y = 12;
        front16.position.z = 10;

              let mainfrontwall17 = new THREE.BoxBufferGeometry (1,20,1);
              let mainfrontwall17material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front17 = new THREE.Mesh ( mainfrontwall17,mainfrontwall17material );
    scene.add(front17);
      front17.position.x = 22.7;
       front17.position.y = 2;
        front17.position.z = 9.5;

              let mainfrontwall18 = new THREE.BoxBufferGeometry (1,20,1);
              let mainfrontwall18material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front18 = new THREE.Mesh ( mainfrontwall18,mainfrontwall18material );
    scene.add(front18);
      front18.position.x = 14;
       front18.position.y = 2;
        front18.position.z = 9.5;

              let mainfrontwall19 = new THREE.BoxBufferGeometry (1,20,1);
              let mainfrontwall19material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front19 = new THREE.Mesh ( mainfrontwall19,mainfrontwall19material );
    scene.add(front19);
      front19.position.x = 14;
       front19.position.y = 2;
        front19.position.z = 9.5;

              let mainfrontwall20 = new THREE.BoxBufferGeometry (15,25,10);
              let mainfrontwall20material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front20 = new THREE.Mesh ( mainfrontwall20,mainfrontwall20material );
    scene.add(front20);
      front20.position.x = 15;
       front20.position.y = -25
        front20.position.z = 15;
        
              let mainfrontwall21 = new THREE.BoxBufferGeometry (15,25,10);
              let mainfrontwall21material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front21 = new THREE.Mesh ( mainfrontwall21,mainfrontwall21material );
    scene.add(front21);
      front21.position.x = -15;
       front21.position.y = -25
        front21.position.z = 15;

              let mainfrontwall22 = new THREE.BoxBufferGeometry (15,10,5);
              let mainfrontwall22material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front22 = new THREE.Mesh ( mainfrontwall22,mainfrontwall22material );
    scene.add(front22);
      front22.position.x = 13;
       front22.position.y = -17
        front22.position.z = 15;

              let mainfrontwall23 = new THREE.BoxBufferGeometry (15,10,5);
              let mainfrontwall23material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front23 = new THREE.Mesh ( mainfrontwall23,mainfrontwall23material );
    scene.add(front23);
      front23.position.x = -13;
       front23.position.y = -17
        front23.position.z = 15;
        
              let mainfrontwall24 = new THREE.BoxBufferGeometry (15,10,5);
              let mainfrontwall24material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front24 = new THREE.Mesh ( mainfrontwall24,mainfrontwall24material );
    scene.add(front24);
      front24.position.x = 0;
       front24.position.y = -10
        front24.position.z = 15;

              let mainfrontwall25 = new THREE.BoxBufferGeometry (3,3,3);
              let mainfrontwall25material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front25 = new THREE.Mesh ( mainfrontwall25,mainfrontwall25material );
    scene.add(front25);
      front25.position.x = 6.0;
       front25.position.y = -20
        front25.position.z = 10;

              let mainfrontwall26 = new THREE.BoxBufferGeometry (3,3,3);
              let mainfrontwall26material = new THREE.MeshPhongMaterial ({ map: texture1 });
              let front26 = new THREE.Mesh ( mainfrontwall26,mainfrontwall26material );
    scene.add(front26);
      front26.position.x = -6.0;
       front26.position.y = -20
        front26.position.z = 10;


        //window pane design
        let windowdesign = new THREE.BoxBufferGeometry (1,23,1);
              let windowdesigmaterial = new THREE.MeshPhongMaterial ({ map: texture7 });
              let windowstyle = new THREE.Mesh ( windowdesign,windowdesigmaterial );
    scene.add(windowstyle);
        windowstyle.position.x = 0;
          windowstyle.position.y = 8;
            windowstyle.position.z = 11; 

            let windowdesign1 = new THREE.BoxBufferGeometry (23,1,0.1);
            let windowdesign1material = new THREE.MeshPhongMaterial ({ map: texture7 });
            let windowstyle1 = new THREE.Mesh ( windowdesign1,windowdesign1material );
  scene.add(windowstyle1);
      windowstyle1.position.x = 0;
        windowstyle1.position.y = 11;
          windowstyle1.position.z = 11; 

            let windowdesign2 = new THREE.BoxBufferGeometry (23,1,0.1);
            let windowdesign2material = new THREE.MeshPhongMaterial ({ map: texture7 });
            let windowstyle2 = new THREE.Mesh ( windowdesign2,windowdesign2material );
  scene.add(windowstyle2);
      windowstyle2.position.x = 0;
        windowstyle2.position.y = 4;
          windowstyle2.position.z = 11; 

          let windowdesign3 = new THREE.BoxBufferGeometry (1,25,1);
          let windowdesign3material = new THREE.MeshPhongMaterial ({ map: texture7 });
          let windowstyle3 = new THREE.Mesh ( windowdesign3,windowdesign3material );
scene.add(windowstyle3);
    windowstyle3.position.x = 18.5;
      windowstyle3.position.y = 4;
        windowstyle3.position.z = 11;
        
          let windowdesign4 = new THREE.BoxBufferGeometry (1,25,1);
          let windowdesign4material = new THREE.MeshPhongMaterial ({ map: texture7 });
          let windowstyle4 = new THREE.Mesh ( windowdesign4,windowdesign4material );
scene.add(windowstyle4);
    windowstyle4.position.x = -18.5;
      windowstyle4.position.y = 4;
        windowstyle4.position.z = 11; 

          let windowdesign5 = new THREE.BoxBufferGeometry (10,1,0.1);
          let windowdesign5material = new THREE.MeshPhongMaterial ({ map: texture7 });
          let windowstyle5 = new THREE.Mesh ( windowdesign5,windowdesign5material );
scene.add(windowstyle5);
    windowstyle5.position.x = 18.5;
      windowstyle5.position.y = -1;
        windowstyle5.position.z = 11; 

        let windowdesign6= new THREE.BoxBufferGeometry (10,1,0.1);
        let windowdesign6material = new THREE.MeshPhongMaterial ({ map: texture7 });
        let windowstyle6 = new THREE.Mesh ( windowdesign6,windowdesign6material );
scene.add(windowstyle6);
  windowstyle6.position.x = -18.5;
    windowstyle6.position.y = -1;
      windowstyle6.position.z = 11;

        let windowdesign7= new THREE.BoxBufferGeometry (10,1,0.1);
        let windowdesign7material = new THREE.MeshPhongMaterial ({ map: texture7 });
        let windowstyle7 = new THREE.Mesh ( windowdesign7,windowdesign7material );
scene.add(windowstyle7);
  windowstyle7.position.x = -18.5;
    windowstyle7.position.y = 7;
      windowstyle7.position.z = 11;  

        let windowdesign8= new THREE.BoxBufferGeometry (10,1,0.1);
        let windowdesign8material = new THREE.MeshPhongMaterial ({ map: texture7 });
        let windowstyle8 = new THREE.Mesh ( windowdesign8,windowdesign8material );
scene.add(windowstyle8);
  windowstyle8.position.x = 18.5;
    windowstyle8.position.y = 7;
      windowstyle8.position.z = 11;  

        let windowdesign9= new THREE.BoxBufferGeometry (13,1,0.1);
        let windowdesign9material = new THREE.MeshPhongMaterial ({ map: texture7 });
        let windowstyle9 = new THREE.Mesh ( windowdesign9,windowdesign9material );
scene.add(windowstyle9);
  windowstyle9.position.x = 18.5;
    windowstyle9.position.y = 32;
      windowstyle9.position.z = 11;  

        let windowdesign10= new THREE.BoxBufferGeometry (1,25,1);
        let windowdesign10material = new THREE.MeshPhongMaterial ({ map: texture7 });
        let windowstyle10 = new THREE.Mesh ( windowdesign10,windowdesign10material );
scene.add(windowstyle10);
  windowstyle10.position.x = 16.5;
    windowstyle10.position.y = 32;
      windowstyle10.position.z = 12;  

        let windowdesign11= new THREE.BoxBufferGeometry (1,25,1);
        let windowdesign11material = new THREE.MeshPhongMaterial ({ map: texture7 });
        let windowstyle11 = new THREE.Mesh ( windowdesign11,windowdesign11material );
scene.add(windowstyle11);
  windowstyle11.position.x = - 16.5;
    windowstyle11.position.y = 32;
      windowstyle11.position.z = 12;  

        let windowdesign12= new THREE.BoxBufferGeometry (13,1,0.1);
        let windowdesign12material = new THREE.MeshPhongMaterial ({ map: texture7 });
        let windowstyle12 = new THREE.Mesh ( windowdesign12,windowdesign12material );
scene.add(windowstyle12);
  windowstyle12.position.x = -18.5;
    windowstyle12.position.y = 32;
      windowstyle12.position.z = 11;  





                         //column design extensions 'knorr section'
                         const knorr1 = new THREE.CylinderBufferGeometry (5.7,2.7,5,4);
                         const knoRr1material = new THREE.MeshPhongMaterial ({map:texture4});
                         const knorr = new THREE.Mesh ( knorr1, knoRr1material );
                         scene.add(knorr);
                         knorr.position.x = 10;
                         knorr.position.y = 65;
                         knorr.position.z = 11;
                         knorr.rotation.y = 0.8;
                         

                         const knorr2 = new THREE.CylinderBufferGeometry (5.7,2.7,5,4);
                         const knoRr2material = new THREE.MeshPhongMaterial ({map:texture4});
                         const knOrr2 = new THREE.Mesh ( knorr2, knoRr2material );
                         scene.add(knOrr2);
                         knOrr2.position.x = -10;
                         knOrr2.position.y = 65;
                         knOrr2.position.z = 11;
                         knOrr2.rotation.y = 0.8;

                         const knorr3 = new THREE.CylinderBufferGeometry (6.7,2.7,5,4);
                         const knoRr3material = new THREE.MeshPhongMaterial ({map:texture4});
                         const knrr3 = new THREE.Mesh ( knorr3, knoRr3material );
                         scene.add(knrr3);
                         knrr3.position.x = -24.3;
                         knrr3.position.y = 65;
                         knrr3.position.z = 12;
                         knrr3.rotation.y = 0.8;

                         const knorr4 = new THREE.CylinderBufferGeometry (6.7,2.7,5,4);
                         const knoRr4material = new THREE.MeshPhongMaterial ({map:texture4});
                         const kNrr4 = new THREE.Mesh ( knorr4, knoRr4material );
                         scene.add(kNrr4);
                         kNrr4.position.x = 24.3;
                         kNrr4.position.y = 65;
                         kNrr4.position.z = 12; 
                         kNrr4.rotation.y = 0.8;         

                         const knorr5 = new THREE.CylinderBufferGeometry (6.7,2.7,5,4);
                         const knoRr5material = new THREE.MeshPhongMaterial ({map:texture4});
                         const Knrr5 = new THREE.Mesh ( knorr5, knoRr5material );
                         scene.add(Knrr5);
                         Knrr5.position.x = 25;
                         Knrr5.position.y = 65;
                         Knrr5.position.z = 35;
                         Knrr5.rotation.y = 0.8;   

                         const knorr6 = new THREE.CylinderBufferGeometry (6.7,2.7,5,4);
                         const knoRr6material = new THREE.MeshPhongMaterial ({map:texture4});
                         const kNrR6 = new THREE.Mesh ( knorr6, knoRr6material );
                         scene.add(kNrR6);
                         kNrR6.position.x = -25;
                         kNrR6.position.y = 65;
                         kNrR6.position.z = 35;  
                         kNrR6.rotation.y = 0.8;
                         
                         
                         //column design pt.2 '2nd floor'
                         const pt2 = new THREE.CylinderBufferGeometry (3.7,1.7,5,6);
                         const pt2material = new THREE.MeshPhongMaterial ({map:texture4});
                         const col = new THREE.Mesh ( pt2, pt2material );
                         scene.add(col);
                         col.position.x = -24;
                         col.position.y = 37;
                         col.position.z = 35;  

                         const pt3 = new THREE.CylinderBufferGeometry (3.7,1.7,5,6);
                         const pt3material = new THREE.MeshPhongMaterial ({map:texture4});
                         const col1 = new THREE.Mesh ( pt3, pt3material );
                         scene.add(col1);
                         col1.position.x = 24;
                         col1.position.y = 37;
                         col1.position.z = 35;  

                         const pt4 = new THREE.CylinderBufferGeometry (3.7,1.7,5,6);
                         const pt4material = new THREE.MeshPhongMaterial ({map:texture4});
                         const col2 = new THREE.Mesh ( pt4, pt4material );
                         scene.add(col2);
                         col2.position.x = 24;
                         col2.position.y = 37;
                         col2.position.z = 12; 

                         const pt5 = new THREE.CylinderBufferGeometry (3.7,1.7,5,6);
                         const pt5material = new THREE.MeshPhongMaterial ({map:texture4});
                         const col3 = new THREE.Mesh ( pt5, pt5material );
                         scene.add(col3);
                         col3.position.x = -24;
                         col3.position.y = 37;
                         col3.position.z = 12; 

                         const pt6 = new THREE.CylinderBufferGeometry (3.7,1.7,5,6);
                         const pt6material = new THREE.MeshPhongMaterial ({ map:texture4 });
                         const col4 = new THREE.Mesh (pt6,pt6material);
                         scene.add(col4);
                         col4.position.x = -24;
                         col4.position.y = 15;
                         col4.position.z = 35;
                         col4.rotation.y = 0.8;

                         const pt7 = new THREE.CylinderBufferGeometry (3.7,1.7,5,6);
                         const pt7material = new THREE.MeshPhongMaterial ({ map:texture4 });
                         const col5 = new THREE.Mesh (pt7,pt7material);
                         scene.add(col5);
                         col5.position.x = 24;
                         col5.position.y = 15;
                         col5.position.z = 35;
                         col5.rotation.y = 0.8;

                         const pt8 = new THREE.CylinderBufferGeometry (4.7,1.7,5,4);
                         const pt8material = new THREE.MeshPhongMaterial ({ map:texture4 });
                         const col6 = new THREE.Mesh (pt8,pt8material);
                         scene.add(col6);
                         col6.position.x = 10;
                         col6.position.y = 14;
                         col6.position.z = 9;
                         col6.rotation.y = 0.8;

                         const pt9 = new THREE.CylinderBufferGeometry (4.7,1.7,5,4);
                         const pt9material = new THREE.MeshPhongMaterial ({ map:texture4 });
                         const col7 = new THREE.Mesh (pt9,pt9material);
                         scene.add(col7);
                         col7.position.x = -10;
                         col7.position.y = 14;
                         col7.position.z = 9;
                         col7.rotation.y = 0.8;

                         const pt10 = new THREE.CylinderBufferGeometry (4.7,1.7,5,4);
                         const pt10material = new THREE.MeshPhongMaterial ({ map:texture4 });
                         const col8 = new THREE.Mesh (pt10,pt10material );
                         scene.add(col8);
                         col8.position.x = -24.5;
                         col8.position.y = -15;
                         col8.position.z = 12;
                         col8.rotation.y = 0.8;

                         const pt11 = new THREE.CylinderBufferGeometry (4.7,1.7,5,4);
                         const pt11material = new THREE.MeshPhongMaterial ({ map:texture4 });
                         const col9 = new THREE.Mesh (pt11,pt11material );
                         scene.add(col9);
                         col9.position.x = 24.5;
                         col9.position.y = -15;
                         col9.position.z = 12;
                         col9.rotation.y = 0.8;

                         const pt12 = new THREE.CylinderBufferGeometry (4.7,1.7,5,4);
                         const pt12material = new THREE.MeshPhongMaterial ({ map:texture4 });
                         const col10 = new THREE.Mesh (pt12,pt12material );
                         scene.add(col10);
                         col10.position.x = 24.5;
                         col10.position.y = -15;
                         col10.position.z = 35;
                         col10.rotation.y = 0.8;

                         const pt13 = new THREE.CylinderBufferGeometry (4.7,1.7,5,4);
                         const pt13material = new THREE.MeshPhongMaterial ({ map:texture4 });
                         const col13 = new THREE.Mesh (pt13,pt13material );
                         scene.add(col13);
                         col13.position.x = -24.5;
                         col13.position.y = -15;
                         col13.position.z = 35;
                         col13.rotation.y = 0.8;

                        //  const pt14 = new THREE.BoxBufferGeometry ()

                         //small detail for new column section 1st floor - groundfloor
                         let detail = new THREE.BoxBufferGeometry (7,6,6);
                         let detailmaterial = new THREE.MeshPhongMaterial ({ map: texture2 });
                         let detail1 = new THREE.Mesh ( detail, detailmaterial );
                         scene.add(detail1);
                         detail1.position.x = -10;
                         detail1.position.y = -5;
                         detail1.position.z = 9;
                         let de2tail = new THREE.BoxBufferGeometry (6,5,6);
                         let de2tailmaterial = new THREE.MeshPhongMaterial ({ map: texture2 });
                         let detail2 = new THREE.Mesh ( de2tail, de2tailmaterial );
                         scene.add(detail2);
                         detail2.position.x = -10;
                         detail2.position.y = -5;
                         detail2.position.z = 8.6;
                         let de3tail = new THREE.BoxBufferGeometry (3,1,3);
                         let de3tailmaterial = new THREE.MeshPhongMaterial ({ map: texture2 });
                         let detail3 = new THREE.Mesh ( de3tail, de3tailmaterial );
                         scene.add(detail3);
                         detail3.position.x = -10;
                         detail3.position.y = 11;
                         detail3.position.z = 8.6;
                         let detaiL = new THREE.BoxBufferGeometry (8,1,8);
                         let detaiLmaterial = new THREE.MeshPhongMaterial ({ map: texture2 });
                         let detAil = new THREE.Mesh ( detaiL, detaiLmaterial );
                         scene.add(detAil);
                         detAil.position.x = -10;
                         detAil.position.y = 17;
                         detAil.position.z = 8.6;
                         let deTaiL = new THREE.BoxBufferGeometry (8,1,8);
                         let deTailmaterial = new THREE.MeshPhongMaterial ({ map: texture2 });
                         let dEtail = new THREE.Mesh ( deTaiL, deTailmaterial );
                         scene.add(dEtail);
                         dEtail.position.x = 10;
                         dEtail.position.y = 17;
                         dEtail.position.z = 8.6;
                        //  let deTaiL = new THREE.BoxBufferGeometry (8,1,8);
                        //  let deTailmaterial = new THREE.MeshPhongMaterial ({ map: texture2 });
                        //  let dEtail = new THREE.Mesh ( deTaiL, deTailmaterial );
                        //  scene.add(dEtail);
                        //  dEtail.position.x = 10;
                        //  dEtail.position.y = 17;
                        //  dEtail.position.z = 8.6;
                         //pt .2 (for the small details section)
                         let de4tail = new THREE.BoxBufferGeometry (7,6,6);
                         let de4tailmaterial = new THREE.MeshPhongMaterial ({ map: texture2 });
                         let detail4 = new THREE.Mesh ( de4tail, de4tailmaterial );
                         scene.add(detail4);
                         detail4.position.x = 10;
                         detail4.position.y = -5;
                         detail4.position.z = 9;
                         let de5tail = new THREE.BoxBufferGeometry (6,5,6);
                         let de5tailmaterial = new THREE.MeshPhongMaterial ({ map: texture2 });
                         let detail5 = new THREE.Mesh ( de5tail, de5tailmaterial );
                         scene.add(detail5 );
                         detail5 .position.x = 10;
                         detail5 .position.y = -5;
                         detail5 .position.z = 8.6;
                         let de6tail = new THREE.BoxBufferGeometry (3,1,3);
                         let de6tailmaterial = new THREE.MeshPhongMaterial ({ map: texture2 });
                         let detail6 = new THREE.Mesh ( de6tail, de6tailmaterial );
                         scene.add(detail6);
                         detail6.position.x = 10;
                         detail6.position.y = 11;
                         detail6.position.z = 8.6;




                           
                         //new column section for 1st floor - groundfloor

                         const pillarnew  = new THREE.CylinderBufferGeometry (1.5,2.5,17,8);
                         const pillarnewmaterial = new THREE.MeshLambertMaterial ({ map: texture1 });
                         const new1 = new THREE.Mesh ( pillarnew, pillarnewmaterial );
                         scene.add(new1);
                         new1.position.x = -10;
                         new1.position.y = 3;
                         new1.position.z = 9;

                         const pillarnew2  = new THREE.CylinderBufferGeometry (1.5,2.5,17,8);
                         const pillarnew2material = new THREE.MeshLambertMaterial ({ map: texture1 });
                         const new2 = new THREE.Mesh ( pillarnew2, pillarnew2material );
                         scene.add(new2);
                         new2.position.x = 10;
                         new2.position.y = 3;
                         new2.position.z = 9;

    

                         //ARC FOR WINDOW AREAS column (row)
                         let arc = new THREE.TorusBufferGeometry (6,1.6,3,100,2.9);
                         let arcmaterial = new THREE.MeshLambertMaterial ({ map:texture3 });
                         let Arc1 = new THREE.Mesh ( arc,arcmaterial ); 
                         scene.add(Arc1);
                         Arc1.position.x = 0;
                         Arc1.rotation.x = 0;
                         Arc1.position.y = 60.5;
                         Arc1.position.z = 11;
                         Arc1.rotation.z = 0.1;
                         //ARC2
                         let arc2 = new THREE.TorusBufferGeometry (6,1.6,3,100,2.9);
                         let arc2material = new THREE.MeshLambertMaterial ({ map:texture3 });
                         let Arc2 = new THREE.Mesh ( arc2,arc2material ); 
                         scene.add(Arc2);
                         Arc2.position.x = 16.5;
                         Arc2.position.y = 57.5;
                         Arc2.position.z = 11;
                         Arc2.rotation.z = 0.3
                         //ARC3
                         let arc3 = new THREE.TorusBufferGeometry (6,1.6,3,100,2.9);
                         let arc3material = new THREE.MeshLambertMaterial ({ map:texture3 });
                         let Arc3 = new THREE.Mesh ( arc3,arc3material ); 
                         scene.add(Arc3);
                         Arc3.position.x = -17.4;
                        //  Arc3.position.x = Math.PI/-1
                         Arc3.position.y = 57.5;
                         Arc3.position.z = 11;
                         Arc3.rotation.z = 0.3

                         let arc4 = new THREE.TorusBufferGeometry (6,1.6,3,100,2.10);
                         let arc4material = new THREE.MeshLambertMaterial ({ map:texture3 });
                         let Arc4 = new THREE.Mesh ( arc4,arc4material ); 
                         scene.add(Arc4);
                         Arc4.position.x = 16.4;
                         Arc4.position.y = 32
                         Arc4.position.z = 11
                         Arc4.rotation.z = 0.3

                         let arc5 = new THREE.TorusBufferGeometry (6,1.6,3,100,2.10);
                         let arc5material = new THREE.MeshLambertMaterial ({ map:texture3 });
                         let Arc5 = new THREE.Mesh ( arc5,arc5material ); 
                         scene.add(Arc5);
                         Arc5.position.x = -17.5;
                         Arc5.position.y = 32
                         Arc5.position.z = 11
                         Arc5.rotation.z = 0.1

                         let arc6= new THREE.TorusBufferGeometry (6,1.6,3,79,3);
                         let arc6material = new THREE.MeshLambertMaterial ({ map:texture3 });
                         let Arc6 = new THREE.Mesh ( arc6,arc6material ); 
                         scene.add(Arc6);
                         Arc6.position.x = 0;
                         Arc6.position.y = 11
                         Arc6.position.z = 11
                         Arc6.rotation.z = 0.0

                         let arc7 = new THREE.TorusBufferGeometry (6,1.6,3,79,3);
                         let arc7material = new THREE.MeshLambertMaterial ({ map:texture3 });
                         let Arc7 = new THREE.Mesh ( arc7, arc7material );
                         scene.add( Arc7 );
                         Arc7.position.x = 0;
                         Arc7.position.y = -20;
                         Arc7.position.z = 10;
                         Arc7.rotation.z = 0.1;
                         


        // window pane section
           
        const window1 = new THREE.BoxBufferGeometry (45,30,0.1,1);
        const windowmaterial = new THREE.MeshLambertMaterial({ map: texture6, transparent: true,});
        windowmaterial.opacity = 0.7;
        const glasspane = new THREE.Mesh( window1, windowmaterial );
        scene.add(glasspane);
        glasspane.position.set(0,55,11);

        const window2 = new THREE.BoxBufferGeometry (0.1,30,15,1);
        const window2material = new THREE.MeshLambertMaterial({ map: texture6, transparent: true,});
        window2material.opacity = 0.7;
        const glasspane2 = new THREE.Mesh( window2, window2material );
        scene.add(glasspane2);
        glasspane2.position.set(25,55,24);

        const window3 = new THREE.BoxBufferGeometry (0.1,30,15,1);
        const window3material = new THREE.MeshLambertMaterial({ map: texture6, transparent: true,});
        window2material.opacity = 0.7;
        const glasspane3 = new THREE.Mesh( window3, window3material );
        scene.add(glasspane3);
        glasspane3.position.set(-25,55,24);

        const window4 = new THREE.BoxBufferGeometry (50,25,20,1);
        const window4material = new THREE.MeshLambertMaterial({ map: texture6, transparent: true,});
        window4material.opacity = 0.7;
        const glasspane4 = new THREE.Mesh( window4, window4material );
        scene.add(glasspane4);
        glasspane4.position.set(0,31,22);

        const window5 = new THREE.BoxBufferGeometry (50,30,0.1,1);
        const window5material = new THREE.MeshLambertMaterial({ map: texture6, transparent: true,});
        window5material.opacity = 0.7;
        const glasspane5 = new THREE.Mesh( window5, window5material );
        scene.add(glasspane5);
        glasspane5.position.set(0,5,11);

        const window6 = new THREE.BoxBufferGeometry (100,20,0.1,1);
        const window6material = new THREE.MeshLambertMaterial({ map: texture6, transparent: true,});
        window6material.opacity = 0.7;
        const glasspane6 = new THREE.Mesh( window6, window6material );
        scene.add(glasspane6);
        glasspane6.position.set(70,30,13);

        const window7 = new THREE.BoxBufferGeometry (100,20,0.1,1);
        const window7material = new THREE.MeshLambertMaterial({ map: texture6, transparent: true,});
        window7material.opacity = 0.7;
        const glasspane7 = new THREE.Mesh( window7, window7material );
        scene.add(glasspane7);
        glasspane7.position.set(-70,30,13);

        const window8 = new THREE.BoxBufferGeometry (100,25,0.1,1);
        const window8material = new THREE.MeshLambertMaterial({ map: texture6, transparent: true,});
        window8material.opacity = 0.7;
        const glasspane8 = new THREE.Mesh( window8, window8material );
        scene.add(glasspane8);
        glasspane8.position.set(-75,0,13.3);

        const window9 = new THREE.BoxBufferGeometry (100,25,0.1,1);
        const window9material = new THREE.MeshLambertMaterial({ map: texture6, transparent: true,});
        window9material.opacity = 0.7;
        const glasspane9 = new THREE.Mesh( window9, window9material );
        scene.add(glasspane9);
        glasspane9.position.set( 75,0,13.3);

        const window10 = new THREE.BoxBufferGeometry (100,25,0.1,1);
        const window10material = new THREE.MeshLambertMaterial({ map: texture6, transparent: true,});
        window10material.opacity = 0.7;
        const glasspane10 = new THREE.Mesh( window10, window10material );
        scene.add(glasspane10);
        glasspane10.position.set( 65,-25,20.3);

        const window11 = new THREE.BoxBufferGeometry (100,25,0.1,1);
        const window11material = new THREE.MeshLambertMaterial({ map: texture6, transparent: true,});
        window11material.opacity = 0.7;
        const glasspane11 = new THREE.Mesh( window11, window11material );
        scene.add(glasspane11);
        glasspane11.position.set( -65,-25,20.3);
      
      
      
                                     //main center foundation (middle area)
                                      const mainfoundation = new THREE.BoxBufferGeometry (55,4,33);
                                      const mainfoundationmaterial = new THREE.MeshLambertMaterial ({map:texture1});
                                      const mainfoundation1 = new THREE.Mesh ( mainfoundation,mainfoundationmaterial );
                                      scene.add(mainfoundation1);  
                                      mainfoundation1.position.y = 41;
                                      mainfoundation1.position.z = 23;

       //cylinderroof
        const cylinderRoof = new THREE.CylinderBufferGeometry (21.9,21.9,20,50);
        const cylinderRoof1material = new THREE.MeshLambertMaterial ({ map: texture5 });
        const cylinderRoof1 = new THREE.Mesh(cylinderRoof,cylinderRoof1material);
        scene.add(cylinderRoof1);
        cylinderRoof1.position.y = 63;
        cylinderRoof1.rotation.x = 25;
        cylinderRoof1.rotation.x = Math.PI/2
        cylinderRoof1.position.z = 24 
                                     
                                      const cylinder2Roof = new THREE.CylinderBufferGeometry (21.9,21.9,20,50);
                                      const cylinderRoof2material = new THREE.MeshLambertMaterial ({ map: texture5 });
                                      const cylinderRoof2 = new THREE.Mesh(cylinder2Roof,cylinderRoof2material);
                                      scene.add(cylinderRoof2);
                                      cylinderRoof2.position.y = 62;
                                      cylinderRoof2.rotation.x = 25;
                                      cylinderRoof2.rotation.x = Math.PI/2
                                      cylinderRoof2.position.z = 23                                                  
         //mainroof2 
        const Roof = new THREE.BoxBufferGeometry (1,28,25);
        const Roofmaterial = new THREE.MeshLambertMaterial ({map: texture4 });
        const Roofalpha1 = new THREE.Mesh ( Roof, Roofmaterial );
        scene.add(Roofalpha1);
        Roofalpha1.position.x = 13.3;
        Roofalpha1.position.y = 74;
        Roofalpha1.position.z = 24;
        Roofalpha1.rotation.z = 10.7;
                                      const Roof2 = new THREE.BoxBufferGeometry (1,28,25);
                                      const Roof2material = new THREE.MeshLambertMaterial ({map: texture4});
                                      const Roofbravo1 = new THREE.Mesh(Roof,Roof2material);
                                      scene.add(Roofbravo1);
                                      Roofbravo1.position.x = -13.3;
                                      Roofbravo1.position.y = 74;
                                      Roofbravo1.position.z = 24;
                                      Roofbravo1.rotation.z = -10.7;

        const rooF3 = new THREE.BoxBufferGeometry (50,1,25);
        const rooF3material = new THREE.MeshLambertMaterial({ map:texture4 });
        const Roofcharlie1 = new THREE.Mesh( rooF3, rooF3material )
        scene.add(Roofcharlie1);
        Roofcharlie1.position.x = 0;
        Roofcharlie1.position.y = 70.4;
        Roofcharlie1.position.z = 24;       
                                       
                                      const rOof4 = new THREE.BoxBufferGeometry (55,3,30);
                                      const rOof4material = new THREE.MeshLambertMaterial({ map:texture4 });
                                      const Rooflima1 = new THREE.Mesh( rOof4, rOof4material );
                                      scene.add(Rooflima1);
                                      Rooflima1.position.x = 0;
                                      Rooflima1.position.y = 69;
                                      Rooflima1.position.z = 24;     


                                      //----------- MISC DESIGNS FOR MAIN BUILDING ROOFTOP!---------------------
                                      let stand = new THREE.BoxBufferGeometry (6,6,20,5);
                                      let standmaterial = new THREE.MeshLambertMaterial({ map:texture4 });
                                      let Xray = new THREE.Mesh(stand,standmaterial);
                                      scene.add(Xray);
                                      Xray.position.x = 20;
                                      Xray.position.y = 72;
                                      Xray.position.z = 24;
                                      Xray.rotation.y = 0;

                                      let stand1 = new THREE.BoxBufferGeometry (6,6,20,5);
                                      let stand1material = new THREE.MeshLambertMaterial({ map:texture4 });
                                      let Zulu = new THREE.Mesh(stand1,stand1material);
                                      scene.add(Zulu);
                                      Zulu.position.x = -20;
                                      Zulu.position.y = 72;
                                      Zulu.position.z = 24;
                                      Zulu.rotation.y = 0;
                                      //stand2
                                      let stand2 = new THREE.BoxBufferGeometry (10,0.4,20,5);
                                      let stand2material = new THREE.MeshLambertMaterial({ map:texture4 });
                                      let India = new THREE.Mesh(stand2,stand2material);
                                      scene.add(India);
                                      India.position.x = -19;
                                      India.position.y = 75;
                                      India.position.z = 24;
                                      India.rotation.y = 0;

                                      let stand3 = new THREE.BoxBufferGeometry (10,0.4,20,5);
                                      let stand3material = new THREE.MeshLambertMaterial({ map:texture4 });
                                      let Foxtrot = new THREE.Mesh(stand3,stand3material);
                                      scene.add(Foxtrot);
                                      Foxtrot.position.x = 19.10;
                                      Foxtrot.position.y = 75;
                                      Foxtrot.position.z = 24;
                                      Foxtrot.rotation.y = 0;
                                    // middle ext
                                      let misc = new THREE.BoxBufferGeometry (60,1,35);
                                      let miscmaterial = new THREE.MeshLambertMaterial ({ map: texture3 });
                                      let design1 = new THREE.Mesh (misc,miscmaterial);
                                      scene.add(design1);
                                      design1.position.y = 41
                                      design1.position.z = 23.5

                                      let misc1 = new THREE.BoxBufferGeometry (60,1,35);
                                      let misc1material = new THREE.MeshLambertMaterial ({ map: texture3 });
                                      let design2 = new THREE.Mesh (misc1,misc1material);
                                      scene.add(design2);
                                      design2.position.y = 20
                                      design2.position.z = 23.5
                                      
                                      
                            //roofcolumns
                          const column = new THREE.BoxBufferGeometry (4,5,4);
                          const columnMaterial = new THREE.MeshLambertMaterial({ map:texture4 });
                          const Echo1 = new THREE.Mesh ( column,columnMaterial );
                          scene.add(Echo1);
                          Echo1.position.x = 20;
                          Echo1.position.y = 75;
                          Echo1.position.z = 17;

                          const column1 = new THREE.BoxBufferGeometry (4,5,4);
                          const column1Material = new THREE.MeshLambertMaterial({ map:texture4 });
                          const Whiskey1 = new THREE.Mesh ( column1,column1Material );
                          scene.add(Whiskey1);
                          Whiskey1.position.x = -20;
                          Whiskey1.position.y = 75;
                          Whiskey1.position.z = 17;

    //columnpart (Roof)
    const cube = new THREE.BoxBufferGeometry (3,10,3);
    const cubeMaterial = new THREE.MeshLambertMaterial({ map:texture4 });
    const Tango1 = new THREE.Mesh ( cube,cubeMaterial );
    scene.add(Tango1);
    Tango1.position.x = 20;
    Tango1.position.y = 80;
    Tango1.position.z = 17;

    const cube1 = new THREE.BoxBufferGeometry (3,10,3);
    const cube1Material = new THREE.MeshLambertMaterial({ map:texture4 });
    const Gold1 = new THREE.Mesh ( cube1,cube1Material );
    scene.add(Gold1);
    Gold1.position.x = -20;
    Gold1.position.y = 80;
    Gold1.position.z = 17;
                           
                          const cube2 = new THREE.CylinderGeometry (3.7,2,5,4);
                          const cube2Material = new THREE.MeshLambertMaterial({ map:texture4 });
                          const Oscar1= new THREE.Mesh ( cube2,cube2Material );
                          scene.add(Oscar1);
                          Oscar1.position.x = -20;
                          Oscar1.position.y = 85.10;
                          Oscar1.position.z = 17;
                          Oscar1.rotation.y = 0.8;
                           
                          const cube3 = new THREE.CylinderGeometry (3.7,2,5,4);
                          const cube3Material = new THREE.MeshLambertMaterial({ map:texture4 });
                          const Lima1= new THREE.Mesh ( cube3,cube3Material );
                          scene.add(Lima1);
                          Lima1.position.x = 20;
                          Lima1.position.y = 85.10;
                          Lima1.position.z = 17;
                          Lima1.rotation.y = 0.8;  
                               
                          





//pillar stand bois groundfloor ---------
//                 const groundPillar1 = new THREE.BoxBufferGeometry (3,3,3);
//            const groundPillar1material = new THREE.MeshBasicMaterial ( {color:0xFFFF97} );
//        const pillar1 = new THREE.Mesh ( groundPillar1,groundPillar1material );
//         scene.add(pillar1);
//         pillar1.position.x = 13
//         pillar1.position.y = 9
//       pillar1.position.z = 16
//  pillar1.rotation.y = 0; 
//        const groundPillar2 = new THREE.BoxBufferGeometry (3,3,3);
//       const groundPillar2material = new THREE.MeshBasicMaterial ( {color:0xFFFF97} );
//       const pillar2 = new THREE.Mesh ( groundPillar2,groundPillar2material );
//       scene.add(pillar2);
//          pillar2.position.x = 6
//        pillar2.position.y = 9
//       pillar2.position.z = 16
//     pillar2.rotation.y = 0; 
//     const groundPillar3 = new THREE.BoxBufferGeometry (3,3,3);
//         const groundPillar3material = new THREE.MeshBasicMaterial ( {color:0xFFFF97} );
//         const pillar3 = new THREE.Mesh ( groundPillar3,groundPillar3material );
//           scene.add(pillar3);
//         pillar3.position.x = 6
//           pillar3.position.y = 1 
//           pillar3.position.z = 16
//            pillar3.rotation.y = 0; 
//            const groundPillar4 = new THREE.BoxBufferGeometry (3,3,3);
//                      const groundPillar4material = new THREE.MeshBasicMaterial ( {color:0xFFFF97} );
//                        const pillar4 = new THREE.Mesh ( groundPillar4,groundPillar4material );
//                         scene.add(pillar4);
//                           pillar4.position.x = 13
//                        pillar4.position.y = 1 
//                      pillar4.position.z = 16
//                    pillar4.rotation.y = 0;              
//                    const groundPillar5 = new THREE.BoxBufferGeometry (2,1,3);
//                 const groundPillar5material = new THREE.MeshBasicMaterial ( {color:0xFFFF97} );
//                const pillar5 = new THREE.Mesh ( groundPillar5,groundPillar5material );
//                scene.add(pillar5);
//                pillar5.position.x = -8
//               pillar5.position.y = 1 
//              pillar5.position.z = 16
//          pillar5.rotation.y = 0;

//      const groundPillar6 = new THREE.BoxBufferGeometry (3,3,3);
//      const groundPillar6material = new THREE.MeshBasicMaterial ( {color:0xFFFF97} );
//         const pillar6 = new THREE.Mesh ( groundPillar6,groundPillar6material );
//          scene.add(pillar6);
//             pillar6.position.x = -8
//          pillar6.position.y = 1 
//       pillar6.position.z = 16
//      pillar6.rotation.y = 0;  

//    const groundPillar7 = new THREE.BoxBufferGeometry (3,3,3);
//   const groundPillar7material = new THREE.MeshBasicMaterial ( {color:0xFFFF97} );
//     const pillar7 = new THREE.Mesh ( groundPillar7,groundPillar7material );
//        scene.add(pillar7);
//        pillar7.position.x = -8
//      pillar7.position.y = 9
//     pillar7.position.z = 16
// pillar7.rotation.y = 0;  

// const groundPillar8 = new THREE.BoxBufferGeometry (3,3,3);
//   const groundPillar8material = new THREE.MeshBasicMaterial ( {color:0xFFFF97} );
//     const pillar8 = new THREE.Mesh ( groundPillar8,groundPillar8material );       scene.add(pillar8);
//      pillar8.position.x = -15
//      pillar8.position.y = 9
//            pillar8.position.z = 16
//              pillar8.rotation.y = 0;  

//             const groundPillar9 = new THREE.BoxBufferGeometry (3,3,3);
//            const groundPillar9material = new THREE.MeshBasicMaterial ( {color:0xFFFF97} );
//          const pillar9 = new THREE.Mesh ( groundPillar9,groundPillar9material );
//        scene.add(pillar9);
//        pillar9.position.x = -15
//       pillar9.position.y = 1
//     pillar9.position.z = 16
// pillar9.rotation.y = 0;  

// const groundPillar10 = new THREE.BoxBufferGeometry (3,3,3);
//   const groundPillar10material = new THREE.MeshBasicMaterial ( {color:0xFFFF97} );
//      const pillar10 = new THREE.Mesh ( groundPillar10,groundPillar10material );
//         scene.add(pillar10);
//      pillar10.position.x = -25
//     pillar10.position.y = 9
//   pillar10.position.z = 16
// pillar10.rotation.y = 0;  

//  const groundPillar11 = new THREE.BoxBufferGeometry (3,3,3);
//     const groundPillar11material = new THREE.MeshBasicMaterial ( {color:0xFFFF97} );
//        const pillar11 = new THREE.Mesh ( groundPillar11,groundPillar11material );
//        scene.add(pillar11);
//    pillar11.position.x = 25
//  pillar11.position.y = 9
// pillar11.position.z = 16
// pillar11.rotation.y = 0;  

// const groundPillar12 = new THREE.BoxBufferGeometry (2,3,3);
//  const groundPillar12material = new THREE.MeshBasicMaterial ( {color:0xFFFF97} );
//    const pillar12 = new THREE.Mesh ( groundPillar12,groundPillar12material );
//        scene.add(pillar12);
//    pillar12.position.x = 25
//  pillar12.position.y = 1
// pillar12.position.z = 16
// pillar12.rotation.y = 0;  

// const groundPillar13 = new THREE.BoxBufferGeometry (3,3,3);
//                  const groundPillar13material = new THREE.MeshBasicMaterial ( {color:0xFFFF97} );
//                 const pillar13 = new THREE.Mesh ( groundPillar13,groundPillar13material );
//                scene.add(pillar13);
//              pillar13.position.x = -25
//             pillar13.position.y = 1
//           pillar13.position.z = 16
//         pillar13.rotation.y = 0;  
    
        //cylinder Pillarmen UNDERCONSTRUCTION (CAUTION!!!)//smoothcriminals------------
    //1st pillar

      // const smoothcriminal1 = new THREE.CylinderBufferGeometry (1,1,8);
      //  const smoothcriminal1material = new THREE.MeshPhongMaterial ( {map:texture3});
      //   const smoothngacriminal1 = new THREE.Mesh (smoothcriminal1 , smoothcriminal1material);
      //     scene.add(smoothngacriminal1);
      //        smoothngacriminal1.position.x = -25
      //         smoothngacriminal1.position.y = 4
      //          smoothngacriminal1. position.z = 0
      //           smoothngacriminal1.rotation.y = 0
          

      

       //doordesign sectionSS---------
//       const doordesign = new THREE.BoxBufferGeometry (3,1,2);
//    const doorDesignmaterial = new THREE.MeshBasicMaterial ({color:0x00ffff });
//   const doordesign1 = new THREE.Mesh (doordesign,doorDesignmaterial);
// scene.add(doordesign1);
//  doordesign1.position.x = -1; 
//   doordesign1.position.y = 9;
//     doordesign1.position.z = 15;
//         doordesign1.rotation.y = 0;

//                const doordesign2 = new THREE.BoxBufferGeometry (3,1,1);
//                    const DoorDesign2material = new THREE.MeshBasicMaterial ({color:0x00ffff });
//                      const doornadesign2 = new THREE.Mesh (doordesign2,DoorDesign2material);
//                   scene.add(doornadesign2);
//              doornadesign2.position.x = -4; 
//          doornadesign2.position.y = 9;
//       doornadesign2.position.z = 15;
//   doornadesign2.rotation.z = 0;

//   const doordesign3 = new THREE.BoxBufferGeometry (3,1,1);
//      const DoorDesign3material = new THREE.MeshBasicMaterial ({color:0x00ffff });
//          const doornadesign3 = new THREE.Mesh (doordesign2,DoorDesign3material);
//             scene.add(doornadesign3);
//                 doornadesign3.position.x = 2; 
//                    doornadesign3.position.y = 9;
//                        doornadesign3.position.z = 15;

//                         const doordesign4 = new THREE.BoxBufferGeometry (3,2,2)
//                          const doornadesign4 = new THREE.MeshBasicMaterial ({color:0x160413});
//                            const doorblockdesign4 = new THREE.Mesh (doordesign4,doornadesign4);
//                            scene.add(doorblockdesign4);
//                            doorblockdesign4.position.x = 2
//                          doorblockdesign4.position.y = 5
//                      doorblockdesign4.position.z = 15
//              const doordesign5 = new THREE.BoxBufferGeometry (3,2,2)
//          const doornadesign5 = new THREE.MeshBasicMaterial ({color:0x160413});
//         const doorblockdesign5 = new THREE.Mesh (doordesign5,doornadesign5);
//        doorblockdesign5.position.x = -4
//          doorblockdesign5.position.y = 5
//             doorblockdesign5.position.z = 15
//                  scene.add(doorblockdesign5);

                 //pillar structure for entrance-----
                    //  const pillarstructure = new THREE.CylinderBufferGeometry (1,1,9);
                    //      const pillarstructurematerial = new THREE.MeshBasicMaterial ({color:0xFF0000});
                    //          const structure1 = new THREE.Mesh (pillarstructure,pillarstructurematerial);
                    //              scene.add(structure1);
                    //                 structure1.position.x = 2;
                    //                    structure1.position.y = 4;
                    //                        structure1.position.z = 16;
                    //                          const pillarstructure2 = new THREE.CylinderBufferGeometry (1,1,9);
                    //                            const pillarstructurematerial2 = new THREE.MeshBasicMaterial ({color:0xFF0000});
                    //                             const structure2 = new THREE.Mesh (pillarstructure2,pillarstructurematerial2);
                    //                             scene.add(structure2);
                    //                            structure2.position.x = -4;
                    //                        structure2.position.y = 4;
                    //                     structure2.position.z = 16;

        //                              const pillarstructure2 = new THREE.CylinderBufferGeometry (1,1,9);
        //                          const pillarstructurematerial2 = new THREE.MeshBasicMaterial ({color:0xFF0000});
        //                     const structure2 = new THREE.Mesh (pillarstructure2,pillarstructurematerial2);
        //               scene.add(structure2);
        //          structure2.position.x = -4;
        //      structure2.position.y = 4;
        //  structure2.position.z = 16;
     //misc-----------------------
    //  const frontWalldesign = new THREE.BoxBufferGeometry (7,4,4);
    //  const frontdesignmaterial = new THREE.MeshBasicMaterial ({color:0xFF0000});
    //     const walldesign1 = new THREE.Mesh (frontWalldesign,frontdesignmaterial);
    //       scene.add(walldesign1);
    //         walldesign1.position.x = 9;
    //           walldesign1.position.y = 2;
    //              walldesign1.position.z = 18
    //               const frontWalldesign2 = new THREE.BoxBufferGeometry (7,4,4);
    //                 const frontdesignmaterial2 = new THREE.MeshBasicMaterial ({color:0xFF0000});
    //                   const walldesign2 = new THREE.Mesh (frontWalldesign2,frontdesignmaterial2);
    //                      scene.add(walldesign2);
    //                        walldesign2.position.x = -11;
    //                          walldesign2.position.y = 2;
    //                           walldesign2.position.z = 18
    //                           //circle spotlight design for the library------ 
    //                           const circlewindow = new THREE.TorusBufferGeometry (1,0,3,30);
    //                         const circlewindowmaterial = new THREE.MeshBasicMaterial ({color:0xFFFFa});
    //                       const circlewindowdesign = new THREE.Mesh (circlewindow, circlewindowmaterial);
    //                     scene.add(circlewindowdesign);   
    //                  circlewindowdesign.position.x = 9
    //             circlewindowdesign.position.y = 6
    //          circlewindowdesign.position.z = 16
      //      const circlewindow = new THREE.TorusBufferGeometry (1,0,3,30);
      //   const circlewindowmaterial = new THREE.MeshBasicMaterial ({color:0xFFFFa})
      //  const circlewindowdesign = new THREE.Mesh (circlewindow, circlewindowmaterial);
      //  scene.add(circlewindowdesign);   
      //   circlewindowdesign.position.x = 9
      //    circlewindowdesign.position.y = 6
      //     circlewindowdesign.position.z = 16
      
              // //try
              // const geometry = new THREE.SphereBufferGeometry (100,100,100);
              // const material = new THREE.PointsMaterial({color: 'white',size: 0.2, });
              // const points = new THREE.Points (geometry, material);
              // scene.add(points);

              
// //3rdfloorl and right parts of the building 
// const building = new THREE.BoxBufferGeometry (100,75,1);
// const buildingmaterial = new THREE.MeshLambertMaterial ({map: texture1});
// const beetlejuice = new THREE.Mesh(building, buildingmaterial);
// scene.add(beetlejuice);
// beetlejuice.position.x = 75;
// beetlejuice.position.y = -15;
// beetlejuice.position.z = 37.3;


              //new building floorground floor to 3rd new section
        const building = new THREE.BoxBufferGeometry (100,75,1);
        const buildingmaterial = new THREE.MeshLambertMaterial ({map: texture1});
        const beetlejuice = new THREE.Mesh(building, buildingmaterial);
        scene.add(beetlejuice);
        beetlejuice.position.x = 75;
        beetlejuice.position.y = -15;
        beetlejuice.position.z = 37.3;
        const building2 = new THREE.BoxBufferGeometry (100,1,27);
        const building2material = new THREE.MeshLambertMaterial ({map: texture1});
        const beetlejuice2 = new THREE.Mesh(building2, building2material);
        scene.add(beetlejuice2);
        beetlejuice2.position.x = 75;
        beetlejuice2.position.y = 20;
        beetlejuice2.position.z = 25.3;
        const building3 = new THREE.BoxBufferGeometry (100,1,26.5);
        const building3material = new THREE.MeshLambertMaterial ({map: texture1});
        const beetlejuice3 = new THREE.Mesh(building3, building3material);
        scene.add(beetlejuice3);
        beetlejuice3.position.x = 75;
        beetlejuice3.position.y = 20;
        beetlejuice3.position.z = 25.3;
        const building4 = new THREE.BoxBufferGeometry (100,11,1);
        const building4material = new THREE.MeshLambertMaterial ({map: texture1});
        const beetlejuice4 = new THREE.Mesh(building4, building4material);
        scene.add(beetlejuice4);
        beetlejuice4.position.x = 75;
        beetlejuice4.position.y = 17.5;
        beetlejuice4.position.z = 13;
        const building5 = new THREE.BoxBufferGeometry (100,11,1);
        const building5material = new THREE.MeshLambertMaterial ({map: texture1});
        const beetlejuice5 = new THREE.Mesh(building5, building5material);
        scene.add(beetlejuice5);
        beetlejuice5.position.x = 75;
        beetlejuice5.position.y = 17.5;
        beetlejuice5.position.z = 13;


        //ARC pt2 for bottom area
 let up = new THREE.TorusBufferGeometry (9,2.2,3,103,3);
 let upmaterial = new THREE.MeshPhongMaterial ({map: texture3});
 let UP = new THREE.Mesh(up,upmaterial);
 scene.add(UP);
 UP.position.x = 50;
 UP.position.y = -23;
 UP.position.z = 15;
 UP.rotation.z = 0.1;

 let up1 = new THREE.TorusBufferGeometry (9,2.2,3,103,3);
 let upmaterial1 = new THREE.MeshPhongMaterial ({map: texture3});
 let UP1 = new THREE.Mesh(up1,upmaterial1);
 scene.add(UP1);
 UP1.position.x = 80;
 UP1.position.y = -23;
 UP1.position.z = 15;
 UP1.rotation.z = 0.1;

 let up2 = new THREE.TorusBufferGeometry (9,2.2,3,103,3);
 let upmaterial2 = new THREE.MeshPhongMaterial ({map: texture3});
 let UP2 = new THREE.Mesh(up2,upmaterial1);
 scene.add(UP2);
 UP2.position.x = -80;
 UP2.position.y = -23;
 UP2.position.z = 14;
 UP2.rotation.z = 0.1;

 let up3 = new THREE.TorusBufferGeometry (9,2.2,3,103,3);
 let upmaterial3 = new THREE.MeshPhongMaterial ({map: texture3});
 let UP3 = new THREE.Mesh(up3,upmaterial3);
 scene.add(UP3);
 UP3.position.x = -50;
 UP3.position.y = -23;
 UP3.position.z = 14;
 UP3.rotation.z = 0.1;

 let up4 = new THREE.TorusBufferGeometry (9,2.2,3,103,3);
 let upmaterial4 = new THREE.MeshPhongMaterial ({map: texture3});
 let UP4 = new THREE.Mesh(up4,upmaterial4);
 scene.add(UP4);
 UP4.position.x = -110;
 UP4.position.y = -23;
 UP4.position.z = 14;
 UP4.rotation.z = 0.1;
 
 let up5 = new THREE.TorusBufferGeometry (9,2.2,3,103,3);
 let upmaterial5 = new THREE.MeshPhongMaterial ({map: texture3});
 let UP5 = new THREE.Mesh(up5,upmaterial5);
 scene.add(UP5);
 UP5.position.x = 110;
 UP5.position.y = -23;
 UP5.position.z = 14;
 UP5.rotation.z = 0.1;


                              //building con. (rightside)
                              const building6 = new THREE.BoxBufferGeometry (100,75,1);
                              const building6material = new THREE.MeshLambertMaterial ({map: texture1});
                              const beetlejuice6 = new THREE.Mesh(building6, building6material);
                              scene.add(beetlejuice6);
                              beetlejuice6.position.x = -75;
                              beetlejuice6.position.y = -15;
                              beetlejuice6.position.z = 37.3;

                              const building7 = new THREE.BoxBufferGeometry (100,1,27);
                              const building7material = new THREE.MeshLambertMaterial ({map: texture1});
                              const beetlejuice7 = new THREE.Mesh(building7, building7material);
                              scene.add(beetlejuice7);
                              beetlejuice7.position.x = -75;
                              beetlejuice7.position.y = 20;
                              beetlejuice7.position.z = 25.3;

                              const building8 = new THREE.BoxBufferGeometry (100,11,1);
                              const building8material = new THREE.MeshLambertMaterial ({map: texture1});
                              const beetlejuice8 = new THREE.Mesh(building8, building8material);
                              scene.add(beetlejuice8);
                              beetlejuice8.position.x = -75;
                              beetlejuice8.position.y = 17.5;
                              beetlejuice8.position.z = 13;   
                              
                              //buildingwalls for 1st to 2nd L & R 

                              const Wall = new THREE.BoxBufferGeometry (9,20.5,1);
                              const wallmaterial = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall1 = new THREE.Mesh (Wall , wallmaterial);
                              scene.add(wall1);
                              wall1.position.x = 30;
                              wall1.position.y = 2.5;
                              wall1.position.z = 13.5;

                              const Wall2 = new THREE.BoxBufferGeometry (9,20.5,1);
                              const wall2material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall2 = new THREE.Mesh (Wall2 , wall2material);
                              scene.add(wall2);
                              wall2.position.x = 50;
                              wall2.position.y = 2.5;
                              wall2.position.z = 13.5;

                              const Wall3 = new THREE.BoxBufferGeometry (9,20.5,1);
                              const wall3material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall3 = new THREE.Mesh (Wall3 , wall3material);
                              scene.add(wall3);
                              wall3.position.x = 70;
                              wall3.position.y = 2.5;
                              wall3.position.z = 13.5;

                              const Wall4 = new THREE.BoxBufferGeometry (9,20.5,1);
                              const wall4material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall4 = new THREE.Mesh (Wall4 , wall4material);
                              scene.add(wall4);
                              wall4.position.x = 90;
                              wall4.position.y = 2.5;
                              wall4.position.z = 13.5;

                              const Wall5 = new THREE.BoxBufferGeometry (9,20.5,1);
                              const wall5material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall5 = new THREE.Mesh (Wall5 , wall5material);
                              scene.add(wall5);
                              wall5.position.x = 110;
                              wall5.position.y = 2.5;
                              wall5.position.z = 13.5;

                              const Wall6 = new THREE.BoxBufferGeometry (9,20.5,1);
                              const wall6material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall6 = new THREE.Mesh (Wall6 , wall6material);
                              scene.add(wall6);
                              wall6.position.x = -30;
                              wall6.position.y = 2.5;
                              wall6.position.z = 13.5;

                              const Wall7 = new THREE.BoxBufferGeometry (9,20.5,1);
                              const wall7material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall7 = new THREE.Mesh (Wall7 , wall7material);
                              scene.add(wall7);
                              wall7.position.x = -50;
                              wall7.position.y = 2.5;
                              wall7.position.z = 13.5;

                              const Wall8 = new THREE.BoxBufferGeometry (9,20.5,1);
                              const wall8material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall8 = new THREE.Mesh (Wall8 , wall8material);
                              scene.add(wall8);
                              wall8.position.x = -70;
                              wall8.position.y = 2.5;
                              wall8.position.z = 13.5;

                              const Wall9 = new THREE.BoxBufferGeometry (9,20.5,1);
                              const wall9material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall9 = new THREE.Mesh (Wall9 , wall9material);
                              scene.add(wall9);
                              wall9.position.x = -90;
                              wall9.position.y = 2.5;
                              wall9.position.z = 13.5;
                              
                              const Wall10 = new THREE.BoxBufferGeometry (9,20.5,1);
                              const wall10material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall10 = new THREE.Mesh (Wall10 , wall10material);
                              scene.add(wall10);
                              wall10.position.x = -110;
                              wall10.position.y = 2.5;
                              wall10.position.z = 13.5;

                              
                              //3rd flooorr
                              

                              const Wall11 = new THREE.BoxBufferGeometry (100,23.5,1);
                              const wall11material = new THREE.MeshPhongMaterial ({ map:texture1 });
                              const wall11 = new THREE.Mesh (Wall11 , wall11material);
                              scene.add(wall11);
                              wall11.position.x = 75;
                              wall11.position.y = 33.5;
                              wall11.position.z = 37.3;

                              const Wall12 = new THREE.BoxBufferGeometry (100,23.5,1);
                              const wall12material = new THREE.MeshPhongMaterial ({ map:texture1 });
                              const wall12 = new THREE.Mesh (Wall12 , wall12material);
                              scene.add(wall12);
                              wall12.position.x = -75;
                              wall12.position.y = 33.5;
                              wall12.position.z = 37.3;

                              const Wall13 = new THREE.BoxBufferGeometry (110,5,3);
                              const wall13material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall13 = new THREE.Mesh (Wall13 , wall13material);
                              scene.add(wall13);
                              wall13.position.x = 65;
                              wall13.position.y = 25.3;
                              wall13.position.z = 13.5;

                              const Wall14 = new THREE.BoxBufferGeometry (110,5,3);
                              const wall14material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall14 = new THREE.Mesh (Wall14 , wall14material);
                              scene.add(wall14);
                              wall14.position.x = -65;
                              wall14.position.y = 25.3;
                              wall14.position.z = 13.5;

                              const Wall15 = new THREE.BoxBufferGeometry (100,5,1);
                              const wall15material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall15 = new THREE.Mesh (Wall15 , wall15material);
                              scene.add(wall15);
                              wall15.position.x = 70;
                              wall15.position.y = 40.3;
                              wall15.position.z = 15.;

                              const Wall16 = new THREE.BoxBufferGeometry (100,5,1);
                              const wall16material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall16 = new THREE.Mesh (Wall16 , wall16material);
                              scene.add(wall16);
                              wall16.position.x = -70;
                              wall16.position.y = 40.3;
                              wall16.position.z = 15.;

                              const Wall17 = new THREE.BoxBufferGeometry (10,15,1);
                              const wall17material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall17 = new THREE.Mesh (Wall17 , wall17material);
                              scene.add(wall17);
                              wall17.position.x = 29;
                              wall17.position.y = 33.3;
                              wall17.position.z = 13.;

                              const Wall18 = new THREE.BoxBufferGeometry (10,15,1);
                              const wall18material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall18 = new THREE.Mesh (Wall18 , wall18material);
                              scene.add(wall18);
                              wall18.position.x = 50;
                              wall18.position.y = 33.3;
                              wall18.position.z = 13.;

                              const Wall19 = new THREE.BoxBufferGeometry (10,15,1);
                              const wall19material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall19 = new THREE.Mesh (Wall19 , wall19material);
                              scene.add(wall19);
                              wall19.position.x = 70;
                              wall19.position.y = 33.3;
                              wall19.position.z = 13.;

                              const Wall20 = new THREE.BoxBufferGeometry (10,15,1);
                              const wall20material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall20 = new THREE.Mesh (Wall20 , wall20material);
                              scene.add(wall20);
                              wall20.position.x = 90;
                              wall20.position.y = 33.3;
                              wall20.position.z = 13.;

                              const Wall21 = new THREE.BoxBufferGeometry (10,15,1);
                              const wall21material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall21 = new THREE.Mesh (Wall21 , wall21material);
                              scene.add(wall21);
                              wall21.position.x = 110;
                              wall21.position.y = 33.3;
                              wall21.position.z = 13.;

                              const Wall24 = new THREE.BoxBufferGeometry (10,15,1);
                              const wall24material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall24 = new THREE.Mesh (Wall24 , wall24material);
                              scene.add(wall24);
                              wall24.position.x = -50;
                              wall24.position.y = 33.3;
                              wall24.position.z = 13.;

                              const Wall25 = new THREE.BoxBufferGeometry (10,15,1);
                              const wall25material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall25 = new THREE.Mesh (Wall25 , wall25material);
                              scene.add(wall25);
                              wall25.position.x = -70;
                              wall25.position.y = 33.3;
                              wall25.position.z = 13.;
                              
                              const Wall26 = new THREE.BoxBufferGeometry (10,15,1);
                              const wall26material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall26 = new THREE.Mesh (Wall26 , wall26material);
                              scene.add(wall26);
                              wall26.position.x = -90;
                              wall26.position.y = 33.3;
                              wall26.position.z = 13.;

                              const Wall27 = new THREE.BoxBufferGeometry (10,15,1);
                              const wall27material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall27 = new THREE.Mesh (Wall27 , wall27material);
                              scene.add(wall27);
                              wall27.position.x = -110;
                              wall27.position.y = 33.3;
                              wall27.position.z = 13.;

                              const Wall28 = new THREE.BoxBufferGeometry (10,15,1);
                              const wall28material = new THREE.MeshPhongMaterial ({ map:texture2 });
                              const wall28 = new THREE.Mesh (Wall28 , wall28material);
                              scene.add(wall28);
                              wall28.position.x = -28;
                              wall28.position.y = 33.3;
                              wall28.position.z = 13.;







                              
                              

                              //closer L & R 

                              let closer = new THREE.BoxBufferGeometry (10,100,30);
                              let closermaterial = new THREE.MeshPhongMaterial ({ map:texture1 });
                              let cloSer = new THREE.Mesh (closer, closermaterial);
                              scene.add(cloSer);
                              cloSer.position.x = -125;
                              cloSer.position.y = -5;
                              cloSer.position.z = 22;

                              let closer2 = new THREE.BoxBufferGeometry (10,100,30);
                              let closermaterial2 = new THREE.MeshPhongMaterial ({ map:texture1 });
                              let cloSer2 = new THREE.Mesh (closer2, closermaterial2);
                              scene.add(cloSer2);
                              cloSer2.position.x = 125;
                              cloSer2.position.y = -5;
                              cloSer2.position.z = 22;

                              //wideroof3rd floor 

                              // let Wroof = new THREE.BoxBufferGeometry(100,5,);
                              // let Wroofmaterial = new THREE.BoxBufferGeometry ({ map: texture });
                              // let wroof = new THREE.Mesh (Wroof ,  Wroofmaterial);
                              // scene.add(wroof);
                              // wroof.position.x = 0;
                              // wroof.position.y = 80;
                              // wroof.position.z = 23;

                             //window pane bars

                              let bArs = new THREE.BoxBufferGeometry (1,25,1);
                              let barsmarterial = new THREE.MeshPhongMaterial ({map: texture7});
                              let bars = new THREE.Mesh ( bArs, barsmarterial );
                              scene.add(bars);
                              bars.position.x = 40;
                              bars.position.y = 2.5;
                              bars.position.z = 13.5;

                              let bArs2 = new THREE.BoxBufferGeometry (1,25,1);
                              let barsmarterial2 = new THREE.MeshPhongMaterial ({map: texture7});
                              let bars2 = new THREE.Mesh ( bArs2, barsmarterial2 );
                              scene.add(bars2);
                              bars2.position.x = 60;
                              bars2.position.y = 2.5;
                              bars2.position.z = 13.5;

                              let bArs3 = new THREE.BoxBufferGeometry (1,25,1);
                              let barsmarterial3 = new THREE.MeshPhongMaterial ({map: texture7});
                              let bars3 = new THREE.Mesh ( bArs3, barsmarterial3 );
                              scene.add(bars3);
                              bars3.position.x = 80;
                              bars3.position.y = 2.5;
                              bars3.position.z = 13.5;

                              let bArs4 = new THREE.BoxBufferGeometry (1,25,1);
                              let barsmarterial4 = new THREE.MeshPhongMaterial ({map: texture7});
                              let bars4 = new THREE.Mesh ( bArs4, barsmarterial4 );
                              scene.add(bars4);
                              bars4.position.x = 100;
                              bars4.position.y = 2.5;
                              bars4.position.z = 13.5;
                              
                              //Left bars

                              
                              let bArs5 = new THREE.BoxBufferGeometry (1,25,1);
                              let barsmarterial5 = new THREE.MeshPhongMaterial ({map: texture7});
                              let bars5 = new THREE.Mesh ( bArs5, barsmarterial5 );
                              scene.add(bars5);
                              bars5.position.x = -40;
                              bars5.position.y = 2.5;
                              bars5.position.z = 13.5;

                              let bArs6 = new THREE.BoxBufferGeometry (1,25,1);
                              let barsmarterial6 = new THREE.MeshPhongMaterial ({map: texture7});
                              let bars6 = new THREE.Mesh ( bArs6, barsmarterial6 );
                              scene.add(bars6);
                              bars6.position.x = -60;
                              bars6.position.y = 2.5;
                              bars6.position.z = 13.5;

                              let bArs7 = new THREE.BoxBufferGeometry (1,25,1);
                              let barsmarterial7 = new THREE.MeshPhongMaterial ({map: texture7});
                              let bars7 = new THREE.Mesh ( bArs7, barsmarterial7 );
                              scene.add(bars7);
                              bars7.position.x = -80;
                              bars7.position.y = 2.5;
                              bars7.position.z = 13.5;

                              let bArs8 = new THREE.BoxBufferGeometry (1,25,1);
                              let barsmarterial8 = new THREE.MeshPhongMaterial ({map: texture7});
                              let bars8 = new THREE.Mesh ( bArs8, barsmarterial8 );
                              scene.add(bars8);
                              bars8.position.x = -100;
                              bars8.position.y = 2.5;
                              bars8.position.z = 13.5;

                              //horizontal bars Right

                              let bArs9 = new THREE.BoxBufferGeometry (12,1,1);
                              let barsmarterial9 = new THREE.MeshPhongMaterial ({map: texture7});
                              let bars9 = new THREE.Mesh ( bArs9, barsmarterial9 );
                              scene.add(bars9);
                              bars9.position.x = -40;
                              bars9.position.y = -1;
                              bars9.position.z = 13.5;

                              let bArs10 = new THREE.BoxBufferGeometry (12,1,1);
                              let barsmarterial10 = new THREE.MeshPhongMaterial ({map: texture7});
                              let bars10 = new THREE.Mesh ( bArs10, barsmarterial10 );
                              scene.add(bars10);
                              bars10.position.x = -60;
                              bars10.position.y = -1;
                              bars10.position.z = 13.5;

                              let bArs11 = new THREE.BoxBufferGeometry (12,1,1);
                              let barsmarterial11 = new THREE.MeshPhongMaterial ({map: texture7});
                              let bars11 = new THREE.Mesh ( bArs11, barsmarterial11 );
                              scene.add(bars11);
                              bars11.position.x = -80;
                              bars11.position.y = -1;
                              bars11.position.z = 13.5;

                              let bArs12 = new THREE.BoxBufferGeometry (12,1,1);
                              let barsmarterial12 = new THREE.MeshPhongMaterial ({map: texture7});
                              let bars12 = new THREE.Mesh ( bArs12, barsmarterial12 );
                              scene.add(bars12);
                              bars12.position.x = -100;
                              bars12.position.y = -1;
                              bars12.position.z = 13.5;

                              let bArs13 = new THREE.BoxBufferGeometry (12,1,1);
                              let barsmarterial13 = new THREE.MeshPhongMaterial ({map: texture7});
                              let bars13 = new THREE.Mesh ( bArs13, barsmarterial13 );
                              scene.add(bars13);
                              bars13.position.x = -120;
                              bars13.position.y = -1;
                              bars13.position.z = 13.5;

                              let bArs14 = new THREE.BoxBufferGeometry (12,1,1);
                              let barsmarterial14 = new THREE.MeshPhongMaterial ({map: texture7});
                              let bars14 = new THREE.Mesh ( bArs14, barsmarterial14 );
                              scene.add(bars14);
                              bars14.position.x = -100;
                              bars14.position.y = -1;
                              bars14.position.z = 13.5;

                                    //horizontal bars left

                                    let bArs15 = new THREE.BoxBufferGeometry (12,1,1);
                                    let barsmarterial15 = new THREE.MeshPhongMaterial ({map: texture7});
                                    let bars15 = new THREE.Mesh ( bArs15, barsmarterial15 );
                                    scene.add(bars15);
                                    bars15.position.x = 40;
                                    bars15.position.y = -1;
                                    bars15.position.z = 13.5;
      
                                    let bArs16 = new THREE.BoxBufferGeometry (12,1,1);
                                    let barsmarterial16 = new THREE.MeshPhongMaterial ({map: texture7});
                                    let bars16 = new THREE.Mesh ( bArs16, barsmarterial16 );
                                    scene.add(bars16);
                                    bars16.position.x = 60;
                                    bars16.position.y = -1;
                                    bars16.position.z = 13.5;
      
                                    let bArs17 = new THREE.BoxBufferGeometry (12,1,1);
                                    let barsmarterial17 = new THREE.MeshPhongMaterial ({map: texture7});
                                    let bars17 = new THREE.Mesh ( bArs17, barsmarterial17 );
                                    scene.add(bars11);
                                    bars17.position.x = 80;
                                    bars17.position.y = -1;
                                    bars17.position.z = 13.5;
      
                                    let bArs18 = new THREE.BoxBufferGeometry (12,1,1);
                                    let barsmarterial18 = new THREE.MeshPhongMaterial ({map: texture7});
                                    let bars18 = new THREE.Mesh ( bArs18, barsmarterial18 );
                                    scene.add(bars18);
                                    bars18.position.x = 80;
                                    bars18.position.y = -1;
                                    bars18.position.z = 13.5;
      
                                    let bArs19 = new THREE.BoxBufferGeometry (12,1,1);
                                    let barsmarterial19 = new THREE.MeshPhongMaterial ({map: texture7});
                                    let bars19 = new THREE.Mesh ( bArs19, barsmarterial19 );
                                    scene.add(bars19);
                                    bars19.position.x = 120;
                                    bars19.position.y = -1;
                                    bars19.position.z = 13.5;
      
                                    let bArs20 = new THREE.BoxBufferGeometry (12,1,1);
                                    let barsmarterial20 = new THREE.MeshPhongMaterial ({map: texture7});
                                    let bars20 = new THREE.Mesh ( bArs20, barsmarterial20 );
                                    scene.add(bars20);
                                    bars20.position.x = 100;
                                    bars20.position.y = -1;
                                    bars20.position.z = 13.5;

                                    let bArs21 = new THREE.BoxBufferGeometry (12,1,1);
                                    let barsmarterial21 = new THREE.MeshPhongMaterial ({map: texture7});
                                    let bars21 = new THREE.Mesh ( bArs21, barsmarterial21 );
                                    scene.add(bars21);
                                    bars21.position.x = 40;
                                    bars21.position.y = 7;
                                    bars21.position.z = 13.5;
      
                                    let bArs22 = new THREE.BoxBufferGeometry (12,1,1);
                                    let barsmarterial22 = new THREE.MeshPhongMaterial ({map: texture7});
                                    let bars22 = new THREE.Mesh ( bArs22, barsmarterial22 );
                                    scene.add(bars22);
                                    bars22.position.x = 60;
                                    bars22.position.y = 7;
                                    bars22.position.z = 13.5;
      
                                    let bArs23 = new THREE.BoxBufferGeometry (12,1,1);
                                    let barsmarterial23 = new THREE.MeshPhongMaterial ({map: texture7});
                                    let bars23 = new THREE.Mesh ( bArs23, barsmarterial23 );
                                    scene.add(bars23);
                                    bars23.position.x = 80;
                                    bars23.position.y = 7;
                                    bars23.position.z = 13.5;
      
                                    let bArs24 = new THREE.BoxBufferGeometry (12,1,1);
                                    let barsmarterial24 = new THREE.MeshPhongMaterial ({map: texture7});
                                    let bars24 = new THREE.Mesh ( bArs24, barsmarterial24 );
                                    scene.add(bars24);
                                    bars24.position.x = 80;
                                    bars24.position.y = 7;
                                    bars24.position.z = 13.5;
      
                                    let bArs25 = new THREE.BoxBufferGeometry (12,1,1);
                                    let barsmarterial25 = new THREE.MeshPhongMaterial ({map: texture7});
                                    let bars25 = new THREE.Mesh ( bArs25, barsmarterial25 );
                                    scene.add(bars25);
                                    bars25.position.x = 120;
                                    bars25.position.y = 7;
                                    bars25.position.z = 13.5;
      
                                    let bArs26 = new THREE.BoxBufferGeometry (12,1,1);
                                    let barsmarterial26 = new THREE.MeshPhongMaterial ({map: texture7});
                                    let bars26 = new THREE.Mesh ( bArs26, barsmarterial26 );
                                    scene.add(bars26);
                                    bars26.position.x = 100;
                                    bars26.position.y = 7;
                                    bars26.position.z = 13.5;

                              //horizontal bars Right pt2 

                              let bArs27 = new THREE.BoxBufferGeometry (12,1,1);
                              let barsmarterial27 = new THREE.MeshPhongMaterial ({map: texture7});
                              let bars27 = new THREE.Mesh ( bArs27, barsmarterial27 );
                              scene.add(bars27);
                              bars27.position.x = -40;
                              bars27.position.y = 7;
                              bars27.position.z = 13.5;
                              
                              let bArs28 = new THREE.BoxBufferGeometry (12,1,1);
                              let barsmarterial28 = new THREE.MeshPhongMaterial ({map: texture7});
                              let bars28 = new THREE.Mesh ( bArs28, barsmarterial28 );
                              scene.add(bars28);
                              bars28.position.x = -60;
                              bars28.position.y = 7;
                              bars28.position.z = 13.5;


                              let bArs29 = new THREE.BoxBufferGeometry (12,1,1);
                              let barsmarterial29 = new THREE.MeshPhongMaterial ({map: texture7});
                              let bars29 = new THREE.Mesh ( bArs29, barsmarterial29 );
                              scene.add(bars29);
                              bars29.position.x = -80;
                              bars29.position.y = 7;
                              bars29.position.z = 13.5;


                              let bArs30 = new THREE.BoxBufferGeometry (12,1,1);
                              let barsmarterial30 = new THREE.MeshPhongMaterial ({map: texture7});
                              let bars30 = new THREE.Mesh ( bArs30, barsmarterial30 );
                              scene.add(bars30);
                              bars30.position.x = -100;
                              bars30.position.y = 7;
                              bars30.position.z = 13.5;


                              let bArs31 = new THREE.BoxBufferGeometry (12,1,1);
                              let barsmarterial31 = new THREE.MeshPhongMaterial ({map: texture7});
                              let bars31 = new THREE.Mesh ( bArs31, barsmarterial31 );
                              scene.add(bars31);
                              bars31.position.x = -120;
                              bars31.position.y = 7;
                              bars31.position.z = 13.5;



                              //floor/and 3rd floor roof
                              const widefloor = new THREE.BoxBufferGeometry(250,5,25);
                              const widefloormaterial = new THREE.MeshPhongMaterial ({ map: texture });
                              const wide = new THREE.Mesh (widefloor, widefloormaterial);
                              scene.add(wide)
                              wide.position.x = 0;
                              wide.position.y = -10;
                              wide.position.z = 25; 
                              const widefloor2 = new THREE.BoxBufferGeometry(250,2,25);
                              const widefloormaterial2 = new THREE.MeshPhongMaterial ({ map: texture });
                              const wide1 = new THREE.Mesh (widefloor2, widefloormaterial2);
                              scene.add(wide1)
                              wide1.position.x = 0;
                              wide1.position.y = 40;
                              wide1.position.z = 25; 


                          //3rd floor window bars

                        const third = new THREE.BoxBufferGeometry (12,1,1);
                        const thirdmaterial = new THREE.MeshPhongMaterial ({ map: texture7 });
                        const Third = new THREE.Mesh (third, thirdmaterial);
                        scene.add(Third);
                        Third.position.x = 40;
                        Third.position.y = 33 ;
                        Third.position.z = 13;

                        const third2 = new THREE.BoxBufferGeometry (12,1,1);
                        const third2material = new THREE.MeshPhongMaterial ({ map:  texture7});
                        const Third2 = new THREE.Mesh (third2, third2material);
                        scene.add(Third2);
                        Third2.position.x = 60;
                        Third2.position.y = 33 ;
                        Third2.position.z = 13;

                        const third3 = new THREE.BoxBufferGeometry (12,1,1);
                        const third3material = new THREE.MeshPhongMaterial ({ map:  texture7 });
                        const Third3 = new THREE.Mesh (third3, third3material);
                        scene.add(Third3);
                        Third3.position.x = 80;
                        Third3.position.y = 33 ;
                        Third3.position.z = 13;

                        const third4 = new THREE.BoxBufferGeometry (12,1,1);
                        const third4material = new THREE.MeshPhongMaterial ({ map: texture7 });
                        const Third4 = new THREE.Mesh (third4, third4material);
                        scene.add(Third4);
                        Third4.position.x = 90;
                        Third4.position.y = 33 ;
                        Third4.position.z = 13;

                        const third5 = new THREE.BoxBufferGeometry (12,1,1);
                        const third5material = new THREE.MeshPhongMaterial ({ map: texture7 });
                        const Third5 = new THREE.Mesh (third5, third5material);
                        scene.add(Third5);
                        Third5.position.x = 100;
                        Third5.position.y = 33 ;
                        Third5.position.z = 13;
                        
                        const third6 = new THREE.BoxBufferGeometry (12,1,1);
                        const third6material = new THREE.MeshPhongMaterial ({ map: texture7 });
                        const Third6 = new THREE.Mesh (third6, third6material);
                        scene.add(Third6);
                        Third6.position.x = 120;
                        Third6.position.y = 33 ;
                        Third6.position.z = 13;

                        //right 3rd floor

                        const third7 = new THREE.BoxBufferGeometry (12,1,1);
                        const third7material = new THREE.MeshPhongMaterial ({ map: texture7 });
                        const Third7 = new THREE.Mesh (third7, third7material);
                        scene.add(Third7);
                        Third7.position.x = -39;
                        Third7.position.y = 33 ;
                        Third7.position.z = 13;
                        
                        const third8 = new THREE.BoxBufferGeometry (12,1,1);
                        const third8material = new THREE.MeshPhongMaterial ({ map: texture7 });
                        const Third8 = new THREE.Mesh (third8, third8material);
                        scene.add(Third8);
                        Third8.position.x = -60;
                        Third8.position.y = 33 ;
                        Third8.position.z = 13;

                        const third9 = new THREE.BoxBufferGeometry (12,1,1);
                        const third9material = new THREE.MeshPhongMaterial ({ map: texture7 });
                        const Third9 = new THREE.Mesh (third9, third9material);
                        scene.add(Third9);
                        Third9.position.x = -80;
                        Third9.position.y = 33 ;
                        Third9.position.z = 13;

                        const third10 = new THREE.BoxBufferGeometry (12,1,1);
                        const third10material = new THREE.MeshPhongMaterial ({ map: texture7 });
                        const Third10 = new THREE.Mesh (third10, third10material);
                        scene.add(Third10);
                        Third10.position.x = -99;
                        Third10.position.y = 33 ;
                        Third10.position.z = 13;

                        const third11 = new THREE.BoxBufferGeometry (12,1,1);
                        const third11material = new THREE.MeshPhongMaterial ({ map: texture7 });
                        const Third11 = new THREE.Mesh (third11, third11material);
                        scene.add(Third11);
                        Third11.position.x = -120;
                        Third11.position.y = 33 ;
                        Third11.position.z = 13;
                         
                        //vertical bars 3rd floor
                        const third12 = new THREE.BoxBufferGeometry (1,12,1);
                        const third12material = new THREE.MeshPhongMaterial ({ map: texture7 });
                        const Third12 = new THREE.Mesh (third12, third12material);
                        scene.add(Third12);
                        Third12.position.x = 39;
                        Third12.position.y = 33 ;
                        Third12.position.z = 13;

                        const third13 = new THREE.BoxBufferGeometry (1,12,1);
                        const third13material = new THREE.MeshPhongMaterial ({ map: texture7 });
                        const Third13 = new THREE.Mesh (third13, third13material);
                        scene.add(Third13);
                        Third13.position.x = 60;
                        Third13.position.y = 33 ;
                        Third13.position.z = 13;

                        const third14 = new THREE.BoxBufferGeometry (1,12,1);
                        const third14material = new THREE.MeshPhongMaterial ({ map: texture7 });
                        const Third14 = new THREE.Mesh (third14, third14material);
                        scene.add(Third14);
                        Third14.position.x = 80;
                        Third14.position.y = 33 ;
                        Third14.position.z = 13;

                        const third15 = new THREE.BoxBufferGeometry (1,12,1);
                        const third15material = new THREE.MeshPhongMaterial ({ map: texture7 });
                        const Third15 = new THREE.Mesh (third15, third15material);
                        scene.add(Third15);
                        Third15.position.x = 100;
                        Third15.position.y = 33 ;
                        Third15.position.z = 13;

                        // const third16 = new THREE.BoxBufferGeometry (1,12,1);
                        // const third16material = new THREE.MeshPhongMaterial ({ map: texture7 });
                        // const Third16 = new THREE.Mesh (third16, third16material);
                        // scene.add(Third16);
                        // Third16.position.x = 100;
                        // Third16.position.y = 33 ;
                        // Third16.position.z = 13;

                        // const third17 = new THREE.BoxBufferGeometry (1,12,1);
                        // const third17material = new THREE.MeshPhongMaterial ({ map: texture7 });
                        // const Third17 = new THREE.Mesh (third17, third17material);
                        // scene.add(Third17);
                        // Third17.position.x = 120;
                        // Third17.position.y = 33 ;
                        // Third17.position.z = 13;
                        
                        // right 
                        const third18 = new THREE.BoxBufferGeometry (1,12,1);
                        const third18material = new THREE.MeshPhongMaterial ({ map: texture7 });
                        const Third18 = new THREE.Mesh (third18, third18material);
                        scene.add(Third18);
                        Third18.position.x = -39;
                        Third18.position.y = 33 ;
                        Third18.position.z = 13;

                        const third19 = new THREE.BoxBufferGeometry (1,12,1);
                        const third19material = new THREE.MeshPhongMaterial ({ map: texture7 });
                        const Third19 = new THREE.Mesh (third19, third19material);
                        scene.add(Third19);
                        Third19.position.x = -60;
                        Third19.position.y = 33 ;
                        Third19.position.z = 13;
                         
                        const third20 = new THREE.BoxBufferGeometry (1,12,1);
                        const third20material = new THREE.MeshPhongMaterial ({ map: texture7 });
                        const Third20 = new THREE.Mesh (third20, third20material);
                        scene.add(Third20);
                        Third20.position.x = -80;
                        Third20.position.y = 33 ;
                        Third20.position.z = 13;

                        const third21 = new THREE.BoxBufferGeometry (1,12,1);
                        const third21material = new THREE.MeshPhongMaterial ({ map: texture7 });
                        const Third21 = new THREE.Mesh (third18, third18material);
                        scene.add(Third21);
                        Third21.position.x = -100;
                        Third21.position.y = 33 ;
                        Third21.position.z = 15.1;

                        // const third22 = new THREE.BoxBufferGeometry (1,12,1);
                        // const third22material = new THREE.MeshPhongMaterial ({ map: texture7 });
                        // const Third22 = new THREE.Mesh (third22, third22material);
                        // scene.add(Third22);
                        // Third22.position.x = -100;
                        // Third22.position.y = 33 ;
                        // Third22.position.z = 13;
                              
                        const third23 = new THREE.BoxBufferGeometry (1,12,1);
                        const third23material = new THREE.MeshPhongMaterial ({ map: texture7 });
                        const Third23 = new THREE.Mesh (third23, third23material);
                        scene.add(Third23);
                        Third23.position.x = -120;
                        Third23.position.y = 33 ;
                        Third23.position.z = 13;

                        //deisgn === leftside bottom

                        let body = new THREE.BoxBufferGeometry (13,25,20);
                        let bodymaterial = new THREE.MeshPhongMaterial ({ map: texture1 });
                        let Body = new THREE.Mesh (body,bodymaterial);
                        scene.add(Body);
                        Body.position.x  = 34;
                        Body.position.y  = -25;
                        Body.position.z  = 23;

                        let body1 = new THREE.BoxBufferGeometry (13,25,20);
                        let body1material = new THREE.MeshPhongMaterial ({ map: texture1 });
                        let Body1 = new THREE.Mesh (body1,body1material);
                        scene.add(Body1);
                        Body1.position.x  = 65;
                        Body1.position.y  = -25;
                        Body1.position.z  = 23;

                        let body2 = new THREE.BoxBufferGeometry (13,25,20);
                        let body2material = new THREE.MeshPhongMaterial ({ map: texture1 });
                        let Body2 = new THREE.Mesh (body2,body2material);
                        scene.add(Body2);
                        Body2.position.x  = 95;
                        Body2.position.y  = -25;
                        Body2.position.z  = 23;

                        //Right side bottom
                        let body3 = new THREE.BoxBufferGeometry (13,25,20);
                        let body3material = new THREE.MeshPhongMaterial ({ map: texture1 });
                        let Body3 = new THREE.Mesh (body3,body3material);
                        scene.add(Body3);
                        Body3.position.x  = -34;
                        Body3.position.y  = -25;
                        Body3.position.z  = 23;

                        let body4 = new THREE.BoxBufferGeometry (13,25,20);
                        let body4material = new THREE.MeshPhongMaterial ({ map: texture1 });
                        let Body4 = new THREE.Mesh (body4,body4material);
                        scene.add(Body4);
                        Body4.position.x  = -65;
                        Body4.position.y  = -25;
                        Body4.position.z  = 23;

                        let body5 = new THREE.BoxBufferGeometry (13,25,20);
                        let body5material = new THREE.MeshPhongMaterial ({ map: texture1 });
                        let Body5 = new THREE.Mesh (body5,body5material);
                        scene.add(Body5);
                        Body5.position.x  = -95;
                        Body5.position.y  = -25;
                        Body5.position.z  = 23;

                        //nearentrance design
                        const BOX = new THREE.BoxBufferGeometry (6,6,7);
                        const BOXmaterial = new THREE.MeshLambertMaterial ({texture4});
                        const one = new THREE.Mesh (BOX,BOXmaterial);
                        scene.add(one);
                        one.position.x = 9.5;
                        one.position.y = -35;
                        one.position.z = 5;

                        const BOX2 = new THREE.BoxBufferGeometry (6,6,7);
                        const BOX2material = new THREE.MeshLambertMaterial ({texture4});
                        const one2 = new THREE.Mesh (BOX2,BOX2material);
                        scene.add(one2);
                        one2.position.x = -9.5;
                        one2.position.y = -35;
                        one2.position.z = 5;

                        const BOX3 = new THREE.BoxBufferGeometry (7,6,7);
                        const BOX3material = new THREE.MeshLambertMaterial ({texture4});
                        const one3 = new THREE.Mesh (BOX3,BOX3material);
                        scene.add(one3);
                        one3.position.x = 65;
                        one3.position.y = -35;
                        one3.position.z = 10;

                        const BOX4 = new THREE.BoxBufferGeometry (7,6,7);
                        const BOX4material = new THREE.MeshLambertMaterial ({texture4});
                        const one4 = new THREE.Mesh (BOX4,BOX4material);
                        scene.add(one4);
                        one4.position.x = -65;
                        one4.position.y = -35;
                        one4.position.z = 10;

                        const BOX5 = new THREE.BoxBufferGeometry (7,6,7);
                        const BOX5material = new THREE.MeshLambertMaterial ({texture4});
                        const one5 = new THREE.Mesh (BOX5,BOX5material);
                        scene.add(one5);
                        one5.position.x = 95;
                        one5.position.y = -35;
                        one5.position.z = 10;

                        const BOX6 = new THREE.BoxBufferGeometry (7,6,7);
                        const BOX6material = new THREE.MeshLambertMaterial ({texture4});
                        const one6 = new THREE.Mesh (BOX6,BOX6material);
                        scene.add(one6);
                        one6.position.x = -95;
                        one6.position.y = -35;
                        one6.position.z = 10;

                        const BOX7 = new THREE.BoxBufferGeometry (6,6,7);
                        const BOX7material = new THREE.MeshLambertMaterial ({texture4});
                        const one7 = new THREE.Mesh (BOX7,BOX7material);
                        scene.add(one7);
                        one7.position.x = 95;
                        one7.position.y = -15;
                        one7.position.z = 11;
                        
                        const BOX8 = new THREE.BoxBufferGeometry (6,6,7);
                        const BOX8material = new THREE.MeshLambertMaterial ({texture4});
                        const one8 = new THREE.Mesh (BOX8,BOX8material);
                        scene.add(one8);
                        one8.position.x = -95;
                        one8.position.y = -15;
                        one8.position.z = 11;

                        const BOX9 = new THREE.BoxBufferGeometry (6,6,7);
                        const BOX9material = new THREE.MeshLambertMaterial ({texture4});
                        const one9 = new THREE.Mesh (BOX9,BOX9material);
                        scene.add(one9);
                        one9.position.x = 65;
                        one9.position.y = -15;
                        one9.position.z = 11;

                        const BOX10 = new THREE.BoxBufferGeometry (6,6,7);
                        const BOX10material = new THREE.MeshLambertMaterial ({texture4});
                        const one10 = new THREE.Mesh (BOX10,BOX10material);
                        scene.add(one10);
                        one10.position.x = -65;
                        one10.position.y = -15;
                        one10.position.z = 11;




                        //oreo roof hat

                        let hat = new THREE.BoxBufferGeometry (25,6,14);
                        let hatmaterial = new THREE.MeshPhongMaterial ({texture4});
                        let hat1 = new THREE.Mesh (hat, hatmaterial)
                        scene.add(hat1);
                        hat1.position.x = 0;
                        hat1.position.y = 83;
                        hat1.position.z = 24

                        //moon 

                        const moon = new THREE.SphereBufferGeometry (18,32,32);
                        const moonmaterial = new THREE.MeshPhongMaterial ({map:texture9 , transparent : true});
                        moonmaterial.opacity= 0.8;
                        const moOn = new THREE.Mesh(moon, moonmaterial);
                        scene.add(moOn);
                        moOn.position.x = -235;
                        moOn.position.y = 135;
                        moOn.position.z = 120;

                        //last top floor bar

                       const oreo = new THREE.BoxBufferGeometry (1,20,1);
                       const oreomaterial = new THREE.MeshPhongMaterial ({map:texture7});
                       const Oreo = new THREE.Mesh (oreo, oreomaterial);
                       scene.add(Oreo);
                       Oreo.position.x = 0
                       Oreo.position.y = 55
                       Oreo.position.z = 11.3

                       const oreo2 = new THREE.BoxBufferGeometry (15,1,1);
                       const oreo2material = new THREE.MeshPhongMaterial ({map:texture7});
                       const Oreo2= new THREE.Mesh (oreo2, oreo2material);
                       scene.add(Oreo2);
                       Oreo2.position.x = 0
                       Oreo2.position.y = 60
                       Oreo2.position.z = 11.3

                       const oreo3 = new THREE.BoxBufferGeometry (15,1,1);
                       const oreo3material = new THREE.MeshPhongMaterial ({map:texture7});
                       const Oreo3= new THREE.Mesh (oreo3, oreo3material);
                       scene.add(Oreo3);
                       Oreo3.position.x = 0
                       Oreo3.position.y = 53
                       Oreo3.position.z = 11.3   


              
       
// Renderer
renderer = new THREE.WebGLRenderer( antialias= true );
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;
renderer.shadowMapSoft = true
renderer.shadowMap.type = THREE.BasicShadowMap;
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;


controls = new THREE.OrbitControls (camera, renderer.domElement);

//Lighting


let PointLight = new THREE.PointLight(0xFC9C54, 6,100); //brightness
PointLight.position.set(65,20,10)
scene.add(PointLight);

let pointLight1 = new THREE.PointLight( 0xFC9C54, 6, 100 );
pointLight1.position.set( -65, 20, 10); //x,y,z
scene.add( pointLight1 );

let pointLight2 = new THREE.PointLight( 0xFC9C54, 6, 100 );
pointLight2.position.set(-200, 120, 100); //x,y,z
scene.add( pointLight2 );

let pointLight3 = new THREE.PointLight( 0xFC9C54, 6, 100 );
pointLight3.position.set( -30, 20, 20); //x,y,z
scene.add( pointLight3 );

let pointLight4 = new THREE.PointLight( 0xFC9C54, 0.8, 100 );
pointLight4.position.set( 0, 35, 5); //x,y,z
scene.add( pointLight4 );

let pointLight5 = new THREE.PointLight( 0xFC9C54, 0.8, 100 );
pointLight5.position.set( 40, -4, 100); //x,y,z
scene.add( pointLight5 );

//lighthelper
let sphereSize = 1;
let pointLightHelper = new THREE.PointLightHelper( pointLight1, sphereSize );
scene.add( pointLightHelper )

let spheresize = 1;
let pointLightHelper1 = new THREE.PointLightHelper( PointLight, spheresize );
scene.add( pointLightHelper1 )

// let spheresizE = 1;
// let pointLightHelper2 = new THREE.PointLightHelper( pointLight2, spheresize );
// scene.add( pointLightHelper2 )

let spheresiZe = 1;
let pointLightHelper3 = new THREE.PointLightHelper( pointLight3, spheresize );
scene.add( pointLightHelper3 )

let spHeresize = 1;
let pointLightHelper4 = new THREE.PointLightHelper( pointLight4, spheresize );
scene.add( pointLightHelper4 )

directionalLight = new THREE.DirectionalLight(0xFC9C54 , 0.1);
directionalLight.position.set(-400,20,20);
directionalLight.rotation.y = 30
directionalLight.castShadow = true;
scene.add(directionalLight);



pointLight = new THREE.AmbientLight(0x4B3D60, 0.1); // like a SUN
pointLight.position.set(-30,35,25);
pointLight.castShadow = true;
scene.add(pointLight);

//HELPERS---------------------------
  //rotation helper
  // const AxesHelper = new THREE.AxesHelper(5);
  // scene.add (AxesHelper);
  // AxesHelper.position.x = 0
  // AxesHelper.position.y = 70;
  // AxesHelper.position.z = 5;
  // AxesHelper.rotation.z = 10
  // AxesHelper.rotation.x = 20.5

  // const AxesHelper2 = new THREE.AxesHelper(5);
  // scene.add (AxesHelper2);
  // AxesHelper2.position.x = 0
  // AxesHelper2.position.y = 10;
  // AxesHelper2.position.z = 5;
  // AxesHelper2.rotation.z = 10
  // AxesHelper2.rotation.x = 20.5

  //light location helper
  directionallighthelper = new THREE.DirectionalLightHelper(directionalLight);
  scene.add(directionalLight);
  directionalLight.position.set(10,15,20)

controls.target.set(0, 5, 0);
function animate() {
    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
