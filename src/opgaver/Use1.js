import Assignment from "../components/Assignment";

/**
 * Opgave:
 * Nedenfor er et <h1> element med noget text indhold.
 * Brug variablen name for at færdiggøre indholdet.
 */

export default function Use1() {
    const name = "Thomas"
    
    return (
        <Assignment id={"use-1"} >
            <section>
                <h1>Hej, mit navn er {name} </h1>
                
            </section>
        </Assignment>
    );
}
