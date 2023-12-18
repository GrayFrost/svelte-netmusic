import axios from "./core";

interface IQRKeyRes {
  unikey: string;
}
export const fetchQrKey = () => {
  return axios.get("/login/qr/key", {
    params: {
      timestamp: new Date().valueOf(),
    }
  });
};

interface IQrCreateParams {
  key: string;
  qrimg?: any;
}
interface IQRCreateRes {
  qrurl: string;
  qrimg: string;
}
export const fetchQrCreate = (params: IQrCreateParams) => {
  return axios.get("/login/qr/create", {
    params: {
      ...params,
      timestamp: new Date().valueOf()
    },
  });
};

interface IQrCheckParams {
  key: string
}
interface IQrCheckRes {
  cookie: string;
  code: number;
  msg: string;
}
export const fetchQrCheck = (params: IQrCheckParams) => {
  return axios.get("/login/qr/check", {
    params: {
      ...params,
      timestamp: new Date().valueOf()
    },
  })
}

export const fetchLoginStatus = () => {
  return axios.get("/login/status");
}

interface IUserPlaylistParams {
  uid: string;
  limit?: number;
  offset?: number;
}
export const fetchUserPlayList = (params: IUserPlaylistParams) => {
  return axios.get('/user/playlist', {
    params
  })
}

export const fetchPersonalFm = () => {
  return axios.get('/personal_fm', {
    params: {
      timestamp: new Date().valueOf()
    }
  })
}

interface IPlaylistTrackAllParams {
  id: number;
  limit?: number;
  offset?: number;
}
export const fetchPlaylistTrackAll = (params: IPlaylistTrackAllParams) => {
  return axios.get('/playlist/track/all', {
    params
  })
}

interface ISongUrlParams {
  id: number;
}
export const fetchSongUrl = (params: ISongUrlParams) => {
  return axios.get('/song/url', {
    params
  })
}