import styles from "./Animals.module.scss"
import { Animal } from "../../types/Animal"

type AnimalProps = {
    animalsList: Animal[]
}

function Animals({ animalsList }: AnimalProps) {
// function Animals({ animalsList }) {
    return (
        animalsList.map(animal => {
            return (
                <div className={styles.animal_container} key={animal.id}>
                    <h1 className={styles.name}>
                        <span>
                            #{animal.id}
                        </span>
                        {animal.name}
                        {animal.emoji}
                    </h1>
                    <div className={styles.types}>
                        {animal.types.map(types => {
                            return (
                                <p key={types.type.name} className={styles.type}>{types.type.name}</p>
                            )
                        })}
                    </div>
                    <div className={styles.about}>
                        {animal.description}
                    </div>
                </div>
            )
        })
    )
}

export default Animals