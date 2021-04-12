import React from 'react';
import { View, Text } from 'react-native';
import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';


export const CalculadoraScreen = () => {

  const {
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
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>

      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoSmall}>
          {numeroAnterior}
        </Text>
      )}
      <Text
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {numero}
      </Text>
      <View style={styles.row}>
        <ButtonCalc texto="C" color="#A5A5A5" action={cleanNumber} />
        <ButtonCalc texto="+/-" color="#A5A5A5" action={positivoNegativo} />
        <ButtonCalc texto="Del" color="#A5A5A5" action={buttonDelete} />
        <ButtonCalc texto="/" color="#F79E29" action={btnDividir} />
      </View>

      <View style={styles.row}>
        <ButtonCalc texto="7" action={armarNumero} />
        <ButtonCalc texto="8" action={armarNumero} />
        <ButtonCalc texto="9" action={armarNumero} />
        <ButtonCalc texto="X" color="#F79E29" action={btnMultiplicar} />
      </View>

      <View style={styles.row}>
        <ButtonCalc texto="4" action={armarNumero} />
        <ButtonCalc texto="5" action={armarNumero} />
        <ButtonCalc texto="6" action={armarNumero} />
        <ButtonCalc texto="-" color="#F79E29" action={btnRestar} />
      </View>

      <View style={styles.row}>
        <ButtonCalc texto="1" action={armarNumero} />
        <ButtonCalc texto="2" action={armarNumero} />
        <ButtonCalc texto="3" action={armarNumero} />
        <ButtonCalc texto="+" color="#F79E29" action={btnSumar} />
      </View>

      <View style={styles.row}>
        <ButtonCalc texto="0" ancho action={armarNumero} />
        <ButtonCalc texto="." action={armarNumero} />
        <ButtonCalc texto="=" color="#F79E29" action={calcular} />
      </View>

    </View>
  );
};
