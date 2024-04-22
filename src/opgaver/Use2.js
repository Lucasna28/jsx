import Assignment from "../components/Assignment";
import lizard from "../assets/lizard.webp";

/**
 * Opgave:
 * Nedenfor er 3 elementer: <h1>, <img> og <p>.
 * Der er importeret et billede, og lavet 2 strenge variabler.
 * Indsæt billedet og variablerne så de passer til elementerne.
 *
 * OBS:
 * Billeder skal importeres, ligesom i webpack
 * Alle void tags skal slutte på /> i stedet for bare >
 */

export default function Use2() {
    const h1Text = "Dette er en kamaleon!";
    const pText = "Kameleoner er søde.";

    return (
        <Assignment id={"use-2"}>
            <section>
                <h1></h1>
                <img src="" />
                <p></p>
            </section>
        </Assignment>
    );
}
