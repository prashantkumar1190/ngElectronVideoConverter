import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastrService } from '../../providers/toastr.service';
import { FileService } from '../../providers/file.service';
import { UtilService } from 'app/providers/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  outputVideoFormatOptions: any;
  resolutionOptions: any;

  constructor(
    public toastrService: ToastrService,
    public vcr: ViewContainerRef,
    public fileService: FileService,
    public utilService: UtilService
  ) {
    this.toastrService.setVCR(vcr);
    this.outputVideoFormatOptions = this.fileService.outputVideoFormatOptions;
    this.resolutionOptions = this.fileService.resolutionOptions;
  }

  ngOnInit() {}

  onOutputVideoFormatChange(event) {
    const selectedOutputVideoFormat = event.value.toString();
    this.fileService.selectedVideoFormat = selectedOutputVideoFormat;
    console.log(this.fileService.selectedVideoFormat );
  }

  onResolutionChange(event) {
    const selectedResolution = event.value.toString();
    this.fileService.selectedResolutionOption = selectedResolution;
    console.log(this.fileService.selectedResolutionOption);
  }

  convert() {
    console.log('Convert');
    this.utilService.convertVideos(this.fileService.selectedFiles);
  }
}
