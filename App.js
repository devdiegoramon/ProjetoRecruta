import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext, createContext } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

// Contexto de Autenticação
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    nome: 'Nome do Usuário',
    // Outros dados do usuário...
  });

  // Função para obter o dia da semana atual
  const getDiaSemana = () => {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const hoje = new Date();
    const diaSemana = hoje.getDay(); // Retorna um número de 0 a 6 (Domingo a Sábado)
    return diasSemana[diaSemana];
  };

  // Atualizar o dia da semana quando necessário
  const [dia, setDia] = useState(getDiaSemana());

  return (
    <AuthContext.Provider value={{ user, setUser, dia, setDia }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
// ... (seu código anterior)

// ... (seu código anterior)

const App = () => {
  const { user, dia } = useAuth();

  return (
    <View style={styles.container}>
      <Navbar />

      <ScrollView style={styles.content}>
        <Text style={styles.contentTitle}>Conteúdo Principal</Text>

        <Tabs />

        <Text style={styles.textContent}>Seu conteúdo vai aqui...</Text>
      </ScrollView>

      <ButtonNavbar />

      <StatusBar style="auto" />
    </View>
  );
};

const Navbar = () => {
  const { dia, user } = useAuth();

  return (
    <View style={styles.navbarTitleContainer}>
      <Text style={styles.diaSemana}>{dia}</Text>
      <Text style={styles.navbarTitle}>{user.nome}</Text>
      <Image source={require('./assets/recruta.jpg')} style={styles.navbarImage} />
    </View>
  );
};

const Tabs = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabs}>
      <Tab title="Aba 1" />
      <Tab title="Aba 2" />
      <Tab title="Aba 3" />
    </ScrollView>
  );
};

const Tab = ({ title }) => {
  return (
    <View style={styles.tab}>
      <Text style={styles.tabTitle}>{title}</Text>
    </View>
  );
};

const ButtonNavbar = () => {
  return (
    <View style={styles.buttonNavbar}>
      <Text style={styles.button}>Botão 1</Text>
      <Text style={styles.button}>Botão 2</Text>
      <Text style={styles.button}>Botão 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  navbarTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  diaSemana: {
    fontSize: 14, // Tamanho menor para o dia da semana
    color: 'white',
  },
  navbarImage: {
    width: 55,
    height: 55,
    borderRadius: 25,

  },
  navbarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    padding: 10,
    backgroundColor: '#1A1A1A',
  },
  contentTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  tabs: {
    paddingHorizontal: 10,
  },
  tab: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgray',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  tabTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    backgroundColor: 'white',
  },
  button: {
    fontSize: 16,
    color: 'blue',
  },
  textContent: {
    color: 'white',
  },
});

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
