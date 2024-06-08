export const fetchLogin = async ({login='', password=''}) => {
    const response = await fetch('http://localhost:3000/api/auth',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({login, password}),
    })
    if(!response.ok){
        return new Error('Login failed')
    }
    const result: {message: string} = await response.json()
    return result;
}
export const fetchLogout = async () => {
    const response = await fetch('http://localhost:3000/api/auth',{
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    const result: {message:string} = await response.json()
    return result;
}