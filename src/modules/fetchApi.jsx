const Api = async () => {
    const url = 'https://strangerthings-quotes.vercel.app/api/quotes/50';
    const options = {
        method: 'GET'
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log('success')
        return data;

    } catch (error) {
        console.log(error)
        throw error;
    }
};

export default Api