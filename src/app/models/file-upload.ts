export enum DOCUMENT_TYPE {
    ID_CARD = 0,
    PASSPORT = 1,
    DRIVING_LICENCE = 2,
    ADDRESS_CARD = 3,
    PHOTO = 4
}

export interface FileUpload {
    user_id: number;
    file_name: string;
    original_name: string;
    file_size: number;
    file_type: string;
    description: string;
    created_date: string;
    user_document_type: number;
}
