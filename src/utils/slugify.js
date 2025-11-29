// Create URL-friendly slug from job title and ID
export const createJobSlug = (title, id) => {
    const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
    return `${slug}-${id}`;
};

// Extract ID from slug (always the last part after final hyphen)
export const extractIdFromSlug = (slug) => {
    const parts = slug.split('-');
    const id = parts[parts.length - 1];
    return parseInt(id, 10);
};
