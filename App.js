import * as React from 'react';
import {Button, View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import * as turf from '@turf/turf';

import MapboxGL from '@rnmapbox/maps';
import {useState} from "react";
MapboxGL.setAccessToken('sk.eyJ1Ijoia2VhbmVkeWwiLCJhIjoiY2xlMGQ0dzZlMGFmYjQwcWowamkzNzF1cCJ9.ZKoEUVft1EgVesb9WVENYQ');

function HomeScreen({ navigation }) {
    return (
        <View className="h-screen w-full bg-[#2254C5] items-center justify-center">
            <TouchableOpacity onPress={() => {
                navigation.navigate('User')
            }}>
                <Image className="" source={require('./assets/glogo.png')} />
            </TouchableOpacity>
        </View>
    );
}

function UserDashScreen({ navigation }) {
    const [mappingGeojson, setPolygon] = useState({
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [
                            114.13464335500123,
                            22.283476022933684
                        ],
                        [
                            114.13461002603356,
                            22.2834761715894
                        ]
                    ],
                    "type": "LineString"
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [
                            114.13464350796067,
                            22.283533744863533
                        ],
                        [
                            114.13461033067802,
                            22.283533744863533
                        ],
                        [
                            114.13461002603356,
                            22.2834761715894
                        ]
                    ],
                    "type": "LineString"
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [
                            114.13464334362124,
                            22.283533628520985
                        ],
                        [
                            114.13464367333717,
                            22.283481828303508
                        ]
                    ],
                    "type": "LineString"
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [
                            114.13464365667073,
                            22.283481954975144
                        ],
                        [
                            114.13463463566444,
                            22.283481816643473
                        ]
                    ],
                    "type": "LineString"
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [
                            114.13463472892659,
                            22.28349164830938
                        ],
                        [
                            114.13463470655608,
                            22.28352389289074
                        ]
                    ],
                    "type": "LineString"
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [
                            114.13463442204176,
                            22.283523608721183
                        ],
                        [
                            114.134618162207,
                            22.28352392751259
                        ],
                        [
                            114.13461882180366,
                            22.28349189728445
                        ],
                        [
                            114.13463491630438,
                            22.28349160412482
                        ]
                    ],
                    "type": "LineString"
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [
                            114.1346587120974,
                            22.283541897568753
                        ],
                        [
                            114.13459221069206,
                            22.283541675312406
                        ],
                        [
                            114.1345915958239,
                            22.283465471347697
                        ],
                        [
                            114.1346595538443,
                            22.28346468760698
                        ],
                        [
                            114.13465887630434,
                            22.28354189922517
                        ]
                    ],
                    "type": "LineString"
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [
                            114.13463558501155,
                            22.283531887899215
                        ],
                        [
                            114.13463554676201,
                            22.283533851736905
                        ],
                        [
                            114.13461707007576,
                            22.28353381627373
                        ],
                        [
                            114.13461708848149,
                            22.283531701327504
                        ],
                        [
                            114.13463575311869,
                            22.283531738314224
                        ]
                    ],
                    "type": "LineString"
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [
                            [
                                114.13459216028275,
                                22.283533883961667
                            ],
                            [
                                114.13459216028275,
                                22.28351277926454
                            ],
                            [
                                114.13459797465606,
                                22.28351277926454
                            ],
                            [
                                114.13459797465606,
                                22.283533883961667
                            ],
                            [
                                114.13459216028275,
                                22.283533883961667
                            ]
                        ]
                    ],
                    "type": "Polygon"
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [
                            [
                                114.1345917403006,
                                22.283502487576484
                            ],
                            [
                                114.13460013554891,
                                22.283502487576484
                            ],
                            [
                                114.13460013554891,
                                22.283506402695323
                            ],
                            [
                                114.1345917403006,
                                22.283506402695323
                            ],
                            [
                                114.1345917403006,
                                22.283502487576484
                            ]
                        ]
                    ],
                    "type": "Polygon"
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [
                            [
                                114.13459203719401,
                                22.283493909830938
                            ],
                            [
                                114.1346004452779,
                                22.283493909830938
                            ],
                            [
                                114.1346004452779,
                                22.283497979613415
                            ],
                            [
                                114.13459203719401,
                                22.283497979613415
                            ],
                            [
                                114.13459203719401,
                                22.283493909830938
                            ]
                        ]
                    ],
                    "type": "Polygon"
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [
                            [
                                114.13459193561448,
                                22.283484582523727
                            ],
                            [
                                114.13460017655387,
                                22.283484582523727
                            ],
                            [
                                114.13460017655387,
                                22.28348866418351
                            ],
                            [
                                114.13459193561448,
                                22.28348866418351
                            ],
                            [
                                114.13459193561448,
                                22.283484582523727
                            ]
                        ]
                    ],
                    "type": "Polygon"
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [
                            [
                                114.13465894505117,
                                22.283533309570416
                            ],
                            [
                                114.13465089290702,
                                22.283533309570416
                            ],
                            [
                                114.13465089290702,
                                22.283529532696548
                            ],
                            [
                                114.13465894505117,
                                22.283529532696548
                            ],
                            [
                                114.13465894505117,
                                22.283533309570416
                            ]
                        ]
                    ],
                    "type": "Polygon"
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [
                            [
                                114.1346591566874,
                                22.28352582615078
                            ],
                            [
                                114.13465089840741,
                                22.28352582615078
                            ],
                            [
                                114.13465089840741,
                                22.283521597351893
                            ],
                            [
                                114.1346591566874,
                                22.283521597351893
                            ],
                            [
                                114.1346591566874,
                                22.28352582615078
                            ]
                        ]
                    ],
                    "type": "Polygon"
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [
                            [
                                114.13465925131766,
                                22.28351695086762
                            ],
                            [
                                114.13465082590392,
                                22.28351695086762
                            ],
                            [
                                114.13465082590392,
                                22.283512734097968
                            ],
                            [
                                114.13465925131766,
                                22.283512734097968
                            ],
                            [
                                114.13465925131766,
                                22.28351695086762
                            ]
                        ]
                    ],
                    "type": "Polygon"
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [
                            [
                                114.13465931994574,
                                22.283507766280295
                            ],
                            [
                                114.1346508815322,
                                22.283507766280295
                            ],
                            [
                                114.1346508815322,
                                22.283503394859537
                            ],
                            [
                                114.13465931994574,
                                22.283503394859537
                            ],
                            [
                                114.13465931994574,
                                22.283507766280295
                            ]
                        ]
                    ],
                    "type": "Polygon"
                }
            },
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "coordinates": [
                        [
                            [
                                114.13465945170287,
                                22.28349733245099
                            ],
                            [
                                114.13465066602191,
                                22.28349733245099
                            ],
                            [
                                114.13465066602191,
                                22.28349283043748
                            ],
                            [
                                114.13465945170287,
                                22.28349283043748
                            ],
                            [
                                114.13465945170287,
                                22.28349733245099
                            ]
                        ]
                    ],
                    "type": "Polygon"
                }
            }
        ]
    });

    const [coordinates] = useState([114.13462645170287,22.28349733245099]);
    var origin = [
        114.13461445809116,
        22.283528032027988
    ];
    var destination = [
        114.13463896752728,
        22.283479053294414
    ];
    var options = {
        obstacles: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    114.13461559137494,
                                    22.283528593840998
                                ],
                                [
                                    114.13461596846207,
                                    22.283521064883196
                                ],
                                [
                                    114.13461601036147,
                                    22.283509969123955
                                ],
                                [
                                    114.13461487909655,
                                    22.283501044461964
                                ],
                                [
                                    114.13461358024273,
                                    22.28349211979919
                                ],
                                [
                                    114.134634725316,
                                    22.283491654564102
                                ],
                                [
                                    114.134634725316,
                                    22.283528748918812
                                ],
                                [
                                    114.13461559137494,
                                    22.283528593840998
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "coordinates": [
                            [
                                [
                                    114.13463662761723,
                                    22.283487856061
                                ],
                                [
                                    114.13463662761723,
                                    22.28348529745864
                                ],
                                [
                                    114.13464806027372,
                                    22.28348529745864
                                ],
                                [
                                    114.13464806027372,
                                    22.283487856061
                                ],
                                [
                                    114.13463662761723,
                                    22.283487856061
                                ]
                            ]
                        ],
                        "type": "Polygon"
                    }
                }
            ]
        }
    };

    var pathway = turf.shortestPath(origin,destination,options);


    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <MapboxGL.MapView style={styles.map}>
                    <MapboxGL.Camera zoomLevel={20} centerCoordinate={coordinates} />
                    <MapboxGL.ShapeSource id="walls" shape={mappingGeojson}>
                        <MapboxGL.LineLayer
                            id="line"
                            style={{ lineColor: "black", lineWidth: 2 }}
                        />
                    </MapboxGL.ShapeSource>

                    <MapboxGL.ShapeSource
                        id="source1"
                        lineMetrics={true}
                        shape={pathway}
                    >
                        <MapboxGL.LineLayer id="layer1" style={styles.lineLayer} />
                    </MapboxGL.ShapeSource>

                    <MapboxGL.PointAnnotation coordinate={origin} />
                    <MapboxGL.PointAnnotation coordinate={destination} />

                </MapboxGL.MapView>
                <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
                    <View style={styles.SeparatorLine} />
                    <Text style={styles.TextStyle}> Login Using Facebook </Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}


