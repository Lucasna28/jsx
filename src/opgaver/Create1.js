import Assignment from "../components/Assignment";

export default function Create1() {
  /**
   * Opgave:
   * Nedenfor er en ensom <header> uden indhold.
   * Skab følgende indhold til headeren:
   *
   * nav
   *   ul
   *     li
   *       a
   *     li
   *       a
   *     li
   *       a
   *
   * Brug variablerne home, about og contact nedenfor til dine <a>'er
   */

  // Links til nav:
  const home = {
    text: "Home",
    href: "#home",
  };
  const about = {
    text: "About",
    href: "#about",
  };
  const contact = {
    text: "Contact",
    href: "#contact",
  };

  return (
    <Assignment id={"create-1"}>
      <header>
        <nav>
            <ul>
              <li>
                <a href={home.href}>{home.text}</a>
              </li>
              <li>
                <a href={about.href}>{about.text}</a>
              </li>
              <li>
                <a href={contact.href}>{contact.text}</a>
              </li>
            </ul>
        </nav>
      </header>
    </Assignment>
  );
}
