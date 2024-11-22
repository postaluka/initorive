import * as rive from "@rive-app/canvas"

/**
 * Canvas
 */
const canvas01beforeProvisioning = document.getElementById('canvas01beforeProvisioning')
const canvas02afterProvisioning = document.getElementById('canvas02afterProvisioning')
const canvas03bluetoothPairing = document.getElementById('canvas03bluetoothPairing')
const canvas04bluetoothConnected = document.getElementById('canvas04bluetoothConnected')
const canvas07validatingStrip = document.getElementById('canvas07validatingStrip')
const canvas08firmwareUpdate = document.getElementById('canvas08firmwareUpdate')
const canvas10beforeProvisioning = document.getElementById('canvas10beforeProvisioning')
const canvas11afterProvisioning = document.getElementById('canvas11afterProvisioning')


//canvas01beforeProvisioning

const inito01beforeProvisioning = new rive.Rive(
    {
        src: 'rive/inito_.riv',
        canvas: canvas01beforeProvisioning,
        autoplay: true,
        stateMachines: 'INITO SM 01 Device wake up via button - before provisioning',
    }
)

//canvas02afterProvisioning

const inito02afterProvisioning = new rive.Rive(
    {
        src: 'rive/inito_.riv',
        canvas: canvas02afterProvisioning,
        autoplay: true,
        stateMachines: 'INITO SM 02 Device wake up via button - after provisioning',
    }
)

//canvas03bluetoothPairing

const inito03bluetoothPairing = new rive.Rive(
    {
        src: 'rive/inito_.riv',
        canvas: canvas03bluetoothPairing,
        autoplay: true,
        stateMachines: 'INITO SM 03 Bluetooth pairing',
    }
)

//canvas04bluetoothConnected

const inito04bluetoothConnected = new rive.Rive(
    {
        src: 'rive/inito_.riv',
        canvas: canvas04bluetoothConnected,
        autoplay: true,
        stateMachines: 'INITO SM 04 Bluetooth connected',
    }
)

//canvas07validatingStrip

const inito07validatingStrip = new rive.Rive(
    {
        src: 'rive/inito_usb.riv',
        canvas: canvas07validatingStrip,
        autoplay: true,
        stateMachines: 'INITO SM 07 Validating Strip',
    }
)

//canvas08firmwareUpdate

const inito08firmwareUpdate = new rive.Rive(
    {
        src: 'rive/inito_.riv',
        canvas: canvas08firmwareUpdate,
        autoplay: true,
        stateMachines: 'INITO SM 08 Firmware update',
    }

)
//canvas09charging

const inito09charging = new rive.Rive(
    {
        src: 'rive/inito_charge.riv',
        canvas: canvas09charging,
        autoplay: true,
        stateMachines: 'INITO SM 09 Charging',
    }
)

//canvas10beforeProvisioning

const inito10beforeProvisioning = new rive.Rive(
    {
        src: 'rive/inito_.riv',
        canvas: canvas10beforeProvisioning,
        autoplay: true,
        stateMachines: 'INITO SM 11 Turning on the device - before provisioning',
    }
)

//canvas11afterProvisioning

const inito11afterProvisioning = new rive.Rive(
    {
        src: 'rive/inito_.riv',
        canvas: canvas11afterProvisioning,
        autoplay: true,
        stateMachines: 'INITO SM 12 Turning on the device - after provisioning',
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




