async function fetchData() {
    try {
        const response = await fetch('http://localhost:3001/users');
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        const data = await response.json();
        return data;
    } catch (err) {
        throw err;
    }
}

module.exports = fetchData;