import Assignment from "../components/Assignment";

/**
 * Opgave:
 * Nedenfor er en <h1> med en hilsen.
 * variablen name bruges i JSX'en, men navnet er med småt.
 * Brug funktionen parseToTitle for at lave navnet til stort forbogstav.
 */

export default function Modify1() {
    const name = "thomas";

    function parseToTitle(str) {
        return str.toLowerCase().replace(/(^|\s)\S/g, function (firstLetter) {
            return firstLetter.toUpperCase();
        });
    }

    return (
        <Assignment id={"modify-1"}>
            <section>
                <h1>Hej, mit navn er {name}</h1>
            </section>
        </Assignment>
    );
}
