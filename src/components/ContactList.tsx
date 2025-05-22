import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const ContactList = () => {
  const contactArray = [
    {
      id: '1',
      name: 'Aarav Singh',
      status: 'Just an extraordinary coder.',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg',
    },
    {
      id: '2',
      name: 'Zoya Khan',
      status: 'Debugging life, one bug at a time.',
      imageUrl:
        'https://cdn.pixabay.com/photo/2014/12/10/05/50/english-bulldog-562723_640.jpg',
    },
    {
      id: '3',
      name: 'Ishaan Mehta',
      status: 'Eat. Sleep. Code. Repeat.',
      imageUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce',
    },
    {
      id: '4',
      name: 'Kiara Kapoor',
      status: 'Pixel perfect and caffeinated ☕',
      imageUrl: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
    },
    {
      id: '5',
      name: 'Ritik Yadav',
      status: 'I write code. What’s your superpower?',
      imageUrl: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507',
    },
    {
      id: '6',
      name: 'Meera Nair',
      status: 'Running on 0 hours of sleep & 100 bugs.',
      imageUrl: 'https://images.unsplash.com/photo-1502764613149-7f1d229e230f',
    },
    {
      id: '7',
      name: 'Dev Sharma',
      status: 'Full-stack with full-swag 💻🔥',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    },
    {
      id: '8',
      name: 'Naina Verma',
      status: 'Currently merging with main.',
      imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    },
    {
      id: '9',
      name: 'Arjun Das',
      status: 'In a serious relationship with VS Code.',
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    },
    {
      id: '10',
      name: 'Tanya Gupta',
      status: 'Code like a girl 💁‍♀️🚀',
      imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    },
  ];

  const [isPressed, setIsPressed] = useState(false);

  return (
    <View>
      <Text style={styles.heading}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={true}>
        {contactArray.map(contact => (
          <TouchableOpacity
            key={contact.id}
            onPress={() => {}}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            style={[
              {backgroundColor: isPressed ? 'white' : 'white'}, // pressed vs normal
            ]}>
            <View style={styles.card}>
              <Image
                source={{
                  uri: contact.imageUrl || 'https://via.placeholder.com/50',
                }}
                style={{width: 50, height: 50, borderRadius: 25}}
              />
              <View style={styles.textContainer}>
                <View style={styles.upperText}>
                  <Text style={styles.name}>{contact.name}</Text>
                  <Text style={styles.date}>4/34/2087</Text>
                </View>

                <View style={styles.lowerText}>
                  <Text style={styles.status}>{contact.status}</Text>
                  <Image
                    source={require('../../assets/check-mark.png')}
                    style={{width: 18, height: 18}}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  container: {
    margin: 12,
    backgroundColor: '#f8f8f8',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  textContainer: {
    marginLeft: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    color: '#666',
  },
  upperText: {
    width: '93%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
  lowerText : {
    width: '93%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default ContactList;
