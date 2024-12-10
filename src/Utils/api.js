const baseUrl = process.env.REACT_APP_BACKEND_API;
const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
    },
}

// Fetch Projects:
export const fetchProjects = async () => {
    const url = `${baseUrl}/projects?populate[technologies][populate]=*&populate[image][populate]=*`;
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }
    return response.json();
};
// Fetch Services:
export const fetchServices = async () => {
    const url = `${baseUrl}/services?populate=*`;
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }
    return response.json();
};
// Fetch Skills:
export const fetchSkills = async () => {
    const url = `${baseUrl}/skills?populate=*`;
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }
    return response.json();
};