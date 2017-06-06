import  React,  { Component, Proptypes } from  'react';  
import  { 
Alert,  
ScrollView,
StyleSheet,
Text,
TextInput,
TouchableOpacity,
View
} from  'react-native'; 

var url = 'http://mhs.rey1024.com/1415051041/index_lapangan.php'; 
  
class mainApp extends Component { 
constructor(props) {
    super(props);
    this.state = {
      Id_Lap: "",
      Nama_Lap: "",
      Alamat_Lap: "",
    };
  }

  onSave() {
    fetch(url + '?Id_Lap=' + this.state.Id_Lap + '&Nama_Lap=' + this.state.Nama_Lap + '&Alamat_Lap=' + this.state.Alamat_Lap)
      .then((response) => response.json())
      .then((responseData) => {
        var id = responseData.id;
        if (id === -1) {
          Alert.alert("Fail to Input");
         }
         else 
       {
          Alert.alert("Berhasil Input");
        }  
        
      })
      .done();
  }

  
  render () {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Text style={styles.toolbar}>Add a new Lapangan </Text>
         <TextInput  
          style={styles.input}  
          onChangeText={(e) => this.setState({ Id_Lap: e })} 
          text = {this.state.Id_Lap}
          placeholder="Id Lapangan" 
        />  
        <TextInput  
          style={styles.input}  
          onChangeText={(e) => this.setState({ Nama_Lap: e })} 
          text = {this.state.Nama_Lap}
          placeholder="Nama Lapangan"  
        />  
        <TextInput  
          style={styles.input}  
          onChangeText={(e) => this.setState({ Alamat_Lap: e })} 
          text = {this.state.Alamat_Lap}
          placeholder="Alamat Lapangan" 
        />    
        <TouchableOpacity onPress={() => this.onSave()} style={styles.btn}> 
        <Text>Save!</Text>  
        </TouchableOpacity> 
        </ScrollView> 
      </View> 
    );
  }
}

const styles  = StyleSheet.create({ 
    container:  { 
        flex: 1,  
        backgroundColor:  '#fff', 
    },  
    toolbar:  { 
        backgroundColor:  '#3498db',  
        color:  '#fff', 
        textAlign:  'center', 
        padding:  25, 
        fontSize: 20, 
    },  
    content:  { 
        flex: 1,  
        padding:  10, 
    },  
    preview:  { 
        backgroundColor:  '#bdc3c7',  
        flex: 1,  
        height: 500,  
    },  
    input:  { 
        backgroundColor:  '#ecf0f1',  
        borderRadius: 3,  
        height: 40, 
        padding:  5,  
        marginBottom: 10, 
        flex: 1,  
    },  
    btn:  { 
        backgroundColor:  '#3498db',  
        padding:  10, 
        borderRadius: 3,  
        marginBottom: 30, 
    },  
});
export  default mainApp;