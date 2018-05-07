import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public imag ="";
  private options :CameraOptions;

  constructor(public navCtrl: NavController,private camera :Camera ) {
    this.options ={
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    

    }

  }
  getPicture()
  {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.imag = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }

}
