import React, { useState } from 'react'
import { styles } from './styles'
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert, Image } from 'react-native';
import { Participant } from '../../components/Participant';

export function Home() {
  const [participants, setParticipants] = useState<string[]>( [])
  const [participantName, setParticipanteName] = useState('')

  function handleParticipantAdd(){
    if(participants.includes(participantName)){
      return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome")
    }
    setParticipants(prevState => [...prevState, participantName])
    setParticipanteName('')
  }

  function handleParticipantRemove(name: string){
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }
  return (
    <View style={styles.container}>
      <Text key='1' style={styles.eventName}>
        Lista de Convidados
      </Text>

      <Text key='2' style={styles.eventDate}>
        Sexta-Feira, 4 de Novembro
      </Text>

      <View style={styles.form}>
        <TextInput  //Input
          style={styles.input}
          placeholder="Insira o Nome do participante" //Muda a frase do input quando ainda não selecionado
          placeholderTextColor="#6b6b6b" //Muda a cor da frase do input quando ainda não selecionado
          keyboardType='default' //Entrega ao usuario opções de teclados
          onChangeText={text => setParticipanteName(text)} //Valor digitado no Input
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text
          style={styles.buttonText}
          >
          +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList  //Funciona como a tag ScrooView + método map()
        data={participants} //De onde vem os dados
        keyExtractor={item => item} //O mesmo que Key, chave única
        renderItem={({item}) =>(  //Functiona como o map
          <Participant 
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participante a sua lista de presença
          </Text>
        )}
      />
      
    
    
    </View>
  );
}