function UserScreen({ navigation }) {
    return (
        <SafeAreaView className="h-screen w-full bg-[#2254C5] items-center">
            <Image className="mt-6" source={require('./assets/glogo.png')} />
            <View className="absolute bottom-0 h-2/3 w-full bg-white rounded-t-3xl items-center">
                    <Text className="text-xl font-bold mt-16">
                        Choose your Role
                    </Text>
                    <TouchableOpacity onPress={() =>{
                        navigation.navigate('UserDashboard')
                    }}>
                        <View className="bg-[#2254C5] w-64 h-20 mt-20 rounded-xl items-center justify-center">
                            <Text className="text-white text-2xl font-bold">User</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>{
                        navigation.navigate('UserMap')
                    }}>
                        <View className="bg-[#2254C5] w-64 h-20 mt-12 rounded-xl items-center justify-center">
                            <Text className="text-white text-2xl font-bold">Caretaker</Text>
                        </View>
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const Stack = createNativeStackNavigator();

function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="User" component={UserScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="UserDash" component={UserDashScreen} />
                <Stack.Screen name="Caretaker" component={CaretakerScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    container: {
        height: "90%",
        width: "100%",
        flex: 1,
    },
    map: {
        flex: 1,
    },
    markerContainer: {
        alignItems: "center",
        width: 60,
        backgroundColor: "transparent",
        height: 70,
    },
    textContainer: {
        backgroundColor: "grey",
        borderRadius: 10,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        textAlign: "center",
        paddingHorizontal: 5,
        flex: 1,
        color:"white",
    },
});
