export function encodeUrl(queryObj) {
    return Object.entries(queryObj)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
        .join('&');
}