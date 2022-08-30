import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,    //flex: Faz com que a tela toda ganhe esse estilo, ao inves de apenas o elemento filho
    backgroundColor: "#131016",
    padding: 24
  },
  eventName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  input: {
    flex: 1,
    backgroundColor: '#1f1e25',
    height: 56,
    borderRadius: 5,
    color: '#ffffff',
    padding: 16,
    fontSize: 16,
    marginRight: 10,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: '#18181b',
    padding: 15,
    borderRadius: 5,
  }
})