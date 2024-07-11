// Import the plugin metadata from plugin.json
const { name, description, version, enabled } = require("./plugin.json");
const gsap = require("gsap");

// Function to display plugin help information
function gsapHelp() {
    console.log(`Plugin Name: ${name}`);
    console.log(`Description: ${description}`);
    console.log(`Version: ${version}`);
    console.log(`Enabled: ${enabled}`);
    console.log("Core Plugins > Functionally from runGSAP(parseTable: {id: 'example-element-id', gsap: [{gsap animation here}]})");
}

// Function to initialize the plugin
function initializePlugin() {
    if (enabled) {
        console.log(`${name} (v${version}) is now enabled.`);
        console.log("Ready for GSAP!");
        // Not need for initializePlugin.
    } else {
        // Do not change anything if the plugin is disabled
        console.log(`${name} is currently disabled.`);
    }
}

function runGSAP(parseTable) {
    if (enabled) {
        const { id, gsap: gsapAnimations } = parseTable;

        if (!id || !gsapAnimations || !Array.isArray(gsapAnimations)) {
            console.error("Invalid parseTable format. Expected {id: 'element-id', gsap: [{...}, {...}]}");
            return;
        }

        gsapAnimations.forEach(animation => {
            gsap.to(`#${id}`, animation);
        });
    } else {
        console.log("The Plugin is still Offline.");
    }
}

// Example usage of the plugin functions
initializePlugin();
mypluginHelp();

// Export the functions if needed for external use
module.exports = {
    gsapHelp,
    initializePlugin,
    runGSAP
};
