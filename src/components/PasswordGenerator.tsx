import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [ispassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [passwordLength, setPasswordLength] = useState(0);

  const passwordSchema = Yup.object().shape({
    passwordLength: Yup.number()
      .min(4, 'Password length must be at least 4 characters')
      .max(20, 'Password length must be at most 20 characters')
      .required('Password length is required'),
  });

  console.log("password", password)

  const generatePassword = (passLength : number) => {
    setPassword('');
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const num = '0123456789';
    const sym = '!@#$%^&*()_+[]{}|;:,.<>?';

    let str = '';
    if (lowerCase) str += lower;
    if (upperCase) str += upper;
    if (numbers) str += num;
    if (symbols) str += sym;

    for (let i = 0; i < passLength; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      setPassword(prev => prev + str.charAt(randomIndex));
      setIsPassGenerated(true);
    }
  };

  const resetPassword = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(false);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
    setPasswordLength(0);
  };

  return (
    <>
      <Text style={styles.heading}>PasswordGenerator</Text>
      <ScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
        <View>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={passwordSchema}
            onSubmit={values => {
              generatePassword(+values.passwordLength);
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.inputHeading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Example: 8"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.inputHeading}>Include Lowercase </Text>
                  <BouncyCheckbox
                    useBuiltInState={false}
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor="#37bc66"
                    size={30}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.inputHeading}>Include Uppercase </Text>
                  <BouncyCheckbox
                    useBuiltInState={false}
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor="#b137bc"
                    size={30}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.inputHeading}>Include Numbers </Text>
                  <BouncyCheckbox
                    useBuiltInState={false}
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="#bcba37"
                    size={30}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.inputHeading}>Include Symbols </Text>
                  <BouncyCheckbox
                    useBuiltInState={true}
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="#960202"
                    size={30}
                  />
                </View>

                <View style={styles.formAction}>
                  <TouchableOpacity
                    disabled={!isValid}
                    activeOpacity={0.7}
                    onPress={() => 
                      handleSubmit()
                    }>
                    <Text style={styles.actionButton}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    disabled={!isValid}
                    activeOpacity={0.7}
                    onPress={resetPassword}>
                    <Text style={styles.actionButton}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {ispassGenerated ? (
          <View style={styles.outputWrappper}>
            <Text style={styles.inputHeading}>Result:</Text>
            <Text style={styles.copyHint}>Long press to copy!</Text>
            <Text selectable={true} style={styles.result}>{password}</Text>
            <Text>{password.length < 1 && "Check any box to generate password"}</Text>
          </View>
        ) : (
          null
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4707b026',
    margin: 16,
    borderRadius: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  inputWrapper: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formAction: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  inputStyle: {
    borderColor: '#857a7a',
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
    color: '#322e2e',
    width: '50%',
    fontSize: 16,
  },
  inputHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },

  inputColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  errorText: {
    color: 'lightcoral',
    fontSize: 14,
    marginTop: 5,
  },

  actionButton: {
    backgroundColor: '#37bc66',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  outputWrappper: {
    height: 100,
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',

  },
  copyHint: {
    fontSize: 12,
    color: '#000',
    marginBottom: 5,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
});
