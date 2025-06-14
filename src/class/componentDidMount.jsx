import React from "react"


class LifecycleComponentDidMount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            loading: true,
            error: null
        }
    }

    async componentDidMount() {
        try {
            const getToken = await fetch('https://todo-redev.herokuapp.com/api/auth/login', {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                    'email': 'kornevpetya@mail.ru',
                    'password': "123_Qwerty"
                })
            })

            const { token } = await getToken.json()

            const getData = await fetch('https://todo-redev.herokuapp.com/api/todos?isCompleted=false', {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })

            const data = await getData.json()

            this.setState({ data: data, loading: false })
        } catch (error) {
            this.setState({ error, loading: false })
        }

    }

    render() {
        const { data, loading, error } = this.state
        if (loading) return <p>Загрузка...</p>
        if (error) return <p>Ошибка: {error.message}</p>

        return <>
            <h1>Данные</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>


        </>
    }

}

export default LifecycleComponentDidMount