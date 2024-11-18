import * as rive from "@rive-app/canvas"

/**
 * Canvas
 */
const canvas01beforeProvisioning = document.getElementById('canvas01beforeProvisioning')
const canvas02afterProvisioning = document.getElementById('canvas02afterProvisioning')


//canvas01beforeProvisioning



const inito01beforeProvisioning = new rive.Rive(
    {
        src: 'rive/inito_.riv',
        canvas: canvas01beforeProvisioning,
        autoplay: true,
        stateMachines: 'INITO SM 01 Device wake up via button - before provisioning',
        // animations: ['EYES', 'CABIN MOVEMENT', 'WHEEL CTRL', 'FRONT GROUP', 'WHEEL HOVER exit', 'WHEEL HOVER enter', 'SIGNAL'],
        // onLoad: (_) =>
        // {
        //     const stateMachineInputs = huppDriver.stateMachineInputs('CAR STATE MACHINE')
        //     // trigger = stateMachineInputs[0]
        //     console.log(stateMachineInputs);

        // },
    }
)



//canvas02afterProvisioning



const inito02afterProvisioning = new rive.Rive(
    {
        src: 'rive/inito_.riv',
        canvas: canvas02afterProvisioning,
        autoplay: true,
        stateMachines: 'INITO SM 02 Device wake up via button - after provisioning',
        // animations: ['EYES', 'CABIN MOVEMENT', 'WHEEL CTRL', 'FRONT GROUP', 'WHEEL HOVER exit', 'WHEEL HOVER enter', 'SIGNAL'],
        // onLoad: (_) =>
        // {
        //     const stateMachineInputs = huppDriver.stateMachineInputs('CAR STATE MACHINE')
        //     // trigger = stateMachineInputs[0]
        //     console.log(stateMachineInputs);

        // },
    }
)













// let skinTriggerInput;
// const riveInstance = new rive.Rive({
//     // Hosted .riv asset, or a local one. Uncomment line 8 to try with
//     // a local basketball.riv asset, or add your own!
//     src: "rive/skin-test.riv",
//     // layout: new rive.Layout({
//     //     fit: rive.Fit.Cover,
//     //     alignment: rive.Alignment.Center
//     // }),
//     canvas: canvas,
//     autoplay: true,
//     stateMachines: "Motion",
//     // When the Rive instance loads, grab a reference to the state machine inputs
//     // Store references in variables you can use across your app
//     onLoad: (_) =>
//     {
//         const stateMachineInputs = riveInstance.stateMachineInputs("Motion");
//         console.log(stateMachineInputs);

//         skinTriggerInput = stateMachineInputs[0];
//     }
// });




