import { TCard } from "./types";

export const URL = 'https://674ee5a0bb559617b26d2d37.mockapi.io';

export const getCardsApi = async () => {
        const res = await fetch(`${URL}/cards`);
        const data = await res.json();
        console.log('Полученные данные:', data);
        return data;
};

export const deleteCardApi = async (id: string) => {
        const res = await fetch(`${URL}/cards/${id}`, {
                method: "DELETE",
        });
        return id
}

export const updateLikeApi = async (id: string, like: boolean) => {
        const res = await fetch(`${URL}/cards/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ like }),
        });
        const updatedCard = await res.json();
        return updatedCard; 
};

export const addCardApi = async (newCard: TCard) => {
        const res = await fetch(`${URL}/cards`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCard),
        });
      
        const data = await res.json();
        console.log('Добавленная карточка:', data);
        return data;
      };
      