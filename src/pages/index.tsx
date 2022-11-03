import { useEffect, useState } from "react"
import Animals from "../components/Animals"
import styles from "../styles/Home.module.scss"
import { Animal } from "../types/Animal"

function Home() {
        const [animals, setAnimals] = useState([])

        function fetchAnimals() {
                fetch('./animals.json')
                        .then(resp => resp.json())
                        .then(resp => {
                                setAnimals(resp)
                        })
                        .catch(err => console.log(err))
        }

        useEffect(() => {
                fetchAnimals()
        }, [])

        return (
                <div className={styles.container}>
                        <div className={styles.title}>
                                <h1>Animals</h1>
                        </div>
                        <div className={styles.animals}>
                                <Animals animalsList={animals} />
                        </div>
                </div>
        )
}

export default Home
