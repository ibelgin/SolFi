import firestore from '@react-native-firebase/firestore';

function writeData() {
  firestore()
    .collection('Users')
    .doc('belgin_confidential')
    .set({
      email: 'belgin.confidential@gmail.com',
      name: 'Belgin Jarosh',
      sensors: [103243, 103244],
    })
    .then(data => {
      console.log('User added!', data);
    });

  firestore()
    .collection('Sensors')
    .where('id', 'in', ['103243', '103244'])
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(snapshot => {
        console.log(snapshot);
      });
    });
}

export {writeData};
