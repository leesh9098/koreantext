import { useState } from 'react';
import './App.css';
import { JaeumData } from './data/JaeumData';
import { Jongseong } from './data/Jongseong';
import { MoeumData } from './data/MoeumData';

function App() {
  const [text, setText] = useState("");
  let [test, setTest] = useState("");
  const [csnumber, SetCsNumber] = useState("");
  const [t, setT] = useState("");

  // let code;

  const handleInput = (e) => {
    setText(e.target.value);
  }

  const getConstantVowel = () => {
    if (text !== "") {
    //   for(let i = 0; i < text.length; i++) {
    //     code = text.charCodeAt(i)-44032;
    //     if(code > -1 && code < 11172) {
    //       setTest(test += JaeumData[Math.floor(code/588)].jaeum);
    //     } else {
    //       setTest(test += text.charAt(i));
    //     };
    //   }
    //   return code;
    // } else {
    //   setTest("");
    // }
    // for(let i = 0; i < text.length; i++) {
      const ga = 44032;
      let uni = text.charCodeAt(0);

      uni = uni - ga;

      let fn = parseInt(uni / 588)
      let sn = parseInt((uni - (fn * 588)) / 28)
      let tn = parseInt(uni % 28);
      setTest(test += JaeumData[fn].jaeum + MoeumData[sn].moeum + Jongseong[tn].jongseong);
      SetCsNumber(`초성=${JaeumData[fn].id}, 모음=${MoeumData[sn].id}, 받침=${Jongseong[tn].id}`)
      setT(`초성=${JaeumData[fn].number}, 모음=${MoeumData[sn].number} 받침=${Jongseong[tn].number}`);
    } else {
      alert("입력란에 입력해주세요")
    }
  }

  const PressEnter = (e) => {
    if (e.key === 'Enter') {
      getConstantVowel();
    }
  }

  return (
    <div className="App">
      <input type="text" id='input' onChange={handleInput} value={text} onKeyPress={PressEnter} />
      <button onClick={getConstantVowel}>확인</button>
      <p>
        자모음 분리: {test}
      </p>
      <p>
        초성의 순번: {csnumber}
      </p>
      <p>
        각 글자의 획수: {t}
      </p>
    </div>
  );
}

export default App;
