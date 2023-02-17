const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
    zigbeeModel: ['STOFTMOLN ceiling/wall lamp WW10'],
    model: 'T2105',
    vendor: 'IKEA',
    description: 'STOFTMOLN ceiling/wall lamp 10 warm light dimmable',
    extend: extend.light_onoff_brightness()
};

module.exports = definition;