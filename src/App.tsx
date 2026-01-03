

function App() {

  window.Telegram?.WebApp?.ready();
  const user = window.Telegram?.WebApp?.initDataUnsafe?.user;
  const theme = window.Telegram?.WebApp?.themeParams;


  return (
    <div>
      <h1 className="">Hello, {user?.first_name || 'User'}</h1>
      <p>Your background color: {theme?.bg_color || "Undefined"}</p>
    </div>
   
  )
}

export default App
