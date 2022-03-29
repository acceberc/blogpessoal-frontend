import axios from "axios"

export const api = axios.create({
    baseURL: 'https://rebeccaintech.herokuapp.com'
})

export const login = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}