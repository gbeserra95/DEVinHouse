# Renderização Condicional

**Do que se trata a renderização condicional? Cite um exemplo de componente renderizado condicionalmente?**

A renderização condicional refere-se a renderizar apenas um ou alguns elementos entre outros distintos dependendo do estado da aplicação.

Essa renderização funciona como as condições no JavaScript.

Considere esses dois componentes:

```JavaScript
  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }

  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
```

Nós vamos criar um componente Greeting que mostra um dos outros dois componentes se o usuário estiver logado ou não:

```JavaScript
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
  );
```

Este exemplo renderiza um “greeting” diferente dependendo do valor da prop isLoggedIn.
