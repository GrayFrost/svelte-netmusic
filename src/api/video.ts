import axios from "./index";

interface IFetchVideoTimelineRecommendParams {
  offset?: number;
}
export const fetchVideoTimelineRecommend = (params:IFetchVideoTimelineRecommendParams = {}) => {
  return axios.get("/video/timeline/recommend", {
    params
  })
}


export const fetchPersonalizedMv = () => {
  return axios.get("/personalized/mv");
}

export const fetchPersonalFm = () => {
  return axios.get("/personal_fm")
}

export const fetchTopList = () => {
  return axios.get("/toplist");
}

interface IFetchPlayListDetailParams {
  id: number;
  s?: number;
}
export const fetchPlayListDetail = (params: IFetchPlayListDetailParams) => {
  return axios.get("/playlist/detail", {
    params
  })
}

interface IFetchHomepageBlockPageParams {
  refresh?: boolean
}
export const fetchHomepageBlockPage = (params: IFetchHomepageBlockPageParams = {}) => {
  return axios.get("/homepage/block/page", {
    params
  })
}