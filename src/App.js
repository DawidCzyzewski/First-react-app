// import logo from "./logo.svg";
import "./App.css";
import Product from "./Product";

// Props:
// name

//Funkcję pisemy małą literą, komponent wielką
function prepareNameForWelcome(name) {
  return `Hello, ${name}!`;
}

function Welcome(props) {
  // return <div>Hello, {props.name}!</div>;
  // Można przeprowadzić destrukturyzację obiektu props, zarówno wyżej w wartości ( function Welcome({name}) ) jak i poniżej poprzez const:
  const { name } = props;
  // Tu przykład template stringa
  // const tmpString = `Hello ${name}`;
  return <div>Hello, {name}!</div>;
}

// To samo można przekazać na kilka sposobów, destruktyruzacja już w wartości:
function WelcomeAwesome({ name, favouriteCat }) {
  return (
    <div>
      Hello, {name}! You're awesome like your favourite cat {favouriteCat}!
    </div>
  );
}

function App() {
  // Produkt nr 3 to będzie przykład z obiektem, poniżej ze zwykłym kodem
  const obj = {
    name: "stół",
    description: "no taki z czterema nogami",
  };
  const price = 4;
  //Zróbmy produkt nr 3 tylko jeśli więcej niż 2. Można to zmieniać żeby sprawdzić
  const quantity = 2;
  // Tu załóżmy że odbieramy odpowiedź z backendu i jeśli przyjdze to powiadamiamy o tym fakcie Dawida poniżej
  const isDataLoaded = true;

  const rogalList = [
    { header: "Przetwory tablicowe", price: 1.3, name: "rogalik" },
    { header: "Przetwory tablicowe", price: 2.5, name: "rogalik z nadzieniem" },
    { header: "Przetwory tablicowe", name: "Rogalik delux!" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Dawid" age="31" />
        <WelcomeAwesome name="Agata" favouriteCat="Tyson" />
        <Welcome name="Bożydar" />
      </header>
      <Product
        name="Tablet"
        price="1000"
        description="Nowy tablet marki nijakiej z funkcją samodzielnego rozładowywania się"
        button="add"
      />
      <Product
        header="Extras"
        name="Kot"
        description="Żywy budzik z funkcją czasoumilacza"
        button="ADD!"
      />
      {/* TERAZ WEJDZIEMY W TRYB REACTA, ŻEBY WYŚWIETLAŁO SIĘ TYLKO QUANTITY > 1 */}
      {/* Zwykłe jeśli jest to, jeśli nie to to dwa znaki && czyli np quantity > 1 && (). Ja użyję w innym wypadku (jeśli nie ma to...) */}
      {/* Jeśli... jeśli nie... można też używać np. do loadera, jeśli danych nie ma to pokazuj kółeczko, jeśli są to... */}
      {quantity > 1 ? (
        <Product price={price} {...obj} shouldRenderChildren={true}>
          {/* TERAZ TU BĘDĄ DODANE DZIECI */}
          <Welcome name="Jestem childrenem stołu i jedną z nóg" />
          <Welcome name="Jestem childrenem stołu i jedną z nóg" />
          <Welcome name="Jestem childrenem stołu i jedną z nóg" />
          <Welcome name="Jestem childrenem stołu i jedną z nóg" />
        </Product>
      ) : (
        <Product description="Nie ma dwójki rodziców, więc proszę o kontakt w innym terminie" />
      )}
      {isDataLoaded && <Welcome name="Dawid, dane zalogowane!" />}

      <ul>
        {rogalList.map((rogal) => {
          return (
            <li>
              {rogal.name} jest po {rogal.price} zł
            </li>
          );
        })}
      </ul>

      {/* I żeby DOM Reactowy wiedział który element jest który, powinniśmy a prawie trzeba dodawać sobie jakieś id, w naszym przypadku dodam index */}
      {rogalList.map((rogal, index) => {
        return <Product key={index} {...rogal} />;
      })}
    </div>
  );
}

// Jako że chcemy użyawć tej funkcji poza plikiem, musimy ją eksportować. Możemy to zrobić inline czyli np.
// export function Product(props){ ... } lub na końcu cały moduł. Dobrą praktyką, której się nie łamie jest reguła, że dla jednego pliku JSX w tym przypadku App, eksportujemy jeden JSX, w tym przypadku o tej samej nazwie. Jeśli chciałbym użyć np. Product poza plikiem, to powinienem go stworzyć w innym pliku i stamtąd eksportować jako jedyny eksport. Zróbmy tak.
export default App;
