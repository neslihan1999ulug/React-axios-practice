import getData from "./lib/servise"
import { useEffect } from "react";

function App() {
  useEffect (() => {
    async function axiosUserData() {
      try {
        const data = await getData(2);
        console.log("2. Kullanıcı Verileri:", data)
      } catch (error) {
        console.log("Veri alınırken hata oluştu", error);
      }
    }
    axiosUserData();

  },[]);

  return (
    <>
    <div>
      <h1>Axios Ödevi</h1>
      <p>Konsolu (F12) açıp sonucu görebilirsin.</p>
    </div>
    </>
  )
}

export default App
