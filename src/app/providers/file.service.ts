import { Injectable } from '@angular/core';

@Injectable()
export class FileService {
  outputVideoFormatOptions = ['MP4', ' MKV', '3GP'];
  resolutionOptions = ['720P', '520P', '320P'];
  selectedFiles = [];

  private _selectedVideoFormat: string;
  public get selectedVideoFormat(): string {
    return this._selectedVideoFormat;
  }
  public set selectedVideoFormat(value: string) {
    this._selectedVideoFormat = value;
  }

  private _selectedResolutionOption: string;
  public get selectedResolutionOption(): string {
    return this._selectedResolutionOption;
  }
  public set selectedResolutionOption(value: string) {
    this._selectedResolutionOption = value;
  }

  constructor() {}
}
