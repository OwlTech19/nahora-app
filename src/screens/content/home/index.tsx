import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import Icon from '../../../components/Icon';
import * as Calendar from 'expo-calendar';
import * as Permissions from 'expo-permissions';

const eventDetails = {
  title: 'Event Title', 
  startDate: new Date("2021-01-12T09:00:00Z").toISOString(),
  endDate: new Date("2021-01-12T10:00:00Z").toISOString(),
  }
  
async function criarCalend() {

  console.log(eventDetails)
  await Calendar.createEventAsync("1",eventDetails)
}

export default function Home({ navigation }: any) {

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await Calendar.getCalendarsAsync();
        console.log('Here are all your calendars:');
        console.log({ calendars });
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}
        onPress={() => criarCalend()}>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('NewAppointment')}>
        <Icon type='AntDesign' name='plus' propStyle={styles.icon}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  icon:{
    fontSize:40,
    color:'#FFF',
    fontWeight: '700',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1.5,
    backgroundColor: 'rgb(60,180,194)',
    borderColor: 'rgb(30,130,174)',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'flex-end',
    marginBottom:10,
  }
});
