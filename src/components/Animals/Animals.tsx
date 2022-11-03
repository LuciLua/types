import styles from "./Animals.module.scss"
import { Animal } from "../../types/Animal"
import { animalsSkillsTypes } from "../../animalsSkillsTypes";

type AnimalProps = {
    animalsList: Animal[]
}

function Animals({ animalsList }: AnimalProps): any {
    return (
        /* mapping: animals */ 
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
                        {/* mapping: types */}
                        {animal.types.map(types => {
                            // mapping colors by type
                            const [{ color }] = animalsSkillsTypes.filter(
                                (typeSkills) => types.type.name.indexOf(typeSkills.name) !== -1
                            );
                            return (
                                <p style={{ "background": `${color}` }} key={types.type.name} className={styles.type}>{types.type.name}</p>
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