//ResponseModel that replicates the structure of the Json, formatted Get-Response of the Picsum-photos API
export interface BasicResponse {
  id:number,
  author:string,
  width:number,
  height:number,
  url:string,
  download_url:string
}
