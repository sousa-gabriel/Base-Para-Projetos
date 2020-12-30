import React, { useEffect, useState } from 'react';
import { FlatList ,SafeAreaView, StyleSheet,Text, StatusBar, TouchableOpacity} from'react-native';
import api from './services/api';

export default function App(){

    const [projects, setProjects]= useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
          setProjects(response.data);
        })
      }, []);

    async function handleAddProject(){
        const response = await api.post('projects',{
            title:`Novo Projeto ${Date.now()}`,
            owner:'Gabriel Rocha'
        });

        const project = response.data;
        setProjects([...projects, project]);
    }

    return (
    <> 
        <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
        <SafeAreaView style={styles.container}>
        <FlatList
            data={projects}
            keyExtractor={project => project.id}
            renderItem={({item:project})=>(
                <Text style={styles.title}>{project.title}</Text> 
            )}
        />
        <TouchableOpacity 
            style={styles.Button} 
            activeOpacity={0.6} 
            onPress={handleAddProject}
        >
           <Text style={styles.textButton}> Adicionar um novo projeto </Text>
        </TouchableOpacity>
        </SafeAreaView>
    </>    
)}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7159c1',
        flex:1,

    },
    title:{
        color:'#fff',
        fontSize:32,
        fontWeight: 'bold'
    },
    Button:{
        backgroundColor:'#fff',
        margin: 20,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton:{
        fontWeight:'bold',
        fontSize: 10,
    }
})