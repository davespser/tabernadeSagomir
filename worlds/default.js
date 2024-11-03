// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = ["newwhite"];

    /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "lights.js", "video.js"
    ];

    Constants.DefaultCards = [
        {
          card: {
                name:"world model",
                type: "3d",
                fileName: "/artgallery_042122.zip",
                dataLocation: "./assets/3D/artgallery_042122.zip",
                singleSided: true,
                shadow: true,
                layers: ["walk"],
                translation: [110.36808728454446, -5, 12.724934904465663],
		scale: [2,2,2],
                loadSynchronously: true,

            }
        },
{
          card: {
                 translation: [121.5399788067577, -4.737883110445555, 17.55358939777939],
    scale: [6.997184907473499, 3.5, 6.997184907473499],
    rotation: [0, -0.007264692316317128, 0, 0.9999736117746055],
    layers: ["pointer"],
    name: "/ASIENTOS.glb",
    dataLocation: "3yGz3ZPpm_19hqfluD8dWruiSehDFc7rBNdGRLfOsq5QEQ0NCQpDVlYfEBUcClcMClcaCxYIDBwNVxAWVgxWAAENExIIEhEQSRgxSRYKHxgpHQkwMxIqCxtJS1YaFhRXHhQYEBVXHRgPVxwKCVcKHAtXFBAaCxYPHAsKHFYjCQguFhYvIw9KDUozMAEQMC4AFzI2TBQqIz5MQRtKNgkUES8PCC8BChooVh0YDRhWTk08HDYyAUwuF0ERKAkzDDofKUsOLSEaCjBLSDEbGC4dIQEIKTEJHgNMOA",
    dataScale: [0.31654106990947356, 0.31654106990947356, 0.31654106990947356],
    fileName: "/ASIENTOS.glb",
    modelType: "glb",
    shadow: true,
    singleSided: true,
    type: "3d",

            }
        },
{
          card: {
        translation: [0.9800843629242768, -4.199961239043851, -22.47650824620064],
    rotation: [0, 0.0011050009192556368, 0, 0.9999993894862979],
    layers: ["pointer"],
    name: "/bandera.glb",
    dataLocation: "3vzj4u2EtsT7LHlTZZ_hJ8RjQqKQymRaUCw0T4IO5_fsHgICBgVMWVkQHxoTBVgDBVgVBBkHAxMCWB8ZWQNZDw4CHB0HHR4fRhc-RhkFEBcmEgY_PB0lBBRGRFkVGRtYERsXHxpYEhcAWBMFBlgFEwRYGx8VBBkAEwQFE1kjED4bMQQ8JRceRxgeMAc4MDcBJwIZOT03HDonDkQYRQIuJQIwMwEDQgQFWRIXAhdZNwAUPQYgBCkZLFsjLA8DTiBPDCAEES88REU8LhEzRU43FxxbJjgXIQQAHQ",
    dataScale: [0.6137589492248573, 0.6137589492248573, 0.6137589492248573],
    fileName: "/bandera.glb",
    modelType: "glb",
    shadow: true,
    singleSided: true,
    type: "3d",
            }
        },
{
          card: {
      translation: [-1.48672774197519, -1.5624211893063744, -24.726114915082725],
    rotation: [0, 0.04829760069974649, 0, 0.9988329899270688],
    layers: ["pointer"],
    name: "/barbara.glb",
    dataLocation: "3MCSFZXZolp-ZHI8WOQtqHmwbi_f9_wa14VEII0rq35AJTk5PT53YmIrJCEoPmM4PmMuPyI8OCg5YyQiYjhiNDU5JyY8JiUkfSwFfSI-KywdKT0EByYePy99f2IuIiBjKiAsJCFjKSw7Yyg-PWM-KD9jICQuPyI7KD8-KGIYGwQgDxcHL2B0LH90AzkODBt4BCsjAQwMPHw7Ai4vLHQYYCosOCV1JBQAYiksOSxiGnUHKRILeCsHJnR6OgYMFz4qNXR5Dh8_Dnw1HTd7eikcNx97IB4dOCk9fQ",
    dataScale: [0.8580057175267466, 0.8580057175267466, 0.8580057175267466],
    fileName: "/barbara.glb",
    modelType: "glb",
    shadow: true,
    singleSided: true,
    type: "3d",

            }
        },
{
          card: {
   translation: [78.51156393192817, -4.635167772295697, 0.8464184323868524],
    rotation: [0, 0, 0, 1],
    layers: ["pointer"],
    name: "/jesus.glb",
    dataLocation: "3BI69aEJTwY4IKDd2Yzwsn1cKWOYtIsIk8iPasH3EzBAKjY2MjF4bW0kKy4nMWw3MWwhMC0zNyc2bCstbTdtOzo2KCkzKSorciMKci0xJCMSJjILCCkRMCBycG0hLS9sJS8jKy5sJiM0bCcxMmwxJzBsLyshMC00JzAxJ20dNiBxLyYEHSp6MRsFGyURFy4EOBcmFRoMIzgAKA4GdC8tFB0PcHMJCHdybSYjNiNtOAY0FXYXBxogFw0DAW87cwxwDHUAOgsvLjE3OzMQDhcwNSM1KyRvDQ8dGw",
    dataScale: [1.3861573681240826, 1.3861573681240826, 1.3861573681240826],
    fileName: "/jesus.glb",
    modelType: "glb",
    shadow: true,
    singleSided: true,
    type: "3d",
		}
        },
    {
            card: {
               
           translation: [-3.707630886617814, 0.6415278761580767, -15.884165520636468],
    scale: [6.005136649156522, 6.005136649156522, 0.5004280540963768],
    rotation: [0, -0.7052258625808386, 0, -0.7089827097659801],
    layers: ["pointer"],
    behaviorModules: ["VideoPlayer"],
    depth: 1.5,
    fullBright: true,
    height: 2,
    pauseTime: 120.005543,
    permissions: ["action.tv"],
    playStartTime: 100.073,
    step: 0.5,
    textureHeight: 4048,
    textureLocation: "./assets/video/Big_Buck_Bunny.mp4",
    textureType: "video",
    textureWidth: 8096,
    type: "2d",
    width: 4,

                depth: 1.5,
                type: "2d",
               width: 4,
                height: 2,
                fullBright: true,
                behaviorModules: ["VideoPlayer"],
                textureLocation: "./assets/video/Big_Buck_Bunny.mp4",
                textureWidth: 8096,
                textureHeight: 4048,
                textureType: "video",
                step: 0.5,
		permissions: ["action.tv"],
                
            }
        },
        {
            card: {
                name: "light",
                
                dataLocation: "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
                fileName: "/abandoned_parking_4k.jpg",
                dataType: "jpg",
                
            }
        }
    ];
}
