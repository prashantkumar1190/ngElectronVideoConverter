import { Component, OnInit } from '@angular/core';
import { Ng4FilesSelected, Ng4FilesStatus, Ng4FilesService, Ng4FilesConfig } from 'angular4-files-upload';
import { FileService } from '../../providers/file.service';
import { ToastrService } from 'app/providers/toastr.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  selectedFiles: any;

  outputVideoFormatOptions: any;
  myPrivateConfig: Ng4FilesConfig = {
    acceptExtensions: ['MP4', ' MKV', '3GP'],
    maxFilesCount: 5,
    maxFileSize: 5120000000,
    totalFilesSize: 10120000000
  };

  constructor(
    private ng4FilesService: Ng4FilesService,
    private fileService: FileService,
    private toastrService: ToastrService
  ) {
    this.setFilesUploadPrivateConfig();
  }

  ngOnInit() {}

  filesSelect(selectedFiles: Ng4FilesSelected): void {
    if (selectedFiles.status !== Ng4FilesStatus.STATUS_SUCCESS) {
      console.error(`Files upload error: ${selectedFiles.status}`);
      console.error('Files could not be uploaded.');
      this.toastrService.showToastr('error', { msg: 'Invalid Format. Try \'MP4\', \'MKV\', \'3GP\'' });
    } else {
      console.info(`Files uploaded: ${selectedFiles.files}`);
      // TODO
      this.fileService.selectedFiles.push(selectedFiles);
      this.selectedFiles = selectedFiles;
    }
  }

  setFilesUploadPrivateConfig(): void {
    this.ng4FilesService.addConfig(this.myPrivateConfig);
  }

  clearAll() {
    this.fileService.selectedFiles = [];
    this.selectedFiles = [];
  }
}
