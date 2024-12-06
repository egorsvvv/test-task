export const URL = 'https://674ee5a0bb559617b26d2d37.mockapi.io';

export const getCardsApi = () => {
    fetch(`${URL}/cards`)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`Ошибка: ${res.status} ${res.statusText}`);
            }
            return res.json();
        })
        .then((data) => {
            console.log('Полученные данные:', data);
        })
        .catch((error) => {
            console.error('Ошибка при выполнении запроса:', error);
        });
};
