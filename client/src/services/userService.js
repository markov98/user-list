const url = 'http://localhost:3030/jsonstore/users';

export const getAll = async () => {
    try {
        const response = await fetch(url);
        const result = await response.json();

        return Object.values(result);
    } catch (err) {
        console.log(err);
    }
}