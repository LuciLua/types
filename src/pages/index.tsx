import { useEffect, useState } from "react"
import Animals from "../components/Animals"
import styles from "../styles/Home.module.scss"
import { Animal } from "../types/Animal"

function Home() {
        const [animals, setAnimals] = useState([])

        function fetchAnimals(){
                fetch('./animals.json')
                .then(resp => resp.json())
                .then(resp => {
                        setAnimals(resp)
                })
                .catch(err => console.log(err))
        }
        
        useEffect( () => {
                fetchAnimals()
        }, [])

        return (
                <div className={styles.container}>
                        <h1>Hello, World!</h1>
                        <Animals animalsList={animals}/>
                </div>
        )
}

export default Home
