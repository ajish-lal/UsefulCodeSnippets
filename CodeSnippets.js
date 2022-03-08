// Function to convert the character after '_' to Uppercase (e.g., template_name => templateName)
// inputObject should be a valid JSON object
function formatObject(inputObject) {
    if (inputObject === null || inputObject === undefined) return null;

    const transformedObject = {};
    for (const key in inputObject) {
        const newKey = key.replace(/(_[a-z])/g, (match) => match.replace('_', '').toUpperCase());
        if (typeof inputObject[key] === 'object') {
            if (Array.isArray(inputObject[key])) {
                transformedObject[newKey] = inputObject[key].map(dataObj => formatObject(dataObj));
            } else
                transformedObject[newKey] = formatObject(inputObject[key]);
        } else
            transformedObject[newKey] = inputObject[key];
    }
    return transformedObject;
}
