// Function to get URL parameters
function getUrlParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.has(name) ? params.get(name) : 'Not provided';
}

// Populate fields dynamically
document.addEventListener('DOMContentLoaded', () => {
    const blockedUrlElement = document.getElementById('blocked-url');
    const categoryElement = document.getElementById('category');
    const policyGroupElement = document.getElementById('policy-group');

    if (blockedUrlElement) {
        blockedUrlElement.textContent = getUrlParameter('site');
    }
    if (categoryElement) {
        categoryElement.textContent = getUrlParameter('category');
    }
    if (policyGroupElement) {
        policyGroupElement.textContent = getUrlParameter('pgroup');
    }
});
