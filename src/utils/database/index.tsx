import firestore from '@react-native-firebase/firestore';

function writeData() {
  firestore()
    .collection('Users')
    .doc('belgin_confidential')
    .set({
      name: 'Belgin Jarosh',
      email: 'belgin.confidential@gmail.com',
    })
    .then(() => {
      console.log('User added!');
    });
}

export {writeData};
