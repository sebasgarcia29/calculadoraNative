import { useRef, useState } from 'react';

enum Operadores {
  suma, restar, multiplicar, dividir,
}

export const useCalculadora = () => {

  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setnumero] = useState('0');

  const ultimaOperacion = useRef<Operadores>();


  const cleanNumber = () => {
    setnumero('0');
    setNumeroAnterior('0');
  };

  const armarNumero = (numeroTexto: string) => {
    if (numero.includes('.') && numeroTexto === '.') { return; }
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (numeroTexto === '.') {
        setnumero(numero + numeroTexto);
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setnumero(numero + numeroTexto);
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setnumero(numeroTexto);
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setnumero(numero);
      } else {
        setnumero(numero + numeroTexto);
      }
    } else {
      setnumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setnumero(numero.replace('-', ''));
    } else {
      setnumero('-' + numero);
    }
  };

  const changeNumberForPrevious = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setnumero('0');
  };

  const buttonDelete = () => {
    let negativo = '';
    let numeroTemp = numero;
    if (numeroTemp.includes('-')) {
      negativo = '-';
      numeroTemp = numero.substring(1);
    }

    if (numeroTemp.length > 1) {
      setnumero(negativo + numeroTemp.slice(0, -1));
    } else {
      setnumero('0');
    }
  };

  const btnDividir = () => {
    changeNumberForPrevious();
    ultimaOperacion.current = Operadores.dividir;
  };

  const btnMultiplicar = () => {
    changeNumberForPrevious();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const btnRestar = () => {
    changeNumberForPrevious();
    ultimaOperacion.current = Operadores.restar;
  };

  const btnSumar = () => {
    changeNumberForPrevious();
    ultimaOperacion.current = Operadores.suma;
  };

  const calcular = () => {

    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.suma:
        setnumero(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setnumero(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setnumero(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        setnumero(`${num2 / num1}`);
        break;
    }
    setNumeroAnterior('0');
  };

  return {
    numeroAnterior,
    numero,
    cleanNumber,
    positivoNegativo,
    buttonDelete,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  };

};
