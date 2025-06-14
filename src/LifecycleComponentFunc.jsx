import { useEffect, useState } from "react";


const LifecycleComponentFunc = () => {
    const [data, setData] = useState(null)
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true)




    const login = async () => {
        try {
            const response = await fetch('https://todo-redev.herokuapp.com/api/auth/login', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'email': "kornevpetya@mail.ru",
                    'password': "123_Qwerty"
                })
            })
            const data = await response.json()



            return data
        } catch (error) {
            console.log(error.message);



        }
    }

    const getData = async () => {
        try {
            const { token } = await login()

            const response = await fetch('https://todo-redev.herokuapp.com/api/todos?isCompleted=false', {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })

            const data = await response.json()
       
            
            setData(data)

        }
        catch (error) {
            console.log(error);

        } finally {
            setLoading(false)
        }

    }

    const increment = () => {
        setCount((oldCount) => oldCount + 1)
    }


    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        console.log(count);

    }, [count])

    useEffect(() => {
        return (() => console.log('Удалил'))
    }, [])


    if (loading) return <p>Загрузка...</p>


    return <>
        <h1>Данные:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <div>Текущее состояние счетчика: {count}
            <p> <button onClick={increment}>Увеличить счетчик</button></p>

        </div>


    </>
}



export default LifecycleComponentFunc







