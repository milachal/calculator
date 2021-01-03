import { Fragment, useState } from 'react';
import Button from './components/Button/Button';
import styles from './Calculator.module.css'

function App() {
  const [result, setResult] = useState('');
  const [result2, setResult2] = useState('');
  const [sign, setSign] = useState(null);
  const [resetResult, setResetResult] = useState(false);
  const numbersArr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

  const updateNumber = (number) => {
    if (resetResult) {
      setResult(number)
      setResetResult(false)
    } else if (result !== '' || number !== 0) {
      setResult(`${result}${number}`)
    }   
  }

  const arithmeticHandler = (symbol) => {
    if (sign) {
      equal()
      setSign(symbol)
      setResetResult(true)
    } else {
      setResult2(result)
      setSign(symbol)
      setResetResult(true)
    }
  }

  const equal = () => {
    const resultNum = Number(result);
    const result2Num = Number(result2);
    setResetResult(true)
    setSign(null)

    switch (sign) {
      case '+':
        setResult(result2Num + resultNum);
        setResult2(result2Num + resultNum);
        break;
      case '-':
        setResult(result2Num - resultNum);
        setResult2(result2Num - resultNum);
        break;
      case '÷':
        setResult(result2Num / resultNum);
        setResult2(result2Num / resultNum);
        break;
      case 'x':
        setResult(result2Num * resultNum);
        setResult2(result2Num * resultNum);
        break;
      default: 
        console.log(result)

      
    }
  }

  const clearAll = () => {
    setResult('')
    setResult2('')
    setSign(null)
  }

  const setFloatingPoint = () => {
    const newResult = result === '' ? 0 : result
    setResult(`${newResult}.`)
  }

  console.log(result, 'result')
  console.log(result2, 'result2')
  console.log(sign, 'sign')
  console.log(resetResult, 'resetResult')

  return (         
    <div className={styles.App}>
      <h1>Calculator</h1>
      <div className={styles.resultBlock}>
      <p className={styles.result}>{result === '' ? '0' : result}</p>
      </div>
      <div className={styles.cBlock}>
        <Button value={'c'} className={'c'} handler={clearAll}/>
      </div>
      <div className={styles.numbersBlock}>
        {numbersArr.map((number, index) => {
          return index % 3 === 2 ? (
            <Fragment key={number}>
              <Button value={number} handler={updateNumber}/><br />
            </Fragment>
          ) : <Button key={number} value={number} handler={updateNumber}/>
        })}
        <Button value={0} className={'zero'} handler={updateNumber}/>
        <Button value={','} handler={setFloatingPoint} />
      </div>
      
      <div className={styles.arithmeticBlock}>
        <Button value={'+'} className={'arithmetic'} handler={() => arithmeticHandler('+')} />
        <Button value={'-'} className={'arithmetic'} handler={() => arithmeticHandler('-')} />
        <Button value={'x'} className={'arithmetic'} handler={() => arithmeticHandler('x')} />
        <Button value={'÷'} className={'arithmetic'} handler={() => arithmeticHandler('÷')} />
        <Button value={'='} className={'arithmetic'} handler={equal} />
      </div>
      
      
      
      
     
    </div>
  );
}

export default App;
