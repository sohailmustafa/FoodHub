import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Image } from 'react-native-reanimated/lib/typescript/Animated';

const Location = () => {
    const [coords, setCoords] = useState({
        latitude: 0,
        longitude: 0,
    });
    const [loading, setLoading] = useState(true)

    const getCurrentLocation = async () => {
        setLoading(true)
        Geolocation.getCurrentPosition(
            (val) => {
                const { latitude, longitude } = val.coords;
                console.log('latitude', latitude)
                setCoords({ latitude, longitude });
                console.log(coords)
                setLoading(false)
                // getCurrentWeather(latitude, longitude); // Uncomment this line if needed
            },
            (error) => {
                console.error('Error getting location:', error);
                // Handle the error, e.g., display an error message to the user
            },

        );
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {loading ?
                <View>
                    <ActivityIndicator size={'large'} color={'red'} />
                </View>
                :
                <MapView
                    provider={PROVIDER_GOOGLE}

                    initialRegion={{
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.015
                    }}
                    style={{ height: '100%', width: '100%' }}
                >
                    <Marker
                       
                        coordinate={{ latitude: coords.latitude, longitude: coords.longitude }}
                        description={'Current Location'}
                        title={'Location'}
                    />
                  
                </MapView>
            }
        </View>
    );
};

export default Location;

const styles = StyleSheet.create({});




// import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import Geolocation from '@react-native-community/geolocation'
// import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
// import { Image } from 'react-native-reanimated/lib/typescript/Animated';

// const Location = () => {
//     const [coords, setCoords] = useState({
//         latitude: 0,
//         longitude: 0,
//     });
//     const [loading, setLoading] = useState(true)
//     const markers = [
//         {
//             lon: 28.4209245,
//             lat: 70.3310215
//         },
//         {
//             lon: 28.4509,
//             lat: 70.5510215
//         },
//         {
//             lon: 28.6409,
//             lat: 70.6310215
//         },
//         {
//             lon: 28.7309,
//             lat: 70.810215
//         },
//     ]
//     const getCurrentLocation = async () => {
//         setLoading(true)
//         Geolocation.getCurrentPosition(
//             (val) => {
//                 const { latitude, longitude } = val.coords;
//                 console.log('latitude', latitude)
//                 setCoords({ latitude, longitude });
//                 console.log(coords)
//                 setLoading(false)
//                 // getCurrentWeather(latitude, longitude); // Uncomment this line if needed
//             },
//             (error) => {
//                 console.error('Error getting location:', error);
//                 // Handle the error, e.g., display an error message to the user
//             },

//         );
//     };

//     useEffect(() => {
//         getCurrentLocation();
//     }, []);

//     return (
//         <View style={{ flex: 1 }}>
//             {loading ?
//                 <View>
//                     <ActivityIndicator size={'large'} color={'red'} />
//                 </View>
//                 :
//               <View>
//                    <View style={{zIndex:9999,flex:1,backgroundColor:'green'}}>
//                     <TextInput
//                     style={{borderWidth:1,borderColor:'red'}}
//                     />
//                 </View>
//                   <MapView
//                     provider={PROVIDER_GOOGLE}

//                     initialRegion={{
//                         latitude: coords.latitude,
//                         longitude: coords.longitude,
//                         latitudeDelta: 0.015,
//                         longitudeDelta: 0.015
//                     }}
//                     style={{ height: '100%', width: '100%' }}
//                 >
//                     {markers?.map((item, index) => (
//                         <Marker
//                             coordinate={{ latitude: item.lat, longitude: item.lon }}
//                             description={'Current Location'}
//                             title={'Location'}
//                         />
//                     ))}

//                 </MapView>
             
//                 </View>
//             }
//         </View>
//     );
// };

// export default Location;

// const styles = StyleSheet.create({});
