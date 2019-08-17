import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT_TYPE } from 'src/app/models/file-upload';
import { UserFileService } from 'src/app/services/user-file.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss']
})
export class DocumentUploadComponent implements OnInit {

  @ViewChild('fileInput', { static: false })
  fileInput: ElementRef;

  @Input() fileExistedType;
  @Input() fileExistedName;

  $file: any;
  isLoading = false;
  documentType = 0;
  uploadResult;
  fileName;

  public documentTypes = [
    { id: DOCUMENT_TYPE.ID_CARD, value: DOCUMENT_TYPE[DOCUMENT_TYPE.ID_CARD] },
    { id: DOCUMENT_TYPE.PASSPORT, value: DOCUMENT_TYPE[DOCUMENT_TYPE.PASSPORT] },
    { id: DOCUMENT_TYPE.DRIVING_LICENCE, value: DOCUMENT_TYPE[DOCUMENT_TYPE.DRIVING_LICENCE] },
    { id: DOCUMENT_TYPE.ADDRESS_CARD, value: DOCUMENT_TYPE[DOCUMENT_TYPE.ADDRESS_CARD] },
    { id: DOCUMENT_TYPE.PHOTO, value: DOCUMENT_TYPE[DOCUMENT_TYPE.PHOTO] }
  ];

  constructor(
    private userFileService: UserFileService,
    public toster: ToastrService
  ) { }

  static isValidFile(file) {
    const type = file.type;
    const size = file.size;
    return (/^(application\/pdf)|(image\/(.)+)$/.test(type) && size < 5 * 1024 * 1024);
  }

  ngOnInit() {
    if (this.fileExistedName && (this.fileExistedType !== null || this.fileExistedType !== undefined)) {
      this.fileName = this.fileExistedName;
      this.documentType = this.fileExistedType;
    }
  }

  onFileChanged($event) {
    this.$file = $event.target.files[0];
    if (this.$file) {
      if (!DocumentUploadComponent.isValidFile(this.$file)) {
        this.toster.error('Invalid file or file zie too big', '', { disableTimeOut: true });
        this.$file = null;
        this.fileInput.nativeElement.value = '';
        return;
      }
      this.fileName = this.$file.name;
      this.fileInput.nativeElement.value = '';
    }
  }

  cancelFile() {
    this.$file = null;
    this.fileName = ``;
  }

  uploadFile() {
    if (!this.$file) {
      return;
    }
    this.isLoading = true;
    this.uploadResult = null;

    const formData = new FormData();
    formData.append('file', this.$file);
    formData.append('documentType', this.documentType.toString());

    this.userFileService.uploadFile(formData)
      .subscribe(t => {
        this.isLoading = false;
        this.toster.clear();
        this.uploadResult = 1;
        this.toster.success(`Upload file success`);
      }, e => {
        this.toster.error(`Upload file failed`);
        this.isLoading = false;
        this.uploadResult = 0;
      });
  }

}
