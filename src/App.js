import { useState } from 'react';
import './App.css';
import { JaeumData } from './data/JaeumData';
import { Jongseong } from './data/Jongseong';
import { MoeumData } from './data/MoeumData';

function App() {
  const [text, setText] = useState("");
  const [separate1, setSeparate1] = useState("");
  const [separate2, setSeparate2] = useState("");
  const [separate3, setSeparate3] = useState("");
  const [separate4, setSeparate4] = useState("");
  const [csnumber1, SetCsNumber1] = useState("");
  const [csnumber2, SetCsNumber2] = useState("");
  const [csnumber3, SetCsNumber3] = useState("");
  const [csnumber4, SetCsNumber4] = useState("");
  const [strokeNumber1, setStrokeNumber1] = useState("");
  const [strokeNumber2, setStrokeNumber2] = useState("");
  const [strokeNumber3, setStrokeNumber3] = useState("");
  const [strokeNumber4, setStrokeNumber4] = useState("");

  // let code;

  const handleInput = (e) => {
    setText(e.target.value);
  }

  const getConstantVowel = () => {
    if (text !== "") {
      const ga = 44032;
      let uni1 = text.charCodeAt(0);
      let uni2 = text.charCodeAt(1);
      let uni3;
      let uni4;
      if (text.length === 3) {
        uni3 = text.charCodeAt(2) - ga;
        let fn3 = parseInt(uni3 / 588);
        let sn3 = parseInt((uni3 - (fn3 * 588)) / 28);
        let tn3 = parseInt(uni3 % 28);
        setSeparate3(JaeumData[fn3].jaeum + MoeumData[sn3].moeum + Jongseong[tn3].jongseong);
        SetCsNumber3(`초성=${JaeumData[fn3].id}, 모음=${MoeumData[sn3].id}, 받침=${Jongseong[tn3].id}`);
        setStrokeNumber3(`초성=${JaeumData[fn3].number}, 모음=${MoeumData[sn3].number} 받침=${Jongseong[tn3].number}`);
      }
      if (text.length === 4) {
        uni3 = text.charCodeAt(2) - ga;
        uni4 = text.charCodeAt(3) - ga;
        let fn3 = parseInt(uni3 / 588);
        let sn3 = parseInt((uni3 - (fn3 * 588)) / 28);
        let tn3 = parseInt(uni3 % 28);
        let fn4 = parseInt(uni4 / 588);
        let sn4 = parseInt((uni4 - (fn4 * 588)) / 28);
        let tn4 = parseInt(uni4 % 28);
        setSeparate3(JaeumData[fn3].jaeum + MoeumData[sn3].moeum + Jongseong[tn3].jongseong);
        SetCsNumber3(`초성=${JaeumData[fn3].id}, 모음=${MoeumData[sn3].id}, 받침=${Jongseong[tn3].id}`);
        setStrokeNumber3(`초성=${JaeumData[fn3].number}, 모음=${MoeumData[sn3].number} 받침=${Jongseong[tn3].number}`);
        setSeparate4(JaeumData[fn4].jaeum + MoeumData[sn4].moeum + Jongseong[tn4].jongseong);
        SetCsNumber4(`초성=${JaeumData[fn4].id}, 모음=${MoeumData[sn4].id}, 받침=${Jongseong[tn4].id}`);
        setStrokeNumber4(`초성=${JaeumData[fn4].number}, 모음=${MoeumData[sn4].number} 받침=${Jongseong[tn4].number}`);
      }

      uni1 = uni1 - ga;
      uni2 = uni2 - ga;

      let fn1 = parseInt(uni1 / 588);
      let fn2 = parseInt(uni2 / 588);
      let sn1 = parseInt((uni1 - (fn1 * 588)) / 28);
      let sn2 = parseInt((uni2 - (fn2 * 588)) / 28);
      let tn1 = parseInt(uni1 % 28);
      let tn2 = parseInt(uni2 % 28);
      setSeparate1(JaeumData[fn1].jaeum + MoeumData[sn1].moeum + Jongseong[tn1].jongseong);
      setSeparate2(JaeumData[fn2].jaeum + MoeumData[sn2].moeum + Jongseong[tn2].jongseong);
      SetCsNumber1(`초성=${JaeumData[fn1].id}, 모음=${MoeumData[sn1].id}, 받침=${Jongseong[tn1].id}`);
      SetCsNumber2(`초성=${JaeumData[fn2].id}, 모음=${MoeumData[sn2].id}, 받침=${Jongseong[tn2].id}`);
      setStrokeNumber1(`초성=${JaeumData[fn1].number}, 모음=${MoeumData[sn1].number} 받침=${Jongseong[tn1].number}`);
      setStrokeNumber2(`초성=${JaeumData[fn2].number}, 모음=${MoeumData[sn2].number} 받침=${Jongseong[tn2].number}`);
      
    } else {
      alert("입력란에 입력해주세요");
    }
  }

  const PressEnter = (e) => {
    if (e.key === 'Enter') {
      getConstantVowel();
    }
  }

  return (
    <div className="App">
      <input
        type="text"
        id='input'
        onChange={handleInput}
        value={text}
        onKeyPress={PressEnter}
        maxLength="4" />
      <button onClick={getConstantVowel}>확인</button>
      <p>
        첫 번째 글자 자모음 분리: {separate1}
      </p>
      <p>
        두 번째 글자 자모음 분리: {separate2}
      </p>
      <p>
        {
          text.length > 2 ?
          `세 번째 글자 자모음 분리: ${separate3}`
          : 
          null
        }
      </p>
      <p>
        {
          text.length > 3 ?
          `네 번째 글자 자모음 분리: ${separate4}`
          : 
          null
        }
      </p>
      <hr />
      <p>
        첫 번째 글자 초성의 순번: {csnumber1}
      </p>
      <p>
        두 번째 글자 초성의 순번: {csnumber2}
      </p>
      <p>
        {
          text.length > 2 ?
          `세 번째 글자 초성의 순번: ${csnumber3}`
          :
          null
        }
      </p>
      <p>
        {
          text.length > 3 ?
          `네 번째 글자 초성의 순번: ${csnumber4}`
          :
          null
        }
      </p>
      <hr />
      <p>
        첫 번째 글자의 획수: {strokeNumber1}
      </p>
      <p>
        두 번째 각 글자의 획수: {strokeNumber2}
      </p>
      <p>
        {
          text.length > 2 ?
          `세 번째 각 글자의 획수: ${strokeNumber3}`
          :
          null
        }
      </p>
      <p>
        {
          text.length > 3 ?
          `네 번째 각 글자의 획수: ${strokeNumber4}`
          :
          null
        }
      </p>
    </div>
  );
}

export default App;
