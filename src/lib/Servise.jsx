import React from 'react'
import axios from 'axios'
const BASE_URL = "https://jsonplaceholder.typicode.com"

const getData = async (userId) => {
    try {
        const { data: users } = await axios(`${BASE_URL}/users/${userId}`)
        const { data: posts } = await axios(`${BASE_URL}/posts?userId=${userId}`)
        const mergedData= {...users, posts};
        return mergedData
    }catch (error) {
        throw error;
    }
}

export default getData