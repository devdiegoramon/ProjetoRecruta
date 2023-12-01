import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Cursos from '../pages/MeusCursos';
import Blog from '../pages/Blog';
import Profile from '../pages/Profile';


import { Ionicons } from "@expo/vector-icons";

const {Navigator, Screen} = createBottomTabNavigator();

const navigationItems = [
    {name: 'Home', icon:'home', component: Home },
    {name: 'courses', icon:'play-circle', component: Cursos },
    {name: 'blog', icon:'book', component: Blog },
    {name: 'profile', icon:'person-circle', component: Profile }
]

const AppRoutes = ()=>{
    return(
        <NavigationContainer>
            <Navigator>
                {navigationItems.map((tela)=>(
                    <Screen
                        name={tela.name}
                        component={tela.component}
                        options={{
                            tabBarIcon: ()=>{
                                return <Ionicons name={tela.icon} size={25} color="#000" />
                            },
                            headerShown: false
                        }}/>
                ))}
            </Navigator>
        </NavigationContainer>
    )
}
export default AppRoutes;