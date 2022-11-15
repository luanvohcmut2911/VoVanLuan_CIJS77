import { Header } from "./Component/Header";
import { Login } from "./Component/LogIn";
import { LanguageContext } from "./Component/Context";
import { Footer } from "./Component/Footer";
import { useState } from 'react';


function App() {
  const [languageState, setLanguageState] = useState('vietnamese');
  const [info, setInfo] = useState('NULL');
  return (
    <LanguageContext.Consumer>
    {
      (language)=>{
        // console.log(language);
        let lang = (languageState==='vietnamese' ?language.vietnamese: languageState==='english'? language.english: language.japanese);
        console.log(lang);
        return (
          <div className="App">
            <Header lang = {lang} info = {info}   />
            <Login lang={lang} setInfo ={setInfo} info={info}/>
            <Footer setLanguageState = {setLanguageState} />
          </div> 
        )
      }
    }    
    </LanguageContext.Consumer>
  );
}

export default App;
