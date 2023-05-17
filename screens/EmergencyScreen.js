import React from 'react';
import { View } from 'react-native';
import PageTitle from '../components/ui/PageTitle';
import ContactCard from '../components/ui/ContactCard';

const EmergencyScreen = () => {
  const uri = require('../assets/hospital.png');

  return (
    <View>
      <PageTitle title="Emergency Numbers" />
      <ContactCard
        name="Police Station"
        phone="+2630047583"
        imageSource={uri}
        backgroundColor="grey"
      />
      <ContactCard
        name="Ambulance & Hospital"
        phone="+2630047583"
        imageSource={uri}
        backgroundColor="green"
      />
      <ContactCard
        name="Airport Services"
        phone="+2630047583"
        imageSource={uri}
        backgroundColor="yellow"
      />
      <ContactCard
        name="Railway Services"
        phone="+2630047583"
        imageSource={uri}
        backgroundColor="red"
      />
    </View>
  );
};

export default EmergencyScreen;
