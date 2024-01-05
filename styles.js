import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    padding: 15,
  },
  logoContainer: {
    flexDirection: 'row', // Align logos horizontally
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold', // Add font weight or adjust as needed
    marginRight: 10,
    marginBottom: 7,
    alignItems: 'center', // Adjust the space between characters
  },
  iconContainerLeft: {
    padding: 10,
  },
  iconContainerRight: {
    padding: 10,
  },
  body: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light shade of grey
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  filterIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  userContainer: {
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  signInButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  signInText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },

  //progress page
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 15,
    marginTop: 40,
    paddingHorizontal: 15,
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchBar: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 22,
    marginBottom: 10,
    color: 'gray', // Adjust color as needed
  },
  filterIcon: {
    marginRight: 10,
  },
  projectItem: {
    backgroundColor: 'white', // White background for each project
    flex: 1,
  },
  projectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  projectName: {
    fontSize: 25,
    color: '#555555', // Adjust color as needed
    fontWeight: 'bold',
  },
  percentCompletion: {
    fontSize: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  percentGreen: {
    color: 'green',
  },
  percentOrange: {
    color: 'orange',
  },
  percentRed: {
    color: 'red',
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray', // Thin line as a separator
  },
  modalContainer: {
    marginTop: 177,
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 15,
    width: 120,
    borderRadius: 4,
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: '1',
  },
  modalOption: {
    fontSize: 18,
    paddingVertical: 10,
  },
});

export default styles;