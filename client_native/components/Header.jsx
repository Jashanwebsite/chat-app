// Header.js

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import headerStyles from './HeaderStyle';

const Header = () => {
  return (
    <View style={headerStyles.container}>
      {/* Back Arrow */}
      <View style={headerStyles.backButtonContainer}>
        <TouchableOpacity onPress={() => console.log('Back pressed')}>
          <Text style={headerStyles.backButtonContainer.text}> {"<-"} </Text>
        </TouchableOpacity>
      </View>

      {/* Center Section with Image and Name */}
      <View style={headerStyles.centerContainer}>
        {/* Circle Border Image */}
        <View style={headerStyles.profileImageContainer}>
          {/* Replace the source with your image */}
          <Image
            source={require('./chat-app-design.jpg')}
            style={headerStyles.profileImage}
          />
        </View>

        {/* Name */}
        <Text style={headerStyles.nameText}>John Doe</Text>
      </View>

      {/* Phone Icon Placeholder */}
      <View style={headerStyles.phoneIconContainer}>
        <TouchableOpacity onPress={() => console.log('Phone icon pressed')}>
          <Text style={{ fontSize: 20, color: 'blue' }}>📞</Text>
        </TouchableOpacity>
      </View>

      {/* Three Vertical Dots */}
      <View style={headerStyles.threeDotsContainer}>
        <TouchableOpacity onPress={() => console.log('Three dots pressed')}>
          {/* Replace the source with your three dots icon image */}
          <Image
            source={require('./chat-app-design.jpg')}
            style={{ width: 20, height: 20, resizeMode: 'contain' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
