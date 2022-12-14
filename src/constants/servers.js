export const IMAGE_SERVER = 'http://localhost:8001';

export const BACKEND_SERVER = 'http://localhost:8000';
export const UPLOAD_API = BACKEND_SERVER + '/users/upload_file';
export const AUTHENTICATION_API = BACKEND_SERVER + '/auth';
export const GET_DATES_FROM_USER_API = BACKEND_SERVER + '/annotation/users/get_dates_from_user';
export const GET_MOMENTS_BY_DATE_API = BACKEND_SERVER + '/annotation/moments/get_moments_by_date';
export const GET_MOMENT_DETAIL_API = BACKEND_SERVER + '/annotation/moments/get_moment_detail';
export const GET_ALL_ANNOTATION_LIST_API = BACKEND_SERVER + '/annotation/data/get_all_annotation_list'
export const INSERT_TO_ANNOTATION_LIST_API = BACKEND_SERVER + '/annotation/data/insert_to_annotation_list'
export const UPDATE_MOMENT_DETAIL_API = BACKEND_SERVER + '/annotation/moments/update_moment_detail'