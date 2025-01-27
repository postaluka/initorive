import * as rive from "@rive-app/canvas"

/**
 * Canvas
 */

// inito.riv

const canvas01beforeProvisioning = document.getElementById('canvas01beforeProvisioning')
const canvas02afterProvisioning = document.getElementById('canvas02afterProvisioning')
const canvas03bluetoothPairing = document.getElementById('canvas03bluetoothPairing')
const canvas04bluetoothConnected = document.getElementById('canvas04bluetoothConnected')
const canvas08firmwareUpdate = document.getElementById('canvas08firmwareUpdate')
const canvas10beforeProvisioning = document.getElementById('canvas10beforeProvisioning')
const canvas11afterProvisioning = document.getElementById('canvas11afterProvisioning')
const canvas12pairingMode01 = document.getElementById('canvas12pairingMode01')
const canvas14pairingMode03 = document.getElementById('canvas14pairingMode03')

// inito_iphone.riv

const canvas05phoneBeforeProvision = document.getElementById('canvas05phoneBeforeProvision')
const canvas06phoneAfterProvision = document.getElementById('canvas06phoneAfterProvision')

// inito_charge.riv

const canvas09charging = document.getElementById('canvas09charging')
const canvas15charging = document.getElementById('canvas15charging')
const canvas09chargingIsometric = document.getElementById('canvas09chargingIsometric')
const canvas15chargingIsometric = document.getElementById('canvas15chargingIsometric')

// inito_usb.riv

const canvas07validatingStrip = document.getElementById('canvas07validatingStrip')
const canvas13pairingMode02 = document.getElementById('canvas13pairingMode02')



// inito.riv


//canvas01beforeProvisioning

const inito01beforeProvisioning = new rive.Rive(
    {
        src: 'rive/inito.riv',
        canvas: canvas01beforeProvisioning,
        autoplay: true,
        stateMachines: 'INITO SM 01 Device wake up via button - before provisioning',
    }
)


//canvas02afterProvisioning

const inito02afterProvisioning = new rive.Rive(
    {
        src: 'rive/inito.riv',
        canvas: canvas02afterProvisioning,
        autoplay: true,
        stateMachines: 'INITO SM 02 Device wake up via button - after provisioning',
    }
)

//canvas03bluetoothPairing

const inito03bluetoothPairing = new rive.Rive(
    {
        src: 'rive/inito.riv',
        canvas: canvas03bluetoothPairing,
        autoplay: true,
        stateMachines: 'INITO SM 03 Bluetooth pairing',
    }
)

//canvas04bluetoothConnected

const inito04bluetoothConnected = new rive.Rive(
    {
        src: 'rive/inito.riv',
        canvas: canvas04bluetoothConnected,
        autoplay: true,
        stateMachines: 'INITO SM 04 Bluetooth connected',
    }
)

//canvas08firmwareUpdate

const inito08firmwareUpdate = new rive.Rive(
    {
        src: 'rive/inito.riv',
        canvas: canvas08firmwareUpdate,
        autoplay: true,
        stateMachines: 'INITO SM 08 Firmware update',
    }
)

//canvas10beforeProvisioning

const inito10beforeProvisioning = new rive.Rive(
    {
        src: 'rive/inito.riv',
        canvas: canvas10beforeProvisioning,
        autoplay: true,
        stateMachines: 'INITO SM 10 Turning on the device - before provisioning',
    }
)

//canvas11afterProvisioning

const inito11afterProvisioning = new rive.Rive(
    {
        src: 'rive/inito.riv',
        canvas: canvas11afterProvisioning,
        autoplay: true,
        stateMachines: 'INITO SM 12 Turning on the device - after provisioning',
    }
)

//canvas12pairingMode01

const inito12pairingMode01 = new rive.Rive(
    {
        src: 'rive/inito.riv',
        canvas: canvas12pairingMode01,
        autoplay: true,
        stateMachines: 'INITO SM 12 Pairing mode - 1',
    }
)

//canvas14pairingMode01

const inito14pairingMode01 = new rive.Rive(
    {
        src: 'rive/inito.riv',
        canvas: canvas14pairingMode03,
        autoplay: true,
        stateMachines: 'INITO SM 14 Pairing mode - 3',
    }
)

// inito_iphone.riv


//canvas05phoneBeforeProvision

const inito05phoneBeforeProvision = new rive.Rive(
    {
        src: 'rive/inito_iphone.riv',
        canvas: canvas05phoneBeforeProvision,
        autoplay: true,
        stateMachines: 'INITO SM 05 Bring the device close to the phone - before provisioning',
    }
)

//canvas06phoneAfterProvision

const inito06phoneAfterProvision = new rive.Rive(
    {
        src: 'rive/inito_iphone.riv',
        canvas: canvas06phoneAfterProvision,
        autoplay: true,
        stateMachines: 'INITO SM 06 Bring the device close to the phone - after provisioning',
    }
)

// inito_charge.riv



//canvas09charging

const inito09charging = new rive.Rive(
    {
        src: 'rive/inito_charge.riv',
        canvas: canvas09charging,
        autoplay: true,
        stateMachines: 'INITO SM 09 Charging',
    }
)

//canvas15charging

const inito15charging = new rive.Rive(
    {
        src: 'rive/inito_charge.riv',
        canvas: canvas15charging,
        autoplay: true,
        stateMachines: 'INITO SM 15 Charging',
    }
)

//canvas09chargingIsometric

const inito09chargingIsometric = new rive.Rive(
    {
        src: 'rive/inito_charge_isometric.riv',
        canvas: canvas09chargingIsometric,
        autoplay: true,
        stateMachines: 'INITO SM 09 Charging',
    }
)

//canvas15chargingIsometric

const inito15chargingIsometric = new rive.Rive(
    {
        src: 'rive/inito_charge_isometric.riv',
        canvas: canvas15chargingIsometric,
        autoplay: true,
        stateMachines: 'INITO SM 15 Charging',
    }
)


// inito_usb.riv


//canvas07validatingStrip

const inito07validatingStrip = new rive.Rive(
    {
        src: 'rive/inito_usb.riv',
        canvas: canvas07validatingStrip,
        autoplay: true,
        stateMachines: 'INITO SM 07 Validating Strip',
    }
)


//canvas13pairingMode02

const inito13pairingMode02 = new rive.Rive(
    {
        src: 'rive/inito_usb.riv',
        canvas: canvas13pairingMode02,
        autoplay: true,
        stateMachines: 'INITO SM 13 Pairing mode - 2',
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




