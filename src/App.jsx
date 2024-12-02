import TabButton from "././components/TabButton.jsx"
import languages from "../src/languages.js"
import Tab from "../src/components/Tab.jsx"
import tabStyle from '../src/components/Tabs.module.css'
import { useState } from "react"

function App() {
  
  const [currentLangIndex,setCurrentLangIndex] = useState(3)

  return (
    <>
      <main>
        <section className="languages">
          <div className="container">
            <h1>Learn Web Dev</h1>
          </div>
          <div className="container">
            <div className={tabStyle.tabs}>
              <div className={tabStyle.tabs_triggers}>
                {languages.map((lang,i) => (
                  <TabButton className={ i === currentLangIndex ? tabStyle.active : '' }  key={lang.id} item={lang} callback={ () => setCurrentLangIndex(i)}></TabButton>
                ))}
              </div>
              <Tab item={languages[currentLangIndex]}></Tab>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App
