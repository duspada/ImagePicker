import React, { Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import { View, TouchableOpacity, Text, Image } from 'react-native';

export default class components extends Component {
  state = {
    avatarSource: null,
    fileSize: null,
    timeStamp: null,
    uri: null,
    origURL: null,
    isVertical: null,
    height: null,
    width: null,
    fileName: null,
  }
  render() {
    const options = {
      title: 'Selecione',
      cancelButtonTitle: 'Cancelar',
      takePhotoButtonTitle: 'Tirar Foto',
      chooseFromLibraryButtonTitle: 'Escolher...',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    const selector = () => {
      ImagePicker.showImagePicker(options, (response) => {
        console.tron.log(response);
        const source = { uri: response.uri };
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          avatarSource: source,
          fileName: response.fileName,
          isVertical: response.isVertical,
          width: response.width,
          height: response.height,
          uri: response.uri,
          fileSize: response.fileSize,
          timeStamp: response.timestamp,
          origURL: response.origURL
        });
      });
    }
    const takePhoto = () => {
      ImagePicker.launchCamera(options, (response) => {
        console.tron.log(response);
        const source = { uri: response.uri };
        this.setState({
          avatarSource: source,
          fileName: response.fileName,
          isVertical: response.isVertical,
          width: response.width,
          height: response.height,
          uri: response.uri,
          fileSize: response.fileSize,
          timeStamp: response.timestamp,
          origURL: response.origURL
        });
      });      
    }
    const library = () => {
      ImagePicker.launchImageLibrary(options, (response) => {
        console.tron.log(response.uri);
        const source = { uri: response.uri };
        this.setState({
          avatarSource: source,
          fileName: response.fileName,
          isVertical: response.isVertical,
          width: response.width,
          height: response.height,
          uri: response.uri,
          fileSize: response.fileSize,
          timeStamp: response.timestamp,
          origURL: response.origURL
        });
      });      
    }
    return (
    <View>
      {
        this.state.avatarSource !== null
          ? <Image source={this.state.avatarSource} style={{
            maxHeight:100,
            maxWidth:100,
            height:100,
            width:100,
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#333'}} />
          : null
      }
      <TouchableOpacity onPress={takePhoto}>
        <Text>Abrir Câmera</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={library}>
        <Text>Selecionar Foto</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={selector}>
        <Text>Abrir Selector</Text>
      </TouchableOpacity>
      <Text style={{marginTop:20}}>File Size: {this.state.fileSize}</Text>
      <Text>Timestamp: {this.state.timeStamp}</Text>
      <Text>Uri: {this.state.uri}</Text>
      <Text>Original Url: {this.state.origURL}</Text>
      <Text>Is Vertical: {this.state.isVertical}</Text>
      <Text>Height: {this.state.height}</Text>
      <Text>Width: {this.state.width}</Text>
      <Text>FileName: {this.state.fileName}</Text>
    </View>
    );
  }
}
