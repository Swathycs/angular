import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.css']
})
export class FileuploaderComponent implements OnInit {
  public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
  public ajaxSettings: object = {
url: this.hostUrl + 'api/FileManager/FileOperations',
getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
uploadUrl: this.hostUrl + 'api/FileManager/Upload',
downloadUrl: this.hostUrl + 'api/FileManager/Download'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
